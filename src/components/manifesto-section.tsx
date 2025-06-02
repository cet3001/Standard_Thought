
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const ManifestoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-2xl bg-[#D4AF37]/10 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">
              This Is Our <span className="text-[#247EFF]">Standard</span>
            </h2>
            <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70">
              We don't follow. We don't copy. We build from the ground up, 
              with nothing but vision and relentless execution.
            </p>
          </div>

          {/* Manifesto Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {[
              {
                title: "From Nothing",
                content: "We celebrate those who started with empty pockets but full hearts. Your background doesn't determine your destiny—your decisions do.",
                delay: "0.2s"
              },
              {
                title: "No Shortcuts",
                content: "Real wealth is built brick by brick, relationship by relationship, decision by decision. We respect the process and trust the journey.",
                delay: "0.4s"
              },
              {
                title: "Community Over Competition",
                content: "We rise by lifting others. Success shared is success multiplied. The movement grows when everyone wins.",
                delay: "0.6s"
              },
              {
                title: "Legacy Thinking",
                content: "We're not building for today—we're building for generations. Every move is calculated, every decision is intentional.",
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
              Ready to Build Your Legacy?
            </h3>
            <p className="text-xl text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-8">
              Join thousands who've chosen to stop dreaming and start building. 
              Your story starts with a single decision.
            </p>
            <Button 
              size="lg"
              className="bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#D4AF37]/30 text-white font-semibold px-8 py-4 rounded-3xl transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
