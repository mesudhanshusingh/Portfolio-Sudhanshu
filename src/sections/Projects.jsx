import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import GlassCard from '../components/ui/GlassCard';
import ProjectModal from '../components/modals/ProjectModal';
import { projectsList } from '../data/portfolioData';
import { Calendar, Eye, ArrowUpRight, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-16 sm:py-20 relative bg-[#020204]">
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
              data-cursor="project"
              className={`flex flex-col justify-between cursor-pointer group ${
                project.highlight ? 'ring-1 ring-purple-500/60 shadow-purple-glow-sm' : ''
              }`}
            >
              <div onClick={() => setSelectedProject(project)}>
                {/* Project Image Preview */}
                <div className="relative aspect-video overflow-hidden bg-[#050508] border-b border-purple-900/30">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080d] via-transparent to-transparent opacity-75" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#030305]/90 text-purple-300 border border-purple-500/60 backdrop-blur-md shadow-purple-glow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-[#030305]/90 text-gray-300 border border-purple-900/60 backdrop-blur-md">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    {project.year}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-2xl font-extrabold font-heading text-white group-hover:text-purple-300 transition-colors flex items-center justify-between">
                      <span>{project.name}</span>
                      <ArrowUpRight className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-xs font-semibold text-purple-400 mt-0.5">
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
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-purple-950/40 text-purple-200 border border-purple-800/40"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-mono text-gray-400 bg-[#0e0e16]">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Buttons */}
              <div className="px-6 pb-6 pt-0 flex flex-col gap-2.5">
                {/* Action Buttons: Live Demo & GitHub */}
                <div className="flex items-center gap-2">
                  {project.liveDemoUrl && (
                    <motion.a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      data-cursor="button"
                      whileHover={{ y: -2, scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-400/50 shadow-purple-glow-sm hover:shadow-purple-glow transition-all duration-200 cursor-pointer transform-gpu"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      data-cursor="button"
                      whileHover={{ y: -2, scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className={`inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-gray-200 bg-[#08080d]/90 hover:bg-purple-950 border border-purple-800/60 hover:border-purple-500/80 hover:text-white transition-all duration-200 cursor-pointer transform-gpu ${
                        project.liveDemoUrl ? 'flex-1' : 'w-full'
                      }`}
                    >
                      <Github className="w-3.5 h-3.5 text-purple-400" />
                      <span>GitHub</span>
                    </motion.a>
                  )}
                </div>

                {/* View Project Details Button */}
                <motion.button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  data-cursor="button"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold text-gray-300 bg-[#0e0e16] hover:bg-purple-950/60 border border-purple-900/40 hover:border-purple-500/60 hover:text-white transition-all duration-300 cursor-pointer transform-gpu"
                >
                  <Eye className="w-3.5 h-3.5 text-purple-400" />
                  <span>View Details</span>
                </motion.button>
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
