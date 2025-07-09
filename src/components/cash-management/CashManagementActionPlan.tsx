import { useGuides } from "@/hooks/use-guides";
import { useGuideDownload } from "@/hooks/use-guide-download";

const CashManagementActionPlan = () => {
  const { guides, loading: guidesLoading } = useGuides();
  const { downloadGuide, isDownloading } = useGuideDownload();

  const handleDownload = async () => {
    if (guides && guides.length > 0) {
      const cashGuide = guides.find(g => g.title.toLowerCase().includes('cash') || g.title.toLowerCase().includes('flow'));
      if (cashGuide) {
        await downloadGuide(cashGuide.id, 'cash-management-action-plan');
      } else {
        console.log('Cash management guide not found');
      }
    } else {
      console.log('No guides available');
    }
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <div className="bg-gradient-to-br from-black/10 via-gray-800/5 to-black/10 dark:from-white/10 dark:via-gray-200/5 dark:to-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border-2 border-black/20 dark:border-white/20 relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/5 to-transparent opacity-30"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-black dark:text-brand-cream leading-tight">
              Cash Management{" "}
              <span className="text-[#FFD700]" style={{
                background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 3s ease-in-out infinite'
              }}>
                Action Plan
              </span>{" "}
              (Downloadable)
            </h2>
            
            <p className="text-lg sm:text-xl mb-8 text-black dark:text-brand-cream leading-relaxed max-w-2xl mx-auto">
              Download the Cash Flow Action Plan: Your step-by-step guide to mastering your money, even on a tight budget.
            </p>
            
            {/* Features List */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-4 border border-gray-300/10 dark:border-gray-700/10">
                <div className="text-2xl mb-2">📋</div>
                <h3 className="font-bold text-black dark:text-brand-cream mb-2">Step-by-Step Tracker</h3>
                <p className="text-sm text-black dark:text-brand-cream">Follow the 6-step blueprint with actionable worksheets</p>
              </div>
              
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-4 border border-gray-300/10 dark:border-gray-700/10">
                <div className="text-2xl mb-2">💰</div>
                <h3 className="font-bold text-black dark:text-brand-cream mb-2">Money Flow Templates</h3>
                <p className="text-sm text-black dark:text-brand-cream">Track irregular income and manage the 3-Account System</p>
              </div>
              
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-4 border border-gray-300/10 dark:border-gray-700/10">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-bold text-black dark:text-brand-cream mb-2">Goal Setting Guide</h3>
                <p className="text-sm text-black dark:text-brand-cream">Set realistic money goals that actually stick</p>
              </div>
            </div>
            
            {/* Hand-drawn style button */}
            <button 
              onClick={handleDownload}
              disabled={isDownloading || guidesLoading}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-black font-black text-xl rounded-2xl transition-all duration-300 hover:scale-105 transform -rotate-1 hover:rotate-0 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed" 
              style={{
                fontFamily: 'Permanent Marker, cursive',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                border: '3px solid #FFD700',
                borderRadius: '15px'
              }}
            >
              <span className="relative z-10">
                {isDownloading ? 'Downloading...' : 'Get the Plan'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <p className="text-sm text-black/70 dark:text-brand-cream/70 mt-4 font-medium">
              Free download • No spam • Instant access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashManagementActionPlan;