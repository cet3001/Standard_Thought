import { useGuides } from "@/hooks/use-guides";
import { useGuideDownload } from "@/hooks/use-guide-download";
import { trackButtonClick } from "@/lib/analytics-utils";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const CreditCTA = () => {
  const { guides, loading: guidesLoading } = useGuides();
  const { downloadGuide, isDownloading } = useGuideDownload();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Find the credit building guide
  const creditGuide = guides?.find(guide => 
    guide.title.toLowerCase().includes('credit building action plan')
  );

  const handleJoinCommunity = async () => {
    trackButtonClick('Join Community', 'credit_page', 'credit_cta');
    
    if (!creditGuide) {
      toast({
        title: "Guide not found",
        description: "The credit building guide is not available right now. Please try again later.",
        variant: "destructive",
      });
      return;
    }
    
    // Simple email collection
    const email = prompt('Enter your email to join the community and get the Credit Building Blueprint:');
    if (!email) return;
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Subscribe to newsletter
      const { error: subscribeError } = await supabase
        .from('Subscribers')
        .insert([{ email }]);
      
      if (subscribeError && !subscribeError.message.includes('duplicate')) {
        console.error('Newsletter subscription error:', subscribeError);
        toast({
          title: "Subscription failed",
          description: "There was an issue subscribing you to our newsletter. Please try again.",
          variant: "destructive",
        });
        return;
      }
      
      // Download the guide
      await downloadGuide(creditGuide.file_path || creditGuide.file_name || 'Credit Building Action Plan.pdf', email);
      
      toast({
        title: "Welcome to the community!",
        description: "You've been subscribed to our newsletter and the guide is downloading now.",
      });
      
    } catch (error) {
      console.error('Error joining community:', error);
      toast({
        title: "Something went wrong",
        description: "There was an issue processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border-2 border-[#FFD700]/30">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-black dark:text-brand-cream">
              Join the{" "}
              <span className="text-[#FFD700]">Movement</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-black dark:text-brand-cream leading-relaxed mb-8 max-w-2xl mx-auto">
              Get exclusive credit strategies, real builder wins, and financial moves that actually work—straight to your inbox.
            </p>
            
            <button 
              onClick={handleJoinCommunity}
              disabled={isSubmitting || isDownloading || guidesLoading}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-black text-xl rounded-xl transition-all duration-300 hover:scale-105 transform rotate-1 hover:rotate-0 shadow-lg hover:shadow-xl mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                fontFamily: 'Permanent Marker, cursive',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.4))'
              }}
            >
              {isSubmitting || isDownloading ? 'Joining Community...' : 'Get More Credit Moves—Join the Community'}
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
                  className="group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </button>
            
            <p className="text-sm text-black/70 dark:text-brand-cream/70">
              Get the Credit Building Blueprint + join our newsletter • No spam, just real strategies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCTA;