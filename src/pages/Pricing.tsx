
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  // Sample prices and features as per second reference
  const plans = [
    {
      name: 'Basic',
      price: isAnnual ? '€7,200' : '€750',
      period: '/month',
      description: 'For businesses looking to start with AI and automations.',
      features: [
        '1 developer',
        'Basic chatbots & LLMs',
        '5 monthly workflow automations',
        '50 monthly content creation requests',
        'Cancel & pause anytime',
      ],
      isPopular: false,
    },
    {
      name: 'Professional',
      price: isAnnual ? '€14,400' : '€1,500',
      period: '/month',
      description:
        'For businesses looking to outperform their competition with AI and automations.',
      features: [
        '2 developers',
        'Custom chatbots & LLMs',
        '15 monthly workflow automations',
        '100 monthly content creation requests',
        'Cancel & pause anytime',
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: isAnnual ? '€28,800' : '€3,000',
      period: '/month',
      description:
        'For businesses looking to fully leverage AI and automations to become an industry leader.',
      features: [
        '3 developers',
        'Custom chatbots & LLMs',
        'Unlimited workflow automations',
        'Unlimited content creation requests',
        'Cancel & pause anytime',
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-16 pb-20 max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-14">
            <h1
              className="text-6xl md:text-7xl font-bold tracking-tight mb-4"
              style={{
                color: '#81A7FF',
                letterSpacing: '-.03em',
                lineHeight: '1.07',
                textShadow:
                  '0 0 24px #81a7ff88, 0 2px 14px #000b, 0 0 1px #fff2',
              }}
            >
              Subscriptions
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8">
              Three different subscriptions to match your companies&apos; needs.
            </p>
            {/* Toggle */}
            <div className="flex items-center justify-center gap-1.5 mb-4">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-lg font-medium border transition-all duration-250
                  ${
                    !isAnnual
                      ? 'bg-[#151a20] text-blue-400 border-blue-500 shadow-sm'
                      : 'bg-[#11151a] text-white/50 border-[#222531] hover:text-blue-400'
                  }
                `}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-lg font-medium border transition-all duration-250
                  ${
                    isAnnual
                      ? 'bg-[#151a20] text-blue-400 border-blue-500 shadow-sm'
                      : 'bg-[#11151a] text-white/50 border-[#222531] hover:text-blue-400'
                  }
                `}
              >
                Annually (-20%)
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`
                  flex flex-col w-full h-full bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl transition-all duration-200
                  ${plan.isPopular ? 'border-blue-500 shadow-[0_2px_32px_0_rgba(80,202,255,0.08)]' : ''}
                  hover:scale-[1.02]
                `}
                style={{
                  minHeight: 500,
                  boxShadow: plan.isPopular
                    ? '0 6px 40px 0 #81A7FF22'
                    : '0 2px 24px 0 #222c440f',
                  position: 'relative',
                }}
              >
                {/* "Most Popular" badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-5 py-0.5 rounded-full text-xs font-bold shadow shadow-blue-500/30 border border-blue-300/50">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex flex-col flex-1 px-9 pt-10 pb-6">
                  {/* Plan Name */}
                  <div>
                    <h3 className="text-lg font-medium text-white mb-6">{plan.name}</h3>
                  </div>
                  {/* Price */}
                  <div className="flex items-end space-x-1 mb-3">
                    <span className="text-4xl md:text-5xl font-bold text-blue-400">
                      {plan.price}
                    </span>
                    <span className="text-lg text-white/60 font-light ml-1">{plan.period}</span>
                  </div>
                  {/* Description */}
                  <p className="text-white/60 leading-relaxed text-base mb-7 min-h-[50px]">
                    {plan.description}
                  </p>
                  {/* Button */}
                  <div className="mb-7">
                    <button
                      className={`
                        w-full py-3 rounded-lg border border-white/20
                        text-white font-semibold transition-all duration-200
                        bg-transparent hover:text-blue-400 hover:bg-white/5 hover:border-blue-300/40
                        focus:outline-none focus:ring-2 focus:ring-blue-500/40
                        text-base
                      `}
                      style={{
                        boxShadow: plan.isPopular
                          ? '0 0 6px #81A7FF44'
                          : undefined,
                      }}
                    >
                      Choose this plan
                    </button>
                  </div>
                  {/* Divider */}
                  <div className="w-full h-px bg-white/10 mb-4" />
                  {/* Features */}
                  <ul className="space-y-3 mt-0 text-base">
                    {plan.features.map((feature, featureIdx) => (
                      <li
                        key={featureIdx}
                        className="flex items-center space-x-3 text-white/90"
                      >
                        <Check className="w-5 h-5 text-blue-400 mr-1.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Spacer to push content to align bottom */}
                  <div className="flex-1" />
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
