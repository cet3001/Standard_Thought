
import { useState } from "react";
import ResourcesHero from "@/components/resources/resources-hero";
import ResourcesCTA from "@/components/resources/resources-cta";
import ResourcesFAQSection from "@/components/resources/resources-faq-section";
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
          <div className="mb-6 md:mb-8 p-4 md:p-6 bg-gradient-to-r from-[#247EFF]/10 to-[#247EFF]/5 border border-[#247EFF]/20 rounded-xl mx-4 md:mx-0" role="status" aria-live="polite">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#247EFF] rounded-full"></div>
                <p className="text-sm md:text-base text-[#247EFF] font-medium">
                  Showing resources tagged with: <strong className="font-bold text-[#0A0A0A] dark:text-brand-cream">{selectedTag}</strong>
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

        <ResourcesFAQSection />
        
        <ResourcesCTA />
      </div>
    </main>
  );
};

export default ResourcesContent;
