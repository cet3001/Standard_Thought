const AISideHustleFAQ = () => {
  const faqs = [
    {
      question: "Do I need a fancy computer?",
      answer: "Nah, most AI tools run on your phone or any laptop. You don't need anything fancy—just an internet connection and the willingness to get started."
    },
    {
      question: "What if I've never used AI before?",
      answer: "We break it down step-by-step—no tech jargon, just real moves. Everyone starts somewhere, and we'll show you exactly how to go from zero to your first dollar."
    },
    {
      question: "How fast can I make money?",
      answer: "Some hustlers get paid in their first week. The key is consistency and not being afraid to start small. Even $50 your first week is $50 more than you had before."
    },
    {
      question: "Is this actually sustainable?",
      answer: "AI isn't going anywhere—it's getting bigger every day. The people who learn to use it now will be the ones winning tomorrow. This isn't just a side hustle, it's a skill that scales."
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
              AI Side Hustles
            </span>
          </h2>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl border border-gray-300/10 dark:border-gray-700/10 overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 dark:hover:bg-gray-800/5 transition-colors">
                  <h3 className="text-xl font-bold text-black dark:text-brand-cream">
                    {faq.question}
                  </h3>
                  <div className="text-[#FFD700] group-open:rotate-180 transition-transform duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISideHustleFAQ;