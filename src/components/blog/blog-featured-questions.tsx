
import QuestionAnswerContent from "../content-structure/question-answer-content";
import SnippetOptimizedContent from "../seo/snippet-optimized-content";
import HeaderHierarchy from "../content-structure/header-hierarchy";

const BlogFeaturedQuestions = () => {
  const featuredQuestions = [
    {
      question: "What's the biggest mistake first-gen wealth builders make?",
      answer: "The biggest mistake is trying to copy strategies without understanding the context. Here's what really matters:\n\n• **Know your starting point**: Your credit score, income stability, and risk tolerance aren't the same as someone else's\n• **Build systems, not just income**: Focus on repeatable processes that generate consistent cash flow\n• **Invest in education first**: Understanding compound interest and tax implications saves more money than most 'get rich quick' schemes\n• **Start ugly and improve**: Perfect plans never launch - start with what you have and optimize as you learn\n\nMost people want the Instagram highlight reel, but real wealth comes from boring consistency and smart systems.",
      tags: ["Common Mistakes", "First-Gen Wealth", "Strategy"],
      actionText: "Read Success Stories",
      actionLink: "/blog?search=success+story"
    },
    {
      question: "How do you know if a side hustle is worth scaling?",
      answer: "A side hustle is ready to scale when you see these 3 clear signals:\n\n**1. Predictable Revenue**: You can forecast monthly income within 20% accuracy\n**2. Systems That Work Without You**: The business runs for at least a week without your direct involvement\n**3. Market Demand Exceeds Your Capacity**: You're turning down work or have a waiting list\n\n**Red flags to avoid scaling:**\n• Income depends entirely on your personal time\n• No clear path to hire/train others\n• Market is too small or seasonal\n• Profit margins are shrinking as you grow\n\nFocus on businesses where your role shifts from 'doing' to 'managing systems.'",
      tags: ["Side Hustles", "Scaling Business", "Decision Framework"],
      actionText: "Explore Scaling Stories",
      actionLink: "/blog?search=scaling+business"
    },
    {
      question: "What financial moves should you make in your first $10K?",
      answer: "Your first $10K is the foundation for everything else. Here's the strategic order:\n\n**First $1K**: Emergency fund in high-yield savings (prevents debt spiral)\n**Next $2K**: Pay off high-interest debt (credit cards, payday loans)\n**Next $2K**: Build credit with secured card + report rent payments\n**Next $3K**: Start investing in index funds (S&P 500, total market)\n**Last $2K**: Skill development or business investment with proven ROI\n\n**Don't do this**: Put everything in crypto, day trading, or 'business opportunities' without emergency funds first.\n\nThis order maximizes your financial stability while building wealth-generating assets.",
      tags: ["Financial Strategy", "Investment Priority", "Wealth Building"],
      actionText: "See Investment Stories",
      actionLink: "/blog?search=investment+strategy"
    }
  ];

  return (
    <div className="mb-16">
      <HeaderHierarchy level={2} className="text-center mb-6">
        Real Questions. Real Answers. Real Impact.
      </HeaderHierarchy>
      
      <p className="text-center text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-12 max-w-2xl mx-auto">
        These aren't generic financial advice questions—they're the exact challenges our community faces, 
        answered by people who've actually walked the path.
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
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {featuredQuestions.map((qa, index) => (
          <QuestionAnswerContent
            key={index}
            question={qa.question}
            answer={qa.answer}
            tags={qa.tags}
            actionText={qa.actionText}
            actionLink={qa.actionLink}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogFeaturedQuestions;
