const InvestingFAQ = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-300/10 dark:border-gray-700/10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 text-black dark:text-brand-cream text-center">
            FAQ: Real Talk About{" "}
            <span className="text-[#FFD700]">Investing</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ 1 */}
            <div className="bg-gradient-to-r from-slate-500/10 to-slate-600/10 border border-slate-400/20 rounded-xl p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-4">
                What if I'm broke?
              </h3>
              <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                You can start with $10 and consistency. The key is to start—no amount is too small. Skip one coffee this week, invest that $5. Every dollar you put to work today is building your future freedom.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-400/20 rounded-xl p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-4">
                How risky is this, really?
              </h3>
              <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                We show you how to move smart, avoid scams, and build slow if you need to. The biggest risk is doing nothing while inflation eats your money. Smart investing with index funds is way safer than gambling or staying broke.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-400/20 rounded-xl p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-4">
                How fast will I see results?
              </h3>
              <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                No overnight hype. Real investing is about stacking slow and steady wins. You might see some growth in months, but real wealth building happens over years. The goal is financial freedom, not quick flips.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-400/20 rounded-xl p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-4">
                Do I need to watch the market all day?
              </h3>
              <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                Nah, that's day trading—which is basically gambling. Real investing is set-it-and-forget-it. Put your money in solid index funds, automate your investments, and check in maybe once a month. Your time is better spent building your income.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestingFAQ;