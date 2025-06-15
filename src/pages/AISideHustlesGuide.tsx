
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import AISideHustlesPillar from "@/components/blog/pillar-pages/ai-side-hustles-pillar";
import BreadcrumbNavigation from "@/components/breadcrumb-navigation";

const AISideHustlesGuide = () => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title="How to Make Money with AI Side Hustles in 2024 | Complete Guide"
        description="Learn how to make $500-5000+ monthly with AI side hustles. Complete guide to ChatGPT content creation, AI automation, and profitable artificial intelligence income streams."
        keywords="AI side hustles, how to make money with AI, ChatGPT side hustle, AI business ideas, artificial intelligence income streams, AI automation business, make money with AI tools"
        url="/blog/ai-side-hustles-guide"
        type="article"
      />
      
      <Navigation />
      
      <div className="pt-24">
        <BreadcrumbNavigation />
      </div>
      
      <main className="pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <AISideHustlesPillar />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AISideHustlesGuide;
