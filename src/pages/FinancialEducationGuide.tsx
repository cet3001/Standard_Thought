
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import BreadcrumbNavigation from "@/components/breadcrumb-navigation";
import FinancialEducationPillar from "@/components/blog/pillar-pages/financial-education-pillar";

const FinancialEducationGuide = () => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title="Keep It 100 Financial Education: Street-Smart Money Moves Guide"
        description="Learn financial literacy in language that makes sense. No corporate jargon—just real talk about investing, budgeting, credit, and building wealth from the ground up."
        keywords="financial education for beginners, street smart money moves, financial literacy guide, real talk financial advice, investing for urban entrepreneurs, money management strategies"
        url="/financial-education-guide"
        type="article"
      />
      
      <Navigation />
      
      <div className="pt-24">
        <BreadcrumbNavigation />
      </div>
      
      <main className="pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <FinancialEducationPillar />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FinancialEducationGuide;
