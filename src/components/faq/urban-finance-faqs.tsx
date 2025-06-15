
import FAQSection from "./faq-section";

const UrbanFinanceFAQs = () => {
  const investingFAQs = [
    {
      question: "How to start investing with no money?",
      answer: "Start with micro-investing apps like Acorns or Stash that allow you to invest spare change. You can begin with as little as $5 using fractional shares of major companies. Focus on:\n\n• Use apps that round up purchases and invest the change\n• Start with $1-5 weekly automatic investments\n• Choose low-cost index funds with no minimum balance\n• Take advantage of employer 401k matching if available\n• Learn through free resources before investing larger amounts\n\nThe key is starting small and building the habit of consistent investing, even if it's just $25 per month.",
      category: "investing"
    },
    {
      question: "What are the best investment apps for beginners with limited income?",
      answer: "The best investment apps for beginners with limited income include:\n\n• Acorns - Rounds up purchases and invests spare change automatically\n• Stash - Start investing with $5, offers fractional shares\n• Robinhood - Commission-free trading with fractional shares\n• Cash App - Simple interface for buying stocks and Bitcoin\n• Fidelity - No minimum balance, fractional shares available\n\nChoose apps with no account minimums, low fees, and educational resources to help you learn while you invest."
    },
    {
      question: "How much money do you need to start building wealth?",
      answer: "You can start building wealth with as little as $25-50 per month. The key principles are:\n\n• Start with any amount you can consistently invest\n• Focus on building an emergency fund first ($500-1000)\n• Automate small investments ($25-100 monthly)\n• Increase contributions as your income grows\n• Prioritize high-yield savings and index funds\n\nWealth building is about consistency over time, not the starting amount. Someone investing $50 monthly for 30 years can build substantial wealth through compound interest."
    }
  ];

  const creditFAQs = [
    {
      question: "How to build credit from scratch with no credit history?",
      answer: "Build credit from scratch by following these steps:\n\n• Apply for a secured credit card with a $200-500 deposit\n• Use the card for small purchases (gas, groceries) monthly\n• Pay the full balance before the due date every month\n• Keep credit utilization under 10% of your limit\n• Consider becoming an authorized user on a family member's account\n• Report rent payments through services like RentTrack\n\nYou can see credit score improvements within 3-6 months with consistent payment behavior."
    },
    {
      question: "What's the fastest way to improve credit score by 100 points?",
      answer: "To improve your credit score by 100 points:\n\n• Pay down credit card balances to under 10% utilization\n• Pay all bills on time for 6+ consecutive months\n• Dispute any errors on your credit report\n• Don't close old credit accounts (keep credit history length)\n• Consider a credit builder loan\n• Ask for credit limit increases on existing cards\n\nTypically takes 6-12 months for significant improvements, but some people see 100+ point increases within this timeframe with aggressive debt paydown."
    }
  ];

  const aiHustleFAQs = [
    {
      question: "What are the best AI tools for side hustles in 2024?",
      answer: "The most profitable AI tools for side hustles include:\n\n• ChatGPT - Content writing, copywriting, social media management\n• Midjourney - Custom graphics, logos, marketing materials\n• Jasper - Marketing copy, email campaigns, blog content\n• Make.com - Workflow automation for businesses\n• Claude - Business analysis, strategy development\n• Canva AI - Quick graphic design for social media\n\nFocus on tools that solve real business problems. Content creation and automation services are in highest demand."
    },
    {
      question: "How much money can you realistically make with AI side hustles?",
      answer: "AI side hustle income varies by effort and skill level:\n\n• Beginners: $500-2,000 monthly within 3-6 months\n• Intermediate: $2,000-5,000 monthly with established clients\n• Advanced: $5,000-15,000+ monthly with scaled operations\n\nMost profitable AI services:\n• Content writing: $25-100 per article\n• Social media management: $500-2000 per client monthly\n• AI automation setup: $1000-5000 per project\n• Graphic design: $50-500 per design\n\nSuccess depends on finding your niche, building a portfolio, and consistent client acquisition."
    },
    {
      question: "How do you start an AI-powered business with no technical background?",
      answer: "Start an AI business without technical skills by:\n\n• Focus on using existing AI tools, not building them\n• Learn one tool deeply (ChatGPT, Midjourney, etc.)\n• Identify problems in your network that AI can solve\n• Start with service-based offerings (content, design, automation)\n• Use no-code platforms like Zapier or Make.com\n• Build a portfolio with free projects for friends/family\n• Market your human expertise combined with AI efficiency\n\nThe key is becoming an AI tool expert who solves real business problems, not a technical developer."
    }
  ];

  return (
    <div className="space-y-12">
      <FAQSection 
        title="Urban Investing & Wealth Building FAQs"
        faqs={investingFAQs}
      />
      
      <FAQSection 
        title="Credit Building & Financial Recovery FAQs"
        faqs={creditFAQs}
      />
      
      <FAQSection 
        title="AI Side Hustles & Income Generation FAQs"
        faqs={aiHustleFAQs}
      />
    </div>
  );
};

export default UrbanFinanceFAQs;
