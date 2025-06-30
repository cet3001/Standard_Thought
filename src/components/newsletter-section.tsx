
import { useState, useEffect } from "react";
import { NewsletterBackground } from "./newsletter/newsletter-background";
import { NewsletterContent } from "./newsletter/newsletter-content";
import { NewsletterForm } from "./newsletter/newsletter-form";
import { MembersOnlyStamp } from "./newsletter/members-only-stamp";

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
      style={{
        background: 'rgba(128, 128, 128, 0.15)'
      }}
    >
      {/* Urban Background - Matches Hero Section */}
      <NewsletterBackground />

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative backdrop-blur-sm overflow-hidden rounded-3xl p-8 border-2"
               style={{ 
                 background: 'transparent',
                 borderColor: 'rgba(255, 215, 0, 0.4)',
                 boxShadow: '0 20px 40px rgba(255, 215, 0, 0.15)'
               }}>
            {/* Enhanced texture backgrounds */}
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_2px_2px,_rgba(0,0,0,1)_1px,_transparent_0)] bg-[length:18px_18px]"></div>
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(135deg,_transparent_46%,_rgba(0,0,0,0.6)_47%,_rgba(0,0,0,0.6)_53%,_transparent_54%)] bg-[length:8px_8px]"></div>

            {/* Blueprint Paper Background */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 215, 0, 0.6) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 215, 0, 0.6) 1px, transparent 1px),
                  linear-gradient(45deg, transparent 10px, rgba(255, 215, 0, 0.05) 10px, rgba(255, 215, 0, 0.05) 20px, transparent 20px),
                  linear-gradient(-45deg, transparent 10px, rgba(255, 215, 0, 0.03) 10px, rgba(255, 215, 0, 0.03) 20px, transparent 20px)
                `,
                backgroundSize: '20px 20px, 20px 20px, 40px 40px, 40px 40px',
                backgroundPosition: '0 0, 0 0, 0 0, 20px 20px'
              }}
            />

            {/* "Members Only" Stamp Overlay */}
            <MembersOnlyStamp />

            {/* Newsletter Content */}
            <NewsletterContent />
            
            {/* Newsletter Form */}
            <NewsletterForm />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes enhanced-pearlescent {
          0% {
            background-position: 0% 50%;
            filter: drop-shadow(0 6px 12px rgba(255, 215, 0, 0.4)) brightness(1);
          }
          50% {
            background-position: 100% 50%;
            filter: drop-shadow(0 8px 16px rgba(255, 215, 0, 0.6)) brightness(1.1);
          }
          100% {
            background-position: 0% 50%;
            filter: drop-shadow(0 6px 12px rgba(255, 215, 0, 0.4)) brightness(1);
          }
        }
      `}</style>
    </section>
  );
};
