import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BootUpSequence = () => {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBooted(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!booted && (
        <motion.div
          key="bootup"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#020204] flex flex-col items-center justify-center pointer-events-none overflow-hidden"
        >
          {/* Sci-Fi Grid Line Sweep */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(rgba(168,85,247,0.3)_1px,transparent_1px)] [background-size:32px_32px]" />

          {/* System Boot-Up Text & Status */}
          <div className="relative flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-purple-500/60 border-t-fuchsia-400 animate-spin shadow-purple-glow-sm flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-purple-400 animate-pulse" />
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-purple-300 font-bold uppercase tracking-[0.3em] drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
              <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-ping" />
              <span>SYSTEM ONLINE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootUpSequence;
