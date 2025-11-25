import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { SCHOOL_NAME } from '../constants';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Academics', value: 'academics' },
    { label: 'Admissions', value: 'admissions' },
    { label: 'Calendar', value: 'calendar' },
    { label: 'News', value: 'news' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center text-white mr-3 shadow-sm group-hover:scale-105 transition-transform">
              <i className="fas fa-graduation-cap text-lg"></i>
            </div>
            <div>
              <h1 className="text-lg font-bold text-emerald-900 leading-tight tracking-tight uppercase">
                {SCHOOL_NAME}
              </h1>
              <p className="text-xs text-slate-500 font-medium">Excellence & Integrity</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.value
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-emerald-700 p-2 focus:outline-none"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg fade-in">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium ${
                  currentPage === item.value
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-100">
               <div className="flex items-center text-sm text-slate-500 px-4 mb-2">
                 <i className="fas fa-search mr-2"></i> Search website...
               </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
