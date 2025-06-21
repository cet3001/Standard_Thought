
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import AISideHustlesPillar from "@/components/blog/pillar-pages/ai-side-hustles-pillar";
import BreadcrumbNavigation from "@/components/breadcrumb-navigation";

const AISideHustlesGuide = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "AI Side Hustles", url: "https://www.standardthought.com/blog/ai-side-hustles-guide", position: 2 }
  ];

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title="AI Side Hustles Guide 2024: Make $500-5000+ Monthly with Artificial Intelligence | Standardthought"
        description="Master profitable AI side hustles with step-by-step guides for ChatGPT content creation, AI automation, and artificial intelligence income streams. Perfect for urban entrepreneurs and first-gen builders."
        keywords="AI side hustles 2024, how to make money with AI, ChatGPT side hustle guide, AI business ideas for beginners, artificial intelligence income streams, AI automation business, make money with AI tools, urban AI entrepreneurship"
        url="/blog/ai-side-hustles-guide"
        type="article"
        breadcrumbs={breadcrumbs}
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
