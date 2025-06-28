
import { Mail, Lock } from "lucide-react";
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const NewsletterHeader = () => {
  return (
    <>
      {/* "Members Only" Stamp Overlay */}
      <div className="absolute top-6 right-6 z-10">
        <div 
          className="bg-[#247EFF]/90 text-white px-4 py-2 transform -rotate-12 shadow-lg border-2 border-[#247EFF]"
          style={{ 
            fontFamily: "'IBM Plex Sans', 'Courier New', monospace",
            fontSize: '14px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}
        >
          <Lock className="w-4 h-4 inline mr-2" />
          Members Only
        </div>
      </div>

      <CardHeader className="text-center p-6 sm:p-8 relative z-10">
        <div className="w-16 h-16 bg-[#247EFF]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-[#247EFF]/30">
          <Mail className="h-8 w-8 text-[#247EFF]" aria-label="Email newsletter icon" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-black text-brand-black dark:text-brand-cream mb-4">
          Unlock the <span className="text-[#247EFF]">Urban Wealth Blueprint</span>
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-brand-black dark:text-brand-cream max-w-2xl mx-auto leading-relaxed">
          Join 1,000+ first-gen hustlers flipping the script on money. Get weekly street-smart strategies, 
          exclusive AI side hustle plays, and real talk on breaking money trauma—straight to your inbox. 
          No spam, no fluff—just blueprints that actually work.
        </CardDescription>
      </CardHeader>
    </>
  );
};
