
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import FeaturedSnippets from "@/components/seo/featured-snippets";
import LSIContent from "@/components/lsi-content";
import SemanticContentEnhancer from "@/components/seo/semantic-content-enhancer";
import { useEffect } from "react";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import ResourcesBackground from "@/components/resources/resources-background";
import ResourcesContent from "@/components/resources/resources-content";
import ResourcesAnimations from "@/components/resources/resources-animations";

const Resources = () => {
  // Apply mobile performance optimizations
  useMobilePerformance();

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
      
      {/* Urban Background with Texture */}
      <ResourcesBackground />
      
      <div className="relative z-10">
        <Navigation />
        <ResourcesContent />
        <Footer />
      </div>

      <ResourcesAnimations />
    </div>
  );
};

export default Resources;
