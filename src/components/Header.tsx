// src/components/Header.tsx
import React, { useState } from 'react';
// You can use emoji flags for a simple visual improvement

type HeaderProps = {
  onNavigate: (page: string) => void;
  language?: 'en' | 'ar';
  onLanguageChange?: (lang: 'en' | 'ar') => void;
};

const Header: React.FC<HeaderProps> = ({ onNavigate, language = 'en', onLanguageChange }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // Localization dictionary
  const dict = {
    home: { en: 'Home', ar: 'الرئيسية' },
    projects: { en: 'Projects', ar: 'المشاريع' },
    startProject: { en: 'Start Project', ar: 'ابدأ مشروع' },
    dashboard: { en: 'Dashboard', ar: 'لوحة التحكم' },
    login: { en: 'Login', ar: 'تسجيل الدخول' },
    prosperity: { en: 'Prosperity', ar: 'الازدهار' },
    crowdfunding: { en: 'Crowdfunding', ar: 'تمويل الجماعي' },
  };
  return (
    <header className="fixed top-0 w-full z-20 bg-white shadow-md font-montserrat">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2 h-16">
        <span
          className="font-extrabold text-[20px] md:text-2xl tracking-tight text-[#222] select-none cursor-pointer"
          style={{ letterSpacing: '-1px' }}
          onClick={() => onNavigate('home')}
        >
          <span data-en={dict.crowdfunding.en}  >
            { dict.crowdfunding.en}
          </span>{' '}
          <span className="text-[#eb1478]" data-en={dict.prosperity.en}  >
            { dict.prosperity.en}
          </span>
        </span>
        <nav className="hidden md:flex gap-2 lg:gap-4 items-center ml-2">
          <button data-en={dict.home.en} data-ar={dict.home.ar} className="px-4 py-2 rounded-full font-semibold text-black bg-[#eb1478] hover:bg-[#c0105e] shadow transition-colors" onClick={() => onNavigate('home')}>
            {language === 'ar' ? dict.home.ar : dict.home.en}
          </button>
          <button data-en={dict.projects.en} data-ar={dict.projects.ar} className="px-4 py-2 rounded-full font-semibold text-black bg-[#eb1478] hover:bg-[#c0105e] shadow transition-colors" onClick={() => onNavigate('projects')}>
            {language === 'ar' ? dict.projects.ar : dict.projects.en}
          </button>
          <button data-en={dict.startProject.en} data-ar={dict.startProject.ar} className="px-4 py-2 rounded-full font-semibold text-black bg-[#eb1478] hover:bg-[#c0105e] shadow transition-colors" onClick={() => onNavigate('start-project')}>
            {language === 'ar' ? dict.startProject.ar : dict.startProject.en}
          </button>
          <button data-en={dict.dashboard.en} data-ar={dict.dashboard.ar} className="px-4 py-2 rounded-full font-semibold text-black bg-[#eb1478] hover:bg-[#c0105e] shadow transition-colors" onClick={() => onNavigate('dashboard')}>
            {language === 'ar' ? dict.dashboard.ar : dict.dashboard.en}
          </button>
          <button data-en={dict.login.en} data-ar={dict.login.ar} className="px-4 py-2 rounded-full font-semibold text-black bg-[#eb1478] hover:bg-[#c0105e] shadow transition-colors" onClick={() => onNavigate('login')}>
            {language === 'ar' ? dict.login.ar : dict.login.en}
          </button>
          {/* Language Switcher - Redesigned */}
          <div className="ml-4 flex items-center gap-1 bg-gray-100 rounded-full px-1 py-1 border border-gray-200 shadow-inner">
            <button
              className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all duration-200 text-sm font-semibold focus:outline-none ${language === 'en' ? 'bg-[#eb1478] text-white shadow' : 'bg-white text-[#eb1478] hover:bg-gray-200 border border-[#eb1478]'}`}
              style={{ minWidth: 60 }}
              onClick={() => onLanguageChange && onLanguageChange('en')}
              aria-pressed={language === 'en'}
              data-en="EN" data-ar="EN"
            >
              EN
            </button>
            <button
              className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all duration-200 text-sm font-semibold focus:outline-none ${language === 'ar' ? 'bg-[#eb1478] text-white shadow' : 'bg-white text-[#eb1478] hover:bg-gray-200 border border-[#eb1478]'}`}
              style={{ minWidth: 60 }}
              onClick={() => onLanguageChange && onLanguageChange('ar')}
              aria-pressed={language === 'ar'}
              data-en="العربية" data-ar="العربية"
            >
              العربية
            </button>
          </div>
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
            <button data-en={dict.home.en} data-ar={dict.home.ar} className="p-2 rounded font-semibold text-white bg-[#eb1478] hover:bg-[#c0105e] shadow text-left" onClick={() => { setMobileOpen(false); onNavigate('home'); }}>{language === 'ar' ? dict.home.ar : dict.home.en}</button>
            <button data-en={dict.projects.en} data-ar={dict.projects.ar} className="p-2 rounded font-semibold text-white bg-[#eb1478] hover:bg-[#c0105e] shadow text-left" onClick={() => { setMobileOpen(false); onNavigate('projects'); }}>{language === 'ar' ? dict.projects.ar : dict.projects.en}</button>
            <button data-en={dict.startProject.en} data-ar={dict.startProject.ar} className="p-2 rounded font-semibold text-white bg-[#eb1478] hover:bg-[#c0105e] shadow text-left" onClick={() => { setMobileOpen(false); onNavigate('start-project'); }}>{language === 'ar' ? dict.startProject.ar : dict.startProject.en}</button>
            <button data-en={dict.dashboard.en} data-ar={dict.dashboard.ar} className="p-2 rounded font-semibold text-white bg-[#eb1478] hover:bg-[#c0105e] shadow text-left" onClick={() => { setMobileOpen(false); onNavigate('dashboard'); }}>{language === 'ar' ? dict.dashboard.ar : dict.dashboard.en}</button>
            <button data-en={dict.login.en} data-ar={dict.login.ar} className="p-2 rounded font-semibold text-white bg-[#eb1478] hover:bg-[#c0105e] shadow text-left" onClick={() => { setMobileOpen(false); onNavigate('login'); }}>{language === 'ar' ? dict.login.ar : dict.login.en}</button>
            {/* Language Switcher for mobile - Redesigned */}
            <div className="mt-2 flex items-center gap-1 bg-gray-100 rounded-full px-1 py-1 border border-gray-200 shadow-inner">
              <button
                className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all duration-200 text-sm font-semibold focus:outline-none ${language === 'en' ? 'bg-[#eb1478] text-white shadow' : 'bg-white text-[#eb1478] hover:bg-gray-200 border border-[#eb1478]'}`}
                style={{ minWidth: 60 }}
                onClick={() => onLanguageChange && onLanguageChange('en')}
                aria-pressed={language === 'en'}
                data-en="EN" data-ar="EN"
              >
                EN
              </button>
              <button
                className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all duration-200 text-sm font-semibold focus:outline-none ${language === 'ar' ? 'bg-[#eb1478] text-white shadow' : 'bg-white text-[#eb1478] hover:bg-gray-200 border border-[#eb1478]'}`}
                style={{ minWidth: 60 }}
                onClick={() => onLanguageChange && onLanguageChange('ar')}
                aria-pressed={language === 'ar'}
                data-en="AR" data-ar="العربية"
              >
                العربية
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
