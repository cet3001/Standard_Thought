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
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import FeaturedGuidesSection from "@/components/resources/featured-guides-section";

const Resources = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const { textureImageUrl } = useUrbanTexture();
  
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
    <div className="min-h-screen relative overflow-hidden">
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
      
      {/* Urban Background with Texture - Matching Home/About/Blog Pages */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-50 bg-center"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'auto',
              backgroundPosition: 'center',
              backgroundRepeat: 'repeat'
            }}
          />
        )}
        
        {/* Urban gradient overlay - lighter for better texture visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-slate-700/50 to-slate-900/40"></div>
        
        {/* Content overlay for text readability - reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/70 via-brand-cream/75 to-brand-cream/80 dark:from-brand-black/70 dark:via-brand-black/75 dark:to-brand-black/80"></div>
        
        {/* Floating pearlescent accent elements */}
        <div 
          className="absolute top-20 right-16 w-24 h-24 rounded-full opacity-15 animate-float"
          style={{
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            animation: 'pearlescent 5s ease-in-out infinite, float 8s ease-in-out infinite',
            filter: 'blur(1px)'
          }}
        ></div>
        <div 
          className="absolute bottom-32 left-12 w-16 h-16 rounded-2xl opacity-20 animate-float"
          style={{ 
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            animation: 'pearlescent 4s ease-in-out infinite, float 7s ease-in-out infinite',
            animationDelay: '3s',
            filter: 'blur(0.5px)'
          }}
        ></div>
        <div 
          className="absolute top-40 left-1/3 w-12 h-12 rounded-full opacity-15 animate-float"
          style={{ 
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            animation: 'pearlescent 5s ease-in-out infinite, float 8s ease-in-out infinite',
            animationDelay: '4s',
            filter: 'blur(1px)'
          }}
        ></div>
      </div>
      
      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-24 md:pt-32 pb-12 md:pb-16">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <ResourcesHero />

            {/* NEW: Featured Guides Section */}
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

            <OrganizedFAQs 
              title="Frequently Asked Questions"
              faqGroups={faqGroups}
            />
            
            <ResourcesCTA />
          </div>
        </main>
        
        <Footer />
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
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Resources;
