import React from 'react';
import { motion } from 'framer-motion';

const Developer3DScene = () => {
  return (
    <div className="relative w-full max-w-xl flex items-center justify-center py-2 min-h-[480px] lg:min-h-[540px]">
      
      {/* Volumetric Saturated Neon Ambient Glow Backdrop Layer (Pulsing Glow) */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-violet-600/30 to-fuchsia-500/20 rounded-full blur-[150px] pointer-events-none"
      />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Realistic Sudhanshu Half-Body Developer Portrait Cutout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full flex items-center justify-center z-20"
      >
        <img
          src="/assets/real_sudhanshu_cutout.png"
          alt="Sudhanshu Singh Full Stack Developer Portrait"
          className="w-full max-w-md sm:max-w-lg h-auto object-contain object-center filter drop-shadow-[0_15px_50px_rgba(168,85,247,0.5)] transform hover:scale-102 transition-transform duration-500"
        />
      </motion.div>

    </div>
  );
};

export default Developer3DScene;
