
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import SnippetOptimizedContent from "@/components/seo/snippet-optimized-content";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, DollarSign, TrendingUp, Zap } from "lucide-react";

const AISideHustlesPillar = () => {
  const aiBusinessIdeas = [
    {
      icon: <Bot className="h-6 w-6 text-[#247EFF]" />,
      title: "AI Content Creation Services",
      description: "Write articles, social media posts, and marketing copy using ChatGPT",
      earning: "$25-100 per article",
      difficulty: "Beginner"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-[#247EFF]" />,
      title: "AI-Powered Social Media Management",
      description: "Manage social accounts using AI automation tools",
      earning: "$500-2000 per client/month",
      difficulty: "Intermediate"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#247EFF]" />,
      title: "Business Automation Setup",
      description: "Help small businesses automate workflows with AI",
      earning: "$1000-5000 per project",
      difficulty: "Advanced"
    },
    {
      icon: <Zap className="h-6 w-6 text-[#247EFF]" />,
      title: "AI Image Generation Business",
      description: "Create custom graphics and designs using Midjourney",
      earning: "$50-500 per design",
      difficulty: "Beginner"
    }
  ];

  const steps = [
    "Choose one AI tool to master completely (ChatGPT, Midjourney, or Make.com)",
    "Create a portfolio with 3-5 sample projects using free trials",
    "Set up business profiles on Upwork, Fiverr, and LinkedIn",
    "Price services 20-30% below competitors to build reviews",
    "Deliver exceptional results and ask for testimonials",
    "Gradually increase prices as you gain experience",
    "Scale by offering package deals and retainer services",
    "Reinvest profits into better tools and training"
  ];

  return (
    <div className="comprehensive-ai-guide">
      <HeaderHierarchy level={1} className="mb-8 text-center">
        How to Make Money with <span className="text-[#247EFF]">AI Side Hustles</span> in 2024
      </HeaderHierarchy>

      <Card className="mb-12 bg-gradient-to-r from-[#247EFF]/10 to-blue-100/20 dark:from-[#247EFF]/20 dark:to-blue-900/20">
        <CardContent className="p-8">
          <p className="text-lg leading-relaxed text-[#0A0A0A] dark:text-brand-cream">
            <strong>AI side hustles</strong> are the fastest way to start <strong>securing the bag</strong> in 2024. 
            You don't need to be tech-savvy—just smart about using existing AI tools to solve real problems for businesses. 
            This complete guide shows you exactly how to turn AI tools into consistent income streams that can generate 
            <strong> $500-5000+ monthly</strong> within 3-6 months.
          </p>
        </CardContent>
      </Card>

      <SnippetOptimizedContent
        title="What Are AI Side Hustles?"
        definition="AI side hustles are income-generating activities that use artificial intelligence tools like ChatGPT, Midjourney, and automation platforms to provide services without requiring advanced technical skills or large upfront investments."
        summary="Most successful AI side hustles focus on content creation, social media management, and business automation—services that businesses desperately need but don't have time to handle themselves."
        className="mb-12"
      />

      <div className="mb-12">
        <HeaderHierarchy level={2} className="mb-8 text-center">
          Top AI Side Hustles for <span className="text-[#247EFF]">Securing the Bag</span>
        </HeaderHierarchy>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiBusinessIdeas.map((idea, index) => (
            <Card key={index} className="p-6 border border-[#247EFF]/20 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                {idea.icon}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-[#0A0A0A] dark:text-brand-cream">
                    {idea.title}
                  </h3>
                  <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-3">
                    {idea.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 dark:text-green-400 font-semibold">
                      {idea.earning}
                    </span>
                    <span className="px-3 py-1 bg-[#247EFF]/20 text-[#247EFF] rounded-full text-sm">
                      {idea.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <SnippetOptimizedContent
        title="Step-by-Step Guide to Starting Your AI Side Hustle"
        steps={steps}
        className="mb-12"
      />

      <div className="bg-gradient-to-r from-[#247EFF]/10 via-[#247EFF]/20 to-[#247EFF]/10 rounded-3xl p-8 text-center">
        <HeaderHierarchy level={2} className="mb-4">
          Ready to Start Your AI Side Hustle?
        </HeaderHierarchy>
        <p className="text-lg mb-6 text-[#0A0A0A]/80 dark:text-brand-cream/80">
          Get access to our complete AI side hustle toolkit, templates, and step-by-step tutorials.
        </p>
        <Link to="/blog">
          <Button className="bg-[#247EFF] hover:bg-[#0057FF] text-white px-8 py-3 rounded-2xl text-lg">
            Explore AI Hustle Guides
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AISideHustlesPillar;
