
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const scrollToNewsletter = () => {
    const newsletterSection = document.querySelector('[data-section="newsletter"]');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-brand-cream dark:bg-brand-black urban-texture pt-24"
    >
      {/* Dynamic 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-[#247EFF]/10 to-[#247EFF]/5 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 30}px)`,
            top: '10%',
            left: '10%',
            animation: 'float 8s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 rounded-2xl bg-gradient-to-br from-[#247EFF]/15 to-transparent blur-2xl rotate-45"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * 40}px) rotate(45deg)`,
            bottom: '20%',
            right: '15%',
            animation: 'float 6s ease-in-out infinite reverse'
          }}
        ></div>
        
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 40%, rgba(36, 126, 255, 0.03) 50%, transparent 60%),
                radial-gradient(circle at 30% 70%, rgba(36, 126, 255, 0.05) 0%, transparent 70%),
                linear-gradient(135deg, transparent 30%, rgba(36, 126, 255, 0.02) 50%, transparent 70%)
              `,
              backgroundSize: '100px 100px, 200px 200px, 150px 150px'
            }}
          ></div>
        </div>
      </div>

      <div className="floating-particles">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="particle bg-[#247EFF]"
            style={{
              left: `${10 + (i * 8)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + (i % 4)}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Main Headline with Enhanced Animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-[#0A0A0A] dark:text-brand-cream">
            <span className="block kinetic-text">
              <span style={{ animationDelay: '0.1s' }}>Make</span>{' '}
              <span style={{ animationDelay: '0.2s' }}>Something</span>
            </span>
            <span className="block kinetic-text text-[#247EFF] text-6xl md:text-8xl lg:text-9xl">
              <span style={{ animationDelay: '0.3s' }}>Out</span>{' '}
              <span style={{ animationDelay: '0.4s' }}>of</span>
            </span>
            <span className="block kinetic-text text-3xl md:text-5xl lg:text-6xl">
              <span style={{ animationDelay: '0.5s' }}>Nothing</span>
            </span>
          </h1>

          {/* AEO Quick Answer */}
          <div className={`max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg md:text-xl text-[#0A0A0A]/90 dark:text-brand-cream/90 leading-relaxed font-medium">
              Standard Thought is an urban-minded personal-development hub that turns street smarts into scalable wealth. 
              We're the blueprint for builders who started with nothing and refuse to stay there.
            </p>
          </div>

          <div className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl text-[#0A0A0A]/80 dark:text-brand-cream/80 leading-relaxed font-light">
              No handouts. No shortcuts. This is for{' '}
              <span className="text-[#247EFF] font-medium">hustlers</span>,{' '}
              <span className="text-[#247EFF] font-medium">dreamers</span>, and anyone who's tired of waiting for a seat at the table—so you built your own. If you're trying to turn{' '}
              <span className="text-[#247EFF] font-medium">grind</span> into{' '}
              <span className="text-[#247EFF] font-medium">generational change</span>, you're in the right place.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              size="lg" 
              onClick={scrollToNewsletter}
              className="bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#247EFF]/30 text-white font-semibold px-10 py-6 rounded-3xl text-lg transition-all duration-300 hover:scale-105"
            >
              Get Free Playbook PDF
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-2 border-[#247EFF] bg-[#247EFF] text-white hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#247EFF]/20 font-semibold px-10 py-6 rounded-3xl text-lg transition-all hover:scale-105"
            >
              <Link to="/blog">See Real Stories</Link>
            </Button>
          </div>

          <div className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] dark:text-brand-cream">
              From Rock Bottom to Run-It-Up
            </h2>
          </div>

          <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { number: "500+", label: "Generations Changed" },
              { number: "10,000+", label: "First-Gen Builders" },
              { number: "Everyday", label: "New Blueprints Written" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold text-[#247EFF] mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="absolute inset-0 bg-[#247EFF]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
