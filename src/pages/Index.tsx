
import { useEffect, useRef, useState } from 'react';
import { Search, Brain, Rocket, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SearchCard from '@/components/SearchCard';
import AnimatedUserQueries from '@/components/AnimatedUserQueries';
import SpaceBackground from '@/components/SpaceBackground';

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Page enter animation
    document.body.classList.add('page-enter');
    setTimeout(() => {
      document.body.classList.add('page-enter-active');
    }, 100);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      // Check if user is logged in (simulate with localStorage for now)
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

  const handleStartSearching = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/search');
    } else {
      navigate('/login');
    }
  };

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Search by Natural Language",
      description: "Search using everyday language, no complex syntax needed"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Instant Filtering with AI",
      description: "Our AI understands context and finds the perfect matches"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "200M+ Enriched Profiles",
      description: "Access to the largest enriched professional database"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Export or Contact Top Matches",
      description: "Export or contact top matches with one click"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Enhanced moving background gradients */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-0 left-0 w-[200%] h-[200%] animate-pulse">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-blue-500/30 via-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{
            animation: 'float 40s ease-in-out infinite'
          }}></div>
        </div>
        <div className="absolute top-0 right-0 w-[200%] h-[200%]">
          <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-purple-500/25 via-purple-400/15 to-transparent rounded-full blur-3xl" style={{
            animation: 'float 50s ease-in-out infinite reverse'
          }}></div>
        </div>
        <div className="absolute bottom-0 left-0 w-[200%] h-[200%]">
          <div className="absolute bottom-1/4 left-1/2 w-[450px] h-[450px] bg-gradient-radial from-indigo-500/20 via-indigo-400/10 to-transparent rounded-full blur-3xl" style={{
            animation: 'float 60s ease-in-out infinite'
          }}></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-20">
            <div className="animate-fade-in">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-clura-500/10 border border-clura-500/20 rounded-full text-clura-400 text-sm font-medium">
                  NEXT GENERATION OF PEOPLE DISCOVERY
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground mb-12 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-pulse">
                Find Anyone with{' '}
                <span className="bg-gradient-to-r from-clura-400 to-clura-600 bg-clip-text text-transparent font-bold">
                  AI-Powered
                </span>{' '}
                Search
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

              <button 
                onClick={handleStartSearching}
                className="neuro-button px-8 py-4 text-lg font-medium text-foreground hover:text-clura-400 animate-glow mb-16 transform hover:scale-105 transition-all duration-300"
              >
                Start Searching People
              </button>
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

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-light tracking-tight text-foreground mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Powerful Features
              </h2>
              <p className="text-xl text-muted-foreground">Everything you need to find the right people</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="scroll-reveal glass-card p-8 feature-card group hover:scale-105 hover:shadow-2xl hover:shadow-clura-500/30 hover:border-clura-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-clura-400/20 to-clura-600/20 rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 relative">
          <div className="absolute inset-0 neural-bg opacity-30" />
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="scroll-reveal">
              <h2 className="text-5xl font-light tracking-tight text-foreground leading-tight">
                "To make people discovery{' '}
                <span className="bg-gradient-to-r from-clura-400 to-clura-600 bg-clip-text text-transparent font-bold">
                  effortless, intelligent, and accessible
                </span>{' '}
                for everyone."
              </h2>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-light tracking-tight text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">Everything you need to know</p>
            </div>
            <div className="space-y-4">
              {[
                { q: "How accurate is the AI search?", a: "Our AI has a 95% accuracy rate in matching queries to relevant profiles." },
                { q: "What data sources do you use?", a: "We aggregate data from public professional networks, company websites, and verified databases." },
                { q: "Is my search data private?", a: "Yes, all searches are encrypted and we never share your query data with third parties." },
                { q: "Can I export search results?", a: "Pro and Enterprise users can export results in CSV, Excel, or integrate via API." },
                { q: "Do you offer team accounts?", a: "Yes, Enterprise plans include team management and collaboration features." },
                { q: "What's the difference between plans?", a: "Plans differ in search volume, advanced features, and support levels." }
              ].map((faq, index) => (
                <div key={index} className="scroll-reveal glass-card p-6">
                  <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) translateX(0px) scale(1);
            }
            33% {
              transform: translateY(-30px) translateX(20px) scale(1.1);
            }
            66% {
              transform: translateY(20px) translateX(-15px) scale(0.9);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Index;
