
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

    // Generate visible, vibrant, larger particles for greater visibility on all backgrounds
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }> = [];
    const numParticles = 120; // slightly more for good coverage

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.18, // more motion for visibility
        vy: (Math.random() - 0.5) * 0.18,
        size: Math.random() * 1.2 + 0.7,        // much larger minimum for visibility
        alpha: Math.random() * 0.36 + 0.44,     // much higher min/max opacity for brightness
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Faint glowy blue haze background, subtle
      ctx.save();
      ctx.globalAlpha = 0.28;
      const gradient = ctx.createRadialGradient(
        canvas.width/2, canvas.height/2, canvas.width*0.09,
        canvas.width/2, canvas.height/2, canvas.width*0.99
      );
      gradient.addColorStop(0, "#89CFF055");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // bounce softly at edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(137, 207, 240, ${particle.alpha})`; // Vivid blue
        ctx.shadowColor = "rgba(137, 207, 240, 0.98)";
        ctx.shadowBlur = 15; // more glow for visibility
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
        pointerEvents: "none"
      }}
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
