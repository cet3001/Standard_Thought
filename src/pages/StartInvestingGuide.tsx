
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
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const StartInvestingGuide = () => {
  const navigate = useNavigate();
  const { textureImageUrl } = useUrbanTexture();
  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "Start Investing Guide", url: "https://www.standardthought.com/start-investing-guide", position: 2 }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background - Matching Homepage */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          />
        )}
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>
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
            onClick={() => navigate("/")}
            variant="ghost"
            className="flex items-center gap-2 text-brand-black/70 dark:text-brand-cream/70 hover:text-[#247EFF] mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
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
