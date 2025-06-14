
import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false)

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
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      
      {/* Animated background behind cards */}
      <div className="fixed inset-0 z-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#89CFF0]/20 via-transparent to-[#4B6CB7]/20 animate-pulse"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, #89CFF030 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, #4B6CB730 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, #89CFF020 0%, transparent 30%),
              radial-gradient(circle at 60% 80%, #4B6CB720 0%, transparent 30%)
            `,
            animation: 'float 6s ease-in-out infinite'
          }}
        />
      </div>

      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        /* Animated shining border for pricing card */
        .animated-shining-border {
          position: relative;
          z-index: 0;
        }
        .animated-shining-border::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 1.15rem;
          padding: 0;
          background:
            conic-gradient(
              from 0deg,
              #89CFF0 0deg,
              transparent 60deg,
              transparent 210deg,
              #89CFF0 270deg,
              transparent 360deg
            );
          filter: blur(0.5px);
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          z-index: 1;
          pointer-events: none;
          animation: rotate-shine 2.5s linear infinite;
        }
        @keyframes rotate-shine {
          100% {
            transform: rotate(360deg);
          }
        }
        .animated-shining-border > .pricing-card-content {
          position: relative;
          z-index: 2;
        }
        `}
      </style>
      
      <div className="relative z-10">
        <Navigation />
        <div className="pt-14 pb-14">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-2 drop-shadow-lg text-white">
              Choose what works for you
            </h1>
            <p className="text-xs md:text-sm text-white mb-7 font-light">
              Three different subscriptions to match your companies&apos; needs.
            </p>
            
            {/* Toggle */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-3 py-1 rounded-full border border-[#263049] backdrop-blur-md text-xs font-medium transition-all duration-200
                  ${!isAnnual
                    ? 'bg-[#12151C] text-white border-[#3b82f6]'
                    : 'bg-transparent text-white hover:text-white'}
                `}
                style={{ minWidth: 90 }}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-3 py-1 rounded-full border border-[#263049] backdrop-blur-md text-xs font-medium transition-all duration-200
                  ${isAnnual
                    ? 'bg-[#12151C] text-white border-[#3b82f6]'
                    : 'bg-transparent text-white hover:text-white'}
                `}
                style={{ minWidth: 90 }}
              >
                Annually (-20%)
              </button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="animated-shining-border w-full md:w-1/3 rounded-xl"
                style={{ maxWidth: 320, minWidth: 0, margin: '0 auto', background: 'none' }}
              >
                {/* Card visual content */}
                <div
                  className="pricing-card-content flex flex-col bg-[#1A252F] rounded-xl border border-[#222b37] shadow-md px-5 pb-5 pt-0"
                  style={{
                    height: '600px', // Fixed height for all cards
                    margin: 0
                  }}
                >
                  {/* Top glow only - subtle */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[75%] h-5 pointer-events-none z-0"
                    style={{
                      background:
                        'radial-gradient(ellipse at center, #90d4ffbb 0%, transparent 90%)',
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16
                    }}
                  />
                  <div className="flex flex-col flex-grow z-10 rounded-xl pt-6 pb-3 px-1 h-full">
                    {/* Plan Name */}
                    <h3 className="text-sm font-semibold mb-0.5 text-white leading-tight">
                      {plan.name}
                    </h3>
                    
                    {/* Price & period */}
                    <div className="flex items-end gap-1 mt-2 mb-0">
                      <span className="text-xl md:text-3xl font-bold drop-shadow-lg text-white">
                        {plan.price}
                      </span>
                      <span className="text-xs text-white font-normal" style={{marginBottom: 2}}>{plan.period}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs text-white my-2 font-light min-h-[28px]">
                      {plan.description}
                    </p>
                    
                    {/* Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full rounded-md mt-2 py-1.5 border border-[#3b82f6] transition text-sm font-medium tracking-tight text-white hover:text-white"
                      style={{ boxShadow: "none" }}
                    >
                      Choose this plan
                    </Button>
                    
                    {/* Features - directly below button */}
                    <ul className="px-0 pt-3 pb-1 flex-1 space-y-2 text-xs overflow-y-auto">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-4 h-4 text-[#54a7ff] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
