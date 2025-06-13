
import { useState } from 'react';
import { Search, Users, Brain, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AnimatedBackground from '@/components/AnimatedBackground';
import FeatureCard from '@/components/FeatureCard';
import FAQSection from '@/components/FAQSection';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Search",
      description: "Advanced algorithms find anyone across the digital landscape with unprecedented accuracy."
    },
    {
      icon: Users,
      title: "Social Intelligence",
      description: "Discover connections, relationships, and social patterns to understand networks better."
    },
    {
      icon: Zap,
      title: "Real-time Results",
      description: "Get instant, up-to-date information from millions of sources worldwide."
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Clura.ai</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Sign In
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Find Anyone,
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Anywhere
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              The next generation of people discovery. Powered by AI, designed for precision.
            </p>
          </div>

          {/* Search Card */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-8">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Enter a name, email, or username..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 text-lg py-4 px-6 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-white/90 px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our cutting-edge technology combines machine learning, data analytics, and social intelligence to deliver unparalleled search capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 px-6 py-20">
        <FAQSection />
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Clura.ai</span>
          </div>
          <p className="text-white/60 mb-8">
            The future of people discovery is here.
          </p>
          <div className="flex flex-wrap items-center justify-center space-x-8 text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
