const CreditMythsRealities = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-300/10 dark:border-gray-700/10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 text-black dark:text-brand-cream text-center">
            Credit Myths vs.{" "}
            <span className="text-[#FFD700]">Realities</span>
          </h2>
          
          <div className="grid gap-8 sm:gap-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 p-6 sm:p-8 rounded-xl">
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
                  Myth: You need a cosigner to start.
                </h3>
                <p className="text-lg sm:text-xl text-black dark:text-brand-cream leading-relaxed font-medium">
                  <span className="text-green-600 dark:text-green-400 font-bold">Reality:</span> There are ways to build solo, even with no family help.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 p-6 sm:p-8 rounded-xl">
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  Myth: Bad credit is forever.
                </h3>
                <p className="text-lg sm:text-xl text-black dark:text-brand-cream leading-relaxed font-medium">
                  <span className="text-green-600 dark:text-green-400 font-bold">Reality:</span> You can flip your score in 6–12 months with the right moves.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 p-6 sm:p-8 rounded-xl">
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  Myth: Credit cards are traps.
                </h3>
                <p className="text-lg sm:text-xl text-black dark:text-brand-cream leading-relaxed font-medium">
                  <span className="text-green-600 dark:text-green-400 font-bold">Reality:</span> If you play it smart, they're tools for stacking points and building history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditMythsRealities;