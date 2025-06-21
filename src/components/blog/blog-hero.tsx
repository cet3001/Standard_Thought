
interface BlogHeroProps {
  isVisible: boolean;
}

const BlogHero = ({ isVisible }: BlogHeroProps) => {
  return (
    <section className="pb-16 bg-brand-cream dark:bg-brand-black">
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">
            Out the <span className="text-[#247EFF]">Mud</span>: Real Builder Stories
          </h1>
          <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 leading-relaxed mb-6">
            Raw game from people who actually built something from nothing. No theory, no fluff—just real blueprints 
            for securing the bag and leveling up financially from people who refused to stay stuck.
          </p>
          <div className="bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-6 max-w-2xl mx-auto mb-8">
            <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80">
              Every story here comes from someone who had to figure it out with their own hands and hustle. 
              These aren't case studies—they're battle-tested strategies for building generational wealth.
            </p>
          </div>
          
          {/* Quick access to pillar content */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/blog/ai-side-hustles-guide" className="px-6 py-2 bg-gradient-to-r from-accent to-[#FFD700] text-black rounded-2xl hover:scale-105 transition-all duration-300 font-bold">
              AI Side Hustles Guide
            </a>
            <a href="/blog/free-investing-guide" className="px-6 py-2 bg-gradient-to-r from-accent to-[#FFD700] text-black rounded-2xl hover:scale-105 transition-all duration-300 font-bold">
              Free Investing Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
