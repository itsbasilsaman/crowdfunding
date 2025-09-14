
import React from 'react';

const Dashboard: React.FC = () => (
  <section className="w-full pt-24 pb-8 bg-white min-h-screen font-montserrat transition-colors duration-300 flex items-center justify-center">
    <div className="max-w-2xl w-full shadow-2xl rounded-3xl bg-white p-6 md:p-10 border border-gray-100 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#222] mb-4 text-center tracking-tight drop-shadow-sm" style={{letterSpacing: '-1px'}}>
        Dashboard
      </h2>
      <div className="w-full flex flex-col items-center justify-center py-12">
        <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="#eb1478" strokeWidth="1.5" className="mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5V6a2 2 0 012-2h14a2 2 0 012 2v7.5M3 13.5V18a2 2 0 002 2h14a2 2 0 002-2v-4.5M3 13.5h18" /></svg>
        <p className="text-gray-500 text-lg font-semibold text-center">Dashboard content coming soon.</p>
      </div>
    </div>
  </section>
);

export default Dashboard;
