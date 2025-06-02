
import { useEffect, useRef, useState } from "react";

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

  const manifestoPoints = [
    {
      title: "We Build Different",
      content: "While others wait for permission, we create our own opportunities. Legacy isn't inherited—it's built with intention, one decision at a time."
    },
    {
      title: "Failure Is Fuel",
      content: "Every setback is data. Every rejection is redirection. We don't fear failure; we harvest its lessons and use them as stepping stones to greatness."
    },
    {
      title: "Community Over Competition",
      content: "Rising together creates more value than climbing alone. We share knowledge, resources, and connections because abundance multiplies when shared."
    },
    {
      title: "Excellence Is Non-Negotiable",
      content: "Mediocrity is the enemy of legacy. We pursue mastery not for recognition, but because our standards define our destiny."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #D4AF37 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Standard<span className="text-accent">thought</span> Way
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just building businesses—we're building a movement. Here's what drives us, what defines us, and what separates us from everyone else.
          </p>
        </div>

        {/* Manifesto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {manifestoPoints.map((point, index) => (
            <div 
              key={index}
              className={`bg-card border border-border/50 rounded-3xl p-8 transition-all duration-1000 hover:border-accent/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-accent">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-accent/10 via-accent/20 to-accent/10 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Build Your Legacy?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              This isn't for everyone. It's for the ones who see obstacles as opportunities and dreams as blueprints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent hover:bg-accent/90 text-black font-semibold px-8 py-4 rounded-3xl transition-all hover:scale-105">
                Start Your Journey
              </button>
              <button className="border border-accent text-accent hover:bg-accent hover:text-black font-semibold px-8 py-4 rounded-3xl transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
