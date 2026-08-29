import React from 'react';
import { Code2, Cpu, Terminal, Layers, Atom, FileCode2, Database, Github, Server, Layout, Wrench, BarChart3 } from 'lucide-react';

const iconMap = {
  Code2,
  Cpu,
  Terminal,
  Layers,
  Atom,
  FileCode2,
  Database,
  Github,
  Server,
  Layout,
  Wrench,
  BarChart3,
};

const TechBadge = ({ name, iconName, size = 'medium' }) => {
  const IconComponent = iconMap[iconName] || Code2;

  const sizeClasses = {
    small: 'px-2.5 py-1 text-xs gap-1.5',
    medium: 'px-3.5 py-2 text-xs sm:text-sm gap-2',
    large: 'px-4 py-2.5 text-sm gap-2.5',
  };

  return (
    <div
      className={`
        inline-flex items-center rounded-xl font-medium text-gray-200
        bg-dark-900/80 border border-violet-900/40 backdrop-blur-md
        hover:border-violet-500/60 hover:text-white hover:shadow-purple-glow-sm
        transition-all duration-300 transform hover:-translate-y-0.5
        ${sizeClasses[size] || sizeClasses.medium}
      `}
    >
      <IconComponent className="w-4 h-4 text-violet-400 shrink-0" />
      <span>{name}</span>
    </div>
  );
};

export default TechBadge;
