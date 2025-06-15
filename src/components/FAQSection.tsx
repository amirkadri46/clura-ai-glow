
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqs = [
    { 
      id: "item-1",
      q: "How accurate is the AI search?", 
      a: "Our AI has a 95% accuracy rate in matching queries to relevant profiles." 
    },
    { 
      id: "item-2",
      q: "What data sources do you use?", 
      a: "We aggregate data from public professional networks, company websites, and verified databases." 
    },
    { 
      id: "item-3",
      q: "Is my search data private?", 
      a: "Yes, all searches are encrypted and we never share your query data with third parties." 
    },
    { 
      id: "item-4",
      q: "Can I export search results?", 
      a: "Pro and Enterprise users can export results in CSV, Excel, or integrate via API." 
    },
    { 
      id: "item-5",
      q: "Do you offer team accounts?", 
      a: "Yes, Enterprise plans include team management and collaboration features." 
    },
    { 
      id: "item-6",
      q: "What's the difference between plans?", 
      a: "Plans differ in search volume, advanced features, and support levels." 
    }
  ];

  const handleValueChange = (value: string[]) => {
    setOpenItems(value);
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl font-light tracking-tight text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400">Everything you need to know</p>
        </div>
        <Accordion 
          type="multiple" 
          value={openItems} 
          onValueChange={handleValueChange}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="scroll-reveal bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:bg-slate-800/40 transition-colors"
            >
              <AccordionTrigger className="flex justify-between items-center p-6 hover:no-underline">
                <h4 className="font-semibold text-white text-left">{faq.q}</h4>
                <div className="ml-4 flex-shrink-0">
                  {openItems.includes(faq.id) ? (
                    <Minus className="w-5 h-5 text-white border border-white rounded-full p-1" />
                  ) : (
                    <Plus className="w-5 h-5 text-white border border-white rounded-full p-1" />
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-gray-400">{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
