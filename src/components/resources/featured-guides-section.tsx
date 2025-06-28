
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import OptimizedImage from "@/components/optimized-image";
import { Link } from "react-router-dom";

const FeaturedGuidesSection = () => {
  return (
    <section className="mb-16 md:mb-20">
      <div className="text-center mb-8 md:mb-12">
        <HeaderHierarchy level={2} className="mb-4 text-xl md:text-2xl lg:text-3xl">
          Featured <span className="text-[#247EFF]">Wealth Building</span> Guides
        </HeaderHierarchy>
        <p className="text-base md:text-lg text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
          Street-smart blueprints designed for hustlers ready to level up their money game
        </p>
      </div>

      {/* Flexible grid for future guides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
        {/* Featured Guide Card */}
        <Card className="border-[#247EFF]/20 hover:border-[#247EFF]/40 transition-all duration-300 hover:shadow-xl group relative overflow-hidden bg-gradient-to-br from-white/95 to-white/90 dark:from-[#0A0A0A]/95 dark:to-[#0A0A0A]/90 backdrop-blur-sm">
          {/* "FREE" Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              FREE
            </span>
          </div>

          <CardHeader className="p-0">
            {/* Guide Cover Image */}
            <div className="relative overflow-hidden rounded-t-lg">
              <OptimizedImage
                src="/lovable-uploads/b4e3b459-4253-40a2-bc9a-74ec02d85e18.png"
                alt="The $10K Starter Blueprint - Premium Investing Playbook Cover"
                className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <CardTitle className="text-[#0A0A0A] dark:text-brand-cream mb-3">
              <HeaderHierarchy level={3} className="mb-0 text-lg md:text-xl leading-tight">
                The $10K Starter Blueprint
              </HeaderHierarchy>
            </CardTitle>

            <CardDescription className="text-[#0A0A0A]/70 dark:text-brand-cream/70 text-sm md:text-base leading-relaxed mb-4">
              Step-by-step, street-smart investing for first-gen hustlers and underestimated creatives. Real stories, no jargon, actionable moves.
            </CardDescription>

            {/* Key Benefits */}
            <div className="mb-6">
              <p className="text-xs font-medium text-[#0A0A0A]/60 dark:text-brand-cream/60 mb-3 uppercase tracking-wide">
                What You'll Get:
              </p>
              <ul className="space-y-2" role="list">
                {[
                  "Street-smart steps to your first $10K",
                  "Scam-avoidance tips", 
                  "No fluff—just real moves"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#0A0A0A]/80 dark:text-brand-cream/80 text-sm" role="listitem">
                    <div className="w-2 h-2 bg-[#247EFF] rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              asChild 
              className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:scale-105 text-black min-h-[44px] touch-manipulation font-bold text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl border-0" 
              aria-label="Download The $10K Starter Blueprint for free"
            >
              <Link to="/#newsletter">
                Download Free
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Placeholder for future guides - commented out for now */}
        {/*
        <Card className="border-dashed border-2 border-[#247EFF]/30 bg-gradient-to-br from-[#247EFF]/5 to-transparent flex items-center justify-center min-h-[400px] group hover:border-[#247EFF]/50 transition-colors">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#247EFF]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#247EFF]/30 transition-colors">
              <Plus className="w-8 h-8 text-[#247EFF]" />
            </div>
            <p className="text-[#0A0A0A]/60 dark:text-brand-cream/60 font-medium">
              More guides coming soon...
            </p>
          </div>
        </Card>
        */}
      </div>
    </section>
  );
};

export default FeaturedGuidesSection;
