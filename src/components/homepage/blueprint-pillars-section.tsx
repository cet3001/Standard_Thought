
import { Link } from "react-router-dom";
import { Brain, Rocket, Shield } from "lucide-react";

interface BlueprintPillarsSectionProps {
  isVisible: boolean;
}

const BlueprintPillarsSection = ({ isVisible }: BlueprintPillarsSectionProps) => {
  const pillars = [
    {
      icon: <Brain className="h-10 w-10 text-purple-600" aria-hidden="true" />,
      title: "Mindset Mastery",
      description: "Heal money trauma, build confidence, and unlock your full potential—rooted in our experience.",
      link: "/about",
      bgColor: "bg-purple-500/10",
      hoverBgColor: "group-hover:bg-purple-500/20"
    },
    {
      icon: <Rocket className="h-10 w-10 text-[#247EFF]" aria-hidden="true" />,
      title: "Strategic Hustle",
      description: "Turn hustle into systems. Launch AI side hustles, stack income streams—no big startup needed.",
      link: "/blog/ai-side-hustles-guide",
      bgColor: "bg-[#247EFF]/10",
      hoverBgColor: "group-hover:bg-[#247EFF]/20"
    },
    {
      icon: <Shield className="h-10 w-10 text-amber-600" aria-hidden="true" />,
      title: "Legacy Building",
      description: "Stack assets, break cycles, and build wealth that lasts—step-by-step, for your family's future.",
      link: "/start-investing-guide",
      bgColor: "bg-amber-500/10",
      hoverBgColor: "group-hover:bg-amber-500/20"
    }
  ];

  return (
    <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-black dark:text-brand-cream">
          The Standard Thought Blueprint
        </h2>
        <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
          Our unique approach combines mindset mastery, strategic hustle, and legacy building—designed for the culture, proven for progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="group" aria-label="Standard Thought methodology pillars">
        {pillars.map((pillar, index) => (
          <Link
            key={index}
            to={pillar.link}
            className="block"
          >
            <div className="bg-amber-50/60 dark:bg-amber-900/10 border border-amber-200/50 dark:border-amber-700/30 rounded-2xl p-6 text-center group hover:scale-105 hover:shadow-lg hover:border-amber-300/60 dark:hover:border-amber-600/40 transition-all duration-300 cursor-pointer">
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 ${pillar.bgColor} ${pillar.hoverBgColor} rounded-full flex items-center justify-center transition-colors`}>
                  {pillar.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-black dark:text-brand-cream mb-4 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-brand-black/80 dark:text-brand-cream/80 leading-relaxed group-hover:text-brand-black/90 dark:group-hover:text-brand-cream/90 transition-colors">
                {pillar.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlueprintPillarsSection;
