
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import { Badge } from "@/components/ui/badge";

const FeaturedGuides = () => {
  const guides = [
    {
      title: "From $0 to $10K: Urban Investing Blueprint",
      description: "Step-by-step guide to building your first $10,000 through street smart money moves",
      tags: ["Investing", "Wealth Building"]
    },
    {
      title: "Credit Score Transformation: 90-Day Plan",
      description: "Proven strategies to increase your credit score by 100+ points in 3 months",
      tags: ["Credit Building", "Financial Recovery"]
    },
    {
      title: "AI Business Launch Kit",
      description: "Complete framework for starting profitable AI side hustles from scratch",
      tags: ["AI Hustles", "Entrepreneurship"]
    }
  ];

  return (
    <div className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-8 mb-16">
      <HeaderHierarchy level={2} className="text-center mb-8">
        Featured Wealth Building Guides
      </HeaderHierarchy>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide, index) => (
          <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <HeaderHierarchy level={3} className="mb-3">
              {guide.title}
            </HeaderHierarchy>
            
            <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-4">
              {guide.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {guide.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="outline" className="border-[#247EFF]/20 text-[#247EFF]">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGuides;
