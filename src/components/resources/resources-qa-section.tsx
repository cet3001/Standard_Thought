
import QuestionAnswerContent from "../content-structure/question-answer-content";
import HeaderHierarchy from "../content-structure/header-hierarchy";

const ResourcesQASection = () => {
  const commonQuestions = [
    {
      question: "How to start investing with no money?",
      answer: "You can start investing with as little as $1 using micro-investing apps and fractional shares. Here's your step-by-step approach:\n\n1. Download apps like Acorns, Stash, or Cash App\n2. Start with spare change round-ups from purchases\n3. Invest $5-25 weekly in low-cost index funds\n4. Focus on S&P 500 index funds for beginners\n5. Increase contributions as your income grows\n\nThe key is consistency - investing small amounts regularly beats waiting to invest larger sums later.",
      tags: ["Investing", "Beginners", "Micro-investing"],
      actionText: "Get Investment Guide",
      actionLink: "/blog"
    },
    {
      question: "Best AI tools for side hustles in 2024?",
      answer: "The most profitable AI tools for generating side income include:\n\n• ChatGPT for content writing and copywriting ($25-100 per article)\n• Midjourney for graphic design and logos ($50-500 per design)\n• Make.com for business automation ($1000-5000 per setup)\n• Jasper for marketing copy and email campaigns\n• Claude for business strategy and analysis\n\nStart with one tool, master it completely, then expand to others. Content creation and automation services have the highest demand.",
      tags: ["AI Tools", "Side Hustles", "Income Generation"],
      actionText: "Launch AI Business",
      actionLink: "/blog"
    },
    {
      question: "How to build credit from zero in 6 months?",
      answer: "Build credit from scratch using this proven 6-month strategy:\n\nMonth 1-2: Get a secured credit card, use for small purchases\nMonth 3-4: Pay balances in full, keep utilization under 10%\nMonth 5-6: Consider becoming authorized user, report rent payments\n\nKey actions:\n• Never miss payments (most important factor)\n• Keep credit utilization below 10%\n• Don't close your first credit account\n• Monitor your credit score monthly\n\nMost people see 50-100 point improvements following this plan consistently.",
      tags: ["Credit Building", "Financial Recovery", "Credit Score"],
      actionText: "Fix Your Credit",
      actionLink: "/blog"
    }
  ];

  return (
    <div className="mb-16">
      <HeaderHierarchy level={2} className="text-center mb-12">
        Direct Answers to Your Most Pressing Questions
      </HeaderHierarchy>
      
      <div className="space-y-8">
        {commonQuestions.map((qa, index) => (
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

export default ResourcesQASection;
