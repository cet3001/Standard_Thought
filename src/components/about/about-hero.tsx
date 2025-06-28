
import { useEffect, useState } from "react";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { textureImageUrl } = useUrbanTexture();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-40 pb-16 relative overflow-hidden">
      {/* Urban Background - Matches homepage styling */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-60 bg-cover bg-center"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        )}
        
        {/* Background gradient overlay - lighter for better texture visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-slate-700/40 to-slate-900/30"></div>
        
        {/* Content overlay for text readability - reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/60 via-brand-cream/65 to-brand-cream/70 dark:from-brand-black/60 dark:via-brand-black/65 dark:to-brand-black/70"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
