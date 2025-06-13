
import { useState } from 'react';
import { Search, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedSearchSuggestionsVariation from './AnimatedSearchSuggestionsVariation';

const SearchCardVariation = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const searchSuggestions = [
    "Senior React developers in London",
    "AI researchers with PhD in Computer Science",
    "Product managers from Fortune 500 companies",
    "UX designers with fintech experience",
    "DevOps engineers skilled in Kubernetes",
    "Data scientists specializing in NLP"
  ];

  return (
    <div className="relative max-w-7xl mx-auto mb-16">
      {/* Outer Large Card */}
      <div className="glass-card-outer p-12 bg-slate-800/40 border-2 border-slate-600/30 shadow-2xl shadow-purple-500/20 rounded-[2rem] backdrop-blur-xl relative overflow-hidden">
        {/* Ambient glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 opacity-60"></div>
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl"></div>
        
        {/* Curved Line Effect for Search Card */}
        <div className="absolute top-8 left-8 right-8 h-px">
          <div className="relative w-full">
            <svg
              className="absolute inset-0 w-full h-16 -top-8"
              viewBox="0 0 600 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 32C150 10, 300 10, 600 32"
                stroke="url(#searchGradient)"
                strokeWidth="1.5"
                fill="none"
                className="animate-pulse"
                style={{ animationDuration: '3s' }}
              />
              <defs>
                <linearGradient id="searchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="30%" stopColor="#a855f7" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#ec4899" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#6366f1" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        {/* Inner Contrast Card */}
        <div className="relative z-10 bg-slate-900/80 border border-slate-500/40 rounded-2xl p-10 backdrop-blur-md shadow-inner">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-900/40 rounded-2xl"></div>
          
          <div className="relative z-10">
            {/* Search Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-purple-400 mr-2" />
                <span className="text-purple-300 font-medium">AI-Powered Search</span>
              </div>
              <h3 className="text-2xl font-light text-white mb-2">Find Anyone, Anywhere</h3>
              <p className="text-slate-400">Describe who you're looking for in natural language</p>
            </div>

            {/* Search Input with Enhanced Line Effect */}
            <div className="relative mb-8">
              <div className="flex items-center space-x-6">
                <Search className="w-8 h-8 text-purple-400 flex-shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Search for professionals, skills, companies, or locations..."
                  className="flex-1 bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-400 outline-none text-xl py-5 px-6 rounded-xl font-light focus:border-purple-400/50 focus:bg-slate-800/70 transition-all duration-300 relative"
                />
                <button 
                  onClick={handleSearch}
                  className="neuro-button-variation px-8 py-5 text-lg font-medium text-white hover:text-purple-300 transition-all duration-300 group"
                >
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Bottom accent line for search input */}
              <div className="absolute -bottom-2 left-12 right-12 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
            </div>

            {/* Search Suggestions */}
            <div className="mt-10">
              <div className="text-center mb-6">
                <p className="text-slate-400 text-sm font-medium">Popular Searches</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(suggestion)}
                    className="text-left p-4 bg-slate-800/30 border border-slate-600/30 rounded-xl hover:bg-slate-700/40 hover:border-purple-400/40 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center">
                      <Search className="w-4 h-4 text-slate-500 mr-3 group-hover:text-purple-400 transition-colors" />
                      <span className="text-slate-300 group-hover:text-white transition-colors">{suggestion}</span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-8">
                <AnimatedSearchSuggestionsVariation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCardVariation;
