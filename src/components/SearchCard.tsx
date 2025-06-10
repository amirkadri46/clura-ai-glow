
import { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedSearchSuggestions from './AnimatedSearchSuggestions';

const SearchCard = () => {
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

  return (
    <div className="relative max-w-6xl mx-auto mb-12">
      {/* Large prominent search card */}
      <div className="glass-card p-16 bg-slate-900/70 border-2 border-clura-500/40 shadow-2xl shadow-clura-500/30 rounded-3xl backdrop-blur-lg relative overflow-hidden">
        {/* Ambient glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-clura-500/10 via-transparent to-clura-600/10 opacity-50"></div>
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-clura-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-clura-600/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-6 mb-8">
            <Search className="w-8 h-8 text-clura-400 flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Describe who you're looking for..."
              className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-2xl py-4 font-light"
            />
            <button 
              onClick={handleSearch}
              className="neuro-button px-8 py-4 text-lg font-medium text-foreground hover:text-clura-400 transition-all duration-300 group"
            >
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="mt-8">
            <AnimatedSearchSuggestions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
