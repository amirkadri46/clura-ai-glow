
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Clura.ai's AI-powered search work?",
      answer: "Our advanced AI algorithms scan millions of data sources across the internet, social media platforms, and public databases to find comprehensive information about individuals. We use machine learning to improve accuracy and relevance with every search."
    },
    {
      question: "Is the information found by Clura.ai accurate and up-to-date?",
      answer: "We prioritize accuracy by cross-referencing multiple sources and using real-time data whenever possible. Our AI continuously updates information to ensure you get the most current and reliable results available."
    },
    {
      question: "What makes Clura.ai different from other people search engines?",
      answer: "Clura.ai combines artificial intelligence with social intelligence to not just find basic information, but also understand relationships, connections, and social patterns. This gives you a more complete picture of the person you're searching for."
    },
    {
      question: "Is my search history and data secure with Clura.ai?",
      answer: "Absolutely. We employ enterprise-grade security measures to protect your search history and personal data. All searches are encrypted, and we never share your search data with third parties. Your privacy is our top priority."
    },
    {
      question: "Can I use Clura.ai for business purposes?",
      answer: "Yes! Clura.ai offers enterprise solutions for businesses looking to enhance their recruitment, due diligence, or customer research processes. Contact our business team to learn about our custom solutions and API access."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-white/80">
          Everything you need to know about Clura.ai
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="relative group">
            {/* Animated line effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-px top-0 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent h-px bottom-0 animate-pulse delay-100"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/20 to-transparent w-px left-0 animate-pulse delay-200"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent w-px right-0 animate-pulse delay-300"></div>
            </div>
            
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <button
                className="w-full flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-xl font-semibold text-white pr-4">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-white/60 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
              }`}>
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
