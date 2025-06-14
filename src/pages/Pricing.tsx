import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/Navigation'
import ParticleBackground from '@/components/ParticleBackground'

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 0,
    annualPrice: 0,
    period: '/month',
    description: 'For businesses looking to start with AI and automations.',
    features: [
      '10 AI searches per month',
      'Basic profile insights',
      'Email support',
      'Standard search filters',
    ],
  },
  {
    name: 'Professional',
    monthlyPrice: 500,
    annualPrice: 400, // 20% discount
    period: '/month',
    description:
      'For businesses looking to outperform their competition with AI and automations.',
    features: [
      '500 AI searches per month',
      'Full enriched profile data',
      'Priority support',
      'Advanced AI search filters',
      'Export unlimited contacts',
      'Real-time data updates',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: 5000,
    annualPrice: 4000, // 20% discount
    period: '/month',
    description:
      'For businesses looking to fully leverage AI and automations to become an industry leader.',
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
      'Advanced analytics',
    ],
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const getDisplayPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0) return '$0';
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    return `$${price}`;
  };

  const getPeriodText = () => {
    return isAnnual ? '/month (billed annually)' : '/month';
  };

  return (
    <div className="min-h-screen bg-black relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20 flex flex-col items-center min-h-screen overflow-y-auto">
          <div className="w-full flex flex-col items-center justify-center py-10 px-2">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#599cf0]">
                Choose what works for you
              </h1>
              <div className="flex items-center justify-center gap-2 mt-3">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border border-[#334c94] transition 
                    ${!isAnnual ? "bg-white text-black" : "text-white/70"}
                  `}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border border-[#334c94] transition 
                    ${isAnnual ? "bg-white text-black" : "text-white/70"}
                  `}
                >
                  Annually (-20%)
                </button>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col bg-[#181f2d] rounded-xl border border-[#334c94] max-w-[360px] min-w-[300px] w-full px-6 py-8 shadow-md h-[650px]"
                >
                  <div className="flex flex-col flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#599cf0]">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#599cf0]">
                        {getDisplayPrice(plan)}
                        <span className="ml-2 text-base font-medium text-white/80">
                          {getPeriodText()}
                        </span>
                      </span>
                      {isAnnual && plan.monthlyPrice > 0 && (
                        <div className="text-sm text-white/60 mt-1">
                          <span className="line-through">${plan.monthlyPrice}/month</span>
                          <span className="ml-2 text-green-400">Save 20%</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-white/80 mb-4">{plan.description}</p>
                    <ul className="mb-4 space-y-2 text-sm flex-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="w-4 h-4 text-blue-400 mr-2" />
                          <span className="text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="border-blue-500 text-white font-semibold mt-auto">
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
