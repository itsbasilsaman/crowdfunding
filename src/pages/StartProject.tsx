import React, { useState } from 'react';

const StartProject: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    goal: '',
    logo_url: '',
    banner_url: '',
    category: 'Tech',
    funding_stage: 'Ideation',
    timeline: '',
    team: '',
    risks: '',
    vision: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.description || Number(form.goal) < 10000 || Number(form.goal) > 15000000 || !form.category || !form.funding_stage || !form.timeline || !form.team || !form.risks || !form.vision) {
      alert('Please fill all fields correctly. Goal must be between 10,000 and 15,000,000 AED.');
      return;
    }
    setSubmitted(true);
    alert(`Project "${form.name}" submitted successfully!`);
  };

  return (
    <section className="w-full pt-24 pb-8 bg-white min-h-screen font-montserrat transition-colors duration-300 flex items-center justify-center">
      <div className="max-w-3xl w-full shadow-2xl rounded-3xl bg-white p-6 md:p-10 border border-gray-100">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#222] mb-2 text-center tracking-tight drop-shadow-sm" style={{letterSpacing: '-1px'}}>
          Launch <span className="text-[#eb1478]">Project</span>
        </h2>
        <p className="text-base text-gray-600 mb-6 font-semibold text-center">Free submission from <span className="text-[#eb1478]">Ideation</span> to <span className="text-[#eb1478]">IPO</span>.</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="project-name" className="block mb-1 font-semibold text-gray-700">Project Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.name} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="project-goal" className="block mb-1 font-semibold text-gray-700">Funding Goal (AED)</label>
              <input type="number" id="goal" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.goal} onChange={handleChange} required />
            </div>
          </div>
          <div>
            <label htmlFor="project-desc" className="block mb-1 font-semibold text-gray-700">Description</label>
            <textarea id="description" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.description} onChange={handleChange} required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="project-category" className="block mb-1 font-semibold text-gray-700">Category</label>
              <select id="category" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.category} onChange={handleChange} required>
                <option value="Tech">Tech</option>
                <option value="Retail">Retail</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="project-stage" className="block mb-1 font-semibold text-gray-700">Stage</label>
              <select id="funding_stage" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.funding_stage} onChange={handleChange} required>
                <option value="Ideation">Ideation</option>
                <option value="Pre-Seed">Pre-Seed</option>
                <option value="Seed">Seed</option>
                <option value="Series A">Series A</option>
                <option value="Series B">Series B</option>
                <option value="Series C">Series C</option>
                <option value="IPO">IPO</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="project-logo" className="block mb-1 font-semibold text-gray-700">Logo URL</label>
              <input type="url" id="logo_url" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.logo_url} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="project-banner" className="block mb-1 font-semibold text-gray-700">Banner URL</label>
              <input type="url" id="banner_url" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.banner_url} onChange={handleChange} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="project-timeline" className="block mb-1 font-semibold text-gray-700">Timeline (e.g., 12 months)</label>
              <input type="text" id="timeline" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.timeline} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="project-team" className="block mb-1 font-semibold text-gray-700">Team (e.g., John - CEO)</label>
              <textarea id="team" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.team} onChange={handleChange} required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="project-risks" className="block mb-1 font-semibold text-gray-700">Risks (e.g., market competition)</label>
              <textarea id="risks" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.risks} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="project-vision" className="block mb-1 font-semibold text-gray-700">Your Vision (e.g., Empowering youth)</label>
              <textarea id="vision" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.vision} onChange={handleChange} required />
            </div>
          </div>
          <button type="submit" className="w-full py-3 text-lg font-bold rounded-full bg-[#eb1478] text-white shadow-lg hover:bg-[#c0105e] transition-all mt-2 disabled:opacity-60" disabled={submitted}>Submit Project</button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-base text-gray-600 mb-2">Connect with investors post-7 PM at <a href="https://meet.google.com/qxd-hzxc-ggo" target="_blank" rel="noopener noreferrer" className="text-[#eb1478] underline font-semibold">Google Meet</a>.</p>
        </div>
      </div>
    </section>
  );
};

export default StartProject;
