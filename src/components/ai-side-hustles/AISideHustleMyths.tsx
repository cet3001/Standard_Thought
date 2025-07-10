const AISideHustleMyths = () => {
  const myths = [
    {
      myth: "You need to know how to code.",
      reality: "Most AI hustles use drag-and-drop tools—no coding required."
    },
    {
      myth: "You need big money to start.",
      reality: "Many AI tools are free or cost less than a Netflix subscription."
    },
    {
      myth: "AI is just a fad.",
      reality: "The bag is real—if you know how to move smart and stay ahead of the curve."
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
            AI Side Hustle{" "}
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

export default AISideHustleMyths;