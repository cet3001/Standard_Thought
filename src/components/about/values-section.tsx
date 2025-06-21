
import { useEffect, useState } from "react";
import { mindsetPrinciples } from "./values/mindset-principles-data";
import ValuesHeader from "./values/values-header";
import MindsetPrincipleCard from "./values/mindset-principle-card";
import ValuesInternalLinks from "./values/values-internal-links";

const ValuesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 bg-brand-cream dark:bg-brand-black">
      <div className="container mx-auto px-6">
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
