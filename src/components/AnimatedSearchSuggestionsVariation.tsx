
import { useState, useEffect } from 'react';

const suggestions = [
  "Try: 'Former Google engineers now at startups'",
  "Try: 'Marketing directors with SaaS experience'",
  "Try: 'Freelance designers in European time zones'",
  "Try: 'CTOs who previously founded companies'",
  "Try: 'Machine learning experts in healthcare'",
  "Try: 'Remote-first product managers'",
  "Try: 'Full-stack developers with blockchain skills'",
  "Try: 'Sales leaders from unicorn companies'"
];

const AnimatedSearchSuggestionsVariation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % suggestions.length);
        setIsVisible(true);
      }, 400);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-10 overflow-hidden">
      <div className={`absolute inset-0 transition-all duration-400 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}>
        <div className="text-center">
          <span className="text-purple-300/90 text-sm font-medium bg-purple-500/10 px-4 py-2 rounded-full border border-purple-400/20">
            {suggestions[currentIndex]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSearchSuggestionsVariation;
