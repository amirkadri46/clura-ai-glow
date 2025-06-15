
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    { q: "How accurate is the AI search?", a: "Our AI has a 95% accuracy rate in matching queries to relevant profiles." },
    { q: "What data sources do you use?", a: "We aggregate data from public professional networks, company websites, and verified databases." },
    { q: "Is my search data private?", a: "Yes, all searches are encrypted and we never share your query data with third parties." },
    { q: "Can I export search results?", a: "Pro and Enterprise users can export results in CSV, Excel, or integrate via API." },
    { q: "Do you offer team accounts?", a: "Yes, Enterprise plans include team management and collaboration features." },
    { q: "What's the difference between plans?", a: "Plans differ in search volume, advanced features, and support levels." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl font-light tracking-tight text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400">Everything you need to know</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="scroll-reveal bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl transition-colors"
            >
              <button
                className="w-full flex items-center justify-between p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-xl hover:bg-slate-800/40 transition-colors"
                aria-expanded={openIndex === index}
                onClick={() => handleToggle(index)}
                type="button"
              >
                <h4 className="font-semibold text-white text-left">{faq.q}</h4>
                <span
                  className="ml-4 flex items-center justify-center rounded-full bg-slate-800 transition-colors"
                  style={{ width: 32, height: 32 }}
                >
                  {openIndex === index ? (
                    <Minus className="text-blue-400" size={20} strokeWidth={2.5} />
                  ) : (
                    <Plus className="text-blue-400" size={20} strokeWidth={2.5} />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out px-6 ${
                  openIndex === index ? "max-h-40 py-2 opacity-100" : "max-h-0 py-0 opacity-0"
                }`}
                style={{
                  transitionProperty: "max-height, opacity, padding",
                }}
              >
                <p className="text-gray-400">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
