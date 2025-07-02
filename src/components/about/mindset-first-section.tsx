
import { useEffect, useState } from "react";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const MindsetFirstSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { textureImageUrl } = useUrbanTexture();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              <img 
                src="/lovable-uploads/a8faab87-8319-4fa0-ae53-35597c6f8fc5.png" 
                alt="Person looking up at towering buildings from ground level - representing building your own legacy and reaching for success from humble beginnings" 
                className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
              />
              {/* Grain/torn-paper overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-white/5 to-black/10 mix-blend-overlay"></div>
              <div 
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '40px 40px'
                }}
              ></div>
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h2 className="text-4xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">Why Mindset First?</h2>
            
            {/* Handwritten Pull-Quote */}
            <div className="relative mb-8 p-6 bg-black/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl border-l-4 border-yellow-400">
              <blockquote 
                className="text-2xl font-bold text-center"
                style={{
                  fontFamily: "'Kalam', cursive",
                  background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  animation: 'pearlescent 3s ease-in-out infinite',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  transform: 'rotate(-1deg)',
                  letterSpacing: '0.5px'
                }}
              >
                "Flip your mindset, flip your money."
              </blockquote>
              {/* Handwritten underline */}
              <svg 
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-2" 
                viewBox="0 0 200 10" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M5,7 Q50,3 95,6 T185,4" 
                  stroke="#FFD700" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round"
                  opacity="0.8"
                />
              </svg>
            </div>

            <div className="space-y-4 text-[#0A0A0A]/70 dark:text-brand-cream/70">
              <p>
                Every wealth move starts in your head. StandardThought was built for those who had to teach themselves 
                how to think bigger, push past doubt, and turn setbacks into setups.
              </p>
              <p>
                We know what it's like to go from "I can't afford it" to "How can I afford it?" Mindset ain't hype—it's the foundation every real move is built on.
              </p>
              <p>
                We're here for the long haul—helping you build the mental foundation for <span 
                  className="font-medium"
                  style={{
                    background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                    backgroundSize: '400% 400%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    animation: 'pearlescent 3s ease-in-out infinite'
                  }}
                >generational progress</span>. 
                Because when your mindset is right, the money moves follow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindsetFirstSection;
