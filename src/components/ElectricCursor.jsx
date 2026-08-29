import React, { useEffect, useRef } from 'react';

const ElectricCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    const maxParticles = 40;
    let lastMousePos = { x: -100, y: -100 };

    const colors = ['#FF7A00', '#FF9D2E', '#FFB703', '#FF5500', '#FFE600'];

    // Emit electric sparks on mouse move
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Distance traveled since last spark
      const dist = Math.hypot(mouseX - lastMousePos.x, mouseY - lastMousePos.y);

      if (dist > 6) {
        lastMousePos = { x: mouseX, y: mouseY };

        // Create 2-3 tiny electric sparks
        for (let i = 0; i < 2; i++) {
          if (particles.length < maxParticles) {
            particles.push({
              x: mouseX + (Math.random() - 0.5) * 8,
              y: mouseY + (Math.random() - 0.5) * 8,
              vx: (Math.random() - 0.5) * 2.5,
              vy: (Math.random() - 0.5) * 2.5,
              size: Math.random() * 2 + 1,
              color: colors[Math.floor(Math.random() * colors.length)],
              alpha: 1,
              decay: Math.random() * 0.04 + 0.03,
              sparkLength: Math.random() * 6 + 2,
            });
          }
        }
      }
    };

    // Click burst electric spark effect
    const handleClick = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      for (let i = 0; i < 14; i++) {
        const angle = (Math.PI * 2 * i) / 14 + (Math.random() - 0.5) * 0.5;
        const speed = Math.random() * 4 + 2;
        particles.push({
          x: mouseX,
          y: mouseY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2.5 + 1.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          decay: Math.random() * 0.05 + 0.04,
          sparkLength: Math.random() * 10 + 4,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.strokeStyle = p.color;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.lineWidth = p.size;

        // Draw small electric spark line
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * p.sparkLength * 0.3, p.y - p.vy * p.sparkLength * 0.3);
        ctx.stroke();

        // Small glowing head
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 hidden md:block"
    />
  );
};

export default ElectricCursor;
