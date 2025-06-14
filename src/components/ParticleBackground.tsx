
import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Always size to viewport
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Generate visible, extremely tiny, subtle particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }> = [];
    const numParticles = 80; // keep tiny

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        size: Math.random() * 0.7 + 0.3,        // slightly larger minimum for visibility
        alpha: Math.random() * 0.18 + 0.09,     // slightly higher min opacity
      });
    }

    const animate = () => {
      // Draw transparent, glowy background for visibility against black/transparent
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Optionally a faint blue haze
      ctx.save();
      ctx.globalAlpha = 0.20;
      const gradient = ctx.createRadialGradient(
        canvas.width/2, canvas.height/2, canvas.width*0.15,
        canvas.width/2, canvas.height/2, canvas.width*0.8
      );
      gradient.addColorStop(0, "#7DD3FC22");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // bounce at edges softly
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 207, 240, ${particle.alpha})`; // soft blue
        ctx.shadowColor = "rgba(139, 207, 240, .33)";
        ctx.shadowBlur = 5; // subtle glow
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', setCanvasSize);
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        background: "transparent",
        display: "block",
        position: "fixed",
        top: 0, left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        // in case of stacking issues
        pointerEvents: "none"
      }}
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
