// src/pages/Projects.tsx
import React, { useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC<{ onViewDetails: (project: Project) => void }> = ({ onViewDetails }) => {
  const [stage, setStage] = useState<string>('');

  const filteredProjects = stage ? projects.filter(p => p.funding_stage === stage) : projects;

  return (
    <section className="w-full pt-24 pb-8 bg-white min-h-screen font-montserrat transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#222] mb-6 text-center tracking-tight drop-shadow-sm" style={{letterSpacing: '-1px'}}>
          Explore <span className="text-[#eb1478]">Opportunities</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-3 mb-8 justify-center items-center">
          <select
            value={stage}
            onChange={e => setStage(e.target.value)}
            className="p-3 border-2 border-[#eb1478] rounded-full w-full md:w-1/3 text-base font-medium focus:ring-2 focus:ring-[#eb1478] focus:outline-none transition-all"
          >
            <option value="">All Stages</option>
            <option value="Ideation">Ideation</option>
            <option value="Pre-Seed">Pre-Seed</option>
            <option value="Seed">Seed</option>
            <option value="Series A">Series A</option>
            <option value="Series B">Series B</option>
            <option value="Series C">Series C</option>
            <option value="IPO">IPO</option>
          </select>
          <span className="hidden md:inline-block w-px h-8 bg-gray-200 mx-2" />
          <p className="text-base text-gray-600 text-center w-full md:w-2/3 font-medium">
            Verified projects for <span className="text-[#eb1478] font-semibold">profitable investments</span>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} onViewDetails={() => onViewDetails(project)} />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16">
              <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="#eb1478" strokeWidth="1.5" className="mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-gray-500 text-lg font-semibold text-center">No projects available.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
