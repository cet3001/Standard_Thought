
import { Mail } from "lucide-react";

export const NewsletterContent = () => {
  return (
    <div className="text-center p-6 sm:p-8 relative z-10">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 shadow-lg"
           style={{
             background: 'rgba(128, 128, 128, 0.2)',
             borderColor: 'rgba(255, 215, 0, 0.5)'
           }}>
        <Mail className="h-8 w-8 text-[#ffd700]" aria-label="Email newsletter icon" />
      </div>
      
      <h2 className="text-2xl sm:text-3xl font-black text-brand-black dark:text-brand-cream mb-4">
        Unlock the <span className="text-[#ffd700] drop-shadow-lg">Urban Wealth Blueprint</span>
      </h2>
      
      <p className="text-base sm:text-lg text-brand-black dark:text-brand-cream max-w-2xl mx-auto leading-relaxed mb-8">
        Real strategies. No fluff. Just blueprints that flip money trauma into power moves.
        Join 1,000+ first-gen hustlers stacking clarity, AI side hustles, and soul-rooted wealth—straight to your inbox.
      </p>
    </div>
  );
};
