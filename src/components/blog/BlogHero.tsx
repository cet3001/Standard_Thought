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
            Raw Lessons from{" "}
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
                Self-Taught Builders
              </span>
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-brand-black dark:text-brand-cream mt-4">
            Nobody gave them the map—so they started building anyway. These stories weren't made for LinkedIn. They're the unfiltered blueprints of how real ones turned chaos into clarity, pain into power, and silence into systems that speak.
          </h2>
        </div>

        <p className="text-lg md:text-xl text-brand-black/80 dark:text-brand-cream/80 mb-8 max-w-4xl mx-auto leading-relaxed">
          This is what survival never showed us—how to pivot, document, and pass it on. Each post is a lived formula. No filters. Just the honest grind of designing better outcomes from broken starts.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href="#blog-posts"
            className="group inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-permanent-marker"
            style={{
              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
              backgroundSize: '400% 400%',
              color: '#000',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.3))',
              animation: 'pearlescent 3s ease-in-out infinite',
              transform: 'rotate(-1deg)'
            }}
          >
            Start Digging—The Real Stories Are Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;