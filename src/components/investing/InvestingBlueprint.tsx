import { Target, Smartphone, RefreshCw, PieChart, Shield, TrendingUp } from "lucide-react";

const InvestingBlueprint = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-300/10 dark:border-gray-700/10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-black dark:text-brand-cream text-center">
            Step-by-Step:{" "}
            <span className="text-[#FFD700]">From $10 to Your First Portfolio</span>
          </h2>
          
          <div className="max-w-3xl mx-auto mt-12">
            {/* Timeline Steps */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                    1. Set Your Goal
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    What are you investing for? Emergency fund to break the paycheck-to-paycheck cycle? First home down payment? Building generational wealth so your kids don't start from zero? Your "why" keeps you consistent when the market gets shaky.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                    2. Pick Your Platform
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Look for free or low-cost apps with no minimums and no hidden fees. Fidelity, Schwab, and Vanguard are solid choices. Avoid anything promising "get rich quick" or charging monthly fees—those are designed to take your money, not help you build it.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                    3. Start Small, Stack Consistent
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Set up automatic investing of $10–$50 a week, even on a tight budget. Skip one takeout meal or find $2 a day somewhere. Consistency beats big lump sums—$25 a week becomes $1,300 a year, and that's before any growth.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <PieChart className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                    4. Diversify the Bag
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Start with broad market index funds (like VTI or SPY)—these own pieces of hundreds of companies, so you're not betting everything on one stock. Think of it like owning a slice of the entire economy instead of gambling on individual players.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                    5. Avoid the Traps
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Stay away from anything promising 50% returns in a month, crypto "sure things," or day trading schemes. If someone's sliding into your DMs with investment "opportunities," block them. Real wealth building is boring—that's what makes it work.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                    6. Level Up
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    After 12+ months of consistent investing and building your foundation, explore real estate (REITs to start), business investing, or higher-risk plays with money you can afford to lose. But keep 80% of your portfolio in the boring, proven stuff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestingBlueprint;