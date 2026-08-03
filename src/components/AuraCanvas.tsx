import React, { useEffect, useRef } from 'react';

interface AuraCanvasProps {
  primaryColor?: string;
  secondaryColor?: string;
  height?: string;
  className?: string;
}

export const AuraCanvas: React.FC<AuraCanvasProps> = ({
  primaryColor = '#8B5CF6', // Indigo / Violet
  secondaryColor = '#F59E0B', // Gold / Amber
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    resize();
    window.addEventListener('resize', resize);

    // Particles array
    const particles = Array.from({ length: 24 }).map(() => ({
      x: Math.random() * (canvas.width || 800),
      y: Math.random() * (canvas.height || 600),
      radius: Math.random() * 2.5 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      const centerX = w / 2;
      const centerY = h / 2;

      // Draw primary glowing energy blob
      const gradient1 = ctx.createRadialGradient(
        centerX + Math.sin(time) * 60,
        centerY + Math.cos(time * 0.8) * 40,
        10,
        centerX,
        centerY,
        Math.max(w, h) * 0.55
      );
      gradient1.addColorStop(0, primaryColor + '66'); // 40% opacity
      gradient1.addColorStop(0.5, secondaryColor + '22'); // 13% opacity
      gradient1.addColorStop(1, 'rgba(15, 23, 42, 0)');

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, w, h);

      // Draw secondary orbiting aura orb
      const gradient2 = ctx.createRadialGradient(
        centerX + Math.cos(time * 0.6) * 120,
        centerY + Math.sin(time * 0.7) * 90,
        20,
        centerX + Math.cos(time * 0.6) * 120,
        centerY + Math.sin(time * 0.7) * 90,
        Math.max(w, h) * 0.4
      );
      gradient2.addColorStop(0, '#10B98155'); // Emerald tint
      gradient2.addColorStop(1, 'rgba(15, 23, 42, 0)');

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, w, h);

      // Draw floating spiritual particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * (0.5 + Math.sin(time * 2 + p.x) * 0.5)})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [primaryColor, secondaryColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
};
