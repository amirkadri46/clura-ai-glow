import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  // Keep all text/content as original, only visual changes
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
            <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-4 text-[#b3d2ff] drop-shadow-lg" style={{letterSpacing: '-0.03em'}}>
              Subscriptions
            </h1>
            <p className="text-lg md:text-xl text-[#8ea6c9] mb-8 font-light">
              Three different subscriptions to match your companies&apos; needs.
            </p>
            {/* Toggle */}
            <div className="flex items-center justify-center gap-3 mb-12">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full border border-[#2C3646] backdrop-blur-md text-base font-medium transition-all duration-200 ${
                  !isAnnual
                    ? 'bg-[#12151C] text-[#b3d2ff] border-[#3b82f6] shadow shadow-blue-800/50'
                    : 'bg-transparent text-[#8ea6c9] hover:text-[#b3d2ff]'
                }`}
                style={{minWidth: 120}}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full border border-[#2C3646] backdrop-blur-md text-base font-medium transition-all duration-200 ${
                  isAnnual
                    ? 'bg-[#12151C] text-[#b3d2ff] border-[#3b82f6] shadow shadow-blue-800/50'
                    : 'bg-transparent text-[#8ea6c9] hover:text-[#b3d2ff]'
                }`}
                style={{minWidth: 120}}
              >
                Annually (-20%)
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-8 justify-center max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="flex flex-col w-full md:w-1/3 rounded-2xl border border-[#28384b] bg-black/80 
                  backdrop-blur-md shadow-xl transition-all duration-300 overflow-hidden
                  hover:border-[#54a7ff] hover:shadow-blue-600/30"
                style={{
                  minHeight: 560,
                  boxShadow:
                    "0 2px 40px 0 #4c82c1be, 0 0 0 1.5px #28384b"
                }}
              >
                {/* Plan Name */}
                <div className="px-8 pt-8 pb-4">
                  <h3 className="text-lg font-semibold text-[#b3d2ff] mb-0.5 tracking-tight">{plan.name}</h3>
                  {/* Price */}
                  <div className="flex items-end gap-2 mt-2 mb-1">
                    <span className="text-4xl md:text-5xl font-bold text-[#cae5ff] drop-shadow-lg">{plan.price}</span>
                    <span className="text-lg text-[#8ea6c9] font-normal">{plan.period}</span>
                  </div>
                  {/* Description */}
                  <p className="text-[#a6bedc] my-4 font-light text-base min-h-[48px]">{plan.description}</p>
                  {/* Button */}
                  <Button
                    variant="outline"
                    size="lg"
                    className={`mt-2 mb-7 w-full py-2 rounded-lg font-normal border border-[#556986] text-[#bae1ff] bg-transparent hover:bg-[#0a1420] hover:text-white transition-colors duration-200 text-base tracking-tight shadow-sm shadow-blue-200/5`}
                    style={{
                      boxShadow: "0 1px 0 0 #8ea6c933, 0 0 0 0 #273b5770",
                      fontWeight: 500
                    }}
                  >
                    Choose this plan
                  </Button>
                  <div className="w-full border-t border-[#273b57] mt-2 mb-0"></div>
                </div>
                {/* Features */}
                <ul className="px-8 pb-6 pt-4 flex-1 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-base">
                      <Check className="w-5 h-5 text-[#54a7ff] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#c8e4ff]">{feature}</span>
                    </li>
                  ))}
                </ul>
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
