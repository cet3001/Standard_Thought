
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

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

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-brand-cream dark:bg-brand-black urban-texture"
    >
      {/* Dynamic 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated geometric shapes */}
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
          className="absolute w-64 h-64 rounded-2xl bg-gradient-to-br from-[#D4AF37]/15 to-transparent blur-2xl rotate-45"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * 40}px) rotate(45deg)`,
            bottom: '20%',
            right: '15%',
            animation: 'float 6s ease-in-out infinite reverse'
          }}
        ></div>
        
        {/* Urban texture overlay */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 40%, rgba(36, 126, 255, 0.03) 50%, transparent 60%),
                radial-gradient(circle at 30% 70%, rgba(212, 175, 55, 0.05) 0%, transparent 70%),
                linear-gradient(135deg, transparent 30%, rgba(36, 126, 255, 0.02) 50%, transparent 70%)
              `,
              backgroundSize: '100px 100px, 200px 200px, 150px 150px'
            }}
          ></div>
        </div>
      </div>

      {/* Floating Particles */}
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
              <span style={{ animationDelay: '0.1s' }}>Build</span>{' '}
              <span style={{ animationDelay: '0.2s' }}>Your</span>
            </span>
            <span className="block kinetic-text text-[#247EFF] text-6xl md:text-8xl lg:text-9xl">
              <span style={{ animationDelay: '0.3s' }}>Legacy</span>
            </span>
            <span className="block kinetic-text text-3xl md:text-5xl lg:text-6xl">
              <span style={{ animationDelay: '0.4s' }}>From</span>{' '}
              <span style={{ animationDelay: '0.5s' }}>Nothing</span>
            </span>
          </h1>

          {/* Mission Statement with Glow Effect */}
          <div className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl text-[#0A0A0A]/80 dark:text-brand-cream/80 leading-relaxed font-light">
              Figure it out with nothing but{' '}
              <span className="text-[#D4AF37] font-medium">grit</span>,{' '}
              <span className="text-[#D4AF37] font-medium">instinct</span>, and{' '}
              <span className="text-[#D4AF37] font-medium">dreams</span>
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              size="lg" 
              className="bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#D4AF37]/30 text-white font-semibold px-10 py-6 rounded-3xl text-lg transition-all duration-300 hover:scale-105"
            >
              Join the Movement
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-[#D4AF37] bg-[#D4AF37] text-[#0A0A0A] hover:bg-[#D4AF37]/90 hover:shadow-lg hover:shadow-[#D4AF37]/20 font-semibold px-10 py-6 rounded-3xl text-lg transition-all hover:scale-105"
            >
              Explore Stories
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { number: "10K+", label: "Legacy Builders" },
              { number: "500+", label: "Success Stories" },
              { number: "$50M+", label: "Wealth Created" }
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

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-[#247EFF] rounded-full flex justify-center relative">
          <div className="w-1 h-4 bg-[#247EFF] rounded-full mt-3 animate-pulse"></div>
          <div className="absolute -inset-2 border border-[#247EFF]/30 rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
