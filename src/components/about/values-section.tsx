
import { useEffect, useState } from "react";
import { mindsetPrinciples } from "./values/mindset-principles-data";
import ValuesHeader from "./values/values-header";
import MindsetPrincipleCard from "./values/mindset-principle-card";
import ValuesInternalLinks from "./values/values-internal-links";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const ValuesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { textureImageUrl } = useUrbanTexture();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Urban Background - Matches homepage styling */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-35 bg-cover bg-center"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        )}
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/25 via-slate-700/35 to-slate-900/25"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/65 via-brand-cream/70 to-brand-cream/75 dark:from-brand-black/65 dark:via-brand-black/70 dark:to-brand-black/75"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ValuesHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mindsetPrinciples.map((principle, index) => (
            <MindsetPrincipleCard 
              key={index}
              principle={principle}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <ValuesInternalLinks />
      </div>
    </section>
  );
};

export default ValuesSection;
