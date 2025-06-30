
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import FAQSchema from "@/components/seo/faq-schema";
import { resourcesFAQs } from "./resources-faq-data";

const ResourcesFAQSection = () => {
  // Graffiti-style question icons with more variety
  const graffitiIcons = ["❓", "💸", "🎯", "💯"];

  return (
    <section className="py-12 md:py-16 mx-4 md:mx-0" aria-labelledby="resources-faq-heading">
      <FAQSchema faqs={resourcesFAQs} />
      
      <div className="text-center mb-8 md:mb-12 relative">
        {/* Graffiti Tag Visual - Enhanced */}
        <div className="absolute -top-8 -right-4 md:-right-8 w-28 h-16 transform rotate-12" aria-hidden="true">
          <svg viewBox="0 0 112 64" className="w-full h-full">
            {/* Spray paint effect background - multiple layers */}
            <ellipse cx="56" cy="32" rx="45" ry="25" fill="#ffd700" opacity="0.3"/>
            <ellipse cx="52" cy="28" rx="38" ry="20" fill="#f4d03f" opacity="0.5"/>
            <ellipse cx="58" cy="35" rx="32" ry="15" fill="#f8e71c" opacity="0.4"/>
            
            {/* Main tag text with shadow */}
            <text 
              x="57" 
              y="37" 
              textAnchor="middle" 
              style={{ 
                fontSize: '16px', 
                fontFamily: "'Permanent Marker', 'Kalam', cursive",
                fontWeight: 'bold',
                textShadow: '2px 2px 0px rgba(0,0,0,0.4)',
                fill: '#f8e71c',
                stroke: '#000000',
                strokeWidth: '0.5px'
              }}
            >
              Q&A
            </text>
            
            {/* Drip effects - more scattered */}
            <circle cx="32" cy="45" r="1.8" fill="#ffd700" opacity="0.7"/>
            <circle cx="78" cy="48" r="1.2" fill="#f4d03f" opacity="0.5"/>
            <circle cx="58" cy="52" r="1" fill="#ffeb3b" opacity="0.6"/>
            <circle cx="25" cy="52" r="0.8" fill="#f8e71c" opacity="0.4"/>
            <circle cx="85" cy="45" r="1.5" fill="#ffd700" opacity="0.5"/>
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
              className="bg-white/80 dark:bg-[#0A0A0A]/60 backdrop-blur-sm border border-[#0A0A0A]/10 dark:border-brand-cream/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
            >
              <AccordionTrigger className="text-left hover:no-underline px-6 py-6 transition-colors group">
                <div className="flex items-start gap-4">
                  {/* Enhanced graffiti-style question icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div 
                      className="w-10 h-10 flex items-center justify-center rounded-full transform group-hover:rotate-12 transition-transform duration-300 text-black font-bold relative"
                      style={{
                        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                        backgroundSize: '400% 400%',
                        animation: 'pearlescent 3s ease-in-out infinite',
                        boxShadow: '3px 3px 0px rgba(0,0,0,0.3), inset 1px 1px 0px rgba(255,255,255,0.3)',
                        transform: `rotate(${(index * 7) % 20 - 10}deg)`,
                        border: '2px solid rgba(0,0,0,0.2)'
                      }}
                    >
                      <span className="text-xl drop-shadow-sm" role="img" aria-hidden="true">
                        {graffitiIcons[index % graffitiIcons.length]}
                      </span>
                      
                      {/* Small graffiti drip effect */}
                      <div 
                        className="absolute -bottom-1 left-1/2 w-1 h-2 rounded-full opacity-60"
                        style={{
                          background: 'linear-gradient(to bottom, #f8e71c, transparent)',
                          transform: 'translateX(-50%)'
                        }}
                      />
                    </div>
                  </div>
                  
                  <HeaderHierarchy level={3} className="mb-0 text-lg md:text-xl font-bold leading-tight flex-1 text-left group-hover:text-[#f8e71c] transition-colors">
                    {faq.question}
                  </HeaderHierarchy>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="ml-14">
                  <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80 text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <style>{`
        @keyframes pearlescent {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default ResourcesFAQSection;
