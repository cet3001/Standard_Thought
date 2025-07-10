interface BlogHeroProps {
  isVisible: boolean;
}

const BlogHero = ({ isVisible }: BlogHeroProps) => {
  return (
    <div className={`mb-24 p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="text-center relative z-10">
        <div className="relative inline-block mb-6">
          <h1 className="text-5xl md:text-7xl font-black text-brand-black dark:text-brand-cream mb-4 relative">
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
                Mud
              </span>
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black dark:text-brand-cream">
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
            </span>
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-white/90 dark:text-brand-cream/90 mb-8 max-w-4xl mx-auto leading-relaxed">
          No trust funds. No shortcuts. Just real blueprints from folks who built it brick by brick.
        </p>

        <div className="relative rounded-xl p-6 border-l-4 max-w-3xl mx-auto" style={{
          background: 'linear-gradient(90deg, rgba(244, 208, 63, 0.1), rgba(255, 215, 0, 0.1))',
          borderLeftColor: '#ffd700'
        }}>
          <blockquote className="text-lg md:text-xl font-medium text-brand-black dark:text-brand-cream italic">
            "If you had to figure it out with nothing but vision and grind, these stories are for you."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;