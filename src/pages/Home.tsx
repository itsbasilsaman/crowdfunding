// src/pages/Home.tsx

import React from 'react';
import { FaRocket, FaUsers, FaChartLine, FaHandHoldingUsd, FaRegLightbulb, FaRegCheckCircle } from 'react-icons/fa';


const stats = [
  { label: 'Founders', value: '1', icon: <FaUsers /> },
  { label: 'Investors', value: '0', icon: <FaHandHoldingUsd /> },
  { label: 'Raised', value: '0 AED', icon: <FaChartLine /> },
  { label: 'Live', value: '1', icon: <FaRegCheckCircle /> },
  { label: 'Funds', value: '0 AED', icon: <FaRegLightbulb /> },
  { label: 'Running', value: '1', icon: <FaRocket /> },
];

const fundingStages = [
  "Ideation", "Pre-Seed", "Seed", "Series A", "Series B", "Series C", "IPO"
];

const Home: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
  <section className="w-full pt-24 sm:pt-32 pb-4 bg-white min-h-screen font-montserrat transition-colors duration-300">
    <div className="max-w-5xl mx-auto px-4">
      {/* Intro Section */}
      <div className="mb-12 text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#222] mb-4 leading-tight tracking-tight drop-shadow-sm" style={{letterSpacing: '-1px'}}>
          Crowdfunding <span className="text-[#eb1478]">Prosperity</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl font-medium">
          Empower founders with a vision, supporting startups from <span className="text-[#eb1478] font-semibold">Ideation</span> to <span className="text-[#eb1478] font-semibold">IPO</span> with verified projects—100% non-profit.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <button
            className="bg-[#eb1478] hover:bg-[#c0105e] text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#eb1478] focus:ring-offset-2 text-lg"
            onClick={() => onNavigate('start-project')}
          >
            Get Started
          </button>
          <button
            className="bg-white border-2 border-[#eb1478] text-[#eb1478] font-bold px-8 py-3 rounded-full shadow hover:bg-[#eb1478] hover:text-white transition-all duration-200 text-lg"
            onClick={() => onNavigate('projects')}
          >
            Explore Projects
          </button>
        </div>
      </div>
      {/* Founders & Investors Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="rounded-3xl bg-white p-8 flex flex-col justify-between h-full shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
          <div className="absolute -top-8 -right-8 opacity-10 text-[#eb1478] text-8xl pointer-events-none group-hover:opacity-20 transition-opacity duration-300"><FaRocket /></div>
          <h2 className="text-2xl font-bold text-[#eb1478] mb-3 text-center">For Founders</h2>
          <p className="text-gray-700 mb-4 text-center font-medium">
            Launch verified projects and share <span className="text-[#eb1478] font-semibold">10% equity</span> with the platform—no personal funding loss.
          </p>
          <div className="flex justify-center space-x-3 mt-2">
            <a href="https://chat.whatsapp.com/BwkEsUmbRERGsnriJuHR2R" target="_blank" rel="noopener noreferrer"
              className="bg-[#eb1478] hover:bg-[#c0105e] text-white font-semibold px-6 py-2 rounded-full shadow transition-all duration-200">
              Join Group
            </a>
            <button className="bg-white border-2 border-[#eb1478] text-[#eb1478] font-semibold px-6 py-2 rounded-full shadow hover:bg-[#eb1478] hover:text-white transition-all duration-200"
              onClick={() => onNavigate('start-project')}>
              Start Project
            </button>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-8 flex flex-col justify-between h-full shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
          <div className="absolute -top-8 -right-8 opacity-10 text-[#eb1478] text-8xl pointer-events-none group-hover:opacity-20 transition-opacity duration-300"><FaHandHoldingUsd /></div>
          <h2 className="text-2xl font-bold text-[#eb1478] mb-3 text-center">For Investors</h2>
          <p className="text-gray-700 mb-4 text-center font-medium">
            Invest from <span className="text-[#eb1478] font-semibold">100 AED</span> in verified projects and earn dividends with up to <span className="text-[#eb1478] font-semibold">90% profit share</span> annually.
          </p>
          <div className="flex justify-center space-x-3 mt-2">
            <button onClick={() => onNavigate('projects')}
              className="bg-[#eb1478] hover:bg-[#c0105e] text-white font-semibold px-6 py-2 rounded-full shadow transition-all duration-200">
              Invest Now
            </button>
          </div>
        </div>
      </div>
      {/* Funding Stages */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#222] mb-5 text-center tracking-tight">Funding Stages</h2>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
          {fundingStages.map((stage, i) => (
            <div key={stage} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <span className="text-[#eb1478] text-2xl mb-1">{i === 0 ? <FaRegLightbulb /> : i === fundingStages.length-1 ? <FaRegCheckCircle /> : <FaChartLine />}</span>
              <p className="text-base font-semibold text-[#222] text-center mt-1">{stage}</p>
            </div>
          ))}
        </div>
        <p className="text-base text-gray-600 mt-5 text-center italic">
          A <span className="text-[#eb1478] font-semibold">100 AED</span> investment can transform a startup and yield rich returns.
        </p>
        <div className="flex justify-center mt-4">
          <button className="bg-[#eb1478] hover:bg-[#c0105e] text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-200 text-lg"
            onClick={() => window.open('https://chat.whatsapp.com/BwkEsUmbRERGsnriJuHR2R', '_blank')}>
            Donate
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">
          Via WhatsApp: <a href="https://chat.whatsapp.com/BwkEsUmbRERGsnriJuHR2R"
            target="_blank" rel="noopener noreferrer"
            className="text-[#eb1478] underline font-semibold">Join</a>
        </p>
      </div>
      {/* Platform Statistics */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100">
        <h2 className="text-2xl font-bold text-[#222] mb-6 text-center tracking-tight">Platform Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {stats.map(stat => (
            <div key={stat.label} className="flex flex-col items-center justify-center p-3 animate-fade-in-up">
              <span className="text-3xl text-[#eb1478] mb-2">{stat.icon}</span>
              <span className="text-2xl font-extrabold text-[#222] mb-1">{stat.value}</span>
              <span className="text-sm font-medium text-gray-600">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Join the Movement / CTA */}
      <div className="bg-gradient-to-r from-white via-[#fce4f2] to-white rounded-3xl shadow-xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between border border-gray-100">
        <div className="flex-1 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-[#eb1478] mb-3 text-center md:text-left">Join the Movement</h2>
          <p className="text-gray-700 text-center md:text-left font-medium">
            The platform takes <span className="text-[#eb1478] font-semibold">10% equity</span>, enabling investor dividends from profits.
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-[#eb1478] hover:bg-[#c0105e] text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-200 text-lg"
            onClick={() => onNavigate('projects')}>
            Invest
          </button>
          <button className="bg-white border-2 border-[#eb1478] text-[#eb1478] font-bold px-8 py-3 rounded-full shadow hover:bg-[#eb1478] hover:text-white transition-all duration-200 text-lg"
            onClick={() => onNavigate('start-project')}>
            Launch
          </button>
        </div>
      </div>
      {/* Leadership Section */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-6 grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-100">
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-bold text-[#eb1478] mb-2">For Founders</h3>
          <p className="text-gray-700 mb-3 font-medium">
            Led by <span className="text-[#eb1478] font-semibold">CEO Asif Azad</span>, grow your business with <span className="text-[#eb1478] font-semibold">10% equity partnership</span>.
          </p>
          <button className="bg-[#eb1478] hover:bg-[#c0105e] text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-200 text-lg"
            onClick={() => onNavigate('start-project')}>
            Start
          </button>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-bold text-[#eb1478] mb-2">For Investors</h3>
          <p className="text-gray-700 mb-3 font-medium">
            Earn dividends from curated startups via <span className="text-[#eb1478] font-semibold">10% platform equity</span> with annual returns.
          </p>
          <button className="bg-[#eb1478] hover:bg-[#c0105e] text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-200 text-lg"
            onClick={() => onNavigate('projects')}>
            Invest
          </button>
        </div>
      </div>
    </div>
    {/* Subtle divider for visual hierarchy */}
    <div className="w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8 rounded-full" />
  </section>
);

export default Home;
