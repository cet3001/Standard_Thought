
import { useState } from "react";
import ResourcesHero from "@/components/resources/resources-hero";
import ResourcesCTA from "@/components/resources/resources-cta";
import CreditBuildingSection from "@/components/resources/sections/credit-building-section";
import InvestingSection from "@/components/resources/sections/investing-section";
import AIHustlesSection from "@/components/resources/sections/ai-hustles-section";
import FoundationSection from "@/components/resources/sections/foundation-section";
import ResourcesTestimonial from "@/components/resources/resources-testimonial";
import FeaturedGuidesSection from "@/components/resources/featured-guides-section";

const ResourcesContent = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
    console.log(`Filter by tag: ${tag}`);
  };

  return (
    <main className="pt-24 md:pt-32 pb-12 md:pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <ResourcesHero />

        {/* Featured Guides Section */}
        <FeaturedGuidesSection />

        {/* Enhanced Tag Filter Display */}
        {selectedTag && (
          <div className="mb-6 md:mb-8 p-4 md:p-6 bg-gradient-to-r from-yellow-100/20 to-yellow-50/10 border border-yellow-200/30 rounded-xl mx-4 md:mx-0" role="status" aria-live="polite">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{
                  background: 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b)',
                }}></div>
                <p className="text-sm md:text-base font-medium">
                  <span style={{
                    background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                    backgroundSize: '400% 400%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    animation: 'pearlescent 3s ease-in-out infinite'
                  }}>
                    Showing resources tagged with:
                  </span> <strong className="font-bold text-[#0A0A0A] dark:text-brand-cream">{selectedTag}</strong>
                </p>
              </div>
              <button 
                onClick={() => setSelectedTag(null)}
                className="text-xs md:text-sm px-3 py-1.5 bg-gradient-to-r from-accent to-[#FFD700] text-black rounded-full hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 touch-manipulation min-h-[32px] font-semibold"
                aria-label={`Clear filter for ${selectedTag}`}
              >
                Clear Filter ×
              </button>
            </div>
          </div>
        )}

        <div className="space-y-16 md:space-y-20">
          <CreditBuildingSection selectedTag={selectedTag} onTagClick={handleTagClick} />
          <InvestingSection selectedTag={selectedTag} onTagClick={handleTagClick} />
          <AIHustlesSection selectedTag={selectedTag} onTagClick={handleTagClick} />
          <FoundationSection selectedTag={selectedTag} onTagClick={handleTagClick} />
        </div>

        <ResourcesTestimonial />
        
        <ResourcesCTA />
      </div>

      <style>{`
        @keyframes pearlescent {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </main>
  );
};

export default ResourcesContent;
