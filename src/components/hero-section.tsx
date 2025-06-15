
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-cream via-brand-cream to-white dark:from-brand-black dark:via-brand-black dark:to-gray-900 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gradient-to-r from-[#247EFF]/20 to-[#007cba]/20 animate-float blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-accent/30 to-[#247EFF]/20 animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-transparent via-[#247EFF]/5 to-transparent animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Enhanced Main Headline */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Sparkles className="w-12 h-12 text-[#247EFF] animate-pulse" />
              <h1 className="text-6xl md:text-8xl font-bold text-brand-black dark:text-brand-cream leading-tight">
                Build Legacy From{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#247EFF] to-[#007cba] animate-pulse">
                    Nothing
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#247EFF] to-[#007cba] animate-pulse"></div>
                </span>
              </h1>
              <TrendingUp className="w-12 h-12 text-[#247EFF] animate-bounce" />
            </div>
          </div>

          {/* Enhanced Subtitle */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-2xl md:text-3xl text-brand-black/80 dark:text-brand-cream/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join <strong className="text-[#247EFF] animate-pulse">1000+ urban entrepreneurs</strong> building generational wealth from scratch. 
              Get proven frameworks, actionable strategies, and community support.{" "}
              <span className="text-[#247EFF] font-bold">No safety net required.</span>
            </p>
          </div>

          {/* Enhanced Value Props */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
              {[
                { icon: Target, text: "Zero to Hero Blueprints", color: "text-red-500" },
                { icon: TrendingUp, text: "Real Success Stories", color: "text-green-500" },
                { icon: Sparkles, text: "No Fluff, Just Results", color: "text-[#247EFF]" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`bg-white/90 dark:bg-brand-black/90 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in`}
                  style={{ animationDelay: `${index * 200 + 800}ms` }}
                >
                  <item.icon className={`w-16 h-16 ${item.color} mx-auto mb-4 animate-bounce`} style={{ animationDelay: `${index * 100}ms` }} />
                  <p className="text-lg font-semibold text-brand-black dark:text-brand-cream">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#247EFF] to-[#007cba] hover:from-[#007cba] hover:to-[#247EFF] text-white font-bold px-12 py-6 rounded-3xl text-xl shadow-2xl hover:shadow-[#247EFF]/25 hover:scale-110 transition-all duration-300 animate-pulse"
                onClick={() => navigate('/blog')}
              >
                Start Building Today
                <ArrowRight className="ml-3 h-8 w-8 animate-bounce" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white font-bold px-12 py-6 rounded-3xl text-xl hover:scale-105 transition-all duration-300"
                onClick={() => navigate('/resources')}
              >
                Free Resources
                <Sparkles className="ml-3 h-8 w-8" />
              </Button>
            </div>
            
            <p className="text-lg text-brand-black/60 dark:text-brand-cream/60 animate-fade-in" style={{ animationDelay: '1200ms' }}>
              No credit card. No gimmicks. Just real game from real builders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
