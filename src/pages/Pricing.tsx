import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const gradient = "linear-gradient(90deg, #fff 0%, #4B6CB7 60%, #89CFF0 100%)"
const gradientText = `bg-gradient-to-r from-white via-[#4b6cb7] to-[#89CFF0] bg-clip-text text-transparent`
const gradientBtn = `bg-gradient-to-r from-white via-[#4b6cb7] to-[#89CFF0] bg-clip-text text-transparent`

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

const cardBase =
  'relative flex flex-col items-center bg-[#181f2d] rounded-xl border max-w-[350px] min-w-[320px] w-full h-[580px] px-6 py-8 shadow-lg'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="min-h-screen bg-[#0C1020] flex flex-col items-center justify-center py-10 px-2">
      <div className="text-center mb-10">
        <h1
          className="text-[2.3rem] md:text-4xl font-extrabold mb-2 leading-tight select-none"
          style={{
            background: gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Choose what works for you
        </h1>
        <div className="flex items-center justify-center gap-2 mt-3">
          <button
            onClick={() => setIsAnnual(false)}
            className={`
              px-3 py-1 rounded-full text-xs font-semibold transition 
              border border-[#334c94]
              ${!isAnnual ? "shadow-[0_0_5px_#89CFF0]" : ""}
            `}
            style={{
              background: gradient,
              color: 'transparent',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: !isAnnual ? 1 : 0.8,
              fontWeight: !isAnnual ? 700 : 600,
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`
              px-3 py-1 rounded-full text-xs font-semibold transition 
              border border-[#334c94]
              ${isAnnual ? "shadow-[0_0_5px_#89CFF0]" : ""}
            `}
            style={{
              background: gradient,
              color: 'transparent',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: isAnnual ? 1 : 0.8,
              fontWeight: isAnnual ? 700 : 600,
            }}
          >
            Annually (-20%)
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cardBase}
            style={{
              minWidth: 320,
              maxWidth: 350,
              width: 350,
              minHeight: 580,
              height: 580,
              boxSizing: 'border-box',
              position: 'relative',
              marginTop: 16,
              marginBottom: 16,
              borderColor: 'rgba(137, 207, 240, 0.2)',
              boxShadow: '0 0 20px rgba(137, 207, 240, 0.3)',
            }}
          >
            <div className="flex flex-col items-center w-full z-20 relative text-center">
              <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span
                  className="text-3xl font-extrabold"
                  style={{
                    background: gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                  }}
                >
                  {plan.price}
                  <span
                    style={{
                      marginLeft: 5,
                      fontWeight: 500,
                      fontSize: 18,
                      background: gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {plan.period}
                  </span>
                </span>
              </div>
              <p className="text-xs text-white/80 mb-4 text-center">{plan.description}</p>
            </div>
            <ul className="space-y-2 text-sm mb-2 z-20">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Check className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              className={
                'border rounded-md py-2 w-full font-semibold text-lg mt-auto mb-4 transition relative z-20 bg-transparent'
              }
              style={{
                borderColor: 'rgba(137, 207, 240, 0.5)',
                boxShadow: '0 0 8px rgba(137, 207, 240, 0.3)',
                background: 'transparent',
                position: 'relative',
              }}
            >
              <span
                style={{
                  background: gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800,
                }}
              >
                Get Started
              </span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
