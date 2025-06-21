
import QuestionAnswerContent from "../content-structure/question-answer-content";
import SnippetOptimizedContent from "../seo/snippet-optimized-content";
import HeaderHierarchy from "../content-structure/header-hierarchy";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, ArrowRight, DollarSign, Clock, TrendingUp, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";

const BlogFeaturedQuestions = () => {
  const [currentRotation, setCurrentRotation] = useState(0);

  // Complete question pool for rotation
  const questionPool = [
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
      realStories: [
        "Keisha from Detroit went from $40K debt to $100K net worth in 3 years by focusing on credit repair first, then side hustles.",
        "Marcus in Baltimore avoided the crypto trap and built steady wealth through index funds and a lawn care business.",
        "Tasha from Phoenix started with budgeting apps and now runs a $50K/year bookkeeping service."
      ],
      nextMoves: "Ready to build your foundation? Start with our Credit Building Blueprint to establish your financial base.",
      nextMovesLink: "/blog?category=Credit Building",
      actionText: "Read Keisha's Full Story",
      actionLink: "/blog?search=keisha+detroit+success",
      secondaryActionText: "See More Success Stories",
      secondaryActionLink: "/blog?search=success+story"
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
      realStories: [
        "Carlos scaled his lawn care hustle from $500/month to $5K by systematizing routes and hiring two part-timers.",
        "Jasmine turned her Etsy shop into a $3K/month business by creating templates others could customize.",
        "DeShawn went from weekend car detailing to a 4-location operation by documenting everything and training others."
      ],
      nextMoves: "Got consistent revenue? Check out our Business Scaling Strategies to build systems that work without you.",
      nextMovesLink: "/blog?category=Entrepreneurship",
      actionText: "Read Carlos's Scaling Story",
      actionLink: "/blog?search=carlos+lawn+care+scaling",
      secondaryActionText: "Explore More Scaling Stories",
      secondaryActionLink: "/blog?search=scaling+business"
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
      realStories: [
        "Jamal followed this exact blueprint and went from broke to $50K invested in 18 months while working retail.",
        "Maya used this system to pay off $8K in credit card debt and start investing within her first year.",
        "Andre prioritized his emergency fund first and avoided going back into debt when his car broke down."
      ],
      nextMoves: "Ready to invest your first $1K? Our Free Investing Guide breaks down exactly which funds to choose and why.",
      nextMovesLink: "/free-investing-guide",
      actionText: "Read Jamal's Investment Journey",
      actionLink: "/blog?search=jamal+investment+strategy",
      secondaryActionText: "See All Investment Stories",
      secondaryActionLink: "/blog?search=investment+strategy"
    },
    {
      question: "How long does it take to build generational wealth from nothing?",
      answer: "Real generational wealth takes 10-20 years of consistent action, but you'll see meaningful progress much sooner:\n\n**Year 1-2**: Foundation building (emergency fund, debt payoff, credit repair)\n**Year 3-5**: Wealth acceleration (investing, side hustles, skill development)\n**Year 5-10**: System optimization (business scaling, advanced investing, tax strategies)\n**Year 10-20**: Legacy building (real estate, business ownership, teaching others)\n\n**The key**: Start with what you have, stay consistent, and compound your efforts. Most people see their first $10K within 2-3 years, $100K by year 7-10.\n\nGenerational wealth isn't just money—it's knowledge, systems, and mindset you pass down.",
      tags: ["Generational Wealth", "Timeline", "Long-term Strategy"],
      skillLevel: "Beginner",
      startupCost: "$0",
      quickStartChecklist: [
        "Set your 20-year wealth vision and work backwards",
        "Start tracking net worth monthly (even if it's negative)",
        "Choose your first wealth-building pillar (investing, business, or real estate)",
        "Find mentors or examples who've walked this path",
        "Document your journey to teach others later"
      ],
      realStories: [
        "Keisha from Detroit went from $40K debt to $100K net worth in 3 years by staying consistent with her plan.",
        "The Johnson family in Memphis built their first $250K in 8 years through real estate and business ownership.",
        "Tony from Oakland started at 25 with nothing and retired his mom at 40 through systematic wealth building."
      ],
      nextMoves: "Ready to start your wealth journey? Our Generational Wealth Blueprint shows you exactly how to build lasting legacy.",
      nextMovesLink: "/wealth-building-strategies",
      actionText: "Read Tony's Full Journey",
      actionLink: "/blog?search=tony+oakland+generational+wealth",
      secondaryActionText: "See More Wealth Stories",
      secondaryActionLink: "/blog?search=generational+wealth"
    },
    {
      question: "What business can I start with $500 or less?",
      answer: "Here are proven businesses you can launch with $500 or less:\n\n**Service-Based ($0-100)**:\n• Virtual assistant, tutoring, social media management\n• House cleaning, car detailing, pet sitting\n• Freelance writing, graphic design, web development\n\n**Product-Based ($100-500)**:\n• Print-on-demand (t-shirts, mugs, phone cases)\n• Dropshipping (start with one niche)\n• Digital products (courses, templates, ebooks)\n• Reselling (thrift flips, wholesale products)\n\n**The secret**: Start with services to build capital, then reinvest in products for passive income.",
      tags: ["Low-Cost Business", "Entrepreneurship", "Side Hustles"],
      skillLevel: "Beginner",
      startupCost: "$0-500",
      quickStartChecklist: [
        "Pick ONE business model that matches your skills",
        "Set up basic online presence (social media + simple website)",
        "Create your first offer and price it confidently",
        "Find your first 3 customers through your network",
        "Reinvest first profits to improve and scale"
      ],
      realStories: [
        "Marcus in Atlanta started a cleaning business with $100 in supplies and landed his first client in a week.",
        "Jasmine launched her print-on-demand store with $150 and hit $1K/month within 4 months.",
        "Kevin started dropshipping phone accessories with $300 and scaled to $2K/month profit in 6 months."
      ],
      nextMoves: "Ready to launch? Download our Business Startup Checklist and get your first sale within 30 days.",
      nextMovesLink: "/blog?category=Bootstrapping",
      actionText: "Read Marcus's Startup Story",
      actionLink: "/blog?search=marcus+atlanta+cleaning+business",
      secondaryActionText: "See All Startup Stories",
      secondaryActionLink: "/blog?search=low+cost+business"
    }
  ];

  // Auto-rotate questions every 30 seconds for demo, or implement based on time/analytics
  useEffect(() => {
    const rotationTimer = setInterval(() => {
      setCurrentRotation((prev) => (prev + 1) % Math.min(3, questionPool.length));
    }, 30000); // 30 seconds for demo, adjust as needed

    return () => clearInterval(rotationTimer);
  }, []);

  // Get current set of featured questions (show 3 at a time)
  const featuredQuestions = questionPool.slice(currentRotation, currentRotation + 3);
  if (featuredQuestions.length < 3) {
    featuredQuestions.push(...questionPool.slice(0, 3 - featuredQuestions.length));
  }

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
      <div className="flex items-center justify-between mb-6">
        <HeaderHierarchy level={2} className="text-center">
          Real Questions. Real Answers. Real Action.
        </HeaderHierarchy>
        
        {/* Rotation Indicator */}
        <div className="flex items-center gap-2 text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
          <RotateCcw className="h-4 w-4" />
          <span>Fresh content rotates automatically</span>
        </div>
      </div>
      
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
          <Card key={`${currentRotation}-${index}`} className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-2xl overflow-hidden">
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
                
                {/* Real Stories - Enhanced with Multiple Examples */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-5 w-5 text-[#247EFF]" />
                    <h4 className="font-semibold text-[#247EFF]">Real Results</h4>
                  </div>
                  <div className="space-y-3">
                    {qa.realStories.map((story, storyIdx) => (
                      <p key={storyIdx} className="text-sm text-[#0A0A0A]/80 dark:text-brand-cream/80 italic leading-relaxed border-l-2 border-[#247EFF]/20 pl-3">
                        "{story}"
                      </p>
                    ))}
                  </div>
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
                    className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg w-full"
                  >
                    <a href={qa.nextMovesLink}>Level Up →</a>
                  </Button>
                </div>
              </div>
              
              {/* Tags and Enhanced CTAs */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#247EFF]/20">
                <div className="flex flex-wrap gap-2">
                  {qa.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="border-[#247EFF]/20 text-[#247EFF]">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button 
                    asChild
                    className="bg-[#247EFF] hover:bg-[#0057FF] text-white rounded-lg"
                  >
                    <a href={qa.actionLink}>{qa.actionText}</a>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white rounded-lg"
                  >
                    <a href={qa.secondaryActionLink}>{qa.secondaryActionText}</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Rotation Controls */}
      <div className="mt-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          {Array.from({ length: Math.ceil(questionPool.length / 3) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentRotation(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                Math.floor(currentRotation / 3) === idx 
                  ? 'bg-[#247EFF]' 
                  : 'bg-[#247EFF]/20 hover:bg-[#247EFF]/40'
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
          Showing {featuredQuestions.length} of {questionPool.length} featured questions • Content rotates to keep fresh
        </p>
      </div>
    </div>
  );
};

export default BlogFeaturedQuestions;
