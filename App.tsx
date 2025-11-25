import React, { useState } from 'react';
import { Page } from './types';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Calendar from './pages/Calendar';
import News from './pages/News';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'about': return <About />;
      case 'academics': return <Academics />;
      case 'admissions': return <Admissions />;
      case 'calendar': return <Calendar />;
      case 'news': return <News />;
      case 'contact': return <Contact />;
      case 'privacy': return <div className="p-20 text-center">Privacy Policy Placeholder</div>; // Simplified for this demo
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow pt-16">
        {renderPage()}
      </main>

      <Footer onNavigate={setCurrentPage} />
      <ChatWidget />
    </div>
  );
};

export default App;