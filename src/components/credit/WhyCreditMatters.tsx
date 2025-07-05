const WhyCreditMatters = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-300/10 dark:border-gray-700/10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream text-center">
            Why Credit Matters{" "}
            <span className="text-[#FFD700]">(Real Talk)</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-xl sm:text-2xl text-black dark:text-brand-cream leading-relaxed text-center font-medium">Credit isn't just a number—it's your ticket to better apartments, lower car payments, and real wealth moves. If you've been locked out, this is your blueprint to break in.</p>
            
            <div className="grid gap-6 sm:gap-8">
              <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black dark:text-brand-cream mb-3">
                  The Real Barriers
                </h3>
                <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                  The system wasn't built for us. No family credit history to lean on. No generational wealth to cushion the learning curve. 
                  Just higher interest rates and doors slammed in your face because of a three-digit number.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border-l-4 border-[#FFD700] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black dark:text-brand-cream mb-3">
                  Predatory Lending Traps
                </h3>
                <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                  They target our communities with payday loans, rent-to-own schemes, and credit cards with 29% APR. 
                  These aren't helping—they're designed to keep you stuck in the cycle.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-l-4 border-blue-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black dark:text-brand-cream mb-3">
                  Why Most Advice Don't Hit
                </h3>
                <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                  "Just ask your parents to cosign" or "Use your trust fund as collateral." That suburban playbook doesn't work on the block. 
                  You need strategies that work when you're starting from zero—no safety net, no shortcuts.
                </p>
              </div>
            </div>

            <div className="text-center pt-6">
              <p className="text-lg sm:text-xl text-black dark:text-brand-cream leading-relaxed font-medium">
                It's time to flip the script and build credit that actually opens doors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCreditMatters;