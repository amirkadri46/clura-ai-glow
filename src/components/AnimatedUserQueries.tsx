
import { useState, useEffect } from 'react';

const userQueries = [
  "CS student working on a robotics startup",
  "Marketing manager at a SaaS company", 
  "Freelance developer seeking remote projects",
  "Data scientist in a healthcare firm",
  "Product designer at a fintech startup",
  "Full stack developer near me",
  "People working at MNCs in Mumbai",
  "Top VCs to fund biotech startups",
  "Data science candidates with 2 years of experience",
  "People doing research on LLM",
  "Marketing experts in the creator economy",
  "Freelance AI engineers available this month",
  "B2B founders with FinTech experience"
];

const AnimatedUserQueries = () => {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex animate-slide space-x-8">
        {/* Duplicate the queries to create seamless loop */}
        {[...userQueries, ...userQueries].map((query, index) => (
          <div
            key={index}
            className="flex-shrink-0 whitespace-nowrap"
          >
            <span className="text-lg bg-gradient-to-r from-[#4B6CB7] to-[#89CFF0] bg-clip-text text-transparent font-medium">
              "{query}"
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedUserQueries;
