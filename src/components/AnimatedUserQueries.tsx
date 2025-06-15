
import { useState, useEffect } from 'react';

const userQueries = [
  {
    id: 1,
    query: "CS student working on a robotics startup",
    description: "Find talented computer science students passionate about robotics and innovation"
  },
  {
    id: 2,
    query: "Marketing manager at a SaaS company",
    description: "Connect with experienced marketing professionals in the software industry"
  },
  {
    id: 3,
    query: "Freelance developer seeking remote projects",
    description: "Discover skilled developers available for remote collaboration"
  },
  {
    id: 4,
    query: "Data scientist in a healthcare firm",
    description: "Locate data science experts with healthcare industry experience"
  },
  {
    id: 5,
    query: "Product designer at a fintech startup",
    description: "Find creative designers with fintech product development background"
  },
  {
    id: 6,
    query: "Full stack developer near me",
    description: "Search for versatile developers in your local area"
  }
];

const AnimatedUserQueries = () => {
  return (
    <div className="relative py-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {userQueries.map((item, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={item.id}
              className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'} transition-all duration-500 hover:scale-105`}
            >
              {/* Rectangle Box */}
              <div className="flex-shrink-0 w-80 h-32 bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-400/30 rounded-full"></div>
                </div>
              </div>
              
              {/* Text Content */}
              <div className={`flex-1 ${isEven ? 'text-left' : 'text-right'}`}>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-[#4B6CB7] to-[#89CFF0] bg-clip-text text-transparent mb-2">
                  "{item.query}"
                </h3>
                <p className="text-gray-400 text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedUserQueries;
