
import { useState, useEffect } from "react";
import { ManifestoBackground } from "./manifesto/manifesto-background";
import { ManifestoGraffiti } from "./manifesto/manifesto-graffiti";
import { ManifestoHeader } from "./manifesto/manifesto-header";
import { ManifestoContent } from "./manifesto/manifesto-content";
import { ManifestoCTA } from "./manifesto/manifesto-cta";

const ManifestoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('[data-section="manifesto"]');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      data-section="manifesto"
      className="py-24 relative overflow-hidden bg-brand-cream dark:bg-brand-black"
    >
      <ManifestoBackground />
      <ManifestoGraffiti />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <ManifestoHeader />
          <ManifestoContent />
          <ManifestoCTA />
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
