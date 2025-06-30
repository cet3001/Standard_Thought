import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import OptimizedImage from "@/components/optimized-image";
import { useGuideDownload } from "@/hooks/use-guide-download";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/lib/email-utils";
import { Lock, Users } from "lucide-react";

const FeaturedGuidesSection = () => {
  const { downloadGuide, isDownloading } = useGuideDownload();
  const [email, setEmail] = useState("");
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isJoiningWaitlist, setIsJoiningWaitlist] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { toast } = useToast();

  // Social proof testimonials
  const testimonials = [
    { text: "Finally, money advice that speaks my language.", author: "Jamal", city: "Atlanta" },
    { text: "This ain't your typical finance BS—it's real talk.", author: "Maria", city: "Chicago" },
    { text: "Started with $50, now I'm building something real.", author: "Tony", city: "Brooklyn" },
    { text: "These folks get the struggle and show you the way out.", author: "Keisha", city: "Detroit" },
    { text: "No cap, this changed my whole money mindset.", author: "Carlos", city: "LA" },
    { text: "First time financial advice made sense to me.", author: "Aisha", city: "Houston" }
  ];

  // Rotate testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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

  const handleWaitlistSignup = async () => {
    if (!waitlistEmail) {
      toast({
        title: "Email required",
        description: "Please enter your email to join the waitlist.",
        variant: "destructive",
      });
      return;
    }

    setIsJoiningWaitlist(true);
    
    try {
      await subscribeToNewsletter(waitlistEmail);
      
      toast({
        title: "You're on the list! 🎯",
        description: "We'll hit you up when new blueprints drop.",
      });
      
      setWaitlistEmail("");
    } catch (error) {
      console.error('Waitlist signup error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsJoiningWaitlist(false);
    }
  };

  const comingSoonGuides = [
    {
      title: "AI Side Hustles Blueprint",
      teaser: "Dropping soon. Join the waitlist.",
      image: "/lovable-uploads/319b9311-4018-46d0-9292-5c7220a671c7.png"
    },
    {
      title: "Credit Repair Playbook", 
      teaser: "Dropping soon. Join the waitlist.",
      image: "/lovable-uploads/4696326a-6203-4b1e-b0bc-e1ccc29263be.png"
    }
  ];

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

      {/* Flexible grid for current and future guides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0 mb-12">
        {/* Featured Guide Card */}
        <Card className="border-[#247EFF]/20 hover:border-[#247EFF]/40 transition-all duration-300 hover:shadow-xl group relative overflow-hidden bg-gradient-to-br from-white/95 to-white/90 dark:from-[#0A0A0A]/95 dark:to-[#0A0A0A]/90 backdrop-blur-sm">
          {/* "FREE" Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              FREE
            </span>
          </div>

          <CardHeader className="p-0">
            {/* Guide Cover Image - Fixed height container */}
            <div className="relative overflow-hidden rounded-t-lg h-40 md:h-44 flex items-center justify-center">
              <OptimizedImage
                src="/lovable-uploads/b4e3b459-4253-40a2-bc9a-74ec02d85e18.png"
                alt="The $10K Starter Blueprint - Premium Investing Playbook Cover"
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300 p-2"
                priority={true}
              />
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

        {/* Coming Soon Cards */}
        {comingSoonGuides.map((guide, index) => (
          <Card key={index} className="border-[#247EFF]/10 relative overflow-hidden bg-gradient-to-br from-white/95 to-white/90 dark:from-[#0A0A0A]/95 dark:to-[#0A0A0A]/90 backdrop-blur-sm">
            {/* Lock Badge */}
            <div className="absolute top-4 right-4 z-20">
              <span className="bg-gradient-to-r from-slate-400 to-slate-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                <Lock className="w-3 h-3" />
                LOCKED
              </span>
            </div>

            <CardHeader className="p-0">
              {/* Blurred Guide Cover Image */}
              <div className="relative overflow-hidden rounded-t-lg h-40 md:h-44 flex items-center justify-center">
                <OptimizedImage
                  src={guide.image}
                  alt={`${guide.title} - Coming Soon`}
                  className="max-w-full max-h-full object-contain p-2 filter blur-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20"></div>
                
                {/* Lock Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 dark:bg-black/90 rounded-full p-4 shadow-xl">
                    <Lock className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <CardTitle className="text-[#0A0A0A] dark:text-brand-cream mb-3">
                <HeaderHierarchy level={3} className="mb-0 text-lg md:text-xl leading-tight">
                  {guide.title}
                </HeaderHierarchy>
              </CardTitle>

              <CardDescription className="text-[#0A0A0A]/70 dark:text-brand-cream/70 text-sm md:text-base leading-relaxed mb-6">
                {guide.teaser}
              </CardDescription>

              <Button 
                disabled
                className="w-full bg-gradient-to-r from-slate-300 to-slate-400 text-slate-600 min-h-[44px] font-bold text-sm md:text-base cursor-not-allowed opacity-75" 
              >
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Waitlist Signup Section */}
      <div className="text-center max-w-md mx-auto mb-16">
        <HeaderHierarchy level={3} className="mb-4 text-lg md:text-xl">
          Want first dibs? Get on the waitlist for new blueprints.
        </HeaderHierarchy>
        
        <div className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email for early access..."
            value={waitlistEmail}
            onChange={(e) => setWaitlistEmail(e.target.value)}
            className="w-full"
            disabled={isJoiningWaitlist}
          />
          <Button 
            onClick={handleWaitlistSignup}
            disabled={isJoiningWaitlist || !waitlistEmail}
            className="w-full bg-gradient-to-r from-[#247EFF] to-[#0057FF] hover:scale-105 text-white min-h-[44px] touch-manipulation font-bold text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl border-0" 
          >
            {isJoiningWaitlist ? (
              <div className="flex items-center">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Joining Waitlist...
              </div>
            ) : (
              'Join Waitlist'
            )}
          </Button>
        </div>
      </div>

      {/* Social Proof Section - No Cards */}
      <div className="py-12 relative overflow-hidden">
        {/* Graffiti-style background elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 800 200" className="absolute inset-0 w-full h-full opacity-10">
            {/* Torn paper effect */}
            <path
              d="M0,80 Q100,70 200,85 T400,75 Q500,80 600,70 T800,85 L800,120 Q700,110 600,125 T400,115 Q300,120 200,110 T0,125 Z"
              fill="currentColor"
              className="text-[#247EFF]/30"
            />
            {/* Graffiti tag underline */}
            <path
              d="M150,140 Q200,135 250,142 T350,138 Q400,143 450,136 T550,142"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-[#FFD700]/40"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            {/* Street-smart heading with graffiti effect */}
            <div className="relative inline-block mb-8">
              <p 
                className="text-2xl md:text-3xl font-black text-[#0A0A0A] dark:text-brand-cream tracking-wide uppercase relative z-10"
                style={{ 
                  fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                  textShadow: '3px 3px 0px rgba(36, 126, 255, 0.3)',
                  transform: 'rotate(-1deg)'
                }}
              >
                💯 From Zero to Hero
              </p>
              {/* Hand-drawn underline effect */}
              <div 
                className="absolute -bottom-2 left-0 right-0 h-1 opacity-80"
                style={{
                  background: 'linear-gradient(90deg, transparent 5%, #FFD700 20%, #FFA500 80%, transparent 95%)',
                  borderRadius: '50px',
                  transform: 'rotate(1deg)'
                }}
              />
            </div>
            
            {/* Main trust badge - no background card */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Users className="w-8 h-8 text-[#247EFF]" />
                <span className="text-[#0A0A0A] dark:text-brand-cream font-bold text-xl md:text-2xl">
                  2,500+ builders leveling up their game
                </span>
              </div>
              
              {/* Hand-drawn style stars */}
              <div className="flex items-center justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className="w-6 h-6 text-[#FFD700] transform hover:scale-110 transition-transform" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ 
                      transform: `rotate(${(star * 7) % 15 - 7}deg)`,
                      filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.3))'
                    }}
                  >
                    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Rotating testimonials - no card background */}
            <div className="max-w-2xl mx-auto">
              <div className="transition-all duration-500 ease-in-out">
                <blockquote className="text-xl md:text-2xl text-[#0A0A0A] dark:text-brand-cream font-medium italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="text-base md:text-lg text-[#0A0A0A]/80 dark:text-brand-cream/80 font-semibold">
                    — {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].city}
                  </div>
                  <div className="bg-[#FFD700] text-black px-3 py-1 rounded-full text-sm font-bold">
                    VERIFIED ✓
                  </div>
                </div>
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-[#247EFF] scale-125' 
                        : 'bg-[#0A0A0A]/30 dark:bg-brand-cream/30 hover:bg-[#247EFF]/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuidesSection;
