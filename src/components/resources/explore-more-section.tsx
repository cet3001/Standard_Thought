
import { ArrowRight, Building2, Target, Cpu, Banknote } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExploreMoreSection = () => {
  const navigate = useNavigate();

  const topics = [
    {
      title: "Credit Building",
      description: "Fix your credit score fast with street-smart strategies",
      icon: Building2,
      route: "/blog/credit-building-guide",
      color: "#10B981"
    },
    {
      title: "Smart Investing", 
      description: "Start building wealth with micro-investing apps",
      icon: Target,
      route: "/start-investing-guide",
      color: "#3B82F6"
    },
    {
      title: "AI Side Hustles",
      description: "Turn AI tools into consistent income streams",
      icon: Cpu,
      route: "/blog/ai-side-hustles-guide", 
      color: "#8B5CF6"
    },
    {
      title: "Cash Management",
      description: "Break the paycheck-to-paycheck cycle for good",
      icon: Banknote,
      route: "/wealth-building-strategies",
      color: "#F97316"
    }
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Urban background texture */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,.1)_10px,rgba(0,0,0,.1)_20px)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header with Street Style */}
        <div className="text-center mb-8 md:mb-12">
          <div className="relative inline-block mb-4">
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0A0A0A] dark:text-brand-cream tracking-wide uppercase relative z-10"
              style={{ 
                fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                textShadow: '3px 3px 0px rgba(244, 208, 63, 0.3)',
                transform: 'rotate(-1deg)'
              }}
            >
              Explore More 🔥
            </h2>
            {/* Hand-drawn underline effect */}
            <div 
              className="absolute -bottom-2 left-0 right-0 h-2 opacity-80"
              style={{
                background: 'linear-gradient(90deg, transparent 5%, #f4d03f 20%, #ffd700 50%, #ffeb3b 80%, transparent 95%)',
                borderRadius: '50px',
                transform: 'rotate(1deg)'
              }}
            />
          </div>
          <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto text-base md:text-lg">
            Deep dive into the strategies that actually work
          </p>
        </div>

        {/* Urban-Style Topic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {topics.map((topic, index) => {
            const IconComponent = topic.icon;
            
            return (
              <div
                key={topic.title}
                onClick={() => navigate(topic.route)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-[#0A0A0A]/20 dark:border-brand-cream/20"
                style={{
                  background: `
                    linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0.7) 100%),
                    linear-gradient(45deg, ${topic.color}40 0%, ${topic.color}20 100%)
                  `,
                  backdropFilter: 'blur(10px)',
                  animation: `float 3s ease-in-out infinite ${index * 0.5}s`
                }}
              >
                {/* Urban texture overlay */}
                <div className="absolute inset-0 opacity-20 bg-[conic-gradient(from_0deg_at_2px_2px,_rgba(0,0,0,1)_90deg,_transparent_90deg)] bg-[length:12px_12px]"></div>
                
                {/* Graffiti-style corner accent */}
                <div 
                  className="absolute top-0 right-0 w-16 h-16 opacity-30"
                  style={{
                    background: `radial-gradient(circle at center, ${topic.color}60 0%, transparent 70%)`,
                    clipPath: 'polygon(50% 0%, 100% 0%, 100% 50%)'
                  }}
                />
                
                {/* Street-style icon with background */}
                <div className="relative z-10 mb-4 p-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-sm border-2 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${topic.color}30 0%, ${topic.color}10 100%)`,
                      borderColor: `${topic.color}60`,
                      boxShadow: `0 4px 12px ${topic.color}20`
                    }}
                  >
                    <IconComponent 
                      className="w-7 h-7" 
                      style={{ color: topic.color }}
                    />
                  </div>
                </div>

                {/* Content with street styling */}
                <div className="relative z-10 px-6 pb-6">
                  <h3 className="text-brand-cream font-bold text-lg mb-2 leading-tight">
                    {topic.title}
                  </h3>
                  <p className="text-brand-cream/80 text-sm leading-relaxed mb-4">
                    {topic.description}
                  </p>
                  
                  {/* Street-style CTA */}
                  <div 
                    className="flex items-center font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300 px-3 py-2 rounded-lg border backdrop-blur-sm"
                    style={{
                      color: topic.color,
                      borderColor: `${topic.color}40`,
                      background: `linear-gradient(135deg, ${topic.color}10 0%, transparent 100%)`
                    }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Urban grit bottom accent */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-60"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${topic.color} 50%, transparent 100%)`
                  }}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-[#0A0A0A]/60 dark:text-brand-cream/60 text-sm md:text-base">
            <strong>Start anywhere.</strong> Every strategy builds on the next.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default ExploreMoreSection;
