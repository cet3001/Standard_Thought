
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import { Card, CardContent } from "@/components/ui/card";

const WhyInvestingMatters = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <HeaderHierarchy level={2} className="text-center mb-8 text-[#247EFF]">
            Why Investing Matters for Us
          </HeaderHierarchy>
          
          <Card className="bg-gradient-to-r from-[#247EFF]/10 to-green-500/10 border-[#247EFF]/30">
            <CardContent className="p-8">
              <blockquote className="text-xl leading-relaxed text-center text-gray-200 italic">
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
