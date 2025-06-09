
import { useState, useEffect } from 'react';

const suggestions = [
  "Ex-Google backend engineers in Berlin",
  "Freelance UI/UX designers in Lisbon",
  "Y Combinator alumni in San Francisco",
  "Machine learning researchers at Stanford",
  "Former Tesla employees in Austin",
  "Startup founders in London",
  "Data scientists with Python expertise",
  "Product managers from Meta"
];

const AnimatedSearchSuggestions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % suggestions.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-8 overflow-hidden">
      <div className={`absolute inset-0 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <span className="text-clura-400/80 text-sm font-medium">
          Try: "{suggestions[currentIndex]}"
        </span>
      </div>
    </div>
  );
};

export default AnimatedSearchSuggestions;
