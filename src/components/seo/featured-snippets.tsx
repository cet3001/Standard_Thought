
interface FeaturedSnippetsProps {
  topic: "wealth-building" | "investing" | "credit" | "ai-hustles" | "entrepreneurship";
  className?: string;
}

const featuredSnippets = {
  "wealth-building": {
    questions: [
      {
        question: "How do you build generational wealth from nothing?",
        answer: "Start with financial literacy education, create multiple income streams through urban investing strategies, focus on asset acquisition over consumption, and reinvest profits into appreciating assets like real estate and index funds."
      },
      {
        question: "What are the best street smart money moves for beginners?",
        answer: "Begin with budgeting and debt elimination, build an emergency fund, start investing with as little as $25, learn about compound interest, and focus on increasing your income through skill development."
      },
      {
        question: "How long does it take to build generational wealth?",
        answer: "Building generational wealth typically takes 15-30 years of consistent investing and wealth-building strategies, but urban entrepreneurs can accelerate this through business ownership and strategic reinvestment."
      }
    ]
  },
  "investing": {
    questions: [
      {
        question: "What are urban investing strategies that actually work?",
        answer: "Focus on low-cost index funds, real estate investment trusts (REITs), dividend-paying stocks, and micro-investing apps. Start with $25-50 monthly and increase contributions as income grows."
      },
      {
        question: "How do you start investing with limited income?",
        answer: "Use micro-investing apps like Acorns or Stash, start with fractional shares, focus on low-fee index funds, and automate small weekly investments of $10-25."
      },
      {
        question: "What investments should urban entrepreneurs prioritize?",
        answer: "Prioritize your business first for highest returns, then diversify into index funds, emergency savings, and real estate. Aim for 60% business, 30% index funds, 10% cash reserves."
      }
    ]
  },
  "credit": {
    questions: [
      {
        question: "How do you build credit from scratch in 6 months?",
        answer: "Get a secured credit card, make small purchases monthly, pay balances in full before due dates, keep utilization under 10%, and consider becoming an authorized user on someone's established account."
      },
      {
        question: "What are the fastest credit building strategies?",
        answer: "Use credit builder loans, report rent payments through services like RentTrack, pay down existing balances to under 30% utilization, and dispute any errors on your credit report."
      },
      {
        question: "How long does credit repair take?",
        answer: "Credit repair typically takes 3-6 months for significant improvements and 12-24 months for major score increases, depending on your starting point and consistency with payments."
      }
    ]
  },
  "ai-hustles": {
    questions: [
      {
        question: "What are the most profitable AI side hustles for beginners?",
        answer: "Content creation with AI tools, social media management using automation, AI-powered copywriting services, chatbot development for small businesses, and AI image generation for marketing materials."
      },
      {
        question: "How much money can you make with AI side hustles?",
        answer: "Beginners can earn $500-2000 monthly within 3-6 months, while experienced AI entrepreneurs generate $5000-15000 monthly through scaled AI service businesses."
      },
      {
        question: "What AI tools are best for making money?",
        answer: "ChatGPT for content and copywriting, Midjourney for image creation, Jasper for marketing copy, Make.com for automation workflows, and Claude for business analysis and strategy."
      }
    ]
  },
  "entrepreneurship": {
    questions: [
      {
        question: "How do you start a business in urban areas with no money?",
        answer: "Start with service-based businesses requiring minimal capital, leverage social media for free marketing, use community resources and small business grants, and reinvest early profits for growth."
      },
      {
        question: "What are the best urban business opportunities?",
        answer: "Digital marketing services, food delivery and catering, mobile services (car wash, repair), tutoring and coaching, and e-commerce with local fulfillment."
      },
      {
        question: "How do urban entrepreneurs find startup funding?",
        answer: "Explore community development financial institutions (CDFIs), minority business grants, crowdfunding platforms, microloans, and angel investor networks focused on urban development."
      }
    ]
  }
};

const FeaturedSnippets = ({ topic, className = "" }: FeaturedSnippetsProps) => {
  const snippets = featuredSnippets[topic];

  return (
    <div className={`featured-snippets ${className}`}>
      <div className="sr-only" itemScope itemType="https://schema.org/FAQPage">
        {snippets.questions.map((item, index) => (
          <div key={index} itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">{item.question}</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <div itemProp="text">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSnippets;
