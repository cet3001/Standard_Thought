import { useGuides } from "@/hooks/use-guides";
import { useGuideDownload } from "@/hooks/use-guide-download";
import { trackButtonClick } from "@/lib/analytics-utils";

const CreditActionPlan = () => {
  const { guides, loading: guidesLoading } = useGuides();
  const { downloadGuide, isDownloading } = useGuideDownload();
  
  // Find the credit building guide
  const creditGuide = guides?.find(guide => 
    guide.title.toLowerCase().includes('credit building action plan')
  );

  const handleDownloadGuide = async () => {
    trackButtonClick('Download Guide', 'credit_page', 'credit_building_action_plan');
    
    if (!creditGuide) {
      console.error('Credit guide not found');
      return;
    }
    
    // Simple email collection
    const email = prompt('Enter your email to download the Credit Building Action Plan:');
    if (!email) return;
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Download the guide
    await downloadGuide(creditGuide.file_path || creditGuide.file_name || 'Credit Building Action Plan.pdf', email);
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border-2 border-[#FFD700]/30">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-black dark:text-brand-cream">
              Credit Building{" "}
              <span className="text-[#FFD700]">Action Plan</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-black dark:text-brand-cream leading-relaxed mb-8 max-w-2xl mx-auto">
              Download the <strong>Credit Flip Action Plan</strong>: Your step-by-step guide to building credit from scratch.
            </p>
            
            <button 
              onClick={handleDownloadGuide}
              disabled={isDownloading || guidesLoading}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-black text-xl rounded-xl transition-all duration-300 hover:scale-105 transform rotate-1 hover:rotate-0 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                fontFamily: 'Permanent Marker, cursive',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.4))'
              }}
            >
              {isDownloading ? 'Downloading...' : 'Get the Plan'}
              <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="group-hover:translate-y-0.5 transition-transform"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </div>
            </button>
            
            <p className="text-sm text-black/70 dark:text-brand-cream/70 mt-4">
              Free download • No spam • Just the blueprint
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditActionPlan;