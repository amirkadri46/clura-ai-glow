
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started with AI-powered people search',
      features: [
        '10 AI searches per month',
        'Basic profile insights',
        'Email support',
        'Standard search filters',
        'Export up to 50 contacts'
      ]
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'Best for professionals and recruiters',
      features: [
        '500 AI searches per month',
        'Full enriched profile data',
        'Priority support',
        'Advanced AI search filters',
        'Export unlimited contacts',
        'API access',
        'Real-time data updates',
        'Chrome extension'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For teams and large organizations',
      features: [
        'Unlimited AI searches',
        'Complete profile enrichment',
        '24/7 dedicated support',
        'All premium search features',
        'Bulk operations & export',
        'Full API access',
        'Team management dashboard',
        'Custom integrations',
        'GDPR compliance tools',
        'Advanced analytics'
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced vibrant background similar to index */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        
        {/* Large blue gradient orb */}
        <div className="absolute top-0 left-0 w-[400%] h-[400%]">
          <div className="absolute top-1/6 left-1/6 w-[1000px] h-[1000px] bg-gradient-radial from-blue-500/35 via-blue-400/20 to-transparent rounded-full blur-3xl" style={{
            animation: 'float 70s ease-in-out infinite'
          }}></div>
        </div>
        
        {/* Large purple gradient orb */}
        <div className="absolute top-0 right-0 w-[400%] h-[400%]">
          <div className="absolute top-1/5 right-1/5 w-[900px] h-[900px] bg-gradient-radial from-purple-500/30 via-purple-400/18 to-transparent rounded-full blur-3xl" style={{
            animation: 'float 90s ease-in-out infinite reverse'
          }}></div>
        </div>
        
        {/* Large teal gradient orb */}
        <div className="absolute bottom-0 center w-[400%] h-[400%]">
          <div className="absolute bottom-1/5 left-1/2 w-[800px] h-[800px] bg-gradient-radial from-teal-500/25 via-cyan-400/12 to-transparent rounded-full blur-3xl" style={{
            animation: 'float 110s ease-in-out infinite'
          }}></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-light tracking-tight mb-4">
                <span className="bg-gradient-to-r from-white via-blue-200 to-slate-300 bg-clip-text text-transparent">
                  Simple, Transparent
                </span>{' '}
                <span className="bg-gradient-to-r from-clura-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                  Pricing
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Choose the perfect plan for your people discovery needs
              </p>
              <p className="text-lg text-muted-foreground">
                Powered by Clura.ai's advanced AI technology for intelligent people search
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`glass-card p-8 relative backdrop-blur-lg bg-slate-900/40 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-clura-500/50 shadow-2xl shadow-clura-500/30' 
                      : 'border-white/10 hover:border-clura-400/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-clura-500 to-clura-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground ml-1">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-clura-400 mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-clura-500 to-clura-600 text-white hover:from-clura-600 hover:to-clura-700 transform hover:scale-105 shadow-lg shadow-clura-500/25'
                      : 'neuro-button text-foreground hover:text-clura-400'
                  }`}>
                    Get Started with Clura.ai
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-4">
                All plans include access to Clura.ai's cutting-edge AI technology
              </p>
              <p className="text-sm text-muted-foreground">
                Need a custom solution? <span className="text-clura-400 cursor-pointer hover:text-clura-300">Contact our sales team</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) translateX(0px) scale(1);
            }
            33% {
              transform: translateY(-25px) translateX(15px) scale(1.05);
            }
            66% {
              transform: translateY(15px) translateX(-10px) scale(0.95);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Pricing;
