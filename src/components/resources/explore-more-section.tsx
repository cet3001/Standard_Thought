
import { ArrowRight, CreditCard, PiggyBank, Laptop, Banknote } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExploreMoreSection = () => {
  const navigate = useNavigate();

  const topics = [
    {
      title: "Credit Building",
      description: "Fix your credit score fast with street-smart strategies",
      icon: CreditCard,
      route: "/blog/credit-building-guide",
      color: "#D4AF37", // Muted gold
      bgGradient: "from-[#2A2A2A] to-[#1A1A1A]"
    },
    {
      title: "Smart Investing", 
      description: "Start building wealth with micro-investing apps",
      icon: PiggyBank,
      route: "/start-investing-guide",
      color: "#B8860B", // Dark goldenrod
      bgGradient: "from-[#2D2D2D] to-[#1D1D1D]"
    },
    {
      title: "AI Side Hustles",
      description: "Turn AI tools into consistent income streams",
      icon: Laptop,
      route: "/blog/ai-side-hustles-guide", 
      color: "#FFD700", // Classic gold
      bgGradient: "from-[#2F2F2F] to-[#1F1F1F]"
    },
    {
      title: "Cash Management",
      description: "Break the paycheck-to-paycheck cycle for good",
      icon: Banknote,
      route: "/wealth-building-strategies",
      color: "#DDBF47", // Warm gold
      bgGradient: "from-[#323232] to-[#222222]"
    }
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Street-style background texture */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(184, 134, 11, 0.06) 0%, transparent 50%)
          `
        }}></div>
        {/* Concrete texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.1) 2px,
            rgba(0,0,0,0.1) 4px
          )`
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Street-style header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="relative inline-block mb-4">
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0A0A0A] dark:text-brand-cream tracking-wide uppercase relative z-10"
              style={{ 
                fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                textShadow: '3px 3px 0px rgba(255, 215, 0, 0.4), 6px 6px 0px rgba(0, 0, 0, 0.2)',
                transform: 'rotate(-1.5deg)',
                filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3))'
              }}
            >
              Explore More 🔥
            </h2>
            {/* Hand-drawn underline with pearlescent effect */}
            <div 
              className="absolute -bottom-3 left-0 right-0 h-3 opacity-90"
              style={{
                background: 'linear-gradient(90deg, transparent 5%, #FFD700 15%, #F4D03F 30%, #DDBF47 50%, #D4AF37 70%, #FFD700 85%, transparent 95%)',
                borderRadius: '50px 30px 40px 20px',
                transform: 'rotate(1.5deg) skew(-2deg)',
                filter: 'blur(0.5px)'
              }}
            />
          </div>
          <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto text-base md:text-lg font-medium">
            Deep dive into the strategies that actually work
          </p>
        </div>

        {/* Street flyer-style cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {topics.map((topic, index) => {
            const IconComponent = topic.icon;
            
            return (
              <div
                key={topic.title}
                onClick={() => navigate(topic.route)}
                className="group relative overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  borderRadius: '12px 20px 15px 18px', // Uneven, hand-cut borders
                  filter: 'drop-shadow(4px 6px 12px rgba(0, 0, 0, 0.4))',
                  animation: `streetFloat 4s ease-in-out infinite ${index * 0.7}s`,
                  border: '2px solid rgba(255, 215, 0, 0.2)'
                }}
                className={`bg-gradient-to-br ${topic.bgGradient}`}
              >
                {/* Concrete/grain texture overlay */}
                <div 
                  className="absolute inset-0 opacity-20 mix-blend-multiply"
                  style={{
                    backgroundImage: `
                      repeating-conic-gradient(from 0deg at 50% 50%, 
                        rgba(0,0,0,0.1) 0deg, transparent 2deg, rgba(0,0,0,0.05) 4deg, transparent 6deg),
                      radial-gradient(circle at 30% 70%, rgba(255,255,255,0.02) 0%, transparent 50%)
                    `,
                    backgroundSize: '8px 8px, 100px 100px'
                  }}
                />
                
                {/* Street art corner accent */}
                <div 
                  className="absolute top-0 right-0 w-16 h-16 opacity-40"
                  style={{
                    background: `conic-gradient(from 45deg, ${topic.color}60 0deg, transparent 120deg)`,
                    clipPath: 'polygon(60% 0%, 100% 0%, 100% 40%)',
                    filter: 'blur(1px)'
                  }}
                />
                
                {/* Hand-drawn icon container */}
                <div className="relative z-10 p-6 pb-4">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-1"
                    style={{
                      background: `linear-gradient(135deg, ${topic.color}25 0%, rgba(0,0,0,0.3) 100%)`,
                      borderColor: `${topic.color}80`,
                      boxShadow: `
                        inset 2px 2px 4px rgba(255,255,255,0.1),
                        inset -2px -2px 4px rgba(0,0,0,0.3),
                        0 4px 12px ${topic.color}30
                      `,
                      transform: 'rotate(-2deg)'
                    }}
                  >
                    <IconComponent 
                      className="w-8 h-8 drop-shadow-lg" 
                      style={{ 
                        color: topic.color,
                        filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.5))'
                      }}
                    />
                  </div>
                </div>

                {/* Street-style content */}
                <div className="relative z-10 px-6 pb-6">
                  <h3 
                    className="text-brand-cream font-black text-lg mb-3 leading-tight uppercase tracking-wide"
                    style={{
                      fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                      textShadow: '2px 2px 0px rgba(0,0,0,0.8), 4px 4px 0px rgba(0,0,0,0.3)',
                      transform: 'rotate(-0.5deg)',
                      color: topic.color
                    }}
                  >
                    {topic.title}
                  </h3>
                  <p className="text-brand-cream/85 text-sm leading-relaxed mb-4 font-medium">
                    {topic.description}
                  </p>
                  
                  {/* Hand-painted button */}
                  <div 
                    className="inline-flex items-center font-bold text-sm group-hover:translate-x-1 group-hover:scale-105 transition-all duration-300 px-4 py-2 rounded-lg border-2 backdrop-blur-sm uppercase tracking-wider"
                    style={{
                      background: `linear-gradient(135deg, ${topic.color}90 0%, ${topic.color}70 100%)`,
                      borderColor: `${topic.color}`,
                      color: '#0A0A0A',
                      fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                      textShadow: '1px 1px 0px rgba(255,255,255,0.3)',
                      boxShadow: `
                        inset 1px 1px 2px rgba(255,255,255,0.3),
                        inset -1px -1px 2px rgba(0,0,0,0.2),
                        0 3px 8px rgba(0,0,0,0.4)
                      `,
                      transform: 'rotate(-1deg)'
                    }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Street art bottom accent */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-70"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${topic.color}80 20%, ${topic.color} 50%, ${topic.color}80 80%, transparent 100%)`,
                    filter: 'blur(0.5px)'
                  }}
                />

                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at center, ${topic.color}40 0%, transparent 70%)`
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Street-style bottom message */}
        <div className="text-center mt-8 md:mt-12">
          <p 
            className="text-[#0A0A0A]/70 dark:text-brand-cream/70 text-base md:text-lg font-bold uppercase tracking-wide"
            style={{
              fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
              textShadow: '1px 1px 0px rgba(255, 215, 0, 0.3)'
            }}
          >
            <span style={{ color: '#FFD700' }}>Start anywhere.</span> Every strategy builds on the next.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes streetFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-3px) rotate(0.5deg);
          }
          50% {
            transform: translateY(-2px) rotate(-0.5deg);
          }
          75% {
            transform: translateY(-4px) rotate(0.3deg);
          }
        }
      `}</style>
    </section>
  );
};

export default ExploreMoreSection;
