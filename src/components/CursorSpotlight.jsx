import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsMobile(checkMobile);
    if (checkMobile) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
      animate={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), rgba(124, 58, 237, 0.05) 40%, transparent 80%)`,
      }}
      transition={{ type: 'spring', stiffness: 250, damping: 25 }}
    />
  );
};

export default CursorSpotlight;
