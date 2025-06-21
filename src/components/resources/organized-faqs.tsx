
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
    <div className={`organized-faqs ${className}`}>
      <FAQSchema faqs={allFAQs} />
      
      <HeaderHierarchy level={2} className="text-center mb-8">
        {title}
      </HeaderHierarchy>
      
      <div className="space-y-6">
        {faqGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="border border-[#247EFF]/20 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleGroup(group.title)}
              className="w-full px-6 py-4 bg-[#247EFF]/10 hover:bg-[#247EFF]/20 transition-colors flex items-center justify-between"
            >
              <HeaderHierarchy level={3} className="mb-0 text-left">
                {group.icon && <span className="mr-2">{group.icon}</span>}
                {group.title}
              </HeaderHierarchy>
              <ChevronDown 
                className={`h-5 w-5 transition-transform ${
                  openGroups.includes(group.title) ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {openGroups.includes(group.title) && (
              <div className="p-6 pt-0">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {group.faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${groupIndex}-${index}`}
                      className="border border-[#247EFF]/10 rounded-lg px-4 py-2"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <HeaderHierarchy level={4} className="mb-0 text-sm font-semibold">
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizedFAQs;
