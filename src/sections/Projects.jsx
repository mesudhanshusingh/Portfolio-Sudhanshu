import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import ProjectModal from '../components/ProjectModal';
import { projectsList } from '../data/portfolioData';
import { Calendar, Eye, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-16 sm:py-20 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <SectionHeader
          badge="Featured Engineering Work"
          title="Featured Projects"
          subtitle="Explore full-stack applications, emergency navigation tools, and backend payment implementations built with Java, Spring Boot, React, and MySQL."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {projectsList.map((project) => (
            <GlassCard
              key={project.id}
              className={`flex flex-col justify-between cursor-pointer group ${
                project.highlight ? 'ring-1 ring-violet-500/50 shadow-purple-glow-sm' : ''
              }`}
            >
              <div onClick={() => setSelectedProject(project)}>
                {/* Project Image Preview */}
                <div className="relative aspect-video overflow-hidden bg-dark-950 border-b border-violet-900/30">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-70" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-dark-950/90 text-violet-300 border border-violet-700/60 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-dark-950/90 text-gray-300 border border-violet-900/60 backdrop-blur-md">
                    <Calendar className="w-3 h-3 text-violet-400" />
                    {project.year}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-2xl font-extrabold font-heading text-white group-hover:text-violet-300 transition-colors flex items-center justify-between">
                      <span>{project.name}</span>
                      <ArrowUpRight className="w-5 h-5 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs font-semibold text-violet-400 mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-violet-950/50 text-violet-200 border border-violet-800/40"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-mono text-gray-400 bg-dark-850">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-dark-850 border border-violet-800/50 group-hover:bg-violet-600/30 group-hover:border-violet-400 transition-all duration-300 cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-violet-400" />
                  <span>View Project Details</span>
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>

      {/* Modal detail overlay */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
