
import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const gradient = "linear-gradient(90deg, #fff 0%, #4B6CB7 60%, #89CFF0 100%)"

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

// Simple top navigation bar for the page
function PricingNavBar() {
  return (
    <nav className="w-full bg-[#0C1020] py-4 px-0 flex justify-center border-b border-[#232943]">
      <div className="flex gap-10">
        <Link to="/" className="text-white font-semibold hover:text-blue-300 transition">Home</Link>
        <Link to="/pricing" className="text-white font-semibold hover:text-blue-300 transition">Pricing</Link>
        <Link to="/features" className="text-white font-semibold hover:text-blue-300 transition">Features</Link>
        <Link to="/contact" className="text-white font-semibold hover:text-blue-300 transition">Contact</Link>
      </div>
    </nav>
  )
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-[#0C1020] flex flex-col items-center">
      <PricingNavBar />
      <div className="w-full flex flex-col items-center justify-center py-10 px-2">
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
              className={`px-3 py-1 rounded-full text-xs font-semibold border border-[#334c94] transition 
                ${!isAnnual ? "bg-gradient-to-r from-white via-[#4b6cb7] to-[#89CFF0] bg-clip-text text-transparent font-extrabold" : "text-white/70 font-semibold"}
              `}
              style={{
                opacity: !isAnnual ? 1 : 0.8,
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-3 py-1 rounded-full text-xs font-semibold border border-[#334c94] transition 
                ${isAnnual ? "bg-gradient-to-r from-white via-[#4b6cb7] to-[#89CFF0] bg-clip-text text-transparent font-extrabold" : "text-white/70 font-semibold"}
              `}
              style={{
                opacity: isAnnual ? 1 : 0.8,
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
              className={`
                relative flex flex-col items-center justify-between bg-[#181f2d] rounded-2xl 
                border-2 max-w-[370px] min-w-[320px] w-full h-[620px] px-6 py-8 
                shadow-lg overflow-hidden
                border-transparent
              `}
              style={{
                boxShadow: "0 0 0 2px #3A74FF, 0 0 30px 4px #89CFF0",
                borderImage: "linear-gradient(120deg,#4B6CB7,#89CFF0 90%,#fff) 1",
                marginTop: 16,
                marginBottom: 16,
              }}
            >
              <div className="flex flex-col items-center w-full relative flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{plan.name}</h3>
                <div className="flex flex-col items-center mb-2">
                  <span
                    className="text-3xl font-extrabold text-center"
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
                <ul className="w-full space-y-2 text-sm mb-3 z-20 flex flex-col items-center">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-400 mr-2" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full flex justify-center mt-2">
                <Button
                  variant="outline"
                  className="border-2 border-blue-500 rounded-md py-2 w-full font-semibold text-lg transition relative z-20 bg-transparent"
                  style={{
                    borderColor: '#2563eb',
                    boxShadow: "0 0 5px 2px #5DD0FF99",
                    background: 'transparent',
                  }}
                >
                  <span
                    style={{
                      background: gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 800,
                      display: "block",
                      width: "100%",
                    }}
                  >
                    Get Started
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
