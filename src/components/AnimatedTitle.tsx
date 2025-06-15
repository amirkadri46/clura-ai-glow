
import { useState, useEffect } from 'react';

const AnimatedTitle = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const animatedWords = ['Hiring', 'Sales', 'Student', 'Researchers', 'Founders', 'Networking'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold text-black mb-2">
        The People Search Engine for
      </h1>
      <div className="text-5xl font-bold text-black h-16 flex items-center justify-center">
        <span
          key={currentWordIndex}
          className="animate-fade-in"
          style={{
            animation: 'fadeInOut 3s infinite'
          }}
        >
          {animatedWords[currentWordIndex]}
        </span>
      </div>
    </div>
  );
};

export default AnimatedTitle;
