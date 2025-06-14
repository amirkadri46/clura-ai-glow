
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Brain, Search, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1A252F' }}>
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-clura-400 to-clura-600 bg-clip-text text-transparent">
                Clura.ai
              </span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              We're revolutionizing how people discover and connect with professionals
              through the power of artificial intelligence.
            </p>
          </div>
        </section>

        {/* About Us Section with three boxes */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div 
                className="p-8 rounded-2xl border"
                style={{ 
                  backgroundColor: '#1A252F',
                  borderColor: '#4B6CB7',
                  borderWidth: '1px'
                }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">Mission</h3>
                <p className="text-white/80 leading-relaxed">
                  To revolutionize people discovery through AI-powered search technology, 
                  making professional connections more intuitive and accessible for everyone. 
                  We believe in breaking down barriers and creating meaningful opportunities 
                  through intelligent search solutions.
                </p>
              </div>

              <div 
                className="p-8 rounded-2xl border"
                style={{ 
                  backgroundColor: '#1A252F',
                  borderColor: '#4B6CB7',
                  borderWidth: '1px'
                }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">Vision</h3>
                <p className="text-white/80 leading-relaxed">
                  To become the world's leading AI-powered people discovery platform, 
                  where finding the right professional connections is as simple as 
                  having a conversation. We envision a future where talent discovery 
                  is instant, accurate, and effortless.
                </p>
              </div>

              <div 
                className="p-8 rounded-2xl border"
                style={{ 
                  backgroundColor: '#1A252F',
                  borderColor: '#4B6CB7',
                  borderWidth: '1px'
                }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">About Us</h3>
                <p className="text-white/80 leading-relaxed">
                  Founded by a team of AI experts and industry veterans, Clura.ai combines 
                  cutting-edge artificial intelligence with deep understanding of professional 
                  networking needs. We're passionate about creating technology that empowers 
                  human connections and drives business success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light tracking-tight text-white mb-4">Our Values</h2>
              <p className="text-xl text-white/80">What drives us every day</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Intelligence",
                  description: "We harness AI to make complex search simple and intuitive"
                },
                {
                  icon: <Search className="w-8 h-8" />,
                  title: "Precision",
                  description: "Every search delivers relevant, high-quality results"
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: "Innovation",
                  description: "We're constantly pushing the boundaries of what's possible"
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="p-8 text-center rounded-2xl border"
                  style={{ 
                    backgroundColor: '#1A252F',
                    borderColor: '#4B6CB7',
                    borderWidth: '1px'
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-clura-400/20 to-clura-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light tracking-tight text-white mb-4">Our Team</h2>
              <p className="text-xl text-white/80">The minds behind Clura.ai</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Alex Chen", role: "CEO & Co-founder", avatar: "AC" },
                { name: "Sarah Kim", role: "CTO & Co-founder", avatar: "SK" },
                { name: "Michael Rodriguez", role: "Head of AI", avatar: "MR" }
              ].map((member, index) => (
                <div 
                  key={index} 
                  className="p-8 text-center rounded-2xl border"
                  style={{ 
                    backgroundColor: '#1A252F',
                    borderColor: '#4B6CB7',
                    borderWidth: '1px'
                  }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-clura-400 to-clura-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-white/80">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="p-12 rounded-2xl border"
              style={{ 
                backgroundColor: '#1A252F',
                borderColor: '#4B6CB7',
                borderWidth: '1px'
              }}
            >
              <h2 className="text-4xl font-light tracking-tight text-white mb-8 text-center">Our Story</h2>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  Clura.ai was born from a simple frustration: finding the right people shouldn't be this hard. 
                  Our founders, having worked at top tech companies, experienced firsthand the pain of traditional 
                  recruitment and networking tools.
                </p>
                <p>
                  In 2023, we set out to build something different. We combined our expertise in artificial 
                  intelligence, natural language processing, and data engineering to create a search experience 
                  that feels magical.
                </p>
                <p>
                  Today, thousands of professionals use Clura.ai to discover talent, find mentors, and build 
                  meaningful connections. We're just getting started.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
