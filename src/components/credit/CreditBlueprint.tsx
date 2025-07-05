import { Eye, Shield, CreditCard, Clock, CheckSquare, TrendingUp } from "lucide-react";

const CreditBlueprint = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-300/10 dark:border-gray-700/10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-black dark:text-brand-cream text-center">
            Step-by-Step:{" "}
            <span className="text-[#FFD700]">From No Score to Power Moves</span>
          </h2>
          
          <div className="max-w-3xl mx-auto mt-12">
            {/* Timeline Steps */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                    1. Check Your Credit (for Free)
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Go to annualcreditreport.com and pull your reports from all three bureaus (Experian, Equifax, TransUnion). Look for accounts you don't recognize, incorrect balances, or late payments that aren't yours.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                    2. Dispute the B.S.
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    File disputes online through each bureau's website for any errors you found. Keep records of everything and follow up if they don't respond within 30 days.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                    3. Start with a Secured Card or Builder Loan
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Apply for a secured credit card with a $200-500 deposit or a credit builder loan from a credit union. Use the card for small purchases like gas or groceries, then pay it off immediately.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                    4. Pay On Time, Every Time
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Set up automatic payments for at least the minimum amount due. Add phone reminders 2-3 days before your due date as backup—one late payment can drop your score 60-100 points.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <CheckSquare className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                    5. Keep Utilization Low
                  </h3>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Never use more than 30% of your available credit, but aim for under 10% for the best scores. If your limit is $500, keep your balance under $50 when statements close.
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
                    After 6-12 months of good history, apply for an unsecured card with rewards or request credit limit increases. Don't close old accounts—keep them open to maintain your credit history length.
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

export default CreditBlueprint;