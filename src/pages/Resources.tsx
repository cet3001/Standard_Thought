
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import FeaturedSnippets from "@/components/seo/featured-snippets";
import LSIContent from "@/components/lsi-content";
import ResourcesHero from "@/components/resources/resources-hero";
import ResourceCategoriesGrid from "@/components/resources/resource-categories-grid";
import FeaturedGuides from "@/components/resources/featured-guides";
import ResourcesCTA from "@/components/resources/resources-cta";
import ResourcesQASection from "@/components/resources/resources-qa-section";
import UrbanFinanceFAQs from "@/components/faq/urban-finance-faqs";
import ComprehensiveGuidesSection from "@/components/resources/comprehensive-guides-section";
import SnippetOptimizedContent from "@/components/seo/snippet-optimized-content";

const Resources = () => {
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
      
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <ResourcesHero />

          {/* Snippet-Optimized Comprehensive Guides */}
          <ComprehensiveGuidesSection />

          {/* AI Side Hustles Snippet-Optimized Content */}
          <SnippetOptimizedContent
            title="Best AI Tools for Side Hustles in 2024"
            definition="AI side hustles are income-generating activities that leverage artificial intelligence tools to provide services like content creation, automation, and digital marketing without requiring advanced technical skills."
            summary="Most profitable AI side hustles can generate $500-5000+ monthly by offering content writing, social media management, and business automation services to small businesses and entrepreneurs."
            steps={[
              "Choose one AI tool to master completely (ChatGPT for writing, Midjourney for design)",
              "Create a portfolio with 3-5 sample projects using free trials",
              "Set up business profiles on Upwork, Fiverr, and LinkedIn",
              "Price services 20-30% below competitors initially to build reviews",
              "Deliver exceptional results and ask for testimonials",
              "Gradually increase prices as you gain experience and positive feedback",
              "Scale by offering package deals and retainer services",
              "Reinvest profits into better tools and training"
            ]}
            bulletPoints={[
              "Content writing with ChatGPT: $25-100 per article",
              "Social media management using AI tools: $500-2000 per client monthly",
              "AI-powered graphic design: $50-500 per design",
              "Business automation setup: $1000-5000 per project",
              "AI chatbot development: $2000-10000 per implementation"
            ]}
            className="mb-16"
          />

          {/* New Q&A Section */}
          <ResourcesQASection />

          {/* Resource Categories */}
          <ResourceCategoriesGrid />

          <FeaturedGuides />
          
          {/* Comprehensive FAQ Section */}
          <UrbanFinanceFAQs />
          
          <ResourcesCTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
