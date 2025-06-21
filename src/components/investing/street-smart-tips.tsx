
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, BookOpen } from "lucide-react";

const StreetSmartTips = () => {
  const tips = [
    {
      title: "Watch Out for Fees",
      description: "Some apps charge monthly fees—read the fine print.",
      icon: AlertTriangle,
      color: "text-red-400"
    },
    {
      title: "Don't Chase Hype",
      description: "Ignore \"get rich quick\" plays. Slow, steady, and consistent wins.",
      icon: TrendingDown,
      color: "text-yellow-400"
    },
    {
      title: "Keep Learning",
      description: "Investing is a skill—don't be afraid to ask questions or look up terms.",
      icon: BookOpen,
      color: "text-blue-400"
    }
  ];

  return (
    <section className="py-16 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <HeaderHierarchy level={2} className="text-center mb-12 text-white">
            Street-Smart <span className="text-[#FFD700]">Tips</span>
          </HeaderHierarchy>
          
          <div className="grid md:grid-cols-3 gap-6">
            {tips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="bg-gray-900 border-[#247EFF]/30">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <IconComponent className={`h-6 w-6 ${tip.color}`} />
                      <span className="text-[#247EFF]">{tip.title}:</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      {tip.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreetSmartTips;
