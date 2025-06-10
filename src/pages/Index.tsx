
import { useEffect, useRef } from 'react';
import { Search, Brain, Rocket } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SearchCard from '@/components/SearchCard';
import AnimatedUserQueries from '@/components/AnimatedUserQueries';
import NeuralBackground from '@/components/NeuralBackground';

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

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Talent Acquisition Lead",
      avatar: "SC",
      quote: "Clura.ai revolutionized our hiring process. The AI-powered search is incredibly accurate.",
      result: "Found 12 perfect candidates in 30 minutes"
    },
    {
      name: "Marcus Rodriguez",
      role: "Startup Founder",
      avatar: "MR",
      quote: "As a non-technical founder, Clura helped me find amazing engineers effortlessly.",
      result: "Hired 3 senior developers in 2 weeks"
    },
    {
      name: "Emily Watson",
      role: "HR Director",
      avatar: "EW",
      quote: "The natural language search is a game-changer. No more complex Boolean queries.",
      result: "Reduced hiring time by 70%"
    }
  ];

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

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: ["5 searches per month", "Basic filters", "Email support"],
      recommended: false
    },
    {
      name: "Pro",
      price: "$49",
      description: "For growing teams",
      features: ["Unlimited searches", "Advanced AI filters", "Priority support", "Export features"],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: ["Custom integrations", "Dedicated support", "Advanced analytics", "Team management"],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <NeuralBackground />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-clura-500/10 border border-clura-500/20 rounded-full text-clura-400 text-sm font-medium">
                NEXT GENERATION OF PEOPLE DISCOVERY
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground mb-6">
              Find Anyone with{' '}
              <span className="bg-gradient-to-r from-clura-400 to-clura-600 bg-clip-text text-transparent">
                AI-Powered
              </span>{' '}
              Search
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Clura.ai combines artificial intelligence with cutting-edge search
              strategies to help you discover the perfect people with precision and ease.
            </p>

            <SearchCard />

            <button className="neuro-button px-8 py-4 text-lg font-medium text-foreground hover:text-clura-400 animate-glow mb-16">
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* User Queries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-12">
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

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight text-foreground mb-4">Simple Pricing</h2>
            <p className="text-xl text-muted-foreground">Choose the plan that works for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`scroll-reveal glass-card p-8 relative transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-clura-500/30 group ${plan.recommended ? 'ring-2 ring-clura-400' : ''}`}>
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-clura-400 to-clura-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Recommended
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-clura-400/10 via-transparent to-clura-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{plan.name}</h3>
                    <div className="text-4xl font-light text-foreground mb-2">
                      {plan.price}<span className="text-lg text-muted-foreground">/month</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-clura-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full neuro-button py-3 text-foreground hover:text-clura-400 transition-colors ${plan.name === 'Free' ? 'bg-slate-800/50' : ''}`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-clura-500/5 via-transparent to-clura-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight text-foreground mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by thousands of professionals</p>
          </div>
          <div className="scroll-reveal overflow-hidden">
            <div className="flex space-x-6 animate-slide">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="glass-card p-8 min-w-[400px] group hover:bg-white/10 transition-all duration-300 relative"
                  style={{
                    animationDelay: `${(index % testimonials.length) * 3}s`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-clura-400/10 via-transparent to-clura-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-clura-400 to-clura-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <p className="text-clura-400 text-sm font-medium">{testimonial.result}</p>
                  </div>
                </div>
              ))}
            </div>
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
