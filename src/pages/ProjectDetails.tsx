// src/pages/ProjectDetails.tsx
import React, { useState } from 'react';
import type { Project } from '../data/projects';

const ProjectDetails: React.FC<{ project: Project; onBack: () => void }> = ({ project, onBack }) => {
  const [investment, setInvestment] = useState<number>(0);

  const percent = ((project.raised + investment) / project.goal * 100).toFixed(2);
  const profitShare = ((investment / project.goal) * 90).toFixed(2);
  const needed = (project.goal - project.raised - investment > 0 ? project.goal - project.raised - investment : 0).toLocaleString();

  return (
    <section className="w-full pt-24 pb-8 bg-white min-h-screen font-montserrat transition-colors duration-300 flex items-center justify-center">
      <div className="max-w-3xl w-full shadow-2xl rounded-3xl bg-white p-6 md:p-10 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-6 mb-6 items-center justify-center">
          <img src={project.banner_url} alt="Project Banner" className="w-full md:w-2/3 h-40 object-cover rounded-2xl shadow-md" />
          <img src={project.logo_url} alt="Project Logo" className="w-24 h-24 object-cover rounded-full border-4 border-[#eb1478] shadow-md -mt-10 md:mt-0 bg-white" />
        </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#222] mb-2 text-center tracking-tight drop-shadow-sm" style={{letterSpacing: '-1px'}}>{project.name}</h2>
              <p className="text-base text-gray-600 mb-2 text-center font-semibold">
                Verified project—<span className="text-[#eb1478] font-bold">10% equity dividends</span>{project.name === 'QiTaah' && ' with returns in 45 days.'}
              </p>
              <p className="text-base text-gray-600 mb-2 text-center">{project.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="text-sm text-gray-600">
                  <strong>Stage:</strong> {project.funding_stage} (Series A ~January 2, 2026)
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Category:</strong> {project.category}
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Timeline:</strong> {project.timeline}
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Team:</strong> {project.team}
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Risks:</strong> {project.risks}
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Status:</strong> {project.status}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 mb-4 shadow-inner">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="text-base text-gray-700 font-semibold">Raised: <span className="text-[#eb1478] font-bold">{(project.raised + investment).toLocaleString()} AED</span> / Goal: <span className="font-bold">{project.goal.toLocaleString()} AED</span></div>
                  <div className="text-base text-gray-700 font-semibold">Amount Needed: <span className="text-[#eb1478] font-bold">{needed} AED</span></div>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full mt-3 mb-1 overflow-hidden">
                  <div className="h-full bg-[#eb1478] rounded-full transition-all duration-500" style={{ width: `${percent}%` }} />
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{percent}% Invested</span>
                  <span>Valuation: ~2.5M AED</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 mb-4 shadow border border-gray-100">
                <h3 className="text-lg font-bold text-[#eb1478] mb-2 text-center">Investment Options</h3>
                <form className="flex flex-col gap-3 items-center"
                  onSubmit={e => {
                    e.preventDefault();
                    alert(`Investment of ${investment} AED submitted!`);
                  }}>
                  <label htmlFor="project-invest-amount" className="block font-semibold text-gray-700 mb-1">Investment Amount (min 100 AED)</label>
                  <input type="number" id="project-invest-amount" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base mb-2"
                    min={100} value={investment}
                    onChange={e => setInvestment(Number(e.target.value))}
                    required />
                  <div className="flex flex-col md:flex-row gap-2 w-full justify-between">
                    <p className="text-sm text-gray-600 text-center flex-1">Your Contribution: <span className="font-semibold">{(investment / project.goal * 100).toFixed(2)}%</span></p>
                    <p className="text-sm text-gray-600 text-center flex-1">Profit Share: <span className="font-semibold">{profitShare}%</span> (after 10% equity)</p>
                  </div>
                  <button type="submit" className="w-full py-3 text-lg font-bold rounded-full bg-[#eb1478] text-white shadow-lg hover:bg-[#c0105e] transition-all mt-2 disabled:opacity-60" disabled={investment < 100}>Confirm Payment</button>
                  <div className="flex flex-col md:flex-row gap-2 w-full mt-2">
                    <button type="button" className="w-full py-2 rounded-full border-2 border-[#eb1478] text-[#eb1478] font-bold hover:bg-[#eb1478] hover:text-white transition-all" onClick={() => alert("Bank transfer selected")}>Bank Transfer</button>
                    <button type="button" className="w-full py-2 rounded-full border-2 border-[#eb1478] text-[#eb1478] font-bold hover:bg-[#eb1478] hover:text-white transition-all" onClick={() => alert("Crypto selected")}>Cryptocurrency</button>
                    <button type="button" className="w-full py-2 rounded-full border-2 border-[#eb1478] text-[#eb1478] font-bold hover:bg-[#eb1478] hover:text-white transition-all" onClick={() => alert("PayPal selected")}>PayPal</button>
                  </div>
                </form>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <button className="px-4 py-2 rounded-full border-2 border-[#eb1478] text-[#eb1478] font-semibold hover:bg-[#eb1478] hover:text-white transition-all" onClick={() => alert(project.report_text)}>View Full Report</button>
                <button className="px-4 py-2 rounded-full border-2 border-[#eb1478] text-[#eb1478] font-semibold hover:bg-[#eb1478] hover:text-white transition-all" onClick={() => alert('Feedback')}>Feedback</button>
                <button className="px-4 py-2 rounded-full border-2 border-[#eb1478] text-[#eb1478] font-semibold hover:bg-[#eb1478] hover:text-white transition-all" onClick={() => alert('Report Issue')}>Report Issue</button>
                <button className="px-4 py-2 rounded-full border-2 border-[#eb1478] text-[#eb1478] font-semibold hover:bg-[#eb1478] hover:text-white transition-all" onClick={() => alert('Toggle Live Status')}>Toggle Live Status</button>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 mb-4 shadow-inner">
                <h3 className="text-lg font-bold text-[#eb1478] mb-2 text-center">Advanced Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div><strong>Total Raised:</strong> {(project.raised + investment).toLocaleString()} AED</div>
                  <div><strong>Amount Needed:</strong> {needed} AED</div>
                  <div><strong>Investors:</strong> N/A</div>
                  <div><strong>Average Investment:</strong> N/A</div>
                </div>
              </div>
              <button onClick={onBack} className="w-full py-3 text-lg font-bold rounded-full bg-[#eb1478] text-white shadow-lg hover:bg-[#c0105e] transition-all mt-2">Back to Projects</button>
        </div>
    </section>
  )
}

export default ProjectDetails