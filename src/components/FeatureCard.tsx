
import { useEffect, useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="relative h-full">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300 blur"></div>
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-8 h-full hover:bg-white/10 transition-all duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-white/70 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
