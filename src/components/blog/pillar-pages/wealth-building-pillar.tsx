
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import SnippetOptimizedContent from "@/components/seo/snippet-optimized-content";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, PiggyBank, Building, Shield } from "lucide-react";

const WealthBuildingPillar = () => {
  const wealthStrategies = [
    {
      icon: <PiggyBank className="h-6 w-6 text-[#247EFF]" />,
      title: "Emergency Fund First",
      description: "Start with $500-1000 emergency fund before investing",
      timeframe: "2-4 months",
      difficulty: "Beginner"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#247EFF]" />,
      title: "Income Stream Diversification",
      description: "Build multiple income sources through side hustles and investments",
      timeframe: "6-12 months",
      difficulty: "Intermediate"
    },
    {
      icon: <Building className="h-6 w-6 text-[#247EFF]" />,
      title: "Asset Accumulation",
      description: "Focus on buying assets that generate passive income",
      timeframe: "1-3 years",
      difficulty: "Advanced"
    },
    {
      icon: <Shield className="h-6 w-6 text-[#247EFF]" />,
      title: "Wealth Protection",
      description: "Insurance, legal structures, and tax optimization strategies",
      timeframe: "Ongoing",
      difficulty: "Advanced"
    }
  ];

  const survivalToWealthSteps = [
    "Track every dollar for 30 days to understand money flow",
    "Cut unnecessary expenses and redirect to savings",
    "Build $500 emergency fund in high-yield savings account",
    "Start investing $25-50 monthly in index funds",
    "Develop a skill that can generate additional income",
    "Increase emergency fund to 3-6 months of expenses", 
    "Scale investments to 10-20% of income",
    "Explore real estate, business ownership, or other assets"
  ];

  return (
    <div className="comprehensive-wealth-guide">
      <HeaderHierarchy level={1} className="mb-8 text-center">
        From Survival Mode to <span className="text-[#247EFF]">Wealth Mode</span>
      </HeaderHierarchy>

      <Card className="mb-12 bg-gradient-to-r from-[#247EFF]/10 to-blue-100/20 dark:from-[#247EFF]/20 dark:to-blue-900/20">
        <CardContent className="p-8">
          <p className="text-lg leading-relaxed text-[#0A0A0A] dark:text-brand-cream">
            Breaking free from <strong>survival mode</strong> isn't about getting rich quick—it's about building 
            systems that work for you instead of against you. This guide shows you how to transition from 
            <strong> living paycheck to paycheck</strong> to building real wealth through proven strategies 
            that don't require a trust fund or connections.
          </p>
        </CardContent>
      </Card>

      <SnippetOptimizedContent
        title="What Does 'Survival Mode to Wealth Mode' Mean?"
        definition="The transition from survival mode (living paycheck to paycheck, constantly stressed about money) to wealth mode (having systems, assets, and income streams that provide financial security and growth opportunities)."
        summary="This shift requires changing both mindset and money habits—moving from reactive financial decisions to proactive wealth-building strategies."
        className="mb-12"
      />

      <div className="mb-12">
        <HeaderHierarchy level={2} className="mb-8 text-center">
          Core <span className="text-[#247EFF]">Wealth Building</span> Strategies
        </HeaderHierarchy>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wealthStrategies.map((strategy, index) => (
            <Card key={index} className="p-6 border border-[#247EFF]/20 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                {strategy.icon}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-[#0A0A0A] dark:text-brand-cream">
                    {strategy.title}
                  </h3>
                  <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-3">
                    {strategy.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 dark:text-green-400 font-semibold">
                      {strategy.timeframe}
                    </span>
                    <span className="px-3 py-1 bg-[#247EFF]/20 text-[#247EFF] rounded-full text-sm">
                      {strategy.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <SnippetOptimizedContent
        title="Step-by-Step Guide: Breaking Out of Survival Mode"
        steps={survivalToWealthSteps}
        className="mb-12"
      />

      <div className="bg-gradient-to-r from-[#247EFF]/10 via-[#247EFF]/20 to-[#247EFF]/10 rounded-3xl p-8 text-center">
        <HeaderHierarchy level={2} className="mb-4">
          Ready to Make the Transition?
        </HeaderHierarchy>
        <p className="text-lg mb-6 text-[#0A0A0A]/80 dark:text-brand-cream/80">
          Get access to our complete wealth-building toolkit, budgeting templates, and step-by-step action plans.
        </p>
        <Link to="/blog">
          <Button className="bg-[#247EFF] hover:bg-[#0057FF] text-white px-8 py-3 rounded-2xl text-lg">
            Explore Wealth Building Guides
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WealthBuildingPillar;
