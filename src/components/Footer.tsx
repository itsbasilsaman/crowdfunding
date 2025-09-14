// src/components/Footer.tsx
import React from 'react';


const Footer: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
  <footer className="w-full bg-white border-t border-gray-100 py-6 mt-8 font-montserrat">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
      <p className="text-sm text-gray-500 text-center md:text-left">&copy; 2025 <span className="font-bold text-[#eb1478]">Crowdfunding Prosperity</span>. All rights reserved.</p>
      <div className="flex flex-wrap justify-center md:justify-end gap-3 mt-2 md:mt-0">
        <button onClick={() => onNavigate('about')} className="text-[#eb1478] hover:underline font-medium transition-colors">About</button>
        <button onClick={() => onNavigate('terms')} className="text-[#eb1478] hover:underline font-medium transition-colors">Terms</button>
        <button onClick={() => onNavigate('privacy')} className="text-[#eb1478] hover:underline font-medium transition-colors">Privacy</button>
        <button onClick={() => onNavigate('accessibility')} className="text-[#eb1478] hover:underline font-medium transition-colors">Accessibility</button>
      </div>
    </div>
  </footer>
);

export default Footer;
