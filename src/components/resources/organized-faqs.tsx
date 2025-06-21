
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import FAQSchema from "@/components/seo/faq-schema";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQGroup {
  title: string;
  faqs: FAQItem[];
  icon?: string;
}

interface OrganizedFAQsProps {
  title: string;
  faqGroups: FAQGroup[];
  className?: string;
}

const OrganizedFAQs = ({ title, faqGroups, className = "" }: OrganizedFAQsProps) => {
  const [openGroups, setOpenGroups] = useState<string[]>([]);
  
  // Flatten all FAQs for schema
  const allFAQs = faqGroups.flatMap(group => group.faqs);

  const toggleGroup = (groupTitle: string) => {
    setOpenGroups(prev => 
      prev.includes(groupTitle) 
        ? prev.filter(title => title !== groupTitle)
        : [...prev, groupTitle]
    );
  };

  return (
    <section className={`organized-faqs ${className} mx-4 md:mx-0`} aria-labelledby="faq-main-heading">
      <FAQSchema faqs={allFAQs} />
      
      <HeaderHierarchy level={2} className="text-center mb-6 md:mb-8 text-xl md:text-2xl lg:text-3xl" id="faq-main-heading">
        {title}
      </HeaderHierarchy>
      
      <div className="space-y-4 md:space-y-6" role="list" aria-label="FAQ topic groups">
        {faqGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="border border-[#247EFF]/20 rounded-lg overflow-hidden" role="listitem">
            <button
              onClick={() => toggleGroup(group.title)}
              className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#247EFF]/10 hover:bg-[#247EFF]/20 transition-colors flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#247EFF] focus:ring-offset-2 touch-manipulation min-h-[44px]"
              aria-expanded={openGroups.includes(group.title)}
              aria-controls={`faq-group-${groupIndex}`}
              aria-describedby={`faq-group-${groupIndex}-description`}
            >
              <HeaderHierarchy level={3} className="mb-0 text-left text-base md:text-lg">
                {group.icon && <span className="mr-2" role="img" aria-label={`${group.title} icon`}>{group.icon}</span>}
                {group.title}
              </HeaderHierarchy>
              <ChevronDown 
                className={`h-4 w-4 md:h-5 md:w-5 transition-transform flex-shrink-0 ml-2 ${
                  openGroups.includes(group.title) ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            
            {openGroups.includes(group.title) && (
              <div 
                className="p-4 md:p-6 pt-0" 
                id={`faq-group-${groupIndex}`}
                role="region"
                aria-labelledby={`faq-group-${groupIndex}-heading`}
              >
                <span id={`faq-group-${groupIndex}-description`} className="sr-only">
                  Frequently asked questions about {group.title}
                </span>
                <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
                  {group.faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${groupIndex}-${index}`}
                      className="border border-[#247EFF]/10 rounded-lg px-3 md:px-4 py-2"
                    >
                      <AccordionTrigger 
                        className="text-left hover:no-underline focus:outline-none focus:ring-2 focus:ring-[#247EFF] focus:ring-offset-2 touch-manipulation min-h-[44px] py-3"
                        aria-label={`Expand answer for: ${faq.question}`}
                      >
                        <HeaderHierarchy level={4} className="mb-0 text-sm md:text-base font-semibold leading-tight pr-2">
                          {faq.question}
                        </HeaderHierarchy>
                      </AccordionTrigger>
                      <AccordionContent className="text-[#0A0A0A]/80 dark:text-brand-cream/80 pt-2 text-sm md:text-base leading-relaxed">
                        <div className="whitespace-pre-line" role="region" aria-label="FAQ answer">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrganizedFAQs;
