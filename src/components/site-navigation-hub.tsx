
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, DollarSign, TrendingUp, Users } from "lucide-react";

const SiteNavigationHub = () => {
  const navigationSections = [
    {
      title: "Builder Stories",
      description: "Real stories from people building wealth from scratch",
      icon: <BookOpen className="h-6 w-6" />,
      link: "/blog",
      badge: "Latest Stories",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Wealth Building Strategies", 
      description: "Step-by-step guides to building your financial foundation",
      icon: <TrendingUp className="h-6 w-6" />,
      link: "/resources",
      badge: "Popular",
      color: "bg-green-100 text-green-800"
    }
  ];

  const handleNavigationClick = (section: { title: string; link: string }) => {
    console.log(`Navigating to ${section.title}: ${section.link}`);
  };

  return (
    <div className="py-16 bg-brand-cream dark:bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-4">
            Explore Standardthought
          </h2>
          <p className="text-lg text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
            Everything you need to build wealth, develop the right mindset, and create your legacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {navigationSections.map((section, index) => (
            <Card key={index} className="border-[#247EFF]/20 hover:border-[#247EFF]/40 transition-colors group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[#247EFF]">{section.icon}</div>
                  <Badge className={section.color}>{section.badge}</Badge>
                </div>
                <CardTitle className="text-[#0A0A0A] dark:text-brand-cream group-hover:text-[#247EFF] transition-colors">
                  {section.title}
                </CardTitle>
                <CardDescription className="text-[#0A0A0A]/70 dark:text-brand-cream/70">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link 
                  to={section.link}
                  onClick={() => handleNavigationClick(section)}
                  className="inline-flex items-center text-[#247EFF] hover:text-[#0057FF] font-medium transition-colors"
                >
                  Explore {section.title}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SiteNavigationHub;
