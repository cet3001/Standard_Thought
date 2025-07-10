const AISideHustleBlueprint = () => {
  const steps = [
    {
      number: 1,
      title: "Pick Your Hustle",
      description: "AI writing, art/design, chatbots, voiceovers, social media automation, print-on-demand, and more."
    },
    {
      number: 2,
      title: "Choose Your Tool",
      description: "Free/affordable AI platforms (e.g., ChatGPT, Canva, ElevenLabs, Midjourney, etc.)."
    },
    {
      number: 3,
      title: "Set Up Your Offer",
      description: "How to package your service or product for real people and small businesses."
    },
    {
      number: 4,
      title: "Automate the Grind",
      description: "Use AI to handle the boring stuff—emails, scheduling, content creation."
    },
    {
      number: 5,
      title: "Get Your First Client or Sale",
      description: "Where to find your first customer (IG, Fiverr, Upwork, local businesses)."
    },
    {
      number: 6,
      title: "Scale Up",
      description: "Turn one-off gigs into recurring income, upsell, and build your own brand."
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
            Step-by-Step: From Zero to Your First{" "}
            <span className="text-[#FFD700]" style={{
              background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              AI Bag
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6 border border-gray-300/10 dark:border-gray-700/10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFD700]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#FFD700]/30">
                    <span className="text-xl font-bold text-[#FFD700]">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black dark:text-brand-cream">
                    {step.title}
                  </h3>
                  <p className="text-black dark:text-brand-cream leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISideHustleBlueprint;