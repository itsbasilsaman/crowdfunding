// src/components/ProjectCard.tsx
import React from 'react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
  language: 'en' | 'ar';
}

const getLang = (en: string, ar: string, lang: 'en' | 'ar') => (lang === 'ar' ? ar : en);

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onViewDetails,
  language,
}) => {
  const percent = Math.min((project.raised / project.goal) * 100, 100);
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 font-montserrat cursor-pointer group">
      <div className="w-full h-32 rounded-xl overflow-hidden mb-2 relative">
        <img src={project.banner_url} alt={`${project.name} Banner`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-extrabold text-[#222] mt-1 text-center tracking-tight group-hover:text-[#eb1478] transition-colors duration-200" style={{letterSpacing: '-0.5px'}}>{project.name}</h3>
      <p className="text-xs text-gray-500 text-center mb-1">{getLang('Starting at ', 'يبدأ من ', language)}<span className="text-[#eb1478] font-bold">100 AED</span></p>
      <p className="text-xs text-gray-600 text-center mb-1">
        {getLang('Raised: ', 'تم جمع: ', language)}<span className="font-semibold">{project.raised.toLocaleString()} AED</span> / {getLang('Goal: ', 'الهدف: ', language)}<span className="font-semibold">{project.goal.toLocaleString()} AED</span>
      </p>
      <div className="w-full h-2 bg-gray-200 rounded-full mt-1 mb-1 overflow-hidden">
        <div className="h-full bg-[#eb1478] rounded-full transition-all duration-500" style={{ width: `${percent}%` }} />
      </div>
      <p className="text-xs text-gray-500 text-center mb-2">{project.category}</p>
      <button onClick={onViewDetails} className="w-full py-2 text-base font-bold rounded-full bg-[#eb1478] text-white shadow hover:bg-[#c0105e] transition-all mt-1">
        {getLang('View Details & Invest', 'عرض التفاصيل والاستثمار', language)}
      </button>
    </div>
  );
};

export default ProjectCard;
