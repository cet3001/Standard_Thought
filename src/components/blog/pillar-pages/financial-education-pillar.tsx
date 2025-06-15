
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import SnippetOptimizedContent from "@/components/seo/snippet-optimized-content";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Calculator, CreditCard, TrendingUp } from "lucide-react";

const FinancialEducationPillar = () => {
  const educationTopics = [
    {
      icon: <Calculator className="h-6 w-6 text-green-600" />,
      title: "Budgeting That Actually Works",
      description: "Simple budgeting methods that don't require spreadsheet wizardry",
      focus: "Money Management",
      level: "Beginner"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-green-600" />,
      title: "Credit Score Game Plan",
      description: "Build and repair credit without falling into debt traps",
      focus: "Credit Building",
      level: "Beginner"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: "Investing Without the Jargon",
      description: "Stock market, index funds, and real estate in plain English",
      focus: "Wealth Building",
      level: "Intermediate"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-green-600" />,
      title: "Business and Side Hustle Finance",
      description: "Taxes, business accounts, and scaling your income",
      focus: "Entrepreneurship",
      level: "Advanced"
    }
  ];

  const learningPath = [
    "Master basic budgeting and expense tracking",
    "Build emergency fund of $500-1000",
    "Understand and improve your credit score",
    "Learn about different types of investments",
    "Start investing small amounts consistently",
    "Explore side hustles and additional income streams",
    "Study tax strategies and business structures",
    "Scale investments and build asset portfolio"
  ];

  const commonMistakes = [
    "Waiting to learn until you have 'enough' money to invest",
    "Following complex strategies before mastering the basics",
    "Getting overwhelmed by financial jargon and giving up",
    "Not starting because you think you need perfect knowledge first",
    "Copying strategies without understanding the fundamentals"
  ];

  return (
    <div className="comprehensive-education-guide">
      <HeaderHierarchy level={1} className="mb-8 text-center">
        <span className="text-green-600 dark:text-green-400">Keep It 100</span> Financial Education
      </HeaderHierarchy>

      <Card className="mb-12 bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-900/20 dark:to-emerald-900/20">
        <CardContent className="p-8">
          <p className="text-lg leading-relaxed text-[#0A0A0A] dark:text-brand-cream">
            Real <strong>financial education</strong> cuts through the corporate speak and gives you practical 
            knowledge you can actually use. No gatekeeping, no jargon—just <strong>street-smart money moves</strong> 
            that help you understand how money really works and how to make it work for you.
          </p>
        </CardContent>
      </Card>

      <SnippetOptimizedContent
        title="What is 'Keep It 100' Financial Education?"
        definition="Honest, straightforward financial education that speaks in plain language about money management, investing, and wealth building without corporate jargon or gatekeeping."
        summary="This approach focuses on practical skills and real-world applications rather than theory, making financial literacy accessible to everyone regardless of background."
        className="mb-12"
      />

      <div className="mb-12">
        <HeaderHierarchy level={2} className="mb-8 text-center">
          Core <span className="text-green-600 dark:text-green-400">Financial Education</span> Topics
        </HeaderHierarchy>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationTopics.map((topic, index) => (
            <Card key={index} className="p-6 border border-green-500/20 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                {topic.icon}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-[#0A0A0A] dark:text-brand-cream">
                    {topic.title}
                  </h3>
                  <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-3">
                    {topic.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 dark:text-green-400 font-semibold">
                      {topic.focus}
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-sm">
                      {topic.level}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <SnippetOptimizedContent
        title="Financial Education Learning Path"
        steps={learningPath}
        className="mb-12"
      />

      <SnippetOptimizedContent
        title="Common Financial Education Mistakes to Avoid"
        bulletPoints={commonMistakes}
        className="mb-12"
      />

      <div className="bg-gradient-to-r from-green-50/50 via-emerald-50/50 to-green-50/50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-green-900/20 rounded-3xl p-8 text-center">
        <HeaderHierarchy level={2} className="mb-4">
          Ready to Level Up Your Financial Knowledge?
        </HeaderHierarchy>
        <p className="text-lg mb-6 text-[#0A0A0A]/80 dark:text-brand-cream/80">
          Get access to our complete financial education library, calculators, and step-by-step learning modules.
        </p>
        <Link to="/blog">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-2xl text-lg">
            Explore Financial Education Guides
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FinancialEducationPillar;
