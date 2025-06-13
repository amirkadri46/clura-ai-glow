
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

    // Create stars only (removed nebula particles)
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

    let animationFrame = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw twinkling stars only
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
