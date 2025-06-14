
import { Search, Brain, Rocket } from 'lucide-react';

const FeaturesSection = () => {
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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl font-light tracking-tight text-foreground mb-4 bg-gradient-to-r from-white from-20% via-blue-100 via-50% to-slate-400 to-80% bg-clip-text text-transparent">
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
  );
};

export default FeaturesSection;
