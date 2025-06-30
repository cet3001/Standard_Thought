
import { ArrowRight, CreditCard, TrendingUp, Bot, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExploreMoreSection = () => {
  const navigate = useNavigate();

  const topics = [
    {
      title: "Credit Building",
      description: "Fix your credit score fast with street-smart strategies",
      icon: CreditCard,
      route: "/blog/credit-building-guide",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      title: "Smart Investing", 
      description: "Start building wealth with micro-investing apps",
      icon: TrendingUp,
      route: "/start-investing-guide",
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      title: "AI Side Hustles",
      description: "Turn AI tools into consistent income streams",
      icon: Bot,
      route: "/blog/ai-side-hustles-guide", 
      gradient: "from-purple-400 to-violet-600"
    },
    {
      title: "Cash Management",
      description: "Break the paycheck-to-paycheck cycle for good",
      icon: Wallet,
      route: "/wealth-building-strategies",
      gradient: "from-orange-400 to-red-600"
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
                className="group relative overflow-hidden bg-white/90 dark:bg-brand-black/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-transparent hover:border-white/30 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, ${topic.gradient.split(' ')[1]} 0%, ${topic.gradient.split(' ')[3]} 100%)`,
                  animation: `float 3s ease-in-out infinite ${index * 0.5}s`
                }}
              >
                {/* Graffiti texture overlay */}
                <div className="absolute inset-0 opacity-10 bg-[conic-gradient(from_0deg_at_2px_2px,_rgba(0,0,0,1)_90deg,_transparent_90deg)] bg-[length:12px_12px]"></div>
                
                {/* Icon with urban styling */}
                <div className="relative z-10 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                    {topic.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {topic.description}
                  </p>
                  
                  {/* CTA with arrow */}
                  <div className="flex items-center text-white font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Graffiti-style accent */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-30">
                  <svg viewBox="0 0 32 32" className="w-full h-full text-white">
                    <path
                      d="M8,8 Q16,4 24,8 Q28,16 24,24 Q16,28 8,24 Q4,16 8,8 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      transform="rotate(15)"
                    />
                  </svg>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
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
