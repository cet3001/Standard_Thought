
import FAQSection from "@/components/faq/faq-section";

const InvestingFAQ = () => {
  const faqs = [
    {
      question: "Is investing risky?",
      answer: "All investing has risk, but starting small and learning as you go is the safest way to build. The biggest risk is not investing at all and letting inflation eat away at your money over time."
    },
    {
      question: "What if I lose money?",
      answer: "The market goes up and down—that's normal. Don't invest money you need for bills, and don't panic sell when things dip. Time in the market beats timing the market."
    },
    {
      question: "Do I need good credit to invest?",
      answer: "No, you just need a way to fund your account—credit isn't required. Most investing apps just need a bank account or debit card to get started."
    },
    {
      question: "How much should I start with?",
      answer: "Start with whatever you can afford to lose—even $1 is enough to begin. The goal is to build the habit first, then increase your investments as you learn and earn more."
    },
    {
      question: "Which app should I choose?",
      answer: "For beginners: Acorns (auto-investing), Cash App (simple interface), Robinhood (no fees), or Stash (educational). Pick the one that feels easiest for you to use."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-brand-cream/30 dark:bg-brand-black/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <FAQSection 
            title="Frequently Asked Questions"
            faqs={faqs}
          />
        </div>
      </div>
    </section>
  );
};

export default InvestingFAQ;
