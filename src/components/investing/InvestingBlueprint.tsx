import { DollarSign, Smartphone, BookOpen, Target, Repeat, TrendingUp } from "lucide-react";

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
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                    1. Start With What You Got
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Got $10? That's your starting point. Don't wait for the "perfect amount"—the best time to start was yesterday, the second best time is right now. Even pocket change can grow into something real.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                    2. Get Your Account Set Up
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Download a beginner-friendly app like Robinhood, Cash App, or Fidelity. Most let you start with no minimum balance. Takes 10 minutes to set up—less time than waiting in line at the corner store.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                    3. Learn the Basics (Keep It Simple)
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Start with index funds or ETFs—these are like buying a piece of the whole market instead of gambling on individual stocks. Think of it as buying the entire corner store instead of just one product.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                    4. Make Your First Move
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Put that first $10-50 into a broad market index fund (like SPY or VTI). Don't overthink it—this is about building the habit, not hitting it big on day one.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                  <Repeat className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                    5. Automate the Game
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Set up automatic investing—even $25 a week adds up to $1,300 a year. Make it automatic so you don't have to think about it or be tempted to spend it elsewhere.
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
                    6. Stack and Scale
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    After 6 months of consistent investing, start exploring other options—maybe some individual stocks, REITs, or crypto (but keep most of your money in the safe stuff). This is about building wealth, not gambling.
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