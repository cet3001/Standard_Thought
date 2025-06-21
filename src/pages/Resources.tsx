import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import FeaturedSnippets from "@/components/seo/featured-snippets";
import LSIContent from "@/components/lsi-content";
import SemanticContentEnhancer from "@/components/seo/semantic-content-enhancer";
import ResourcesHero from "@/components/resources/resources-hero";
import ResourcesCTA from "@/components/resources/resources-cta";
import OrganizedFAQs from "@/components/resources/organized-faqs";
import CreditBuildingSection from "@/components/resources/sections/credit-building-section";
import InvestingSection from "@/components/resources/sections/investing-section";
import AIHustlesSection from "@/components/resources/sections/ai-hustles-section";
import FoundationSection from "@/components/resources/sections/foundation-section";
import { faqGroups } from "@/components/resources/faq-data";
import { useState } from "react";
import ResourcesTestimonial from "@/components/resources/resources-testimonial";

const Resources = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
    console.log(`Filter by tag: ${tag}`);
  };

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title="Hood Financial Literacy: Wealth Building Resources"
        description="Master urban investing, AI side hustles, and credit building. Complete guide to generational wealth building for beginners with street-smart money strategies."
        keywords="hood financial literacy, urban investing strategies, street smart money moves, generational wealth building for beginners, AI side hustles, urban entrepreneurship, credit building strategies, wealth creation resources, financial education, business development tools"
        url="/resources"
        type="website"
      />
      
      <LSIContent primaryKeyword="comprehensive business resources" context="business-strategy" />
      <FeaturedSnippets topic="wealth-building" />
      <SemanticContentEnhancer 
        primaryKeyword="hood financial literacy resources"
        context="financial-literacy"
        voiceSearchTopic="wealth-building"
      />
      
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <ResourcesHero />

          {/* Tag Filter Display */}
          {selectedTag && (
            <div className="mb-8 p-4 bg-[#247EFF]/10 rounded-lg" role="status" aria-live="polite">
              <p className="text-sm text-[#247EFF]">
                Showing resources tagged with: <strong>{selectedTag}</strong>
                <button 
                  onClick={() => setSelectedTag(null)}
                  className="ml-2 text-xs underline hover:no-underline focus:outline-none focus:ring-1 focus:ring-[#247EFF]"
                  aria-label={`Clear filter for ${selectedTag}`}
                >
                  Clear filter
                </button>
              </p>
            </div>
          )}

          <CreditBuildingSection selectedTag={selectedTag} onTagClick={handleTagClick} />
          <InvestingSection selectedTag={selectedTag} onTagClick={handleTagClick} />
          <AIHustlesSection selectedTag={selectedTag} onTagClick={handleTagClick} />
          <FoundationSection selectedTag={selectedTag} onTagClick={handleTagClick} />

          <ResourcesTestimonial />

          <OrganizedFAQs 
            title="Frequently Asked Questions"
            faqGroups={faqGroups}
          />
          
          <ResourcesCTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
