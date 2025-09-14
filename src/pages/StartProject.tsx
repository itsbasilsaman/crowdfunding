import React, { useState } from 'react';

interface StartProjectProps {
  language: 'en' | 'ar';
}

const getLang = (en: string, ar: string, lang: 'en' | 'ar') => (lang === 'ar' ? ar : en);

const StartProject: React.FC<StartProjectProps> = ({ language }) => {
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
      alert(getLang('Please fill all fields correctly. Goal must be between 10,000 and 15,000,000 AED.', 'يرجى ملء جميع الحقول بشكل صحيح. يجب أن يكون الهدف بين 10,000 و 15,000,000 درهم.', language));
      return;
    }
    setSubmitted(true);
    alert(getLang(`Project "${form.name}" submitted successfully!`, `تم إرسال المشروع "${form.name}" بنجاح!`, language));
  };

  return (
    <section className="w-full pt-24 pb-8 bg-white min-h-screen font-montserrat transition-colors duration-300 flex items-center justify-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl w-full shadow-2xl rounded-3xl bg-white p-6 md:p-10 border border-gray-100">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#222] mb-2 text-center tracking-tight drop-shadow-sm" style={{letterSpacing: '-1px'}}>
          {getLang('Launch ', 'أطلق ', language)}<span className="text-[#eb1478]">{getLang('Project', 'مشروع', language)}</span>
        </h2>
        <p className="text-base text-gray-600 mb-6 font-semibold text-center">
          {getLang('Free submission from ', 'تقديم مجاني من ', language)}<span className="text-[#eb1478]">{getLang('Ideation', 'مرحلة الفكرة', language)}</span>{getLang(' to ', ' إلى ', language)}<span className="text-[#eb1478]">IPO</span>.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="project-name" className="block mb-1 font-semibold text-gray-700">{getLang('Project Name', 'اسم المشروع', language)}</label>
              <input type="text" id="name" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.name} onChange={handleChange} required data-en="Project Name" data-ar="اسم المشروع" />
            </div>
            <div>
              <label htmlFor="project-goal" className="block mb-1 font-semibold text-gray-700">{getLang('Funding Goal (AED)', 'الهدف التمويلي (درهم)', language)}</label>
              <input type="number" id="goal" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.goal} onChange={handleChange} required data-en="Funding Goal (AED)" data-ar="الهدف التمويلي (درهم)" />
            </div>
          </div>
          <div>
            <label htmlFor="project-desc" className="block mb-1 font-semibold text-gray-700">{getLang('Description', 'الوصف', language)}</label>
            <textarea id="description" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.description} onChange={handleChange} required data-en="Description" data-ar="الوصف" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="project-category" className="block mb-1 font-semibold text-gray-700">{getLang('Category', 'الفئة', language)}</label>
              <select id="category" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.category} onChange={handleChange} required data-en="Category" data-ar="الفئة">
                <option value="Tech" data-en="Tech" data-ar="تقنية">{getLang('Tech', 'تقنية', language)}</option>
                <option value="Retail" data-en="Retail" data-ar="تجزئة">{getLang('Retail', 'تجزئة', language)}</option>
                <option value="Healthcare" data-en="Healthcare" data-ar="الرعاية الصحية">{getLang('Healthcare', 'الرعاية الصحية', language)}</option>
                <option value="Other" data-en="Other" data-ar="أخرى">{getLang('Other', 'أخرى', language)}</option>
              </select>
            </div>
            <div>
              <label htmlFor="project-stage" className="block mb-1 font-semibold text-gray-700">{getLang('Stage', 'المرحلة', language)}</label>
              <select id="funding_stage" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.funding_stage} onChange={handleChange} required data-en="Stage" data-ar="المرحلة">
                <option value="Ideation" data-en="Ideation" data-ar="مرحلة الفكرة">{getLang('Ideation', 'مرحلة الفكرة', language)}</option>
                <option value="Pre-Seed" data-en="Pre-Seed" data-ar="مرحلة ما قبل التمويل الأولي">{getLang('Pre-Seed', 'مرحلة ما قبل التمويل الأولي', language)}</option>
                <option value="Seed" data-en="Seed" data-ar="مرحلة التمويل الأولي">{getLang('Seed', 'مرحلة التمويل الأولي', language)}</option>
                <option value="Series A" data-en="Series A" data-ar="السلسلة أ">{getLang('Series A', 'السلسلة أ', language)}</option>
                <option value="Series B" data-en="Series B" data-ar="السلسلة ب">{getLang('Series B', 'السلسلة ب', language)}</option>
                <option value="Series C" data-en="Series C" data-ar="السلسلة ج">{getLang('Series C', 'السلسلة ج', language)}</option>
                <option value="IPO" data-en="IPO" data-ar="الطرح العام الأولي">{getLang('IPO', 'الطرح العام الأولي', language)}</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="project-logo" className="block mb-1 font-semibold text-gray-700">{getLang('Logo URL', 'رابط الشعار', language)}</label>
              <input type="url" id="logo_url" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.logo_url} onChange={handleChange} data-en="Logo URL" data-ar="رابط الشعار" />
            </div>
            <div>
              <label htmlFor="project-banner" className="block mb-1 font-semibold text-gray-700">{getLang('Banner URL', 'رابط البانر', language)}</label>
              <input type="url" id="banner_url" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.banner_url} onChange={handleChange} data-en="Banner URL" data-ar="رابط البانر" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="project-timeline" className="block mb-1 font-semibold text-gray-700">{getLang('Timeline (e.g., 12 months)', 'الجدول الزمني (مثال: 12 شهرًا)', language)}</label>
              <input type="text" id="timeline" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.timeline} onChange={handleChange} required data-en="Timeline (e.g., 12 months)" data-ar="الجدول الزمني (مثال: 12 شهرًا)" />
            </div>
            <div>
              <label htmlFor="project-team" className="block mb-1 font-semibold text-gray-700">{getLang('Team (e.g., John - CEO)', 'الفريق (مثال: أحمد - المدير التنفيذي)', language)}</label>
              <textarea id="team" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.team} onChange={handleChange} required data-en="Team (e.g., John - CEO)" data-ar="الفريق (مثال: أحمد - المدير التنفيذي)" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="project-risks" className="block mb-1 font-semibold text-gray-700">{getLang('Risks (e.g., market competition)', 'المخاطر (مثال: المنافسة في السوق)', language)}</label>
              <textarea id="risks" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.risks} onChange={handleChange} required data-en="Risks (e.g., market competition)" data-ar="المخاطر (مثال: المنافسة في السوق)" />
            </div>
            <div>
              <label htmlFor="project-vision" className="block mb-1 font-semibold text-gray-700">{getLang('Your Vision (e.g., Empowering youth)', 'رؤيتك (مثال: تمكين الشباب)', language)}</label>
              <textarea id="vision" className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition text-base" value={form.vision} onChange={handleChange} required data-en="Your Vision (e.g., Empowering youth)" data-ar="رؤيتك (مثال: تمكين الشباب)" />
            </div>
          </div>
          <button type="submit" className="w-full py-3 text-lg font-bold rounded-full bg-[#eb1478] text-white shadow-lg hover:bg-[#c0105e] transition-all mt-2 disabled:opacity-60" disabled={submitted} data-en="Submit Project" data-ar="إرسال المشروع">{getLang('Submit Project', 'إرسال المشروع', language)}</button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-base text-gray-600 mb-2">
            {getLang('Connect with investors post-7 PM at ', 'تواصل مع المستثمرين بعد الساعة 7 مساءً على ', language)}
            <a href="https://meet.google.com/qxd-hzxc-ggo" target="_blank" rel="noopener noreferrer" className="text-[#eb1478] underline font-semibold">Google Meet</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartProject;
