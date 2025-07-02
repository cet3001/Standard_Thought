
interface BlogHeroProps {
  isVisible: boolean;
}

const BlogHero = ({ isVisible }: BlogHeroProps) => {
  return (
    <section className="pt-16 pb-16 relative overflow-hidden">
      {/* Enhanced pearlescent accent elements - Consistent with other pages */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute top-16 right-8 w-28 h-28 rounded-full opacity-18 animate-float"
          style={{
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            animation: 'pearlescent 4s ease-in-out infinite, float 6s ease-in-out infinite',
            filter: 'blur(1px)'
          }}
        ></div>
        <div 
          className="absolute bottom-36 left-8 w-20 h-20 rounded-2xl opacity-25 animate-float"
          style={{ 
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            animation: 'pearlescent 3s ease-in-out infinite, float 6s ease-in-out infinite',
            animationDelay: '2s',
            filter: 'blur(0.5px)'
          }}
        ></div>
        <div 
          className="absolute top-40 left-1/3 w-12 h-12 rounded-full opacity-15 animate-float"
          style={{ 
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            animation: 'pearlescent 5s ease-in-out infinite, float 8s ease-in-out infinite',
            animationDelay: '4s',
            filter: 'blur(1px)'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">
            Out the{" "}
            <span 
              className="font-black"
              style={{ 
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                animation: 'pearlescent 3s ease-in-out infinite'
              }}
            >
              Mud
            </span>
            : Real Builder Stories
          </h1>

          {/* Direct, community-rooted intro */}
          <div className="highlight rounded-2xl p-8 mb-8">
            <p className="text-xl md:text-2xl text-[#0A0A0A] dark:text-brand-cream leading-relaxed mb-8 font-semibold">
              This ain't theory—this is raw game from hustlers who built it brick by brick. 
              If you had to figure it out with nothing but vision and grind, these stories are for you.
            </p>

            {/* Handwritten-style pull-quote */}
            <div className="relative">
              <blockquote 
                className="text-2xl md:text-3xl text-[#0A0A0A] dark:text-brand-cream transform -rotate-1 relative inline-block px-8 py-6"
                style={{ 
                  fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                  textShadow: '2px 2px 0px rgba(255,215,0,0.4)',
                  letterSpacing: '0.5px'
                }}
              >
                "No trust funds. No shortcuts. Just real blueprints for stacking bread and breaking cycles."
                
                {/* Hand-drawn style quotation marks */}
                <span 
                  className="absolute -top-4 -left-2 text-[#FFD700] text-6xl opacity-60"
                  style={{ 
                    fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                    transform: 'rotate(-15deg)'
                  }}
                >
                  "
                </span>
                <span 
                  className="absolute -bottom-8 -right-2 text-[#FFD700] text-6xl opacity-60"
                  style={{ 
                    fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                    transform: 'rotate(15deg)'
                  }}
                >
                  "
                </span>
                
                {/* Underline scribble */}
                <div 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-80 h-3 opacity-70"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 20'%3E%3Cpath d='M5 15 Q 40 5, 80 12 T 160 8 T 240 13 T 315 10' stroke='%23FFD700' stroke-width='4' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}
                >
                </div>
              </blockquote>
            </div>
          </div>
          
          {/* Enhanced CTA buttons with consistent pearlescent styling */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/blog/ai-side-hustles-guide" 
              className="px-6 py-3 rounded-2xl hover:scale-105 transition-all duration-300 font-bold text-black relative overflow-hidden shadow-lg hover:shadow-xl"
              style={{
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                animation: 'pearlescent 3s ease-in-out infinite'
              }}
            >
              AI Side Hustles Guide
            </a>
            <a 
              href="/start-investing-guide" 
              className="px-6 py-3 rounded-2xl hover:scale-105 transition-all duration-300 font-bold text-black relative overflow-hidden shadow-lg hover:shadow-xl"
              style={{
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                animation: 'pearlescent 3s ease-in-out infinite'
              }}
            >
              Start Investing Guide
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pearlescent {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
};

export default BlogHero;
