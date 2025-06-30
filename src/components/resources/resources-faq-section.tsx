
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import FAQSchema from "@/components/seo/faq-schema";
import { resourcesFAQs } from "./resources-faq-data";

const ResourcesFAQSection = () => {
  // Graffiti-style question icons
  const questionIcons = ["❓", "💸", "🎯", "💯"];

  return (
    <section className="py-12 md:py-16 mx-4 md:mx-0" aria-labelledby="resources-faq-heading">
      <FAQSchema faqs={resourcesFAQs} />
      
      <div className="text-center mb-8 md:mb-12 relative">
        {/* Graffiti Tag Visual */}
        <div className="absolute -top-6 -right-4 md:-right-8 w-24 h-14 transform rotate-12" aria-hidden="true">
          <svg viewBox="0 0 96 56" className="w-full h-full">
            {/* Spray paint effect background */}
            <ellipse cx="48" cy="28" rx="40" ry="22" fill="#FFD700" opacity="0.3"/>
            <ellipse cx="45" cy="25" rx="35" ry="18" fill="#FFD700" opacity="0.5"/>
            
            {/* Main tag text */}
            <text 
              x="48" 
              y="32" 
              textAnchor="middle" 
              className="fill-[#247EFF]" 
              style={{ 
                fontSize: '14px', 
                fontFamily: "'Permanent Marker', 'Kalam', cursive",
                fontWeight: 'bold',
                textShadow: '1px 1px 0px rgba(0,0,0,0.3)'
              }}
            >
              Q&A
            </text>
            
            {/* Drip effects */}
            <circle cx="30" cy="40" r="1.5" fill="#FFD700" opacity="0.6"/>
            <circle cx="65" cy="42" r="1" fill="#247EFF" opacity="0.4"/>
            <circle cx="50" cy="45" r="0.8" fill="#FFD700" opacity="0.5"/>
          </svg>
        </div>

        <HeaderHierarchy level={2} className="text-2xl md:text-3xl font-bold mb-4" id="resources-faq-heading">
          Real Questions, Real Answers
        </HeaderHierarchy>
        
        <p className="text-lg text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
          No corporate BS, just straight talk about building wealth from the ground up.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-6">
          {resourcesFAQs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/80 dark:bg-[#0A0A0A]/60 backdrop-blur-sm border border-[#247EFF]/20 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
            >
              <AccordionTrigger className="text-left hover:no-underline px-6 py-6 hover:text-[#247EFF] transition-colors group">
                <div className="flex items-start gap-4">
                  {/* Graffiti-style question icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div 
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] transform group-hover:rotate-12 transition-transform duration-300"
                      style={{
                        boxShadow: '2px 2px 0px rgba(0,0,0,0.2)',
                        transform: `rotate(${(index * 5) % 15 - 7}deg)`
                      }}
                    >
                      <span className="text-lg" role="img" aria-hidden="true">
                        {questionIcons[index % questionIcons.length]}
                      </span>
                    </div>
                  </div>
                  
                  <HeaderHierarchy level={3} className="mb-0 text-lg md:text-xl font-bold leading-tight flex-1 text-left">
                    {faq.question}
                  </HeaderHierarchy>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="ml-12">
                  <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80 text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ResourcesFAQSection;
