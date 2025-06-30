
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import GraffitiIcons from "./graffiti-icons";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCardProps {
  faq: FAQItem;
  index: number;
}

const FAQCard = ({ faq, index }: FAQCardProps) => {
  const graffitiIcons = GraffitiIcons();

  return (
    <AccordionItem 
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
        // Transparent concrete texture overlay - removed heavy white background
        background: `
          rgba(255,255,255,0.15),
          radial-gradient(circle at 20% 30%, rgba(0,0,0,0.05) 1px, transparent 1px),
          radial-gradient(circle at 80% 70%, rgba(0,0,0,0.03) 1px, transparent 1px),
          radial-gradient(circle at 40% 80%, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 15px 15px, 25px 25px, 20px 20px',
        border: '2px solid rgba(0,0,0,0.2)',
        boxShadow: `
          8px 8px 0px rgba(0,0,0,0.15),
          4px 4px 12px rgba(0,0,0,0.2),
          inset 1px 1px 0px rgba(255,255,255,0.3),
          inset -1px -1px 0px rgba(0,0,0,0.05)
        `,
        transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (0.5 + Math.random() * 0.5)}deg)`,
        backdropFilter: 'blur(2px)'
      }}
    >
      {/* Reduced opacity concrete grain overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
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
                background: 'rgba(255,255,255,0.6)',
                boxShadow: `
                  4px 4px 0px rgba(0,0,0,0.2),
                  inset 2px 2px 0px rgba(255,255,255,0.5),
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
          
          <HeaderHierarchy 
            level={3} 
            className="mb-0 text-lg md:text-xl leading-tight flex-1 text-left group-hover:text-[#f8e71c] transition-colors"
            style={{
              fontFamily: "'Permanent Marker', 'Kalam', cursive",
              fontWeight: 'bold',
              textShadow: '2px 2px 0px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)',
              letterSpacing: '0.5px'
            }}
          >
            {faq.question}
          </HeaderHierarchy>
        </div>
      </AccordionTrigger>
      
      <AccordionContent className="px-6 pb-6 pt-2 relative z-10">
        <div className="ml-16">
          <p 
            className="text-[#0A0A0A]/90 dark:text-brand-cream/90 text-base md:text-lg leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: faq.answer
                .replace(/(\$10|spare change investing|credit building|secured cards|3-6 months|30-90 days|get-rich-smart)/gi, 
                  '<span style="background: linear-gradient(45deg, #FFD700, #F4D03F, #FFEB3B); background-size: 200% 200%; animation: pearlescent 3s ease-in-out infinite; padding: 2px 4px; border-radius: 3px; font-weight: 600; text-shadow: 1px 1px 0px rgba(0,0,0,0.2);">$&</span>')
                .replace(/(Hell yeah|Real talk|Nah, this is different)/gi,
                  '<span style="background: linear-gradient(45deg, #FFD700, #F4D03F, #FFEB3B); background-size: 200% 200%; animation: pearlescent 3s ease-in-out infinite; padding: 2px 4px; border-radius: 3px; font-weight: 600; text-shadow: 1px 1px 0px rgba(0,0,0,0.2);">$&</span>')
            }}
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQCard;
