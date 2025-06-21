
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import { Card, CardContent } from "@/components/ui/card";

const WhyInvestingMatters = () => {
  return (
    <section className="py-16 bg-white/50 dark:bg-brand-black/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <HeaderHierarchy level={2} className="text-center mb-8 text-brand-black dark:text-brand-cream">
            Why Investing Matters for <span className="text-[#247EFF]">Us</span>
          </HeaderHierarchy>
          
          <Card className="bg-gradient-to-r from-[#247EFF]/10 to-green-500/10 border-[#247EFF]/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <blockquote className="text-xl leading-relaxed text-center text-brand-black dark:text-brand-cream italic">
                "They didn't build this system for people like us—but that don't mean we can't run the game. Investing is how you flip your money into more money. Even if you're starting with $1, you're building a foundation for real generational wealth."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyInvestingMatters;
