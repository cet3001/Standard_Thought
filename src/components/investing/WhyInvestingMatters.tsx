const WhyInvestingMatters = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-300/10 dark:border-gray-700/10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream text-center">
            Why Investing Matters{" "}
            <span className="text-[#FFD700]">(Real Talk)</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-xl sm:text-2xl text-black dark:text-brand-cream leading-relaxed text-center font-medium">Investing is how you break the cycle—turning today's hustle into tomorrow's freedom. If you've been locked out, this is your playbook for getting in the game.</p>
            
            <div className="grid gap-6 sm:gap-8">
              <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black dark:text-brand-cream mb-3">
                  The Access Problem
                </h3>
                <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                  While trust fund kids got their first stocks at 16, you're still trying to figure out what a 401k even means. 
                  The wealth-building game was designed to keep certain people out—but that doesn't mean you can't learn to play it.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border-l-4 border-[#FFD700] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black dark:text-brand-cream mb-3">
                  Fear of Losing Money
                </h3>
                <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                  When every dollar counts, the thought of losing it in the market feels impossible. But staying broke is guaranteed—
                  while smart investing is how you turn small money into real wealth over time.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-l-4 border-blue-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black dark:text-brand-cream mb-3">
                  Why Most Advice Don't Hit
                </h3>
                <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                  "Just invest 20% of your income" sounds good when you're making six figures and living with your parents. 
                  Real investing starts with $25, not $2,500—and we'll show you exactly how to make those dollars multiply.
                </p>
              </div>
            </div>

            <div className="text-center pt-6">
              <p className="text-lg sm:text-xl text-black dark:text-brand-cream leading-relaxed font-medium">
                It's time to stop letting other people build wealth while you watch from the sidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvestingMatters;