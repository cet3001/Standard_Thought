
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import SnippetOptimizedContent from "@/components/seo/snippet-optimized-content";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smartphone, PiggyBank, TrendingUp, Shield } from "lucide-react";

const FreeInvestingPillar = () => {
  const freeInvestingApps = [
    {
      icon: <Smartphone className="h-6 w-6 text-[#247EFF]" />,
      name: "Acorns",
      description: "Invest spare change automatically",
      minimum: "$0 to start",
      feature: "Round-up investing"
    },
    {
      icon: <PiggyBank className="h-6 w-6 text-[#247EFF]" />,
      name: "Stash",
      description: "Start with $5, get fractional shares",
      minimum: "$5 minimum",
      feature: "Educational content"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#247EFF]" />,
      name: "Robinhood",
      description: "Commission-free stock trading",
      minimum: "$0 minimum",
      feature: "Fractional shares"
    },
    {
      icon: <Shield className="h-6 w-6 text-[#247EFF]" />,
      name: "Fidelity",
      description: "No account minimums, excellent research",
      minimum: "$0 minimum",
      feature: "Zero expense ratio funds"
    }
  ];

  const investingSteps = [
    "Download a micro-investing app (start with Acorns or Stash)",
    "Connect your bank account and enable round-up investing",
    "Start with $5-10 weekly automatic contributions",
    "Choose a diversified portfolio (80% stocks, 20% bonds for young investors)",
    "Set up automatic investing to remove emotions from decisions",
    "Focus on low-cost index funds that track the S&P 500",
    "Increase contributions by $5-10 monthly as income grows",
    "Don't check your account daily—invest for long-term growth"
  ];

  const commonMistakes = [
    "Waiting for the 'perfect' time to start investing",
    "Trying to time the market or pick individual stocks",
    "Checking investment accounts daily and panic selling",
    "Not starting because you think you need thousands of dollars",
    "Choosing high-fee investment products over low-cost index funds"
  ];

  return (
    <div className="comprehensive-investing-guide">
      <HeaderHierarchy level={1} className="mb-8 text-center">
        Free Ways to <span className="text-[#247EFF]">Start Investing</span> and Building Wealth
      </HeaderHierarchy>

      <Card className="mb-12 bg-gradient-to-r from-green-50/50 to-blue-50/50 dark:from-green-900/20 dark:to-blue-900/20">
        <CardContent className="p-8">
          <p className="text-lg leading-relaxed text-[#0A0A0A] dark:text-brand-cream">
            You can start <strong>building generational wealth</strong> with as little as <strong>$1</strong> using 
            free investing apps and micro-investing strategies. This isn't about getting rich quick—it's about 
            <strong> securing the bag</strong> through consistent, smart money moves that compound over time. 
            Even investing $25 monthly can grow to over $100,000 in 30 years through the power of compound interest.
          </p>
        </CardContent>
      </Card>

      <SnippetOptimizedContent
        title="What is Micro-Investing?"
        definition="Micro-investing allows you to start building wealth with small amounts of money (as little as $1) using apps that automatically invest your spare change or accept tiny recurring deposits into diversified portfolios."
        summary="The key advantage of micro-investing is removing barriers to entry—you don't need thousands of dollars or deep financial knowledge to start building wealth."
        className="mb-12"
      />

      <div className="mb-12">
        <HeaderHierarchy level={2} className="mb-8 text-center">
          Best Free <span className="text-[#247EFF]">Investing Apps</span> for Beginners
        </HeaderHierarchy>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {freeInvestingApps.map((app, index) => (
            <Card key={index} className="p-6 border border-[#247EFF]/20 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                {app.icon}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-[#0A0A0A] dark:text-brand-cream">
                    {app.name}
                  </h3>
                  <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-3">
                    {app.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 dark:text-green-400 font-semibold">
                      {app.minimum}
                    </span>
                    <span className="px-3 py-1 bg-[#247EFF]/20 text-[#247EFF] rounded-full text-sm">
                      {app.feature}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <SnippetOptimizedContent
        title="How to Start Investing with No Money: Step-by-Step Guide"
        steps={investingSteps}
        className="mb-12"
      />

      <SnippetOptimizedContent
        title="Common Investing Mistakes to Avoid"
        bulletPoints={commonMistakes}
        className="mb-12"
      />

      <div className="bg-gradient-to-r from-[#247EFF]/10 via-[#247EFF]/20 to-[#247EFF]/10 rounded-3xl p-8 text-center">
        <HeaderHierarchy level={2} className="mb-4">
          Ready to Start Building Generational Wealth?
        </HeaderHierarchy>
        <p className="text-lg mb-6 text-[#0A0A0A]/80 dark:text-brand-cream/80">
          Get our complete beginner's guide to investing, portfolio templates, and wealth-building strategies.
        </p>
        <Link to="/blog">
          <Button className="bg-[#247EFF] hover:bg-[#0057FF] text-white px-8 py-3 rounded-2xl text-lg">
            Explore Investment Guides
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FreeInvestingPillar;
