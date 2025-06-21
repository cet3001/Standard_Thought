
const StrategyPathwaysSection = () => {
  return (
    <div className="mb-12 bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-6">
      <h2 className="text-2xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-4">
        Strategic Learning Pathways
      </h2>
      <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-6">
        Navigate your financial education journey with curated learning paths designed for different stages and goals.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-[#247EFF]/10 to-blue-50 dark:from-[#247EFF]/20 dark:to-blue-900/20 p-4 rounded-2xl">
          <h3 className="font-semibold text-[#247EFF] mb-2">📚 Foundation Builder</h3>
          <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-3">
            Master the basics before scaling up. Essential knowledge for beginners.
          </p>
          <div className="space-y-2">
            <a href="/blog?category=Financial Literacy" className="block text-sm text-[#247EFF] hover:underline">
              → Financial Literacy Deep Dives
            </a>
            <a href="/blog?category=Credit Building" className="block text-sm text-[#247EFF] hover:underline">
              → Credit Building Case Studies
            </a>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-100/50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/20 p-4 rounded-2xl">
          <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">🚀 Growth Accelerator</h3>
          <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-3">
            Scale your income and investments with proven strategies.
          </p>
          <div className="space-y-2">
            <a href="/ai-side-hustles-guide" className="block text-sm text-green-700 dark:text-green-400 hover:underline">
              → AI Side Hustle Mastery
            </a>
            <a href="/free-investing-guide" className="block text-sm text-green-700 dark:text-green-400 hover:underline">
              → Advanced Investing Tactics
            </a>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-100/50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/20 p-4 rounded-2xl">
          <h3 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-2">👑 Legacy Creator</h3>
          <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-3">
            Build generational wealth and teach others your strategies.
          </p>
          <div className="space-y-2">
            <a href="/wealth-building-strategies" className="block text-sm text-yellow-700 dark:text-yellow-400 hover:underline">
              → Wealth Building Blueprints
            </a>
            <a href="/blog?category=Entrepreneurship" className="block text-sm text-yellow-700 dark:text-yellow-400 hover:underline">
              → Business Scaling Stories
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-[#247EFF]/20">
        <h3 className="font-semibold text-[#0A0A0A] dark:text-brand-cream mb-3">
          📊 Story Analysis Tools
        </h3>
        <div className="flex flex-wrap gap-3">
          <a href="/blog?search=case+study" className="px-4 py-2 bg-[#247EFF]/10 text-[#247EFF] rounded-full text-sm hover:bg-[#247EFF]/20 transition-colors">
            View Case Studies
          </a>
          <a href="/blog?search=before+after" className="px-4 py-2 bg-[#247EFF]/10 text-[#247EFF] rounded-full text-sm hover:bg-[#247EFF]/20 transition-colors">
            Before & After Stories
          </a>
          <a href="/blog?search=lessons+learned" className="px-4 py-2 bg-[#247EFF]/10 text-[#247EFF] rounded-full text-sm hover:bg-[#247EFF]/20 transition-colors">
            Key Lessons Extracted
          </a>
          <a href="/blog?category=Mindset" className="px-4 py-2 bg-[#247EFF]/10 text-[#247EFF] rounded-full text-sm hover:bg-[#247EFF]/20 transition-colors">
            Mindset Shifts
          </a>
        </div>
      </div>
    </div>
  );
};

export default StrategyPathwaysSection;
