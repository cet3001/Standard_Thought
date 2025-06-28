
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { NewsletterBackground } from "./newsletter/newsletter-background";
import { NewsletterHeader } from "./newsletter/newsletter-header";
import { NewsletterForm } from "./newsletter/newsletter-form";

export const NewsletterSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('[data-section="newsletter"]');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      data-section="newsletter" 
      className="py-16 sm:py-20 relative overflow-hidden"
    >
      <NewsletterBackground />

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="relative bg-brand-cream/90 dark:bg-brand-black/90 backdrop-blur-sm border-[#247EFF]/30 shadow-2xl overflow-hidden">
            {/* Blueprint Paper Background */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #247EFF 1px, transparent 1px),
                  linear-gradient(to bottom, #247EFF 1px, transparent 1px),
                  linear-gradient(45deg, transparent 10px, rgba(36,126,255,0.05) 10px, rgba(36,126,255,0.05) 20px, transparent 20px),
                  linear-gradient(-45deg, transparent 10px, rgba(36,126,255,0.03) 10px, rgba(36,126,255,0.03) 20px, transparent 20px)
                `,
                backgroundSize: '20px 20px, 20px 20px, 40px 40px, 40px 40px',
                backgroundPosition: '0 0, 0 0, 0 0, 20px 20px'
              }}
            />

            <NewsletterHeader />
            <NewsletterForm />
          </Card>
        </div>
      </div>
    </section>
  );
};
