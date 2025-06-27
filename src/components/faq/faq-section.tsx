
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
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
      
      <HeaderHierarchy level={2} className="text-center mb-8 md:mb-12 text-2xl md:text-3xl">
        {title}
      </HeaderHierarchy>
      
      <Accordion type="single" collapsible className="w-full space-y-6">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-white/70 dark:bg-brand-black/50 backdrop-blur-sm border border-[#247EFF]/20 rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-all duration-200"
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
