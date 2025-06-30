
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import OptimizedImage from "@/components/optimized-image";
import { useGuideDownload } from "@/hooks/use-guide-download";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/lib/email-utils";

const FeaturedGuidesSection = () => {
  const { downloadGuide, isDownloading } = useGuideDownload();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email to download the guide.",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribing(true);
    
    try {
      // First, subscribe them to the newsletter
      await subscribeToNewsletter(email);
      
      // Then trigger the guide download
      // Note: You'll need to replace 'your-guide-filename.pdf' with the actual filename
      await downloadGuide('10k-starter-blueprint.pdf', email);
      
      toast({
        title: "Success! 🎉",
        description: "You've been subscribed and your guide is downloading now!",
      });
      
      setEmail("");
    } catch (error) {
      console.error('Download process error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <section className="mb-16 md:mb-20">
      <div className="text-center mb-8 md:mb-12">
        <HeaderHierarchy level={2} className="mb-4 text-xl md:text-2xl lg:text-3xl">
          Featured <span className="text-[#247EFF]">Wealth Building</span> Guides
        </HeaderHierarchy>
        <p className="text-base md:text-lg text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
          Street-smart blueprints designed for hustlers ready to level up their money game
        </p>
      </div>

      {/* Flexible grid for future guides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
        {/* Featured Guide Card */}
        <Card className="border-[#247EFF]/20 hover:border-[#247EFF]/40 transition-all duration-300 hover:shadow-xl group relative overflow-hidden bg-gradient-to-br from-white/95 to-white/90 dark:from-[#0A0A0A]/95 dark:to-[#0A0A0A]/90 backdrop-blur-sm">
          {/* "FREE" Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              FREE
            </span>
          </div>

          <CardHeader className="p-0">
            {/* Guide Cover Image - Properly fitted */}
            <div className="relative overflow-hidden rounded-t-lg h-48 md:h-52">
              <OptimizedImage
                src="/lovable-uploads/b4e3b459-4253-40a2-bc9a-74ec02d85e18.png"
                alt="The $10K Starter Blueprint - Premium Investing Playbook Cover"
                className="w-full h-full object-contain bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 group-hover:scale-105 transition-transform duration-300 p-2"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <CardTitle className="text-[#0A0A0A] dark:text-brand-cream mb-3">
              <HeaderHierarchy level={3} className="mb-0 text-lg md:text-xl leading-tight">
                The $10K Starter Blueprint
              </HeaderHierarchy>
            </CardTitle>

            <CardDescription className="text-[#0A0A0A]/70 dark:text-brand-cream/70 text-sm md:text-base leading-relaxed mb-4">
              Step-by-step, street-smart investing for first-gen hustlers and underestimated creatives. Real stories, no jargon, actionable moves.
            </CardDescription>

            {/* Key Benefits */}
            <div className="mb-6">
              <p className="text-xs font-medium text-[#0A0A0A]/60 dark:text-brand-cream/60 mb-3 uppercase tracking-wide">
                What You'll Get:
              </p>
              <ul className="space-y-2" role="list">
                {[
                  "Street-smart steps to your first $10K",
                  "Scam-avoidance tips", 
                  "No fluff—just real moves"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#0A0A0A]/80 dark:text-brand-cream/80 text-sm" role="listitem">
                    <div className="w-2 h-2 bg-[#247EFF] rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email Input + Download */}
            <div className="space-y-3 mb-4">
              <Input
                type="email"
                placeholder="Enter your email for instant download..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                disabled={isSubscribing || isDownloading}
              />
              <Button 
                onClick={handleDownload}
                disabled={isSubscribing || isDownloading || !email}
                className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:scale-105 text-black min-h-[44px] touch-manipulation font-bold text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl border-0" 
                aria-label="Download The $10K Starter Blueprint for free"
              >
                {isSubscribing || isDownloading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2"></div>
                    {isSubscribing ? 'Subscribing...' : 'Downloading...'}
                  </div>
                ) : (
                  'Download Free'
                )}
              </Button>
            </div>

            <p className="text-xs text-[#0A0A0A]/60 dark:text-brand-cream/60 text-center">
              You'll also join our newsletter for exclusive wealth-building tips
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedGuidesSection;
