
import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Gradient style for text
const gradientText = "bg-gradient-to-r from-white via-white to-[#2d8eff] bg-clip-text text-transparent"

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
        <div className="pt-16 pb-16">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className={`text-4xl md:text-5xl font-light tracking-tight mb-3 drop-shadow-lg ${gradientText}`} style={{letterSpacing: '-0.03em'}}>
              Subscriptions
            </h1>
            <p className="text-sm md:text-base text-white/70 mb-8 font-light">
              Three different subscriptions to match your companies&apos; needs.
            </p>
            {/* Toggle */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-3 py-1 rounded-full border border-[#263049] backdrop-blur-md text-xs font-medium transition-all duration-200
                  ${!isAnnual
                    ? 'bg-[#12151C] ' + gradientText + ' border-[#3b82f6]'
                    : 'bg-transparent text-white/60 hover:text-white'}
                `}
                style={{ minWidth: 90 }}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-3 py-1 rounded-full border border-[#263049] backdrop-blur-md text-xs font-medium transition-all duration-200
                  ${isAnnual
                    ? 'bg-[#12151C] ' + gradientText + ' border-[#3b82f6]'
                    : 'bg-transparent text-white/60 hover:text-white'}
                `}
                style={{ minWidth: 90 }}
              >
                Annually (-20%)
              </button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="relative flex flex-col w-full md:w-1/3
                  rounded-xl border border-[#263049] bg-black/70 backdrop-blur-lg shadow-none px-3 pb-5 pt-0 min-h-0
                  hover:border-[#54a7ff] transition-all duration-300
                  "
                style={{
                  maxWidth: 350,
                  minHeight: 0,
                  margin: "0 auto"
                }}
              >
                {/* Glow only at the top */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[75%] h-5 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, #90d4ffbb 0%, transparent 90%)',
                  }}
                />
                {/* Card Content */}
                <div className="flex flex-col flex-grow z-10 rounded-xl pt-7 pb-3 px-4 min-h-0">
                  {/* Plan Name in gradient */}
                  <h3 className={`text-base font-semibold tracking-tight mb-0.5 ${gradientText}`}>
                    {plan.name}
                  </h3>
                  {/* Price in gradient */}
                  <div className="flex items-end gap-1 mt-2 mb-1">
                    <span className={`text-2xl md:text-4xl font-bold drop-shadow-lg ${gradientText}`}>{plan.price}</span>
                    <span className="text-xs text-white font-normal">{plan.period}</span>
                  </div>
                  {/* Description */}
                  <p className="text-xs text-white/80 my-2 font-light min-h-[36px]">
                    {plan.description}
                  </p>
                  {/* Button under price+desc */}
                  <Button
                    variant="outline"
                    size="sm"
                    className={`w-full rounded-md mt-2 mb-0 py-2 border border-[#3b82f6] bg-black/70 hover:bg-[#111b2f] transition
                      ${gradientText} font-medium text-sm tracking-tight`}
                    style={{
                      boxShadow: "none",
                    }}
                  >
                    Choose this plan
                  </Button>
                </div>
                {/* Separator line under button */}
                <div className="mx-4 border-t border-[#232d4c] my-2" />
                {/* Features */}
                <ul className="px-4 pb-4 flex-1 space-y-2 text-xs">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-4 h-4 text-[#54a7ff] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
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
  )
}

export default Pricing
