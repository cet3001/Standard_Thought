interface BlogHeroProps {
  isVisible: boolean;
}

const BlogHero = ({ isVisible }: BlogHeroProps) => {
  return (
    <div className={`mb-24 p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="text-center relative z-10">
        <div className="relative inline-block mb-6">
          <h1 className="text-4xl md:text-6xl font-black text-brand-black dark:text-brand-cream mb-4 relative leading-tight">
            Out the{" "}
            <span className="relative inline-block">
              <span className="relative z-10 font-permanent-marker transform -rotate-1 inline-block" style={{
                color: 'transparent',
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'pearlescent 3s ease-in-out infinite'
              }}>
                Mud:
              </span>
            </span>{" "}
            Real{" "}
            <span className="relative inline-block">
              <span className="font-permanent-marker transform rotate-1" style={{
                color: 'transparent',
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'pearlescent 3s ease-in-out infinite'
              }}>
                Builder Stories
              </span>
            </span>{" "}
            Flipping Cycles—You Inherited Traps, Now Break 'Em Brick by Brick
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-black dark:text-brand-cream mt-4">
            Standard Thought Law #3: The Grit Myth—Street Stories Over Safe Narratives
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-white/90 dark:text-brand-cream/90 mb-8 max-w-4xl mx-auto leading-relaxed">
          80% of Black Builders Burn Out in Survival Mode—These Stories Flip It. Blending motivation (inner drive) + urban sociology (cycle traps in Black communities), dive into raw journeys turning instinct into legacy—no fluff.
        </p>

        <div className="relative rounded-xl p-6 border-l-4 max-w-3xl mx-auto mb-8" style={{
          background: 'linear-gradient(90deg, rgba(244, 208, 63, 0.1), rgba(255, 215, 0, 0.1))',
          borderLeftColor: '#ffd700'
        }}>
          <blockquote className="text-lg md:text-xl font-medium text-brand-black dark:text-brand-cream italic">
            "If you had to figure it out with nothing but vision and grind, these stories are for you—challenging excellence myths that mask systemic chains."
          </blockquote>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href="/sales"
            className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{
              background: 'linear-gradient(45deg, #ffd700, #ffeb3b)',
              color: '#000'
            }}
          >
            ⚡ Get Builder Blueprints
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;