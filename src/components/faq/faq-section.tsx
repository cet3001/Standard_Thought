
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
      
      <HeaderHierarchy level={2} className="text-center mb-8">
        {title}
      </HeaderHierarchy>
      
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border border-[#247EFF]/20 rounded-lg px-6 py-2"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <HeaderHierarchy level={3} className="mb-0 text-base font-semibold">
                {faq.question}
              </HeaderHierarchy>
            </AccordionTrigger>
            <AccordionContent className="text-[#0A0A0A]/80 dark:text-brand-cream/80 pt-2">
              <div className="whitespace-pre-line">{faq.answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
