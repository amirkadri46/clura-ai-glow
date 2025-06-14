
const FAQSection = () => {
  const faqs = [
    { q: "How accurate is the AI search?", a: "Our AI has a 95% accuracy rate in matching queries to relevant profiles." },
    { q: "What data sources do you use?", a: "We aggregate data from public professional networks, company websites, and verified databases." },
    { q: "Is my search data private?", a: "Yes, all searches are encrypted and we never share your query data with third parties." },
    { q: "Can I export search results?", a: "Pro and Enterprise users can export results in CSV, Excel, or integrate via API." },
    { q: "Do you offer team accounts?", a: "Yes, Enterprise plans include team management and collaboration features." },
    { q: "What's the difference between plans?", a: "Plans differ in search volume, advanced features, and support levels." }
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl font-light tracking-tight text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400">Everything you need to know</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="scroll-reveal bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 p-6 rounded-xl hover:bg-slate-800/40 transition-colors">
              <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
              <p className="text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
