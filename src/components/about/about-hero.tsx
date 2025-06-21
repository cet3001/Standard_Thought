
import { useEffect, useState } from "react";

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-40 pb-16 bg-brand-cream dark:bg-brand-black">
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">
            Unlock a New <span className="text-[#247EFF]">Mindset</span>
          </h1>
          <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 leading-relaxed">
            This isn't just about money—it's about breaking mental barriers and rewriting the story 
            for those who had to hustle smart from the jump. If you've ever felt like you had to 
            build your own blueprint, you're in the right place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
