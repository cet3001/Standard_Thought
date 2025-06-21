
import QuestionAnswerContent from "../content-structure/question-answer-content";
import SnippetOptimizedContent from "../seo/snippet-optimized-content";
import HeaderHierarchy from "../content-structure/header-hierarchy";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, ArrowRight, DollarSign, Clock, TrendingUp } from "lucide-react";

const BlogFeaturedQuestions = () => {
  const featuredQuestions = [
    {
      question: "What's the biggest mistake first-gen wealth builders make?",
      answer: "The biggest mistake is trying to copy strategies without understanding the context. Here's what really matters:\n\n• **Know your starting point**: Your credit score, income stability, and risk tolerance aren't the same as someone else's\n• **Build systems, not just income**: Focus on repeatable processes that generate consistent cash flow\n• **Invest in education first**: Understanding compound interest and tax implications saves more money than most 'get rich quick' schemes\n• **Start ugly and improve**: Perfect plans never launch - start with what you have and optimize as you learn\n\nMost people want the Instagram highlight reel, but real wealth comes from boring consistency and smart systems.",
      tags: ["Common Mistakes", "First-Gen Wealth", "Strategy"],
      skillLevel: "Beginner",
      startupCost: "$0",
      quickStartChecklist: [
        "Assess your current financial position (income, debt, credit score)",
        "Set up a simple tracking system for expenses and income",
        "Choose ONE wealth-building strategy to focus on first",
        "Join a community or find an accountability partner",
        "Schedule weekly progress reviews"
      ],
      realStory: "Keisha from Detroit went from $40K debt to $100K net worth in 3 years by focusing on credit repair first, then side hustles.",
      nextMoves: "Ready to build your foundation? Start with our Credit Building Blueprint to establish your financial base.",
      nextMovesLink: "/blog?category=Credit Building",
      actionText: "Read Success Stories",
      actionLink: "/blog?search=success+story"
    },
    {
      question: "How do you know if a side hustle is worth scaling?",
      answer: "A side hustle is ready to scale when you see these 3 clear signals:\n\n**1. Predictable Revenue**: You can forecast monthly income within 20% accuracy\n**2. Systems That Work Without You**: The business runs for at least a week without your direct involvement\n**3. Market Demand Exceeds Your Capacity**: You're turning down work or have a waiting list\n\n**Red flags to avoid scaling:**\n• Income depends entirely on your personal time\n• No clear path to hire/train others\n• Market is too small or seasonal\n• Profit margins are shrinking as you grow\n\nFocus on businesses where your role shifts from 'doing' to 'managing systems.'",
      tags: ["Side Hustles", "Scaling Business", "Decision Framework"],
      skillLevel: "Intermediate",
      startupCost: "$100-500",
      quickStartChecklist: [
        "Track your hustle's revenue for 3 months straight",
        "Document all your processes in a simple guide",
        "Test running the business for 1 week without you",
        "Survey 5 customers about demand and referrals",
        "Calculate true profit margins including your time"
      ],
      realStory: "Carlos scaled his lawn care hustle from $500/month to $5K by systematizing routes and hiring two part-timers.",
      nextMoves: "Got consistent revenue? Check out our Business Scaling Strategies to build systems that work without you.",
      nextMovesLink: "/blog?category=Entrepreneurship",
      actionText: "Explore Scaling Stories",
      actionLink: "/blog?search=scaling+business"
    },
    {
      question: "What financial moves should you make in your first $10K?",
      answer: "Your first $10K is the foundation for everything else. Here's the strategic order:\n\n**First $1K**: Emergency fund in high-yield savings (prevents debt spiral)\n**Next $2K**: Pay off high-interest debt (credit cards, payday loans)\n**Next $2K**: Build credit with secured card + report rent payments\n**Next $3K**: Start investing in index funds (S&P 500, total market)\n**Last $2K**: Skill development or business investment with proven ROI\n\n**Don't do this**: Put everything in crypto, day trading, or 'business opportunities' without emergency funds first.\n\nThis order maximizes your financial stability while building wealth-generating assets.",
      tags: ["Financial Strategy", "Investment Priority", "Wealth Building"],
      skillLevel: "Beginner",
      startupCost: "$1K+",
      quickStartChecklist: [
        "Open a high-yield savings account for emergency fund",
        "List all debts by interest rate (highest first)",
        "Apply for a secured credit card if needed",
        "Research low-cost index funds (Vanguard, Fidelity)",
        "Set up automatic transfers for each goal"
      ],
      realStory: "Jamal followed this exact blueprint and went from broke to $50K invested in 18 months while working retail.",
      nextMoves: "Ready to invest your first $1K? Our Free Investing Guide breaks down exactly which funds to choose and why.",
      nextMovesLink: "/free-investing-guide",
      actionText: "See Investment Stories",
      actionLink: "/blog?search=investment+strategy"
    }
  ];

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStartupCostIcon = (cost: string) => {
    if (cost.includes("$0")) return <CheckCircle className="h-4 w-4 text-green-600" />;
    if (cost.includes("$1K+")) return <TrendingUp className="h-4 w-4 text-blue-600" />;
    return <DollarSign className="h-4 w-4 text-yellow-600" />;
  };

  return (
    <div className="mb-16">
      <HeaderHierarchy level={2} className="text-center mb-6">
        Real Questions. Real Answers. Real Action.
      </HeaderHierarchy>
      
      <p className="text-center text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-12 max-w-2xl mx-auto">
        These aren't generic financial advice questions—they're the exact challenges our community faces, 
        with step-by-step blueprints you can start using today.
      </p>
      
      {/* Strategic Decision Framework - Unique to blog */}
      <SnippetOptimizedContent
        title="Strategic Side Hustle Scaling Framework"
        definition="A systematic approach to evaluating when and how to scale a side business from supplemental income to primary revenue source."
        summary="Scale your side hustle only when you have predictable revenue, working systems, and market demand that exceeds your current capacity."
        steps={[
          "Track revenue patterns for 3+ months to establish predictability",
          "Document your processes so others can replicate your work",
          "Test systems by stepping away for 1 week without income dropping",
          "Survey customers to confirm demand exceeds your availability",
          "Calculate true profit margins including your time at market rate",
          "Create hiring/training systems before you're overwhelmed",
          "Set scaling milestones with specific revenue and time targets",
          "Plan your transition timeline from side hustle to main income"
        ]}
        bulletPoints={[
          "Predictable revenue: Can forecast monthly income within 20% accuracy",
          "Systems independence: Business runs 1+ weeks without direct involvement",
          "Excess demand: Regular waiting list or turning down profitable work",
          "Scalable processes: Clear documentation for training others",
          "Healthy margins: Profit increases (not decreases) with volume",
          "Market validation: Customers actively refer others without incentives"
        ]}
        className="mb-12"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
        {featuredQuestions.map((qa, index) => (
          <Card key={index} className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              {/* Question Header with Tags */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <HeaderHierarchy level={3} className="text-[#247EFF] flex-1">
                  {qa.question}
                </HeaderHierarchy>
                <div className="flex flex-wrap gap-2">
                  <Badge className={`${getSkillLevelColor(qa.skillLevel)} flex items-center gap-1`}>
                    <Clock className="h-3 w-3" />
                    {qa.skillLevel}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    {getStartupCostIcon(qa.startupCost)}
                    {qa.startupCost}
                  </Badge>
                </div>
              </div>
              
              {/* Answer Content */}
              <div className="prose prose-lg max-w-none text-[#0A0A0A] dark:text-brand-cream mb-8">
                <div className="whitespace-pre-line leading-relaxed">{qa.answer}</div>
              </div>
              
              {/* Three-Column Layout for Action Items */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                
                {/* Quick Start Checklist */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <Download className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold text-green-800 dark:text-green-400">Quick Start Checklist</h4>
                  </div>
                  <ul className="space-y-2">
                    {qa.quickStartChecklist.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-[#0A0A0A]/80 dark:text-brand-cream/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Real Story */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-5 w-5 text-[#247EFF]" />
                    <h4 className="font-semibold text-[#247EFF]">Real Results</h4>
                  </div>
                  <p className="text-sm text-[#0A0A0A]/80 dark:text-brand-cream/80 italic leading-relaxed">
                    "{qa.realStory}"
                  </p>
                </div>
                
                {/* Next Moves */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <ArrowRight className="h-5 w-5 text-yellow-600" />
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Next Moves</h4>
                  </div>
                  <p className="text-sm text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-4 leading-relaxed">
                    {qa.nextMoves}
                  </p>
                  <Button 
                    asChild 
                    size="sm" 
                    className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg"
                  >
                    <a href={qa.nextMovesLink}>Level Up →</a>
                  </Button>
                </div>
              </div>
              
              {/* Tags and Main CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#247EFF]/20">
                <div className="flex flex-wrap gap-2">
                  {qa.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="border-[#247EFF]/20 text-[#247EFF]">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  asChild
                  className="bg-[#247EFF] hover:bg-[#0057FF] text-white rounded-lg"
                >
                  <a href={qa.actionLink}>{qa.actionText}</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogFeaturedQuestions;
