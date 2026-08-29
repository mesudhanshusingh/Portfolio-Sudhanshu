import React, { useEffect, useRef } from 'react';

const EnergyBeams = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const beamCount = 8;
    const beams = [];

    for (let i = 0; i < beamCount; i++) {
      beams.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 200 + 100,
        speed: Math.random() * 0.8 + 0.3,
        opacity: Math.random() * 0.3 + 0.15,
        width: Math.random() * 1.5 + 0.5,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < beams.length; i++) {
        const b = beams[i];
        b.y -= b.speed;

        if (b.y + b.length < 0) {
          b.y = height + 50;
          b.x = Math.random() * width;
        }

        const gradient = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.length);
        gradient.addColorStop(0, `rgba(217, 70, 239, ${b.opacity})`);
        gradient.addColorStop(0.5, `rgba(168, 85, 247, ${b.opacity * 0.7})`);
        gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');

        ctx.beginPath();
        ctx.moveTo(b.x, b.y);
        ctx.lineTo(b.x, b.y + b.length);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = b.width;
        ctx.shadowColor = 'rgba(168, 85, 247, 0.5)';
        ctx.shadowBlur = 10;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full opacity-40"
    />
  );
};

export default EnergyBeams;
