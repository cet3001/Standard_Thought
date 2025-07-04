
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HeaderHierarchy from "@/components/ui/header-hierarchy";
import FAQSchema from "@/components/seo/faq-schema";

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQSectionProps {
  title: string;
  faqs: FAQItem[];
  className?: string;
}

const FAQSection = ({ title, faqs, className = "" }: FAQSectionProps) => {
  return (
    <div className={`faq-section ${className}`}>
      <FAQSchema faqs={faqs} />
      
      <div className="text-center mb-8 md:mb-12 relative">
        {/* Graffiti Tag Visual */}
        <div className="absolute -top-8 -right-4 md:-right-8 w-20 h-12 transform rotate-12" aria-hidden="true">
          <svg viewBox="0 0 80 48" className="w-full h-full">
            {/* Spray paint effect background */}
            <ellipse cx="40" cy="24" rx="35" ry="20" fill="#FFD700" opacity="0.3"/>
            <ellipse cx="38" cy="22" rx="30" ry="15" fill="#FFD700" opacity="0.5"/>
            
            {/* Main tag text */}
            <text 
              x="40" 
              y="28" 
              textAnchor="middle" 
              className="fill-[#247EFF]" 
              style={{ 
                fontSize: '12px', 
                fontFamily: "'Permanent Marker', 'Kalam', cursive",
                fontWeight: 'bold',
                textShadow: '1px 1px 0px rgba(0,0,0,0.3)'
              }}
            >
              FAQ
            </text>
            
            {/* Drip effects */}
            <circle cx="25" cy="35" r="1.5" fill="#FFD700" opacity="0.6"/>
            <circle cx="55" cy="38" r="1" fill="#247EFF" opacity="0.4"/>
            <circle cx="45" cy="40" r="0.8" fill="#FFD700" opacity="0.5"/>
          </svg>
        </div>

        <HeaderHierarchy level={2} className="text-2xl md:text-3xl font-bold">
          {title}
        </HeaderHierarchy>
        
        <p className="text-lg text-brand-black dark:text-brand-cream mt-4 max-w-2xl mx-auto font-medium">
          Real questions, real answers. No corporate BS, just straight talk about building wealth.
        </p>
      </div>
      
      <Accordion type="single" collapsible className="w-full space-y-6">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-gray-50/20 dark:bg-gray-800/10 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <AccordionTrigger className="text-left hover:no-underline py-4 hover:text-[#247EFF] transition-colors">
              <HeaderHierarchy level={3} className="mb-0 text-lg md:text-xl font-semibold leading-tight pr-4">
                {faq.question}
              </HeaderHierarchy>
            </AccordionTrigger>
            <AccordionContent className="text-[#0A0A0A]/80 dark:text-brand-cream/80 pt-4 pb-2 text-base md:text-lg leading-relaxed">
              <div className="whitespace-pre-line">{faq.answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
