
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ValuesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mindsetPrinciples = [
    {
      title: "Growth Over Comfort",
      description: "We don't settle for what's easy. Every challenge is a chance to level up. When everyone else stays safe, we lean into the discomfort because that's where real transformation happens."
    },
    {
      title: "Community Wins",
      description: "Your growth fuels ours. We share knowledge, celebrate progress, and pull each other up. Success isn't a solo mission—when one of us wins, we all win."
    },
    {
      title: "Vision for the Future",
      description: "Every decision is made with legacy in mind. We move with purpose, not just for today, but for tomorrow. This is about building something that lasts beyond us."
    }
  ];

  return (
    <section className="py-24 bg-brand-cream dark:bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">How We Think Different</h2>
          <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto mb-8">
            These aren't just motivational quotes—they're the mental frameworks that separate 
            those who break through from those who stay stuck. This is how we rewire our thinking.
          </p>
          <div className="bg-[#247EFF]/10 border border-[#247EFF]/20 rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-lg text-[#247EFF] font-medium">
              💡 <strong>How to Use These Tools:</strong> Use these frameworks as your daily check-in—whenever you hit a wall, 
              come back to these basics and keep moving forward. Screenshot this page and make it your mental reset button.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mindsetPrinciples.map((principle, index) => (
            <div 
              key={index}
              className={`bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-8 text-center transition-all duration-1000 hover:scale-105 hover:shadow-lg hover:shadow-[#247EFF]/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#247EFF]">{principle.title}</h3>
              <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Internal Linking Section */}
        <div className="text-center mt-16 bg-white/80 dark:bg-brand-black/60 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-8 max-w-4xl mx-auto">
          <p className="text-lg text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-4">
            See how others have used these frameworks to flip their story in our{" "}
            <Link 
              to="/blog" 
              className="text-[#247EFF] hover:text-[#0057FF] underline decoration-dotted underline-offset-4 hover:decoration-solid transition-all duration-300 font-semibold"
            >
              Builder Stories
            </Link>{" "}
            section, or dive deeper with proven{" "}
            <Link 
              to="/resources" 
              className="text-[#247EFF] hover:text-[#0057FF] underline decoration-dotted underline-offset-4 hover:decoration-solid transition-all duration-300 font-semibold"
            >
              Success Strategies
            </Link>{" "}
            that turn mindset shifts into real results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
