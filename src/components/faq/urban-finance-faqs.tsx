
import FAQSection from "./faq-section";

const UrbanFinanceFAQs = () => {
  const investingFAQs = [
    {
      question: "How do I start investing when I'm barely getting by?",
      answer: "Real talk—you can start building wealth with whatever you got, even if it's just $5. Here's how to level up financially from where you are:\n\n• Use apps like Acorns or Stash that invest your spare change automatically\n• Start with $1-5 weekly—every little bit counts when you're securing the bag\n• Choose low-cost index funds that don't require big minimums\n• If your job offers 401k matching, that's free money—take it\n• Learn the game through free resources before you invest bigger amounts\n\nThe key is starting the habit of investing consistently. Even $25 monthly builds wealth over time through compound interest.",
      category: "investing"
    },
    {
      question: "What's the best way to start securing the bag with limited income?",
      answer: "When you're working with limited income, focus on these street-smart money moves:\n\n• Acorns - Automatically invests your spare change\n• Stash - Start investing with $5, get fractional shares\n• Robinhood - No fees, you can buy pieces of expensive stocks\n• Cash App - Simple way to buy stocks and Bitcoin\n• Fidelity - No minimum balance required\n\nPick apps with no account minimums, low fees, and educational content to help you learn while you build."
    },
    {
      question: "How much money do I really need to start building generational wealth?",
      answer: "You can start building generational wealth with as little as $25-50 per month. Here's the real breakdown:\n\n• Start with whatever amount you can consistently invest\n• Build an emergency fund first ($500-1000 to start)\n• Automate small investments ($25-100 monthly)\n• Increase contributions as your income grows\n• Focus on high-yield savings and index funds first\n\nWealth building is about consistency over time, not how much you start with. Someone investing $50 monthly for 30 years can build serious wealth through the power of compound interest."
    }
  ];

  const creditFAQs = [
    {
      question: "How do I build credit from absolutely nothing?",
      answer: "Building credit from scratch when the system feels rigged against you:\n\n• Get a secured credit card with a $200-500 deposit\n• Use it for small purchases you already make (gas, groceries)\n• Pay the full balance before the due date every single month\n• Keep your usage under 10% of your limit\n• Ask family if you can be an authorized user on their account\n• Report rent payments through services like RentTrack\n\nYou can see your credit score improve within 3-6 months with consistent payment behavior."
    },
    {
      question: "What's the fastest way to level up my credit score by 100 points?",
      answer: "To level up your credit score by 100 points, focus on these moves:\n\n• Pay down credit card balances to under 10% of your limits\n• Pay every bill on time for 6+ months straight\n• Dispute any errors on your credit report (check annualcreditreport.com)\n• Don't close old credit accounts (keep that credit history)\n• Consider a credit builder loan from a credit union\n• Ask for credit limit increases on cards you already have\n\nTypically takes 6-12 months for major improvements, but some people see 100+ point increases within this timeframe with aggressive debt paydown."
    }
  ];

  const aiHustleFAQs = [
    {
      question: "What AI tools can help me start securing the bag in 2024?",
      answer: "Here are the AI tools that are actually making people money right now:\n\n• ChatGPT - Content writing, copywriting, social media management\n• Midjourney - Custom graphics, logos, marketing materials for businesses\n• Jasper - Marketing copy, email campaigns, blog content\n• Make.com - Workflow automation for small businesses\n• Claude - Business analysis, strategy development\n• Canva AI - Quick graphic design for social media\n\nFocus on tools that solve real problems for businesses. Content creation and automation services are where the money is."
    },
    {
      question: "How much can I realistically make with AI side hustles?",
      answer: "AI side hustle income depends on how much work you put in and how good you get:\n\n• Beginners: $500-2,000 monthly within 3-6 months of consistent work\n• Intermediate: $2,000-5,000 monthly with established clients\n• Advanced: $5,000-15,000+ monthly with scaled operations\n\nMost profitable AI services:\n• Content writing: $25-100 per article\n• Social media management: $500-2000 per client monthly\n• AI automation setup: $1000-5000 per project\n• Graphic design: $50-500 per design\n\nSuccess comes from finding your niche, building a solid portfolio, and consistently getting new clients."
    },
    {
      question: "How do I start an AI business when I'm not tech-savvy?",
      answer: "You don't need to be a tech genius to start securing the bag with AI:\n\n• Focus on using existing AI tools, not building them from scratch\n• Master one tool really well (ChatGPT, Midjourney, etc.)\n• Look for problems in your network that AI can solve\n• Start with service-based offerings (content, design, automation)\n• Use no-code platforms like Zapier or Make.com\n• Build your portfolio with free projects for friends and family first\n• Market your human expertise combined with AI efficiency\n\nThe key is becoming an expert at using AI tools to solve real business problems, not becoming a technical developer."
    }
  ];

  return (
    <div className="space-y-12">
      <FAQSection 
        title="Investing & Building Generational Wealth FAQs"
        faqs={investingFAQs}
      />
      
      <FAQSection 
        title="Credit Building & Financial Recovery FAQs"
        faqs={creditFAQs}
      />
      
      <FAQSection 
        title="AI Side Hustles & Securing the Bag FAQs"
        faqs={aiHustleFAQs}
      />
    </div>
  );
};

export default UrbanFinanceFAQs;
