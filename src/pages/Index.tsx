
import { useEffect, useRef } from 'react';
import { Search, Brain, Rocket } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SearchCard from '@/components/SearchCard';
import AnimatedUserQueries from '@/components/AnimatedUserQueries';
import SpaceBackground from '@/components/SpaceBackground';

const Index = () => {
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
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <SpaceBackground />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-clura-500/10 border border-clura-500/20 rounded-full text-clura-400 text-sm font-medium">
                NEXT GENERATION OF PEOPLE DISCOVERY
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground mb-12">
              Find Anyone with{' '}
              <span className="bg-gradient-to-r from-clura-400 to-clura-600 bg-clip-text text-transparent">
                AI-Powered
              </span>{' '}
              Search
            </h1>

            <SearchCard />

            <button className="neuro-button px-8 py-4 text-lg font-medium text-foreground hover:text-clura-400 animate-glow mb-16">
              Get Started Free
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
            <h2 className="text-4xl font-light tracking-tight text-foreground mb-4">Powerful Features</h2>
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
              <span className="bg-gradient-to-r from-clura-400 to-clura-600 bg-clip-text text-transparent">
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
  );
};

export default Index;
