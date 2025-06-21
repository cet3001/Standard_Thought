
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import StartInvestingHero from "@/components/investing/start-investing-hero";
import WhyInvestingMatters from "@/components/investing/why-investing-matters";
import InvestingStepsSection from "@/components/investing/investing-steps-section";
import InvestingChecklist from "@/components/investing/investing-checklist";
import StreetSmartTips from "@/components/investing/street-smart-tips";
import InvestingTestimonials from "@/components/investing/investing-testimonials";
import InvestingNextMoves from "@/components/investing/investing-next-moves";
import InvestingFAQ from "@/components/investing/investing-faq";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StartInvestingGuide = () => {
  const navigate = useNavigate();
  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "Start Investing Guide", url: "https://www.standardthought.com/start-investing-guide", position: 2 }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Start Investing with $1: Complete Urban Investing Guide | Standardthought"
        description="Flip your first dollar into wealth. Complete guide to micro-investing apps, fractional shares, and building generational wealth from the block with just $1."
        keywords="start investing with 1 dollar, micro investing apps, fractional shares, urban investing, generational wealth building, acorns cash app robinhood stash"
        url="/start-investing-guide"
        type="article"
        breadcrumbs={breadcrumbs}
      />
      
      <Navigation />
      
      <div className="pt-36 pb-4">
        <div className="container mx-auto px-6">
          <Button
            onClick={() => navigate(-1)}
            variant="ghost"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
      </div>
      
      <main className="pb-16">
        <StartInvestingHero />
        <WhyInvestingMatters />
        <InvestingStepsSection />
        <InvestingChecklist />
        <StreetSmartTips />
        <InvestingTestimonials />
        <InvestingNextMoves />
        <InvestingFAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default StartInvestingGuide;
