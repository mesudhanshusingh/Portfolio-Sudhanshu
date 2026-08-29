import React from 'react';

const SectionHeader = ({ badge, title, subtitle }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4 animate-fadeIn">
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-violet-950/80 text-violet-300 border border-violet-700/60 mb-4 shadow-purple-glow-sm">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
        {title && title.includes(' ') ? (
          <>
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]">
              {title.split(' ').slice(-1)}
            </span>
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
