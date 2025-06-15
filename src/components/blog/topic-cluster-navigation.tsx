
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import { Bot, TrendingUp, CreditCard, Building, BookOpen, Lightbulb } from "lucide-react";

const TopicClusterNavigation = () => {
  const pillarPages = [
    {
      icon: <Bot className="h-8 w-8 text-[#247EFF]" />,
      title: "AI Side Hustles",
      description: "Complete guide to making money with AI tools and automation",
      topics: ["ChatGPT Content Creation", "AI Social Media Management", "Business Automation", "AI Image Generation"],
      route: "/blog/ai-side-hustles-guide",
      cta: "Start AI Hustle"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#247EFF]" />,
      title: "Free Investing",
      description: "How to start building wealth with zero money down",
      topics: ["Micro-Investing Apps", "Index Fund Strategies", "Portfolio Building", "Compound Interest"],
      route: "/blog/free-investing-guide",
      cta: "Start Investing"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-[#247EFF]" />,
      title: "Credit Building",
      description: "Build credit from scratch and improve your financial standing",
      topics: ["Secured Credit Cards", "Credit Utilization", "Credit Monitoring", "Credit Repair"],
      route: "/blog",
      cta: "Fix Your Credit"
    },
    {
      icon: <Building className="h-8 w-8 text-[#247EFF]" />,
      title: "Urban Entrepreneurship",
      description: "Street-smart business strategies for urban markets",
      topics: ["Low-Capital Businesses", "Community Marketing", "Funding Sources", "Scaling Strategies"],
      route: "/blog",
      cta: "Build Your Business"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#247EFF]" />,
      title: "Financial Literacy",
      description: "Master money management and wealth-building fundamentals",
      topics: ["Budgeting Basics", "Emergency Funds", "Debt Elimination", "Tax Optimization"],
      route: "/blog",
      cta: "Master Money"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#247EFF]" />,
      title: "Wealth Mindset",
      description: "Develop the mindset needed for long-term financial success",
      topics: ["Goal Setting", "Financial Habits", "Investment Psychology", "Success Strategies"],
      route: "/blog",
      cta: "Level Up Mindset"
    }
  ];

  return (
    <div className="topic-cluster-hub py-16">
      <div className="text-center mb-12">
        <HeaderHierarchy level={1} className="mb-6">
          Complete <span className="text-[#247EFF]">Financial Education</span> Hub
        </HeaderHierarchy>
        <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-3xl mx-auto">
          Master every aspect of <strong>securing the bag</strong> and <strong>building generational wealth</strong>. 
          From AI side hustles to investment strategies, we've got your complete financial education covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pillarPages.map((pillar, index) => (
          <Card key={index} className="p-6 border border-[#247EFF]/20 hover:shadow-lg hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex items-center gap-4 mb-4">
                {pillar.icon}
                <HeaderHierarchy level={3} className="mb-0">
                  {pillar.title}
                </HeaderHierarchy>
              </div>
              
              <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-4">
                {pillar.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-[#0A0A0A] dark:text-brand-cream">Key Topics:</h4>
                <ul className="space-y-1">
                  {pillar.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60 flex items-center">
                      <span className="w-2 h-2 bg-[#247EFF] rounded-full mr-2"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link to={pillar.route}>
                <Button className="w-full bg-[#247EFF] hover:bg-[#0057FF] text-white rounded-2xl">
                  {pillar.cta}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopicClusterNavigation;
