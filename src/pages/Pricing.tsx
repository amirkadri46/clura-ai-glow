
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Basic',
      price: isAnnual ? '$0' : '$0',
      period: '/month',
      description: 'For businesses looking to start with AI and automations.',
      features: [
        '10 AI searches per month',
        'Basic profile insights',
        'Email support',
        'Standard search filters'
      ],
      isPopular: false
    },
    {
      name: 'Professional',
      price: isAnnual ? '$400' : '$500',
      period: '/month',
      description: 'For businesses looking to outperform their competition with AI and automations.',
      features: [
        '500 AI searches per month',
        'Full enriched profile data',
        'Priority support',
        'Advanced AI search filters',
        'Export unlimited contacts',
        'Real-time data updates'
      ],
      isPopular: true
    },
    {
      name: 'Enterprise',
      price: isAnnual ? '$4000' : '$5000',
      period: '/month',
      description: 'For businesses looking to fully leverage AI and automations to become an industry leader.',
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
      ],
      isPopular: false
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20 pb-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light tracking-tight mb-4 text-white">
              Subscriptions
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Three different subscriptions to match your companies' needs.
            </p>
            
            {/* Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  !isAnnual 
                    ? 'bg-blue-600 text-white border-blue-600' 
                    : 'bg-transparent text-gray-400 border-gray-600 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  isAnnual 
                    ? 'bg-blue-600 text-white border-blue-600' 
                    : 'bg-transparent text-gray-400 border-gray-600 hover:text-white'
                }`}
              >
                Annually (-20%)
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative flex flex-col h-[585px] md:h-[540px] rounded-2xl border transition-all duration-300 hover:scale-[1.03] bg-[#1A252F]`}
                style={{
                  borderColor: plan.isPopular ? '#718efc' : '#4B6CB7',
                  boxShadow: plan.isPopular
                    ? '0 0 18px #818cf8'
                    : '0 0 10px #89CFF0'
                }}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow shadow-blue-500/30">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex flex-col flex-1 px-7 pt-8 pb-5">
                  {/* Plan Name */}
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-1 text-xl font-normal">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-5 leading-relaxed text-base min-h-[40px]">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Push footer button to the base */}
                  <div className="flex-1 flex items-end">
                    <Button
                      variant={plan.isPopular ? "default" : "outline"}
                      size="lg"
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300
                        border-2 ${
                          plan.isPopular
                            ? "bg-gradient-to-r from-blue-600 to-violet-500 text-white border-blue-500 hover:from-blue-500 hover:to-violet-600 shadow-blue-500/30 shadow-md"
                            : "border-blue-600 text-blue-400 bg-transparent hover:bg-blue-600 hover:text-white"
                        }
                      `}
                    >
                      Choose this plan
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;

