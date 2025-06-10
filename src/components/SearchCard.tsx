
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
    <div className="relative max-w-5xl mx-auto mb-8">
      <div className="glass-card p-12 bg-slate-900/60 border border-clura-500/30 shadow-2xl shadow-clura-500/20">
        <div className="flex items-center space-x-4 mb-8">
          <Search className="w-6 h-6 text-clura-400 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Describe who you're looking for..."
            className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-xl py-2"
          />
          <button 
            onClick={handleSearch}
            className="neuro-button px-6 py-3 text-sm font-medium text-foreground hover:text-clura-400 transition-colors group"
          >
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="mt-6">
          <AnimatedSearchSuggestions />
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
