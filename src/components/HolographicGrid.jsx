import React from 'react';

const HolographicGrid = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
      {/* Sci-Fi Holographic Grid Pattern */}
      <div 
        className="w-full h-full" 
        style={{
          backgroundImage: `radial-gradient(rgba(168, 85, 247, 0.25) 1px, transparent 1px), linear-gradient(to right, rgba(124, 58, 237, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(124, 58, 237, 0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px, 40px 40px, 40px 40px',
        }}
      />
    </div>
  );
};

export default HolographicGrid;
