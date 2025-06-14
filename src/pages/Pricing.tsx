
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Basic',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started with AI-powered people search',
      features: [
        '10 AI searches per month',
        'Basic profile insights',
        'Email support',
        'Standard search filters'
      ]
    },
    {
      name: 'Professional',
      price: isAnnual ? '$400' : '$500',
      period: '/month',
      description: 'Best for professionals and recruiters',
      features: [
        '500 AI searches per month',
        'Full enriched profile data',
        'Priority support',
        'Advanced AI search filters',
        'Export unlimited contacts',
        'Real-time data updates'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: isAnnual ? '$4000' : '$5000',
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
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#1A252F' }}>
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
              <p className="text-xl text-white/80 mb-8">
                Choose the perfect plan for your people discovery needs
              </p>
              
              {/* Pricing Toggle */}
              <div className="flex items-center justify-center mb-12">
                <span className={`mr-3 ${!isAnnual ? 'text-white' : 'text-white/60'}`}>Monthly</span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isAnnual ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isAnnual ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`ml-3 ${isAnnual ? 'text-white' : 'text-white/60'}`}>
                  Annually (-20%)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`p-8 relative rounded-2xl border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-[#4B6CB7] shadow-2xl' 
                      : 'border-[#4B6CB7] hover:border-clura-400/50'
                  }`}
                  style={{ 
                    backgroundColor: '#1A252F',
                    boxShadow: plan.popular 
                      ? '0 0 20px #89CFF0, 0 0 40px rgba(137, 207, 240, 0.3)' 
                      : '0 0 10px #89CFF0'
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-clura-500 to-clura-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-white/60 ml-1">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-white/70">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-clura-400 mr-3 flex-shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 border border-[#4B6CB7] text-white hover:bg-[#4B6CB7]/20">
                    Choose this plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
