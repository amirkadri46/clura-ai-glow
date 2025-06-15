
import { Search, Brain, Rocket, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Natural Language Search",
      description: "Search using everyday language, no complex syntax needed"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Matching",
      description: "Our AI understands context and finds perfect matches instantly"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "200M+ Enriched Profiles",
      description: "Access to the largest enriched professional database"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Instant Results",
      description: "Get comprehensive results in seconds, not hours"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to find the right people, powered by advanced AI
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="scroll-reveal text-center group">
              {/* Square Box */}
              <div className="w-32 h-32 mx-auto bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl flex items-center justify-center mb-6 feature-card group-hover:scale-105 group-hover:bg-slate-800/40 group-hover:border-blue-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-blue-400">
                  {feature.icon}
                </div>
              </div>
              {/* Text Content */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
