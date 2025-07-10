const CashMythsRealities = () => {
  const myths = [
    {
      myth: "You need a big salary to manage money.",
      reality: "It's about flow, not just how much you make."
    },
    {
      myth: "Budgets are for people with extra money.",
      reality: "The less you have, the more you need a plan."
    },
    {
      myth: "Cash management is just about cutting back.",
      reality: "It's about making your money work for you—automating, stacking, and investing, even if it's $10 at a time."
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
            Cash{" "}
            <span className="text-[#FFD700]" style={{
              background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Myths vs. Realities
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {myths.map((item, index) => (
            <div key={index} className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6 border border-gray-300/10 dark:border-gray-700/10">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <div className="bg-red-500/10 backdrop-blur-sm rounded-lg p-4 border border-red-500/20 mb-4">
                    <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2">
                      Myth:
                    </h3>
                    <p className="text-black dark:text-brand-cream">
                      {item.myth}
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-[#FFD700]/10 backdrop-blur-sm rounded-lg p-4 border border-[#FFD700]/20">
                    <h3 className="text-lg font-bold text-[#FFD700] mb-2">
                      Reality:
                    </h3>
                    <p className="text-black dark:text-brand-cream">
                      {item.reality}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CashMythsRealities;