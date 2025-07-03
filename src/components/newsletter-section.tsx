
import { useState, useEffect } from "react";
import { NewsletterContent } from "./newsletter/newsletter-content";
import { NewsletterForm } from "./newsletter/newsletter-form";
import { MembersOnlyStamp } from "./newsletter/members-only-stamp";
import { SectionOverlayBox } from "@/components/layout";

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
      className="py-16 sm:py-20 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
          <SectionOverlayBox
            className="backdrop-blur-sm border-2"
            style={{
              background: 'rgba(128, 128, 128, 0.3)',
              borderColor: 'rgba(255, 215, 0, 0.4)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
            }}
          >

            {/* "Members Only" Stamp Overlay */}
            <MembersOnlyStamp />

            {/* Newsletter Content */}
            <NewsletterContent />
            
            {/* Newsletter Form */}
            <NewsletterForm />
          </SectionOverlayBox>
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
