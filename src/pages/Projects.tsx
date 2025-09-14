// src/pages/Projects.tsx
import React, { useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

interface ProjectsProps {
  onViewDetails: (project: Project) => void;
  language: 'en' | 'ar';
}

const getLang = (en: string, ar: string, lang: 'en' | 'ar') => (lang === 'ar' ? ar : en);

const Projects: React.FC<ProjectsProps> = ({ onViewDetails, language }) => {
  const [stage, setStage] = useState<string>('');
  const filteredProjects = stage ? projects.filter(p => p.funding_stage === stage) : projects;

  return (
    <section
      className="w-full pt-24 pb-8 bg-white min-h-screen font-montserrat transition-colors duration-300"
      data-en="Explore Opportunities Section"
      data-ar="قسم استكشاف الفرص"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#222] mb-6 text-center tracking-tight drop-shadow-sm"
          style={{ letterSpacing: '-1px' }}
          data-en="Explore Opportunities"
          data-ar="اكتشف الفرص"
        >
          {getLang('Explore ', 'اكتشف ', language)}
          <span className="text-[#eb1478]" data-en="Opportunities" data-ar="الفرص">{getLang('Opportunities', 'الفرص', language)}</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-3 mb-8 justify-center items-center">
          <select
            value={stage}
            onChange={e => setStage(e.target.value)}
            className="p-3 border-2 border-[#eb1478] rounded-full w-full md:w-1/3 text-base font-medium focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition-all"
            aria-label={getLang('Filter projects by funding stage', 'تصفية المشاريع حسب مرحلة التمويل', language)}
            data-en="Select funding stage"
            data-ar="اختر مرحلة التمويل"
          >
            <option value="" data-en="All Stages" data-ar="جميع المراحل">{getLang('All Stages', 'جميع المراحل', language)}</option>
            <option value="Ideation" data-en="Ideation" data-ar="مرحلة الفكرة">{getLang('Ideation', 'مرحلة الفكرة', language)}</option>
            <option value="Pre-Seed" data-en="Pre-Seed" data-ar="مرحلة ما قبل التمويل الأولي">{getLang('Pre-Seed', 'مرحلة ما قبل التمويل الأولي', language)}</option>
            <option value="Seed" data-en="Seed" data-ar="مرحلة التمويل الأولي">{getLang('Seed', 'مرحلة التمويل الأولي', language)}</option>
            <option value="Series A" data-en="Series A" data-ar="السلسلة أ">{getLang('Series A', 'السلسلة أ', language)}</option>
            <option value="Series B" data-en="Series B" data-ar="السلسلة ب">{getLang('Series B', 'السلسلة ب', language)}</option>
            <option value="Series C" data-en="Series C" data-ar="السلسلة ج">{getLang('Series C', 'السلسلة ج', language)}</option>
            <option value="IPO" data-en="IPO" data-ar="الطرح العام الأولي">{getLang('IPO', 'الطرح العام الأولي', language)}</option>
          </select>
          <span className="hidden md:inline-block w-px h-8 bg-gray-200 mx-2" />
          <p
            className="text-base text-gray-600 text-center w-full md:w-2/3 font-medium"
            data-en="Verified projects for profitable investments"
            data-ar="مشاريع موثوقة للاستثمارات المربحة"
          >
            {getLang('Verified projects for ', 'مشاريع موثوقة ل', language)}
            <span className="text-[#eb1478] font-semibold" data-en="profitable investments" data-ar="الاستثمارات المربحة">{getLang('profitable investments', 'الاستثمارات المربحة', language)}</span>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} onViewDetails={() => onViewDetails(project)} language={language} />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16">
              <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="#eb1478" strokeWidth="1.5" className="mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-gray-500 text-lg font-semibold text-center" data-en="No projects available." data-ar="لا توجد مشاريع متاحة.">
                {getLang('No projects available.', 'لا توجد مشاريع متاحة.', language)}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

