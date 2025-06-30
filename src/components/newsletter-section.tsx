
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
    >
      {/* Urban Background - Matches Hero Section */}
      <NewsletterBackground />

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative overflow-hidden rounded-3xl p-8">
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
