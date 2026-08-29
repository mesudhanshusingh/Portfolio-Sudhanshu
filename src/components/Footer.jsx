import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="relative bg-[#020204] py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4 pt-4 border-t border-violet-900/20 font-mono">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>
          <p className="text-gray-300">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
