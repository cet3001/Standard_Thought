
import { useEffect, useState } from "react";

const ValuesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      title: "Real Growth Only",
      description: "We don't fake wins or flex for clout. Everything here is built from scratch—no shortcuts, no overnight hype."
    },
    {
      title: "Put Each Other On",
      description: "No gatekeeping. If I learn, you learn. We celebrate wins, share game, and pull each other up. That's how we all get ahead."
    },
    {
      title: "Legacy Moves",
      description: "We're not here for the quick flip. Every decision is made with the next generation in mind. We're building for people who aren't even here yet."
    }
  ];

  return (
    <section className="py-24 bg-brand-cream dark:bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">What We Stand For</h2>
          <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
            These aren't just words on a wall. They're the rules we live by, the code we built from scratch, 
            and the promises we make to those coming up behind us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-8 text-center transition-all duration-1000 hover:scale-105 hover:shadow-lg hover:shadow-[#247EFF]/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#247EFF]">{value.title}</h3>
              <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
