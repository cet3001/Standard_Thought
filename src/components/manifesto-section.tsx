
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const ManifestoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToNewsletter = () => {
    const newsletterSection = document.querySelector('[data-section="newsletter"]');
    if (newsletterSection) {
      // Find the actual form element for precise scrolling
      const formElement = newsletterSection.querySelector('form');
      
      if (formElement) {
        const formRect = formElement.getBoundingClientRect();
        const targetPosition = window.pageYOffset + formRect.top;
        // Center form in viewport with extra space for mobile
        const offset = window.innerWidth < 768 ? window.innerHeight * 0.3 : 100;
        
        window.scrollTo({
          top: targetPosition - offset,
          behavior: 'smooth'
        });
      } else {
        // Fallback if form not found
        const offsetTop = newsletterSection.getBoundingClientRect().top + window.pageYOffset;
        const offset = window.innerWidth < 768 ? 300 : 150;
        
        window.scrollTo({
          top: offsetTop - offset,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-brand-cream dark:bg-brand-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#247EFF]/5 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-2xl bg-[#247EFF]/10 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">
              This Is How We <span className="text-[#247EFF]">Level Up</span>
            </h2>
            <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70">
              We don't follow trends—we set them. Everything here is earned through hustle, not handed down through privilege.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {[
              {
                title: "Started From the Bottom",
                content: "If you came up broke, overlooked, or counted out—perfect. We celebrate the ones who had to create their own opportunities. Where you started don't define where you're going.",
                delay: "0.2s"
              },
              {
                title: "No Handouts. Real Hustle.",
                content: "Quick money don't last, but real wealth do. We're about building slow, steady, and strong—one smart move, one connection, one investment at a time.",
                delay: "0.4s"
              },
              {
                title: "We All Eat Together",
                content: "We don't gatekeep game—we share it. When you win, we all win. That's how you build movements that last and communities that thrive.",
                delay: "0.6s"
              },
              {
                title: "Building Legacy, Not Just Bags",
                content: "We're not just securing the bag for today—we're building generational wealth that lasts. Every move is for the kids who come after us, not just the flex.",
                delay: "0.8s"
              }
            ].map((principle, index) => (
              <div 
                key={index}
                className={`bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm p-8 rounded-3xl border border-[#247EFF]/20 transition-all duration-1000 hover:scale-105 hover:shadow-lg hover:shadow-[#247EFF]/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: principle.delay }}
              >
                <h3 className="text-2xl font-bold mb-4 text-[#247EFF]">{principle.title}</h3>
                <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80 leading-relaxed">{principle.content}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center bg-gradient-to-r from-[#247EFF]/10 via-[#247EFF]/20 to-[#247EFF]/10 rounded-3xl p-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-3xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">
              Ready to Level Up? Time to Secure Your Future.
            </h3>
            <p className="text-xl text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-8">
              The only difference between dreaming and building is taking that first real step. If you're ready to put in work, we're ready to show you how.
            </p>
            <Button 
              size="lg"
              onClick={scrollToNewsletter}
              className="bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#247EFF]/30 text-white font-semibold px-8 py-4 rounded-3xl transition-all duration-300 hover:scale-105"
            >
              Let's Get This Bag
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
