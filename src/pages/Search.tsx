
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ArrowRight, Filter, User, MapPin, Building, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchParams.get('q')) {
      setIsLoading(true);
      // Simulate search delay
      setTimeout(() => setIsLoading(false), 1500);
    }
  }, [searchParams]);

  const mockResults = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Senior AI Engineer",
      company: "Meta",
      location: "San Francisco, CA",
      experience: "5+ years",
      avatar: "SC",
      skills: ["Machine Learning", "Python", "TensorFlow"],
      summary: "Experienced AI engineer with expertise in deep learning and neural networks."
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Full Stack Developer",
      company: "Google",
      location: "Mountain View, CA",
      experience: "3+ years",
      avatar: "MR",
      skills: ["React", "Node.js", "TypeScript"],
      summary: "Full-stack developer passionate about building scalable applications."
    },
    {
      id: 3,
      name: "Emily Watson",
      title: "Product Designer",
      company: "Apple",
      location: "Cupertino, CA",
      experience: "4+ years",
      avatar: "EW",
      skills: ["Figma", "User Research", "Prototyping"],
      summary: "Creative product designer focused on user-centered design solutions."
    }
  ];

  const handleSearch = () => {
    if (query.trim()) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 1500);
    }
  };

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <div className="relative z-10 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="glass-card p-6 bg-slate-900/60 border border-clura-500/30 shadow-2xl shadow-clura-500/20">
              <div className="flex items-center space-x-4">
                <Search className="w-5 h-5 text-clura-400 flex-shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Describe who you're looking for..."
                  className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-lg"
                />
                <button 
                  onClick={handleSearch}
                  className="neuro-button px-4 py-2 text-sm font-medium text-foreground hover:text-clura-400 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6">
            <div className="flex items-center space-x-4 text-sm">
              <Filter className="w-4 h-4 text-clura-400" />
              <button className="px-3 py-1 bg-clura-500/20 text-clura-400 rounded-full border border-clura-500/30">
                All Results
              </button>
              <button className="px-3 py-1 text-muted-foreground hover:text-foreground transition-colors">
                Engineers
              </button>
              <button className="px-3 py-1 text-muted-foreground hover:text-foreground transition-colors">
                Designers
              </button>
              <button className="px-3 py-1 text-muted-foreground hover:text-foreground transition-colors">
                Managers
              </button>
            </div>
          </div>

          {/* Results */}
          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card p-6 animate-pulse">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-clura-500/20 rounded-full"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-clura-500/20 rounded w-1/4"></div>
                      <div className="h-3 bg-clura-500/10 rounded w-1/3"></div>
                      <div className="h-3 bg-clura-500/10 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-muted-foreground text-sm mb-4">
                Found {mockResults.length} results for "{query}"
              </div>
              {mockResults.map((result, index) => (
                <div 
                  key={result.id} 
                  className="glass-card p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fade-in 0.6s ease-out forwards'
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-clura-400 to-clura-600 rounded-full flex items-center justify-center text-white font-bold">
                      {result.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-clura-400 transition-colors">
                            {result.name}
                          </h3>
                          <p className="text-muted-foreground">{result.title}</p>
                        </div>
                        <button className="neuro-button px-4 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          Contact
                        </button>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <Building className="w-3 h-3" />
                          <span>{result.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{result.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{result.experience}</span>
                        </div>
                      </div>

                      <p className="text-foreground mb-3">{result.summary}</p>

                      <div className="flex flex-wrap gap-2">
                        {result.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-2 py-1 bg-clura-500/20 text-clura-400 rounded text-xs border border-clura-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
