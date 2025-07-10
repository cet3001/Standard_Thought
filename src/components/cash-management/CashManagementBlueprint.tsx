const CashManagementBlueprint = () => {
  const steps = [
    {
      number: "01",
      title: "Track Every Dollar",
      description: "Use free apps, notes, or envelopes—know where your money's going.",
      icon: "💰"
    },
    {
      number: "02", 
      title: "Sort Your Money",
      description: "The '3-Account System': Spend, Save, Stack (for bills, emergencies, and growth).",
      icon: "📊"
    },
    {
      number: "03",
      title: "Automate the Basics", 
      description: "Set up auto-pay for bills, auto-transfer for savings—even if it's $5 a week.",
      icon: "⚡"
    },
    {
      number: "04",
      title: "Handle the Hustle",
      description: "How to manage side hustle income, cash jobs, and inconsistent pay.",
      icon: "💪"
    },
    {
      number: "05",
      title: "Cut the Leaks",
      description: "Spotting and stopping 'money leaks' (subscriptions, fees, impulse buys).",
      icon: "🔧"
    },
    {
      number: "06",
      title: "Level Up",
      description: "When and how to start investing, even if you're still building your base.",
      icon: "📈"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
            Step-by-Step:{" "}
            <span className="text-[#FFD700]" style={{
              background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              From Chaos to Control
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-black dark:text-brand-cream max-w-2xl mx-auto">
            Your blueprint for turning financial chaos into a system that actually works
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl border border-gray-300/10 dark:border-gray-700/10 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Step Number & Icon */}
                <div className="bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/20 p-6 md:p-8 flex flex-col items-center justify-center md:w-32 border-b md:border-b-0 md:border-r border-[#FFD700]/20">
                  <div className="text-4xl mb-2">{step.icon}</div>
                  <div className="text-2xl font-black text-[#FFD700]" style={{
                    fontFamily: 'Permanent Marker, cursive',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                  }}>
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <div className="p-6 md:p-8 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-brand-cream mb-3">
                    {step.title}
                  </h3>
                  <p className="text-black dark:text-brand-cream text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Progress Line for Visual Flow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-16 mt-16">
                    <div className="w-px h-8 bg-gradient-to-b from-[#FFD700]/60 to-transparent"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-br from-black/10 via-gray-800/5 to-black/10 dark:from-white/10 dark:via-gray-200/5 dark:to-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-black/20 dark:border-white/20">
            <p className="text-lg sm:text-xl text-black dark:text-brand-cream font-bold">
              Follow this blueprint step-by-step, and you'll go from{" "}
              <span className="text-red-500">"Where did my money go?"</span> to{" "}
              <span className="text-[#FFD700]">"My money works for me."</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashManagementBlueprint;