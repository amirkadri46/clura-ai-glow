
import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Basic',
    price: '$0',
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
    price: '$500',
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
    price: '$5000',
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

  return (
    <div className="min-h-screen bg-[#0C1020] flex flex-col items-center">
      <div className="w-full flex flex-col items-center justify-center py-10 px-2">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-white">
            Choose what works for you
          </h1>
          <div className="flex items-center justify-center gap-2 mt-3">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-3 py-1 rounded-full text-xs font-semibold border border-[#334c94] transition 
                ${!isAnnual ? "bg-white text-[#0C1020]" : "text-white/70"}
              `}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-3 py-1 rounded-full text-xs font-semibold border border-[#334c94] transition 
                ${isAnnual ? "bg-white text-[#0C1020]" : "text-white/70"}
              `}
            >
              Annually (-20%)
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col bg-[#181f2d] rounded-xl border border-[#334c94] max-w-[360px] min-w-[300px] w-full px-6 py-8 shadow-md mb-6"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-3xl font-extrabold text-white">
                  {plan.price}
                  <span className="ml-2 text-base font-medium text-white/80">
                    {plan.period}
                  </span>
                </span>
              </div>
              <p className="text-xs text-white/80 mb-4">{plan.description}</p>
              <ul className="mb-4 space-y-2 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="border-blue-500 text-white font-semibold mt-2">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
