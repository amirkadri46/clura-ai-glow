
import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const cardGradientGlow = "relative before:absolute before:top-0 before:left-0 before:right-0 before:h-[18px] before:rounded-t-xl before:pointer-events-none before:content-[''] before:z-10 before:shadow-[0_-5px_16px_0_#89CFF0cc]" // more visible top glow
const cardBase =
  'relative flex flex-col items-center justify-between bg-[#181f2d] rounded-xl border border-[#232943] w-full max-w-xs min-h-[540px] h-[540px] px-6 py-8 overflow-hidden ' +
  cardGradientGlow

const gradientText =
  'bg-gradient-to-r from-white via-[#4B6CB7] to-[#89CFF0] bg-clip-text text-transparent'
const priceText =
  'text-3xl font-extrabold ' + gradientText + ' mb-1 text-center'

const toggleBtnGradient =
  "bg-gradient-to-r from-white via-[#4B6CB7] to-[#89CFF0] bg-clip-text text-transparent border border-[#334c94] px-3 py-1 rounded-full text-xs font-semibold transition-shadow"
const toggleActive =
  "shadow-[0_0_5px_#89CFF0,0_0_8px_white] font-bold"

const btnOutline =
  "border border-blue-500 rounded-md py-2 w-full font-semibold text-lg mt-auto mb-4 transition relative z-20 overflow-hidden bg-transparent"
const btnGradientText =
  "bg-gradient-to-r from-white via-[#4B6CB7] to-[#89CFF0] bg-clip-text text-transparent"
const btnActiveShadow = "shadow-[0_0_8px_#89CFF0]"
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
      'Standard search filters'
    ]
  },
  {
    name: 'Professional',
    price: '$500',
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
    price: '$5000',
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

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  // Option to implement annual toggle later; here, all prices static as per instructions.

  return (
    <div className="min-h-screen bg-[#0C1020] flex flex-col items-center justify-center py-10 px-2">
      <div className="text-center mb-10">
        <h1
          className={
            'text-[2.3rem] md:text-4xl font-extrabold mb-2 leading-tight ' +
            gradientText
          }
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Choose what works for you
        </h1>
        <div className="flex items-center justify-center gap-2 mt-3">
          <button
            onClick={() => setIsAnnual(false)}
            className={
              toggleBtnGradient +
              (isAnnual
                ? ''
                : ' ' + toggleActive + ' outline-none')
            }
            style={
              !isAnnual
                ? {
                    textShadow: '0 0 8px #89CFF0, 0 0 2px #fff',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }
                : { WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }
            }
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={
              toggleBtnGradient +
              (isAnnual
                ? ' ' + toggleActive + ' outline-none'
                : '')
            }
            style={
              isAnnual
                ? {
                    textShadow: '0 0 8px #89CFF0, 0 0 2px #fff',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }
                : { WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }
            }
          >
            Annually (-20%)
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={cardBase}
            style={{
              minWidth: 320, // ensures equal width on all cards
              maxWidth: 350,
              minHeight: 540,
              height: 540,
              position: 'relative'
            }}
          >
            {/* Subtle top glow is handled by pseudo-elements in tailwind above (cardGradientGlow) */}
            <div className="flex flex-col items-center w-full relative z-20">
              <h3 className="text-lg font-semibold text-white mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span
                  className={priceText}
                  style={{
                    background: "linear-gradient(90deg, #fff 0%, #4B6CB7 70%, #89CFF0 100%)",
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {plan.price}
                  <span className="text-base font-normal text-white/80 ml-1 align-bottom not-italic"
                    style={{
                      background: "linear-gradient(90deg, #fff 0%, #4B6CB7 70%, #89CFF0 100%)",
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                    {plan.period}
                  </span>
                </span>
              </div>
              <p className="text-xs text-white/80 mb-4 text-center">{plan.description}</p>
            </div>
            <Button
              variant="outline"
              className={
                btnOutline +
                ' ' +
                btnActiveShadow +
                ' ' +
                btnGradientText
              }
              style={{
                borderColor: '#2563eb',
                background: 'transparent',
                position: 'relative'
              }}
            >
              <span
                className={btnGradientText}
                style={{
                  background: "linear-gradient(90deg, #fff 0%, #4B6CB7 70%, #89CFF0 100%)",
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Get Started
              </span>
            </Button>
            <ul className="w-full space-y-2 text-sm mb-2 z-20">
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
