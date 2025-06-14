
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
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-20">
          <div>
            {/* Update Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                🚀 Next Generation AI Search is now live
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white mb-8 leading-tight">
              AI-Powered{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 font-normal">
                People Discovery
              </span>
              <span className="block text-5xl md:text-7xl mt-4 text-gray-300">
                Integration Suite
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Harnessing the power of artificial intelligence to revolutionize 
              <br />
              people discovery and enhance human connections.
            </p>

            {/* CTA Button */}
            <div className="mb-16">
              <button 
                onClick={handleSearch}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/25"
              >
                Start Searching People
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            {/* Search Interface - Simplified */}
            <div className="relative max-w-4xl mx-auto mb-8">
              <div className="glass-card p-8 bg-slate-900/40 backdrop-blur-lg border border-slate-700/50 rounded-2xl shadow-2xl">
                <div className="flex items-center space-x-4">
                  <Search className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Describe who you're looking for..."
                    className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-xl py-3 font-light"
                  />
                  <button 
                    onClick={handleSearch}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 group"
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
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
            <h2 className="text-4xl font-light tracking-tight text-white mb-8">Realistic User Queries</h2>
            <AnimatedUserQueries />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
