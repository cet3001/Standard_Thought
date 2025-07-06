import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CashManagementFAQ = () => {
  const faqs = [
    {
      question: "What if my income changes every week?",
      answer: "We show you how to build a flexible system that works with hustle money, gig work, and side jobs. Instead of traditional budgeting, you'll learn the 'percentage method'—allocating portions of whatever you make that week, whether it's $50 or $500. Plus we'll teach you how to smooth out those income peaks and valleys."
    },
    {
      question: "Can I save if I'm already behind on bills?",
      answer: "Yes—start small, even $1 at a time. The key is building the habit, not the amount. We'll show you the 'bills first, then save' method that ensures you don't fall further behind while still building your financial future. Every dollar you save is a dollar working for you, not against you."
    },
    {
      question: "How do I stop overdrafting?",
      answer: "We break down how to set up alerts, use cash envelopes, and avoid the traps banks set for us. You'll learn the 'buffer system' to keep a small cushion in your account, plus how to time your bill payments so you're never caught off guard. No more $35 fees eating up your money."
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
            FAQ: Real Talk About{" "}
            <span className="text-[#FFD700]" style={{
              background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 3s ease-in-out infinite'
            }}>
              Cash Management
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl border border-gray-300/10 dark:border-gray-700/10 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-white/5 dark:hover:bg-gray-800/5 transition-colors duration-200">
                  <span className="text-lg sm:text-xl font-bold text-black dark:text-brand-cream pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pt-2 border-t border-gray-300/10 dark:border-gray-700/10">
                    <p className="text-black dark:text-brand-cream leading-relaxed text-base sm:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom message */}
        <div className="text-center mt-12">
          <p className="text-lg sm:text-xl text-black dark:text-brand-cream font-bold">
            Got more questions? We keep it{" "}
            <span className="text-[#FFD700]">100% real</span> with all our answers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CashManagementFAQ;