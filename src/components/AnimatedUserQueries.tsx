
import { useState, useEffect } from 'react';

const userQueries = [
  "I am looking for someone who wants to work on an AI start-up",
  "Full stack developer near me",
  "CS student working on a robotics startup",
  "People working at MNCs in Mumbai",
  "Top VCs to fund biotech startups",
  "Data science candidates with 2 years of experience in Mumbai",
  "People doing research on LLM",
  "Marketing experts in the creator economy",
  "Freelance AI engineers available this month",
  "Product designers from Stanford",
  "B2B founders with FinTech experience"
];

const AnimatedUserQueries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % userQueries.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-16 overflow-hidden">
      <div className={`absolute inset-0 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="text-center">
          <span className="text-clura-400/90 text-lg font-medium">
            "{userQueries[currentIndex]}"
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedUserQueries;
