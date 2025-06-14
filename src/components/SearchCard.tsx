
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
    <div className="relative max-w-4xl mx-auto mb-12">
      {/* Smaller search card */}
      <div className="glass-card p-8 bg-slate-900/70 border-2 border-clura-500/40 shadow-2xl shadow-clura-500/30 rounded-2xl backdrop-blur-lg relative overflow-hidden">
        {/* Ambient glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-clura-500/10 via-transparent to-clura-600/10 opacity-50"></div>
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-clura-500/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-clura-600/20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-6">
            <Search className="w-6 h-6 text-clura-400 flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Describe who you're looking for..."
              className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-xl py-3 font-light"
            />
            <button 
              onClick={handleSearch}
              className="neuro-button px-6 py-3 text-base font-medium text-foreground hover:text-clura-400 transition-all duration-300 group"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="mt-6">
            <AnimatedSearchSuggestions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
