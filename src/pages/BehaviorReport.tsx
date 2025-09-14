import React, { useState } from 'react';

const BehaviorReport: React.FC = () => {
  const [projectId] = useState(1);
  const [investorId, setInvestorId] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!investorId || !description) return;
    setSubmitted(true);
    alert(`Issue reported for Investor ID ${investorId}: ${description}`);
  };

  return (
    <section className="section pt-24 min-h-screen bg-gradient-to-br from-white to-gray-100 flex items-center justify-center">
      <div className="content-block max-w-lg w-full shadow-xl rounded-2xl bg-white p-8 border border-gray-200">
        <h2 className="text-3xl font-extrabold text-[#333333] mb-2 text-center tracking-tight">Report Issue</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="behavior-project-id" className="form-label block mb-1 font-medium text-gray-700">Project ID</label>
            <input type="number" id="behavior-project-id" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50" value={projectId} readOnly />
          </div>
          <div>
            <label htmlFor="behavior-investor-id" className="form-label block mb-1 font-medium text-gray-700">Investor ID</label>
            <input type="number" id="behavior-investor-id" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition" value={investorId} onChange={e => setInvestorId(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="behavior-description" className="form-label block mb-1 font-medium text-gray-700">Description</label>
            <textarea id="behavior-description" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition" value={description} onChange={e => setDescription(e.target.value)} required />
          </div>
          <button type="submit" className="custom-button w-full py-2 text-lg" disabled={submitted}>Report</button>
        </form>
      </div>
    </section>
  );
};

export default BehaviorReport;
