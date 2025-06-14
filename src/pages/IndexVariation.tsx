
import { useEffect, useRef } from 'react';
import { Search, Users, MapPin, Building } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SearchCardVariation from '@/components/SearchCardVariation';
import SpaceBackgroundVariation from '@/components/SpaceBackgroundVariation';

const IndexVariation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

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

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Advanced People Search",
      description: "Find professionals using natural language queries with AI precision"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Building Tools",
      description: "Build your perfect team with intelligent matching algorithms"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location-Based Discovery",
      description: "Discover talent in specific cities, regions, or remote locations"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Company Intelligence",
      description: "Access detailed company insights and employee networks"
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      role: "Tech Recruiter",
      avatar: "DK",
      quote: "This platform transformed how we discover and connect with top talent.",
      result: "150% increase in qualified candidates"
    },
    {
      name: "Lisa Parker",
      role: "VP of Engineering",
      avatar: "LP",
      quote: "The AI-powered search capabilities are simply unmatched in the industry.",
      result: "Reduced hiring time by 60%"
    },
    {
      name: "Alex Chen",
      role: "Startup CEO",
      avatar: "AC",
      quote: "Found our entire founding team through this incredible platform.",
      result: "Built team of 8 in 3 weeks"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <SpaceBackgroundVariation />
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="animate-fade-in">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-purple-500/10 border border-purple-400/20 rounded-full text-purple-300 text-sm font-medium">
                REVOLUTIONARY TALENT DISCOVERY PLATFORM
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white mb-8">
              Discover Talent with{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Next-Gen AI
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Experience the future of people discovery with our advanced AI platform.
              Connect with the right talent, at the right time, with unprecedented precision.
            </p>

            <SearchCardVariation />

            <button className="neuro-button-variation px-10 py-5 text-lg font-medium text-white hover:text-purple-300 animate-glow mb-20">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="scroll-reveal text-center mb-20">
            <h2 className="text-5xl font-light tracking-tight text-white mb-6">Powerful Capabilities</h2>
            <p className="text-xl text-slate-300">Advanced tools for modern talent discovery</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="scroll-reveal glass-card-variation p-10 feature-card-variation group hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl flex items-center justify-center mb-8 text-purple-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-6">{feature.title}</h3>
                <p className="text-slate-300 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/10 to-indigo-900/20" />
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal">
            <h2 className="text-6xl font-light tracking-tight text-white leading-tight">
              "Revolutionizing how the world{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                discovers and connects
              </span>{' '}
              with exceptional talent."
            </h2>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-20">
            <h2 className="text-5xl font-light tracking-tight text-white mb-6">Success Stories</h2>
            <p className="text-xl text-slate-300">Trusted by industry leaders worldwide</p>
          </div>
          <div className="scroll-reveal overflow-hidden">
            <div className="flex space-x-8 animate-slide">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="glass-card-variation p-10 min-w-[450px] group hover:bg-white/5 transition-all duration-300 relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  <div className="relative">
                    <div className="flex items-center mb-8">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold mr-5 text-lg">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                        <p className="text-slate-300">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-white mb-6 italic text-lg">"{testimonial.quote}"</p>
                    <p className="text-purple-300 font-medium">{testimonial.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndexVariation;
