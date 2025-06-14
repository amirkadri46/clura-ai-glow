
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SpaceBackground from '@/components/SpaceBackground';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        '10 searches per month',
        'Basic profile data',
        'Email support',
        'Standard search filters'
      ]
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'Best for professionals',
      features: [
        '500 searches per month',
        'Full profile data',
        'Priority support',
        'Advanced search filters',
        'Export results',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For teams and organizations',
      features: [
        'Unlimited searches',
        'Complete profile data',
        '24/7 dedicated support',
        'All search features',
        'Bulk export',
        'Full API access',
        'Team management',
        'Custom integrations'
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <SpaceBackground />
      <Navigation />
      
      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light tracking-tight text-foreground mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the plan that's right for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`glass-card p-8 relative ${
                  plan.popular 
                    ? 'border-clura-500/50 shadow-2xl shadow-clura-500/30' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-clura-500 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                    ? 'bg-clura-500 text-white hover:bg-clura-600 transform hover:scale-105'
                    : 'neuro-button text-foreground hover:text-clura-400'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
