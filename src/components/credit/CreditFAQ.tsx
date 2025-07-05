const CreditFAQ = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-300/10 dark:border-gray-700/10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 text-black dark:text-brand-cream text-center">
            FAQ: Real Talk About{" "}
            <span className="text-[#FFD700]">Credit</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ 1 */}
            <div className="bg-gradient-to-r from-slate-500/10 to-slate-600/10 border border-slate-400/20 rounded-xl p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-4">
                What if I got denied before?
              </h3>
              <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                You can always bounce back. We show you how to rebuild, even after setbacks. Every denial is just feedback—use it to come back stronger with the right strategy.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-400/20 rounded-xl p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-4">
                Can I build credit with no job?
              </h3>
              <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                Yes—secured cards and builder loans don't require a big income, just consistency. Even with irregular income, you can start building as long as you can make small, regular payments.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-400/20 rounded-xl p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-4">
                How long before I see results?
              </h3>
              <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                Most see a score jump in 3–6 months if they follow the blueprint. The key is consistent payments and keeping utilization low—patience pays off big time.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-400/20 rounded-xl p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-4">
                Will checking my credit hurt my score?
              </h3>
              <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                Nah, checking your own credit is a "soft pull" and won't hurt your score at all. You should actually check it regularly to track your progress and catch any errors early.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditFAQ;