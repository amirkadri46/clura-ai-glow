
import { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedUserQueries from './AnimatedUserQueries';

const HeroSection = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (isLoggedIn) {
        navigate(`/search?q=${encodeURIComponent(query)}`);
      } else {
        navigate('/login');
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-20">
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-clura-500/10 border border-clura-500/20 rounded-full text-clura-400 text-sm font-medium">
                NEXT GENERATION OF PEOPLE DISCOVERY
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground mb-12">
              <span className="bg-gradient-to-r from-white from-20% via-blue-100 via-50% to-slate-400 to-80% bg-clip-text text-transparent">
                Find Anyone with{' '}
              </span>
              <span className="bg-gradient-to-r from-clura-300 from-10% via-blue-400 via-40% to-purple-500 to-90% bg-clip-text text-transparent font-bold">
                AI-Powered
              </span>{' '}
              <span className="bg-gradient-to-r from-white from-20% via-blue-100 via-50% to-slate-400 to-80% bg-clip-text text-transparent">
                Search
              </span>
            </h1>

            {/* Search Interface */}
            <div className="relative max-w-4xl mx-auto mb-8">
              <div className="glass-card p-8 bg-slate-900/70 border-2 border-clura-500/40 shadow-2xl shadow-clura-500/30 rounded-2xl backdrop-blur-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-clura-500/10 via-transparent to-clura-600/10 opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4">
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
                      className="neuro-button px-6 py-3 text-base font-medium text-foreground hover:text-clura-400 transition-all duration-300 group hover:scale-105"
                    >
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Queries Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-8">
            <h2 className="text-4xl font-light tracking-tight text-foreground mb-8">Realistic User Queries</h2>
            <AnimatedUserQueries />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
