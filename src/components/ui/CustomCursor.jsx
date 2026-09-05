import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable on mobile/touch devices or reduced motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reducedMotion) return;

    let animFrameId;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      // Detect cursor state from hovered element
      const target = e.target.closest('a, button, [data-cursor]');
      if (!target) {
        setCursorState('default');
        return;
      }

      const cursorType = target.getAttribute('data-cursor');
      if (cursorType) {
        setCursorState(cursorType);
      } else if (target.closest('#projects .group')) {
        setCursorState('project');
      } else if (target.tagName.toLowerCase() === 'button' || target.getAttribute('role') === 'button') {
        setCursorState('button');
      } else {
        setCursorState('link');
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Primary Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-purple-glow-sm"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: cursorState === 'project' ? 0 : cursorState === 'button' ? 1.4 : 1,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 450, mass: 0.2 }}
      />

      {/* Dynamic Outer Ring / Badge */}
      <motion.div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full border transition-colors duration-200 ${
          cursorState === 'project'
            ? 'bg-purple-600/90 border-purple-400 text-white font-black text-[10px] tracking-widest uppercase shadow-purple-glow px-3 py-1.5 rounded-2xl border-2'
            : cursorState === 'button'
            ? 'border-purple-500 bg-purple-500/10 shadow-purple-glow-sm'
            : cursorState === 'link'
            ? 'border-purple-400 bg-purple-500/15'
            : 'border-purple-500/40 bg-transparent'
        }`}
        animate={{
          x: cursorState === 'project' ? position.x - 30 : position.x - 20,
          y: cursorState === 'project' ? position.y - 18 : position.y - 20,
          width: cursorState === 'project' ? 'auto' : cursorState === 'button' ? 52 : cursorState === 'link' ? 44 : 40,
          height: cursorState === 'project' ? 'auto' : cursorState === 'button' ? 52 : cursorState === 'link' ? 44 : 40,
          scale: cursorState === 'project' ? 1 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.3 }}
      >
        {cursorState === 'project' && <span>VIEW</span>}
      </motion.div>
    </div>
  );
};

export default CustomCursor;
