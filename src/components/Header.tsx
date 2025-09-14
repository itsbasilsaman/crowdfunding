// src/components/Header.tsx
import React, { useState } from 'react';

type HeaderProps = {
  onNavigate: (page: string) => void;
  language?: 'en' | 'ar';
  onLanguageChange?: (lang: 'en' | 'ar') => void;
};

const Header: React.FC<HeaderProps> = ({ onNavigate, language = 'en', onLanguageChange }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onLanguageChange) onLanguageChange(e.target.value as 'en' | 'ar');
  };
  return (
    <header className="fixed top-0 w-full z-20 bg-white shadow-md font-montserrat">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2 h-16">
        <span
          className="font-extrabold text-[20px] md:text-2xl tracking-tight text-[#222] select-none cursor-pointer"
          style={{ letterSpacing: '-1px' }}
          onClick={() => onNavigate('home')}
        >
          Crowdfunding <span className="text-[#eb1478]">Prosperity</span>
        </span>
  <nav className="hidden md:flex gap-2 lg:gap-4 items-center ml-2">
          <button className="px-4 py-2 rounded-full font-semibold text-black bg-[#eb1478] hover:bg-[#c0105e] shadow transition-colors" onClick={() => onNavigate('home')}>Home</button>
          <button className="px-4 py-2 rounded-full font-semibold text-black bg-[#eb1478] hover:bg-[#c0105e] shadow transition-colors" onClick={() => onNavigate('projects')}>Projects</button>
          <button className="px-4 py-2 rounded-full font-semibold text-black bg-[#eb1478] hover:bg-[#c0105e] shadow transition-colors" onClick={() => onNavigate('start-project')}>Start Project</button>
          <button className="px-4 py-2 rounded-full font-semibold text-black bg-[#eb1478] hover:bg-[#c0105e] shadow transition-colors" onClick={() => onNavigate('dashboard')}>Dashboard</button>
          <button className="px-4 py-2 rounded-full font-semibold text-black bg-[#eb1478] hover:bg-[#c0105e] shadow transition-colors" onClick={() => onNavigate('login')}>Login</button>
          {/* Language Switcher */}
          <select
            className="ml-4 px-3 py-1 rounded-full border border-gray-300 text-[#222] bg-white focus:outline-none focus:ring-2 focus:ring-[#eb1478]"
            value={language}
            onChange={handleLanguageChange}
            aria-label="Select language"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </nav>
        {/* Mobile menu button */}
        <div
          className="md:hidden text-[#eb1478] text-3xl bg-none focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          {mobileOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
        </div>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-lg border-t border-gray-100 animate-fade-in-down">
          <div className="flex flex-col gap-2 px-4 py-4">
            <button className="py-2 rounded font-semibold text-white bg-[#eb1478] hover:bg-[#c0105e] shadow text-left" onClick={() => { setMobileOpen(false); onNavigate('home'); }}>Home</button>
            <button className="py-2 rounded font-semibold text-white bg-[#eb1478] hover:bg-[#c0105e] shadow text-left" onClick={() => { setMobileOpen(false); onNavigate('projects'); }}>Projects</button>
            <button className="py-2 rounded font-semibold text-white bg-[#eb1478] hover:bg-[#c0105e] shadow text-left" onClick={() => { setMobileOpen(false); onNavigate('start-project'); }}>Start Project</button>
            <button className="py-2 rounded font-semibold text-white bg-[#eb1478] hover:bg-[#c0105e] shadow text-left" onClick={() => { setMobileOpen(false); onNavigate('dashboard'); }}>Dashboard</button>
            <button className="py-2 rounded font-semibold text-white bg-[#eb1478] hover:bg-[#c0105e] shadow text-left" onClick={() => { setMobileOpen(false); onNavigate('login'); }}>Login</button>
            {/* Language Switcher for mobile */}
            <select
              className="mt-2 px-3 py-1 rounded-full border border-gray-300 text-[#222] bg-white focus:outline-none focus:ring-2 focus:ring-[#eb1478]"
              value={language}
              onChange={handleLanguageChange}
              aria-label="Select language"
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
