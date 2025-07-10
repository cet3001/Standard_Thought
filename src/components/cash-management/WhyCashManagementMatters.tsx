const WhyCashManagementMatters = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
            Why Cash Management{" "}
            <span className="text-[#FFD700]" style={{
              background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Matters
            </span>{" "}
            (Real Talk)
          </h2>
        </div>

        {/* Quote Callout */}
        <div className="bg-gradient-to-br from-black/10 via-gray-800/5 to-black/10 dark:from-white/10 dark:via-gray-200/5 dark:to-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border-2 border-black/20 dark:border-white/20 relative overflow-hidden mb-12">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/5 to-transparent opacity-30"></div>
          
          <div className="relative z-10 text-center">
            <blockquote className="text-2xl sm:text-3xl font-bold text-black dark:text-brand-cream leading-relaxed mb-4" style={{
              fontFamily: 'Permanent Marker, cursive',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}>
              "If you don't control your cash, the world will control it for you. This is how you flip the script—no more overdraft fees, no more 'where did my money go?' moments."
            </blockquote>
          </div>
        </div>

        {/* The Real Struggles */}
        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-8 border border-gray-300/10 dark:border-gray-700/10">
            <h3 className="text-2xl font-bold text-black dark:text-brand-cream mb-6">
              The Real Struggles Most Financial "Gurus" Don't Get:
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg text-black dark:text-brand-cream mb-2">
                    Unpredictable Income
                  </h4>
                  <p className="text-black dark:text-brand-cream">
                    Your check isn't the same every two weeks. You hustle, do gig work, maybe have multiple income streams that don't follow a neat little schedule.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg text-black dark:text-brand-cream mb-2">
                    Family Obligations Hit Different
                  </h4>
                  <p className="text-black dark:text-brand-cream">
                    When your mom needs help with rent, your little sister needs school supplies, or your cousin asks for gas money—you don't say no. That's not in your budget app.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg text-black dark:text-brand-cream mb-2">
                    "Budget" Apps Don't Know Your Life
                  </h4>
                  <p className="text-black dark:text-brand-cream">
                    Most budgeting advice assumes you have a steady salary, emergency fund already saved up, and family that doesn't depend on you. That's not reality for most of us.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg text-black dark:text-brand-cream mb-2">
                    The System Costs You More
                  </h4>
                  <p className="text-black dark:text-brand-cream">
                    Overdraft fees, check cashing fees, high-interest everything—when you're broke, everything costs more. The game is rigged, but you can still win.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-xl sm:text-2xl text-black dark:text-brand-cream font-bold">
            That's why we break down cash management that actually works for{" "}
            <span className="text-[#FFD700]">your life</span>, not some fantasy budget world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyCashManagementMatters;