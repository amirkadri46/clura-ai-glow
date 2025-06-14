
import { useState } from 'react'
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
      ]
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
      ]
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
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#0C1020] flex flex-col items-center justify-center py-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">
          Choose what works for you
        </h1>
        <p className="text-sm md:text-base text-white/80 mb-6">
          Three different subscriptions to match your companies&apos; needs.
        </p>
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
              !isAnnual ? 'bg-blue-600 text-white' : 'bg-transparent border border-gray-600 text-white/60'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
              isAnnual ? 'bg-blue-600 text-white' : 'bg-transparent border border-gray-600 text-white/60'
            }`}
          >
            Annually (-20%)
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-[#181f2d] rounded-xl shadow-none border border-[#232943] flex flex-col items-center w-full md:w-[320px] max-w-xs p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-3xl font-bold text-white">{plan.price}</span>
              <span className="text-base text-white/80 mb-1">{plan.period}</span>
            </div>
            <p className="text-xs text-white/80 mb-3 text-center">{plan.description}</p>
            <Button
              variant="outline"
              className="w-full rounded-md mb-4 py-2 border-blue-600 text-white font-medium"
              style={{
                borderWidth: 1,
                borderColor: '#2563eb'
              }}
            >
              Choose this plan
            </Button>
            <ul className="w-full space-y-2 text-sm">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Check className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
