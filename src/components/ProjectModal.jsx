import React, { useEffect } from 'react';
import { X, CheckCircle2, Calendar, Code, Sparkles, ExternalLink, Github } from 'lucide-react';
import TechBadge from './TechBadge';

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
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-dark-900/95 border border-violet-700/50 rounded-3xl shadow-purple-glow-lg overflow-hidden z-10 my-auto">
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-violet-900/30 bg-dark-950/80">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-950 text-violet-300 border border-violet-700/50">
              {project.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400 font-mono">
              <Calendar className="w-3.5 h-3.5 text-violet-400" />
              {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-dark-850 hover:bg-violet-900/50 text-gray-400 hover:text-white transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {/* Main Visual */}
          <div className="relative rounded-2xl overflow-hidden border border-violet-900/40 mb-8 aspect-video bg-dark-950">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />
          </div>

          {/* Title & Tagline */}
          <div className="mb-6">
            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
              {project.name}
            </h3>
            <p className="text-violet-400 font-medium text-base sm:text-lg mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-violet-400" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-violet-950/60 text-violet-200 border border-violet-700/40"
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
              <p className="mt-3 text-xs text-violet-300 italic bg-violet-950/40 p-3 rounded-xl border border-violet-800/30">
                💡 Note: {project.note}
              </p>
            )}
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-violet-400" />
              Key Capabilities & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-dark-850/60 border border-violet-900/20"
                >
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-200 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-violet-900/30 bg-dark-950/90">
          <span className="text-xs text-gray-400">
            Sudhanshu Singh • {project.year}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-500 transition-all shadow-purple-glow-sm"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
