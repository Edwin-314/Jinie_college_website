import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SCHOOL_SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

// Initialize the Gemini Client
// In a real production app, you should proxy these requests through a backend
// to avoid exposing the API key in the client bundle.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SCHOOL_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I apologize, but I'm having trouble connecting to the school server at the moment. Please try again later.";
  }
};
