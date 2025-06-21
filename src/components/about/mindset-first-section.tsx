
import { useEffect, useState } from "react";

const MindsetFirstSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 bg-white/90 dark:bg-brand-black/80">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <img 
              src="/lovable-uploads/a8faab87-8319-4fa0-ae53-35597c6f8fc5.png" 
              alt="Person looking up at towering buildings from ground level - representing building your own legacy and reaching for success from humble beginnings" 
              className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h2 className="text-4xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">Why Mindset First?</h2>
            <div className="space-y-4 text-[#0A0A0A]/70 dark:text-brand-cream/70">
              <p>
                Every wealth move starts in your head. StandardThought was built for those who had to teach themselves 
                how to think bigger, push past doubt, and turn setbacks into setups.
              </p>
              <p>
                We know what it's like to rewire your brain from survival mode to growth mode. To go from "I can't afford it" 
                to "How can I afford it?" That mental shift isn't just motivation—it's the foundation everything else is built on.
              </p>
              <p>
                We're here for the long haul—helping you build the mental foundation for <span className="text-[#247EFF] font-medium">generational progress</span>. 
                Because when your mindset is right, the money moves follow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindsetFirstSection;
