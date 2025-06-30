
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import FAQSchema from "@/components/seo/faq-schema";
import { resourcesFAQs } from "./resources-faq-data";

const ResourcesFAQSection = () => {
  // Custom graffiti-style SVG icons that match each question's theme
  const graffitiIcons = [
    // Spray-paint question mark for "What if I'm broke?"
    <svg viewBox="0 0 40 40" className="w-full h-full">
      <defs>
        <filter id="spray1">
          <feTurbulence baseFrequency="0.9" numOctaves="4" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
        </filter>
      </defs>
      <path 
        d="M20 5c-4 0-7 3-7 7 0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5c0-1 .5-1.5 2-1.5s2 .5 2 1.5-1 3-3 5c-1.5 1.5-2 2.5-2 4v1h3v-1c0-.5.5-1 1.5-2s3.5-3 3.5-6c0-4-3-7-7-7zm-1.5 25c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5z" 
        fill="#FFD700" 
        filter="url(#spray1)"
        opacity="0.9"
      />
      <circle cx="35" cy="8" r="1.5" fill="#FFD700" opacity="0.6"/>
      <circle cx="8" cy="35" r="1" fill="#FFD700" opacity="0.4"/>
      <circle cx="32" cy="32" r="0.8" fill="#FFD700" opacity="0.5"/>
    </svg>,
    
    // Broken credit card for "Can I use this if my credit's shot?"
    <svg viewBox="0 0 40 40" className="w-full h-full">
      <defs>
        <filter id="grunge1">
          <feTurbulence baseFrequency="0.8" numOctaves="3" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5"/>
        </filter>
      </defs>
      <rect x="6" y="12" width="20" height="12" rx="2" fill="#FF6B6B" filter="url(#grunge1)" opacity="0.8"/>
      <rect x="14" y="20" width="16" height="12" rx="2" fill="#FF4444" filter="url(#grunge1)" opacity="0.9"/>
      <path d="M15 16 L25 16 M15 18 L22 18" stroke="#000" strokeWidth="1" opacity="0.7"/>
      <path d="M18 22 L28 22 M18 24 L25 24" stroke="#000" strokeWidth="1" opacity="0.7"/>
      {/* Crack effect */}
      <path d="M12 10 L28 30 M20 8 L24 32" stroke="#000" strokeWidth="2" opacity="0.6"/>
      <circle cx="35" cy="10" r="1" fill="#FF6B6B" opacity="0.5"/>
      <circle cx="5" cy="35" r="1.2" fill="#FF4444" opacity="0.6"/>
    </svg>,
    
    // Graffiti stopwatch for "How long before I see real results?"
    <svg viewBox="0 0 40 40" className="w-full h-full">
      <defs>
        <filter id="drip1">
          <feTurbulence baseFrequency="0.7" numOctaves="2" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"/>
        </filter>
      </defs>
      <circle cx="20" cy="22" r="12" fill="#00FF88" filter="url(#drip1)" opacity="0.85"/>
      <rect x="18" y="8" width="4" height="4" rx="1" fill="#00FF88" opacity="0.8"/>
      <path d="M20 14 L20 22 L26 26" stroke="#000" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
      <circle cx="20" cy="22" r="2" fill="#000" opacity="0.7"/>
      {/* Drip effects */}
      <ellipse cx="15" cy="35" rx="1" ry="2" fill="#00FF88" opacity="0.6"/>
      <ellipse cx="25" cy="36" rx="0.8" ry="1.5" fill="#00FF88" opacity="0.5"/>
      <circle cx="8" cy="12" r="1" fill="#00FF88" opacity="0.4"/>
      <circle cx="32" cy="8" r="1.2" fill="#00FF88" opacity="0.6"/>
    </svg>,
    
    // Graffiti "100" for "Is this just another finance course?"
    <svg viewBox="0 0 40 40" className="w-full h-full">
      <defs>
        <filter id="bubble1">
          <feTurbulence baseFrequency="0.6" numOctaves="3" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
        </filter>
      </defs>
      <text 
        x="20" 
        y="26" 
        textAnchor="middle" 
        className="font-black" 
        style={{ 
          fontSize: '18px', 
          fontFamily: "'Permanent Marker', cursive",
          fill: '#FF1493',
          filter: 'url(#bubble1)',
          opacity: 0.9,
          stroke: '#000',
          strokeWidth: '0.5px'
        }}
      >
        100
      </text>
      {/* Bubble/spray effects */}
      <circle cx="10" cy="10" r="1.5" fill="#FF1493" opacity="0.5"/>
      <circle cx="30" cy="8" r="1" fill="#FF1493" opacity="0.6"/>
      <circle cx="32" cy="30" r="1.2" fill="#FF1493" opacity="0.4"/>
      <circle cx="8" cy="32" r="0.8" fill="#FF1493" opacity="0.7"/>
      <circle cx="35" cy="15" r="0.6" fill="#FF1493" opacity="0.5"/>
    </svg>
  ];

  return (
    <section className="py-12 md:py-16 mx-4 md:mx-0" aria-labelledby="resources-faq-heading">
      <FAQSchema faqs={resourcesFAQs} />
      
      <div className="text-center mb-8 md:mb-12 relative">
        {/* Enhanced Graffiti Tag Visual */}
        <div className="absolute -top-8 -right-4 md:-right-8 w-32 h-20 transform rotate-12" aria-hidden="true">
          <svg viewBox="0 0 128 80" className="w-full h-full">
            {/* Multiple spray paint layers */}
            <ellipse cx="64" cy="40" rx="50" ry="30" fill="#ffd700" opacity="0.3"/>
            <ellipse cx="58" cy="35" rx="42" ry="25" fill="#f4d03f" opacity="0.5"/>
            <ellipse cx="70" cy="45" rx="38" ry="20" fill="#f8e71c" opacity="0.4"/>
            <ellipse cx="64" cy="40" rx="30" ry="15" fill="#ffeb3b" opacity="0.6"/>
            
            {/* Graffiti-style "Q&A" text */}
            <text 
              x="64" 
              y="48" 
              textAnchor="middle" 
              style={{ 
                fontSize: '20px', 
                fontFamily: "'Permanent Marker', 'Kalam', cursive",
                fontWeight: 'bold',
                textShadow: '2px 2px 0px rgba(0,0,0,0.4)',
                fill: '#f8e71c',
                stroke: '#000000',
                strokeWidth: '0.8px'
              }}
            >
              Q&A
            </text>
            
            {/* Enhanced drip and spray effects */}
            <circle cx="25" cy="60" r="2" fill="#ffd700" opacity="0.7"/>
            <circle cx="95" cy="65" r="1.5" fill="#f4d03f" opacity="0.5"/>
            <circle cx="64" cy="70" r="1.2" fill="#ffeb3b" opacity="0.6"/>
            <circle cx="20" cy="68" r="1" fill="#f8e71c" opacity="0.4"/>
            <circle cx="105" cy="55" r="1.8" fill="#ffd700" opacity="0.5"/>
            <circle cx="45" cy="75" r="0.8" fill="#f4d03f" opacity="0.6"/>
            <circle cx="85" cy="72" r="1" fill="#ffeb3b" opacity="0.4"/>
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
              className="relative overflow-hidden"
              style={{
                // Uneven, hand-cut border using clip-path
                clipPath: `polygon(
                  ${2 + Math.random() * 2}% ${1 + Math.random() * 2}%, 
                  ${96 + Math.random() * 2}% ${0 + Math.random() * 3}%, 
                  ${98 + Math.random() * 1}% ${97 + Math.random() * 2}%, 
                  ${1 + Math.random() * 2}% ${98 + Math.random() * 1}%
                )`,
                // Concrete texture overlay
                background: `
                  linear-gradient(135deg, 
                    rgba(255,255,255,0.9) 0%, 
                    rgba(248,248,248,0.85) 50%, 
                    rgba(240,240,240,0.8) 100%
                  ),
                  radial-gradient(circle at 20% 30%, rgba(0,0,0,0.05) 1px, transparent 1px),
                  radial-gradient(circle at 80% 70%, rgba(0,0,0,0.03) 1px, transparent 1px),
                  radial-gradient(circle at 40% 80%, rgba(0,0,0,0.04) 1px, transparent 1px)
                `,
                backgroundSize: '100% 100%, 15px 15px, 25px 25px, 20px 20px',
                border: '2px solid rgba(0,0,0,0.1)',
                boxShadow: `
                  4px 4px 0px rgba(0,0,0,0.1),
                  inset 1px 1px 0px rgba(255,255,255,0.5),
                  inset -1px -1px 0px rgba(0,0,0,0.05)
                `,
                transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (0.5 + Math.random() * 0.5)}deg)`
              }}
            >
              {/* Additional concrete grain overlay */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background: `
                    repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 1px,
                      rgba(0,0,0,0.02) 1px,
                      rgba(0,0,0,0.02) 2px
                    ),
                    repeating-linear-gradient(
                      -45deg,
                      transparent,
                      transparent 1px,
                      rgba(0,0,0,0.015) 1px,
                      rgba(0,0,0,0.015) 3px
                    )
                  `
                }}
              />

              <AccordionTrigger className="text-left hover:no-underline px-6 py-6 transition-colors group relative z-10">
                <div className="flex items-start gap-4">
                  {/* Enhanced graffiti-style question icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div 
                      className="w-12 h-12 flex items-center justify-center rounded-full transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 relative"
                      style={{
                        background: 'rgba(255,255,255,0.9)',
                        boxShadow: `
                          4px 4px 0px rgba(0,0,0,0.2),
                          inset 2px 2px 0px rgba(255,255,255,0.8),
                          inset -2px -2px 0px rgba(0,0,0,0.1)
                        `,
                        transform: `rotate(${(index * 7) % 20 - 10}deg)`,
                        border: '3px solid rgba(0,0,0,0.15)',
                        clipPath: `polygon(
                          ${5 + Math.random() * 5}% ${2 + Math.random() * 3}%, 
                          ${92 + Math.random() * 5}% ${1 + Math.random() * 4}%, 
                          ${96 + Math.random() * 2}% ${94 + Math.random() * 4}%, 
                          ${3 + Math.random() * 4}% ${95 + Math.random() * 3}%
                        )`
                      }}
                    >
                      <div className="w-8 h-8">
                        {graffitiIcons[index % graffitiIcons.length]}
                      </div>
                      
                      {/* Graffiti drip effect */}
                      <div 
                        className="absolute -bottom-2 left-1/2 w-1.5 h-3 rounded-full opacity-60"
                        style={{
                          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)',
                          transform: `translateX(-50%) rotate(${Math.random() * 20 - 10}deg)`
                        }}
                      />
                    </div>
                  </div>
                  
                  <HeaderHierarchy level={3} className="mb-0 text-lg md:text-xl font-bold leading-tight flex-1 text-left group-hover:text-[#f8e71c] transition-colors">
                    {faq.question}
                  </HeaderHierarchy>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-6 pb-6 pt-2 relative z-10">
                <div className="ml-16">
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
