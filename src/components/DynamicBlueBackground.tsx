
import { useEffect, useRef } from 'react';

const DynamicBlueBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create multiple gradient orbs with white borders
    const orbs = Array.from({ length: 6 }, (_, i) => {
      const orb = document.createElement('div');
      orb.className = 'gradient-orb';
      orb.style.cssText = `
        position: absolute;
        border-radius: 50%;
        opacity: 0.6;
        filter: blur(40px);
        pointer-events: none;
        animation: float-${i} ${15 + i * 3}s ease-in-out infinite;
        animation-delay: ${i * 2}s;
        border: 1px solid #FFFFFF;
      `;
      
      // Different sizes and colors for each orb using #82CAFF variations
      const sizes = [300, 400, 250, 350, 200, 450];
      const colors = [
        'radial-gradient(circle, #82CAFF 0%, #5A9ED4 50%, transparent 100%)',
        'radial-gradient(circle, #6BB6FF 0%, #82CAFF 50%, transparent 100%)',
        'radial-gradient(circle, #4FA8E8 0%, #82CAFF 50%, transparent 100%)',
        'radial-gradient(circle, #82CAFF 0%, #3D8BDB 50%, transparent 100%)',
        'radial-gradient(circle, #5FB2F5 0%, #82CAFF 50%, transparent 100%)',
        'radial-gradient(circle, #82CAFF 0%, #4EA3E0 50%, transparent 100%)'
      ];
      
      orb.style.width = `${sizes[i]}px`;
      orb.style.height = `${sizes[i]}px`;
      orb.style.background = colors[i];
      
      // Random initial positions
      orb.style.left = `${Math.random() * 100}%`;
      orb.style.top = `${Math.random() * 100}%`;
      
      container.appendChild(orb);
      return orb;
    });

    // Add keyframes to document head
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes float-0 {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
        25% { transform: translate(20vw, -15vh) scale(1.1); opacity: 0.6; }
        50% { transform: translate(-10vw, 20vh) scale(0.9); opacity: 0.3; }
        75% { transform: translate(15vw, 10vh) scale(1.05); opacity: 0.5; }
      }
      
      @keyframes float-1 {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
        33% { transform: translate(-25vw, 18vh) scale(1.2); opacity: 0.7; }
        66% { transform: translate(18vw, -12vh) scale(0.8); opacity: 0.4; }
      }
      
      @keyframes float-2 {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
        20% { transform: translate(30vw, 25vh) scale(1.1); opacity: 0.6; }
        40% { transform: translate(-20vw, -18vh) scale(0.9); opacity: 0.4; }
        60% { transform: translate(12vw, 15vh) scale(1.05); opacity: 0.5; }
        80% { transform: translate(-15vw, 8vh) scale(0.95); opacity: 0.3; }
      }
      
      @keyframes float-3 {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
        30% { transform: translate(-18vw, -22vh) scale(1.15); opacity: 0.6; }
        70% { transform: translate(22vw, 16vh) scale(0.85); opacity: 0.3; }
      }
      
      @keyframes float-4 {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
        25% { transform: translate(25vw, -20vh) scale(0.9); opacity: 0.3; }
        50% { transform: translate(-30vw, 10vh) scale(1.2); opacity: 0.7; }
        75% { transform: translate(10vw, 25vh) scale(1.0); opacity: 0.4; }
      }
      
      @keyframes float-5 {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        16% { transform: translate(-12vw, 30vh) scale(1.1); opacity: 0.4; }
        33% { transform: translate(28vw, -8vh) scale(0.9); opacity: 0.7; }
        50% { transform: translate(-25vw, -15vh) scale(1.05); opacity: 0.3; }
        66% { transform: translate(15vw, 22vh) scale(0.95); opacity: 0.5; }
        83% { transform: translate(8vw, -25vh) scale(1.08); opacity: 0.6; }
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      orbs.forEach(orb => orb.remove());
      styleElement.remove();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      <div ref={containerRef} className="absolute inset-0" />
    </div>
  );
};

export default DynamicBlueBackground;
