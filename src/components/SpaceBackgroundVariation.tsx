
import { useEffect, useRef } from 'react';

const SpaceBackgroundVariation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create stars
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
    }> = [];

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 0.6 + 0.1,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
      });
    }

    // Create nebula particles with purple/pink theme
    const nebulaParticles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }> = [];

    const nebulaColors = [
      'rgba(147, 51, 234, ',  // purple-600
      'rgba(168, 85, 247, ',  // purple-500
      'rgba(236, 72, 153, ',  // pink-500
      'rgba(219, 39, 119, ',  // pink-600
      'rgba(99, 102, 241, ',  // indigo-500
    ];

    for (let i = 0; i < 40; i++) {
      nebulaParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 120 + 60,
        alpha: Math.random() * 0.08 + 0.03,
        color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
      });
    }

    let animationFrame = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nebula clouds
      nebulaParticles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size;

        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, particle.color + particle.alpha + ')');
        gradient.addColorStop(1, particle.color + '0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(
          particle.x - particle.size,
          particle.y - particle.size,
          particle.size * 2,
          particle.size * 2
        );
      });

      // Draw twinkling stars
      stars.forEach((star) => {
        star.opacity += Math.sin(animationFrame * star.twinkleSpeed) * 0.1;
        star.opacity = Math.max(0.2, Math.min(1, star.opacity));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Add sparkle effect for larger stars
        if (star.size > 0.4) {
          ctx.beginPath();
          ctx.moveTo(star.x - star.size * 1.2, star.y);
          ctx.lineTo(star.x + star.size * 1.2, star.y);
          ctx.moveTo(star.x, star.y - star.size * 1.2);
          ctx.lineTo(star.x, star.y + star.size * 1.2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * 0.4})`;
          ctx.lineWidth = 0.2;
          ctx.stroke();
        }
      });

      animationFrame++;
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        background: 'linear-gradient(135deg, #0f0f1a 0%, #1a0d2e 20%, #2d1b3d 40%, #1a0f2e 60%, #0f0a1a 80%, #050505 100%)'
      }}
    />
  );
};

export default SpaceBackgroundVariation;
