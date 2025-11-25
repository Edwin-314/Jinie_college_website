import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

type Mode = 'hidden' | 'text' | 'voice';

// Utility to clean text for Speech Synthesis
// Removes Markdown symbols so the voice doesn't say "Asterisk" or "Hashtag"
const cleanTextForSpeech = (text: string) => {
  return text
    .replace(/[*#_`~]/g, '') // Remove common markdown symbols
    .replace(/\[.*?\]/g, '') // Remove [bracketed] text
    .replace(/\s+/g, ' ')     // Collapse extra whitespace
    .trim();
};

const ChatWidget: React.FC = () => {
  const [mode, setMode] = useState<Mode>('hidden');
  
  // --- TEXT CHAT STATE ---
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: 'Good day! I am the Jinie College Assistant. How may I help you with information about our school today?',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTextLoading, setIsTextLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // --- VOICE ASSISTANT STATE ---
  const [voiceStatus, setVoiceStatus] = useState<'idle' | 'listening' | 'processing' | 'speaking'>('idle');
  const [voiceTranscript, setVoiceTranscript] = useState(''); // Subtitles for voice mode
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const recognitionRef = useRef<any>(null);

  // Scroll to bottom of text chat
  useEffect(() => {
    if (mode === 'text') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, mode, isTextLoading]);

  // Load voices for TTS
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) setAvailableVoices(voices);
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      cleanupVoice();
    };
  }, []);

  // --- CLEANUP ---
  const cleanupVoice = () => {
    window.speechSynthesis.cancel();
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch(e) {}
    }
    setVoiceStatus('idle');
    setVoiceTranscript('');
  };

  // --- TEXT CHAT LOGIC ---

  const handleTextSend = async () => {
    if (!inputText.trim()) return;
    
    const userText = inputText;
    setInputText('');
    
    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: userText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTextLoading(true);

    try {
      const responseText = await sendMessageToGemini(userText);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setMessages((prev) => [...prev, { id: Date.now().toString(), role: 'model', text: "Network error. Please try again.", timestamp: new Date() }]);
    } finally {
      setIsTextLoading(false);
    }
  };

  // --- VOICE ASSISTANT LOGIC ---

  const speakResponse = (text: string) => {
    if (!window.speechSynthesis) return;
    
    window.speechSynthesis.cancel();
    setVoiceStatus('speaking');

    // Clean text to avoid reading symbols
    const spokenText = cleanTextForSpeech(text);
    const utterance = new SpeechSynthesisUtterance(spokenText);
    
    // Voice Selection: Priority -> Nigerian -> African Generic -> British -> Default
    let voice = availableVoices.find(v => v.lang === 'en-NG');
    if (!voice) voice = availableVoices.find(v => v.name.includes('Nigeria') || v.name.includes('Onyira'));
    if (!voice) voice = availableVoices.find(v => v.lang === 'en-GB' && !v.name.includes('Google')); 
    
    if (voice) utterance.voice = voice;
    utterance.rate = 1.0; 
    utterance.pitch = 1.0;

    utterance.onend = () => {
      // Loop back to listening if we are still in voice mode
      if (mode === 'voice') {
        // Small pause before listening again to feel natural
        setTimeout(() => startListening(), 300); 
      } else {
        setVoiceStatus('idle');
      }
    };

    utterance.onerror = () => {
        if (mode === 'voice') setVoiceStatus('idle');
    }

    window.speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    if (mode !== 'voice') return; 

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    
    if (!SpeechRecognition) {
      setVoiceTranscript("Voice input not supported in this browser.");
      return;
    }

    if (recognitionRef.current) try { recognitionRef.current.stop(); } catch(e) {}

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    
    recognition.lang = 'en-NG'; // Nigerian English preference
    recognition.interimResults = false; 
    recognition.maxAlternatives = 1;
    recognition.continuous = false;

    recognition.onstart = () => {
      setVoiceStatus('listening');
      setVoiceTranscript("Listening...");
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = async (event: any) => {
      const transcript = event.results[0][0].transcript;
      if (transcript) {
        setVoiceStatus('processing');
        setVoiceTranscript(transcript); // Show what user said
        
        try {
            const response = await sendMessageToGemini(transcript);
            if (mode === 'voice') {
                // Show thinking/response state briefly or just speak
                speakResponse(response);
            }
        } catch (e) {
            if (mode === 'voice') speakResponse("I apologize, I am having trouble connecting.");
        }
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onerror = (event: any) => {
       if (event.error === 'no-speech') {
           // If silence, restart listening loop if still in mode
           if (mode === 'voice') {
             try { recognition.stop(); } catch(e){}
             setTimeout(startListening, 500);
           }
       } else if (event.error === 'network') {
           setVoiceTranscript("Connection error. Please check internet.");
           setVoiceStatus('idle');
       } else {
           setVoiceStatus('idle');
       }
    };

    try {
      recognition.start();
    } catch (e) {
      console.error(e);
      setVoiceStatus('idle');
    }
  };

  // --- MODE SWITCHING ---

  const openTextChat = () => {
    cleanupVoice(); // Strictly stop voice
    setMode('text');
  };

  const openVoiceMode = () => {
    setMode('voice');
    // Start listening process
    setTimeout(() => startListening(), 500);
  };

  const closeAll = () => {
    cleanupVoice();
    setMode('hidden');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      {/* --- TEXT CHAT INTERFACE --- */}
      {mode === 'text' && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 mb-2 border border-slate-200 overflow-hidden flex flex-col h-[500px] fade-in origin-bottom-right">
          <div className="bg-slate-800 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <i className="fas fa-comment-dots text-sm"></i>
              </div>
              <div>
                <h3 className="font-bold text-sm">School Support</h3>
                <p className="text-xs text-slate-300">Live Chat</p>
              </div>
            </div>
            <button onClick={closeAll} className="text-slate-400 hover:text-white">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm ${
                    msg.role === 'user' ? 'bg-emerald-600 text-white rounded-br-none' : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                  }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTextLoading && (
               <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm">
                   <div className="flex gap-1">
                     <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                     <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                     <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                   </div>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleTextSend()}
              placeholder="Type your question..."
              className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
            />
            <button
              onClick={handleTextSend}
              disabled={!inputText.trim() || isTextLoading}
              className="w-10 h-10 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 disabled:opacity-50 flex items-center justify-center transition-colors"
            >
              <i className="fas fa-paper-plane text-sm"></i>
            </button>
          </div>
        </div>
      )}

      {/* --- VOICE ASSISTANT INTERFACE (MODAL) --- */}
      {mode === 'voice' && (
        <div className="bg-slate-900/95 backdrop-blur-md rounded-3xl shadow-2xl w-72 h-80 mb-2 border border-slate-700 overflow-hidden flex flex-col items-center justify-center fade-in origin-bottom-right relative text-white">
          <button 
            onClick={closeAll} 
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
          
          <div className="mb-6 relative">
            {/* Pulsing Rings */}
            {(voiceStatus === 'listening' || voiceStatus === 'speaking') && (
              <>
                <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20 duration-1000"></div>
                <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping delay-150 opacity-10 duration-1000"></div>
              </>
            )}
            
            <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
              voiceStatus === 'listening' ? 'bg-emerald-500 scale-110' :
              voiceStatus === 'speaking' ? 'bg-emerald-400 scale-105' :
              voiceStatus === 'processing' ? 'bg-blue-500 animate-pulse' :
              'bg-slate-700'
            }`}>
              <i className={`fas ${
                voiceStatus === 'processing' ? 'fa-spinner fa-spin' :
                voiceStatus === 'speaking' ? 'fa-volume-up' :
                'fa-microphone'
              } text-3xl`}></i>
            </div>
          </div>

          <div className="text-center px-6 w-full">
            <h3 className="font-bold text-lg mb-2">Jinie Voice</h3>
            {/* Live Caption Area */}
            <div className="h-12 flex items-center justify-center">
              <p className="text-sm text-emerald-200 font-medium leading-tight">
                {voiceTranscript || "Listening..."}
              </p>
            </div>
          </div>

          {voiceStatus === 'idle' && (
             <button 
               onClick={startListening}
               className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors border border-white/10"
             >
               Tap to Speak
             </button>
          )}
        </div>
      )}

      {/* --- CONTROL BUTTONS (MUTUALLY EXCLUSIVE) --- */}
      <div className="flex items-center gap-4">
        
        {/* Voice Button */}
        <button
          onClick={mode === 'voice' ? closeAll : openVoiceMode}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-105 ${
            mode === 'voice' 
              ? 'bg-emerald-500 text-white ring-4 ring-emerald-200' 
              : 'bg-emerald-600 text-white hover:bg-emerald-700'
          }`}
          title="Voice Assistant"
        >
          <i className="fas fa-microphone text-xl"></i>
        </button>

        {/* Text Chat Button */}
        <button
          onClick={mode === 'text' ? closeAll : openTextChat}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-105 ${
            mode === 'text' 
              ? 'bg-slate-800 text-white ring-4 ring-slate-300' 
              : 'bg-white text-slate-800 hover:bg-slate-50'
          }`}
          title="Text Chat"
        >
           <i className="fas fa-comment text-xl"></i>
        </button>
      </div>

    </div>
  );
};

export default ChatWidget;