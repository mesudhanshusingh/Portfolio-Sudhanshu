import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hoverEffect = true, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileTap={onClick ? { scale: 0.98 } : {}}
      className={`relative rounded-2xl bg-[#0e0e16]/95 backdrop-blur-xl border border-purple-500/30 shadow-glass transition-all duration-300 overflow-hidden transform-gpu will-change-transform group ${
        hoverEffect ? 'hover:border-purple-500/80 hover:shadow-purple-glow hover:-translate-y-1 hover:scale-[1.015]' : ''
      } ${className}`}
    >
      {/* Sci-Fi HUD Holographic Corner Brackets */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-purple-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-purple-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-purple-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-purple-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Luminous Sci-Fi Top Scanning Beam */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-400 to-transparent pointer-events-none opacity-80" />

      {/* Shimmer Light-Sweep Beam on Hover */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

      {children}
    </motion.div>
  );
};

export default GlassCard;
