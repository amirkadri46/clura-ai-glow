
import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const gradientText =
  'bg-gradient-to-r from-white via-[#4B6CB7] to-[#89CFF0] bg-clip-text text-transparent'
const priceText =
  'text-3xl font-bold ' + gradientText + ' mb-1'
const blueGlow = 'shadow-[0_-5px_10px_0_#89CFF0aa]' // top glow (aa = ~67% opacity)
const cardBase =
  'flex flex-col items-center justify-between bg-[#181f2d] rounded-xl border border-[#232943] w-full max-w-xs min-h-[520px] h-[520px] px-6 py-8 ' + blueGlow

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Basic',
      price: isAnnual ? '$0' : '$0',
      period: '/month',
      description:
        'For businesses looking to start with AI and automations.',
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
      description:
        'For businesses looking to outperform their competition with AI and automations.',
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
        'Advanced analytics'
      ]
    }
  ]

  const toggleGradient =
    'bg-gradient-to-r from-white via-[#4B6CB7] to-[#89CFF0] text-transparent bg-clip-text'
  const toggleActive =
    'shadow-[0_0_5px_#89CFF0,0_0_3px_white] font-bold'
  const toggleBtn =
    'px-3 py-1 rounded-full text-xs font-semibold transition border border-gray-600 ' +
    toggleGradient

  const btnGradient =
    'bg-gradient-to-r from-white via-[#4B6CB7] to-[#89CFF0] text-transparent bg-clip-text'
  const btnActiveShadow = 'shadow-[0_0_8px_#89CFF0]'

  return (
    <div className="min-h-screen bg-[#0C1020] flex flex-col items-center justify-center py-10 px-2">
      <div className="text-center mb-10">
        <h1
          className={
            'text-[2.3rem] md:text-4xl font-bold mb-2 leading-tight ' +
            gradientText
          }
        >
          Choose what works for you
        </h1>
        <div className="flex items-center justify-center gap-2 mt-3">
          <button
            onClick={() => setIsAnnual(false)}
            className={
              toggleBtn +
              (isAnnual
                ? ''
                : ' ' + toggleActive + ' outline-none')
            }
            style={
              !isAnnual
                ? {
                    textShadow: '0 0 6px #89CFF0, 0 0 2px #fff'
                  }
                : undefined
            }
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={
              toggleBtn +
              (isAnnual
                ? ' ' + toggleActive + ' outline-none'
                : '')
            }
            style={
              isAnnual
                ? {
                    textShadow: '0 0 6px #89CFF0, 0 0 2px #fff'
                  }
                : undefined
            }
          >
            Annually (-20%)
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={cardBase}
          >
            <div className="flex flex-col items-center w-full">
              <h3 className="text-lg font-semibold text-white mb-2">
                {plan.name}
              </h3>
              <div className="flex items-end gap-1 mb-1">
                <span className={priceText}>
                  {plan.price}
                  <span className="text-base font-normal text-white/80 ml-1 align-bottom">
                    {plan.period}
                  </span>
                </span>
              </div>
              <p className="text-xs text-white/80 mb-4 text-center">
                {plan.description}
              </p>
            </div>
            <Button
              variant="outline"
              className={
                'w-full rounded-md mt-auto mb-4 py-2 border-blue-600 font-medium border text-lg relative ' +
                btnGradient +
                ' ' +
                btnActiveShadow
              }
              style={{
                borderWidth: 1,
                borderColor: '#2563eb',
                background: 'transparent'
              }}
            >
              <span
                className="bg-gradient-to-r from-white via-[#4B6CB7] to-[#89CFF0] bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Get Started
              </span>
            </Button>
            <ul className="w-full space-y-2 text-sm mb-2">
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
