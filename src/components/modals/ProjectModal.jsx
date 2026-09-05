import React, { useEffect } from 'react';
import { X, CheckCircle2, Calendar, Code, Sparkles, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-[#0d0d14]/95 border border-purple-500/40 rounded-3xl shadow-purple-glow-lg overflow-hidden z-10 my-auto">
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20 bg-[#08080d]/90">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
              {project.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400 font-mono">
              <Calendar className="w-3.5 h-3.5 text-purple-400" />
              {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-purple-500/20 text-gray-400 hover:text-white transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {/* Main Visual */}
          <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 mb-8 aspect-video bg-[#08080d]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080d] via-transparent to-transparent opacity-60" />
          </div>

          {/* Title & Tagline */}
          <div className="mb-6">
            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
              {project.name}
            </h3>
            <p className="text-purple-400 font-medium text-base sm:text-lg mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-purple-400" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/25"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              Project Summary
            </h4>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
            {project.note && (
              <p className="mt-3 text-xs text-purple-300 italic bg-purple-500/10 p-3 rounded-xl border border-purple-500/20">
                💡 Note: {project.note}
              </p>
            )}
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Key Capabilities & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-200 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-purple-500/20 bg-[#08080d]/90">
          <div className="flex items-center gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-400/40 shadow-purple-glow-sm transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-gray-200 bg-white/5 hover:bg-purple-500/15 border border-white/10 hover:border-purple-500/50 hover:text-white transition-all"
              >
                <Github className="w-4 h-4 text-purple-400" />
                <span>GitHub</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-gray-300 hover:text-white bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
