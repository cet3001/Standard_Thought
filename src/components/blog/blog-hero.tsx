
interface BlogHeroProps {
  isVisible: boolean;
}

const BlogHero = ({ isVisible }: BlogHeroProps) => {
  return (
    <section className="pt-16 pb-16 relative overflow-hidden">
      {/* Pearlescent accent elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-20 animate-float"
          style={{
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            animation: 'pearlescent 3s ease-in-out infinite, float 6s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl opacity-30 animate-float"
          style={{ 
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            animation: 'pearlescent 3s ease-in-out infinite, float 6s ease-in-out infinite',
            animationDelay: '2s' 
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
          <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 leading-relaxed mb-6">
            Raw game from people who actually built something from nothing. No theory, no fluff—just real blueprints 
            for securing the bag and leveling up financially from people who refused to stay stuck.
          </p>
          <div 
            className="backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-6 max-w-2xl mx-auto mb-8 relative overflow-hidden"
            style={{
              background: 'linear-gradient(45deg, rgba(244, 208, 63, 0.1), rgba(247, 220, 111, 0.1), rgba(253, 234, 167, 0.1), rgba(248, 231, 28, 0.1), rgba(255, 215, 0, 0.1), rgba(255, 235, 59, 0.1), rgba(241, 245, 118, 0.1), rgba(244, 208, 63, 0.1))',
              backgroundSize: '400% 400%',
              animation: 'pearlescent 3s ease-in-out infinite'
            }}
          >
            <div className="relative z-10 bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm rounded-2xl p-4">
              <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80">
                Every story here comes from someone who had to figure it out with their own hands and hustle. 
                These aren't case studies—they're battle-tested strategies for building generational wealth.
              </p>
            </div>
          </div>
          
          {/* Quick access to pillar content with pearlescent styling */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/blog/ai-side-hustles-guide" 
              className="px-6 py-2 rounded-2xl hover:scale-105 transition-all duration-300 font-bold text-black relative overflow-hidden"
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
              className="px-6 py-2 rounded-2xl hover:scale-105 transition-all duration-300 font-bold text-black relative overflow-hidden"
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
      `}</style>
    </section>
  );
};

export default BlogHero;
