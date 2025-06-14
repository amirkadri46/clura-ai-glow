
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

    // Small, bright, glowy particles for black background, but smaller than previous
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }> = [];
    const numParticles = 120;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        size: Math.random() * 0.6 + 0.34,      // smaller but not invisible (from 1.2+ to 0.34-0.94)
        alpha: Math.random() * 0.45 + 0.33,    // high opacity for visibility on black
      });
    }

    const animate = () => {
      // Fill the background solid black
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Optional: subtle glowy blue central haze over black
      ctx.save();
      ctx.globalAlpha = 0.18;
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
        ctx.fillStyle = `rgba(137, 207, 240, ${particle.alpha})`; // bright blue
        ctx.shadowColor = "rgba(137, 207, 240, 0.9)";
        ctx.shadowBlur = 10; // still glowy, but not huge
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
        background: "#000",   // explicit solid black background for canvas
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

