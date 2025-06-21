
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
import { useState, useEffect } from "react";
import ResourcesTestimonial from "@/components/resources/resources-testimonial";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";

const Resources = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Apply mobile performance optimizations
  useMobilePerformance();

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
    console.log(`Filter by tag: ${tag}`);
  };

  // Optimize horizontal scroll areas on component mount
  useEffect(() => {
    const optimizeHorizontalScroll = () => {
      // Add scroll indicators to horizontal scroll areas
      const scrollAreas = document.querySelectorAll('.overflow-x-auto');
      scrollAreas.forEach(area => {
        const el = area as HTMLElement;
        
        // Add smooth scrolling
        el.style.scrollBehavior = 'smooth';
        
        // Add scroll snap for better UX on mobile
        if (window.innerWidth <= 768) {
          el.style.scrollSnapType = 'x proximity';
          
          // Add scroll snap to direct children
          Array.from(el.children).forEach(child => {
            (child as HTMLElement).style.scrollSnapAlign = 'start';
          });
        }
      });
    };

    // Run on initial load
    optimizeHorizontalScroll();
    
    // Run on window resize
    const handleResize = () => {
      setTimeout(optimizeHorizontalScroll, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      
      <main className="pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <ResourcesHero />

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
