
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon, ArrowRight, Filter, MapPin, Building, Calendar, Phone, Mail, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import SpaceBackground from '@/components/SpaceBackground';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [isLoading, setIsLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState([
    "AI engineers in Silicon Valley",
    "Product managers at startups",
    "Full stack developers near me"
  ]);

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
      summary: "Experienced AI engineer with expertise in deep learning and neural networks.",
      rating: 4.9,
      phone: "+1 (555) 123-4567",
      email: "sarah.chen@meta.com",
      portfolio: "github.com/sarah-chen"
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
      summary: "Full-stack developer passionate about building scalable applications.",
      rating: 4.7,
      phone: "+1 (555) 234-5678",
      email: "marcus.r@google.com",
      portfolio: "marcusdev.com"
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
      summary: "Creative product designer focused on user-centered design solutions.",
      rating: 4.8,
      phone: "+1 (555) 345-6789",
      email: "emily.watson@apple.com",
      portfolio: "emilydesign.portfolio"
    }
  ];

  const handleSearch = () => {
    if (query.trim()) {
      setIsLoading(true);
      if (!searchHistory.includes(query)) {
        setSearchHistory([query, ...searchHistory.slice(0, 4)]);
      }
      setTimeout(() => setIsLoading(false), 1500);
    }
  };

  return (
    <div className="min-h-screen relative">
      <SpaceBackground />
      <Navigation />
      
      <div className="relative z-10 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Card */}
          <div className="mb-8">
            <div className="glass-card p-8 bg-slate-900/70 border border-clura-500/40 shadow-2xl shadow-clura-500/30 rounded-3xl backdrop-blur-lg">
              <div className="flex items-center space-x-4 mb-6">
                <SearchIcon className="w-6 h-6 text-clura-400 flex-shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Describe who you're looking for..."
                  className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-xl py-3"
                />
                <button 
                  onClick={handleSearch}
                  className="neuro-button px-6 py-3 text-sm font-medium text-foreground hover:text-clura-400 transition-all duration-300 group"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Search History */}
              {searchHistory.length > 0 && (
                <div>
                  <h4 className="text-sm text-muted-foreground mb-3">Recent Searches</h4>
                  <div className="flex flex-wrap gap-2">
                    {searchHistory.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => setQuery(search)}
                        className="px-3 py-1 bg-clura-500/20 text-clura-400 rounded-full border border-clura-500/30 text-sm hover:bg-clura-500/30 transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}
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
                <div key={i} className="glass-card p-6 animate-pulse bg-slate-900/50 border border-clura-500/20">
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
            <div className="space-y-6">
              <div className="text-muted-foreground text-sm mb-4">
                Found {mockResults.length} results for "{query}"
              </div>
              {mockResults.map((result, index) => (
                <div 
                  key={result.id} 
                  className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group cursor-pointer bg-slate-900/50 border border-clura-500/20 backdrop-blur-lg"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fade-in 0.6s ease-out forwards'
                  }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-clura-400 to-clura-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {result.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-clura-400 transition-colors">
                            {result.name}
                          </h3>
                          <p className="text-muted-foreground text-lg">{result.title}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-muted-foreground">{result.rating}</span>
                          </div>
                        </div>
                        <button className="neuro-button px-6 py-3 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                          Contact
                        </button>
                      </div>
                      
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <Building className="w-4 h-4" />
                          <span>{result.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{result.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{result.experience}</span>
                        </div>
                      </div>

                      <p className="text-foreground mb-4 leading-relaxed">{result.summary}</p>

                      {/* Contact Details */}
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <Phone className="w-4 h-4" />
                          <span>{result.phone}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Mail className="w-4 h-4" />
                          <span>{result.email}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {result.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-clura-500/20 text-clura-400 rounded-full text-sm border border-clura-500/30"
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
