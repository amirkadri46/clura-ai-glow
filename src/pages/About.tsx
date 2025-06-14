import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Brain, Search, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20">
          {/* Hero Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl md:text-6xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#599cf0] mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-white to-[#599cf0] bg-clip-text text-transparent">
                  Clura.ai
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                We're revolutionizing how people discover and connect with professionals
                through the power of artificial intelligence.
              </p>
            </div>
          </section>

          {/* Mission, Vision, About Us Boxes */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Mission",
                    content: "Our mission is to revolutionize people discovery through AI-powered search technology, making it easier for professionals to connect and collaborate across industries and geographies."
                  },
                  {
                    title: "Vision", 
                    content: "We envision a world where finding the right people is as simple as asking a question in natural language, powered by intelligent algorithms that understand context and intent."
                  },
                  {
                    title: "About Us",
                    content: "Founded by a team of AI experts and former tech leaders, Clura.ai combines cutting-edge technology with deep understanding of professional networking to create the future of people search."
                  }
                ].map((box, index) => (
                  <div 
                    key={index}
                    className="rounded-2xl border p-8 transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: '#1A252F',
                      borderColor: '#4B6CB7',
                      boxShadow: '0 0 10px #89CFF0'
                    }}
                  >
                    <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#599cf0] mb-6">{box.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{box.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-light tracking-tight text-white mb-4">Our Values</h2>
                <p className="text-xl text-gray-400">What drives us every day</p>
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
                    className="rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: '#1A252F',
                      borderColor: '#4B6CB7',
                      boxShadow: '0 0 10px #89CFF0'
                    }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-clura-400/20 to-clura-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-400">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
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
                <p className="text-xl text-gray-400">The minds behind Clura.ai</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Alex Chen", role: "CEO & Co-founder", avatar: "AC" },
                  { name: "Sarah Kim", role: "CTO & Co-founder", avatar: "SK" },
                  { name: "Michael Rodriguez", role: "Head of AI", avatar: "MR" }
                ].map((member, index) => (
                  <div 
                    key={index} 
                    className="rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: '#1A252F',
                      borderColor: '#4B6CB7',
                      boxShadow: '0 0 10px #89CFF0'
                    }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-clura-400 to-clura-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {member.avatar}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-gray-400">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Story */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div 
                className="rounded-2xl border p-12"
                style={{ 
                  backgroundColor: '#1A252F',
                  borderColor: '#4B6CB7',
                  boxShadow: '0 0 10px #89CFF0'
                }}
              >
                <h2 className="text-4xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#599cf0] mb-8 text-center">Our Story</h2>
                <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
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
    </div>
  );
};

export default About;
