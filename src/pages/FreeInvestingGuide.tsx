
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import FreeInvestingPillar from "@/components/blog/pillar-pages/free-investing-pillar";
import BreadcrumbNavigation from "@/components/breadcrumb-navigation";

const FreeInvestingGuide = () => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title="Free Ways to Start Investing: Complete Beginner's Guide"
        description="Start building generational wealth with $1. Complete guide to micro-investing apps, free investment strategies, and how to invest with no money down."
        keywords="free ways to start investing, micro investing apps, how to start investing with no money, beginner investing guide, acorns stash robinhood, investment apps"
        url="/blog/free-investing-guide"
        type="article"
      />
      
      <Navigation />
      
      <div className="pt-24">
        <BreadcrumbNavigation />
      </div>
      
      <main className="pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <FreeInvestingPillar />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FreeInvestingGuide;
