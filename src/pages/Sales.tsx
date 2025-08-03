import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Download, ExternalLink, Star, Users, TrendingUp, Shield, Zap, Target, CreditCard, PiggyBank } from 'lucide-react';
import OptimizedImage from '@/components/optimized-image';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { useUrbanTexture } from '@/hooks/use-urban-texture';
import { useHeaderHeight } from '@/hooks/use-header-height';
import { DynamicGuidesSection, RealTalkQA, FinalCTA } from '@/components/sales';
import TestimonialCarousel from '@/components/sales/TestimonialCarousel';
import PaidGuidesVault from '@/components/sales/PaidGuidesVault';
import { analytics } from '@/lib/analytics-service';

const Sales = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const { textureImageUrl } = useUrbanTexture();
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = (guide: string) => {
    toast({
      title: "Download Started",
      description: `Your ${guide} is being prepared for download.`,
    });
  };

  const handlePurchase = (item: string) => {
    toast({
      title: "Coming Soon",
      description: `${item} will be available for purchase soon.`,
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          />
        )}
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>

      <Helmet>
        <title>Run the Play – Premium Guides & Wealth Tools | Standard Thought</title>
        <meta name="description" content="Real moves, no fluff. Run the Play is where cycle-breakers unlock premium strategies, paid toolkits, and tested systems built from the ground up." />
        <meta name="keywords" content="premium wealth guides, paid financial strategies, urban wealth building, cycle breaking tactics, generational wealth, financial playbooks, wealth tools" />
        <meta property="og:title" content="Run the Play – Premium Wealth Tools" />
        <meta property="og:description" content="Unlock real strategies built by and for the underestimated. These aren't just offers—they're tested moves." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.standardthought.com/sales" />
        <meta property="og:image" content="https://www.standardthought.com/lovable-uploads/bbfe2eff-caae-4c37-8946-23e81350a078.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Run the Play – Premium Wealth Tools" />
        <meta name="twitter:description" content="Unlock real strategies built by and for the underestimated. These aren't just offers—they're tested moves." />
        <meta name="twitter:image" content="https://www.standardthought.com/lovable-uploads/bbfe2eff-caae-4c37-8946-23e81350a078.png" />
        <link rel="canonical" href="https://www.standardthought.com/sales" />
        
        {/* FAQ Schema for AEO optimization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes these wealth guides different?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "These aren't generic financial advice. They're tested strategies built by cycle-breakers for cycle-breakers, focusing on real moves that work when you start from nothing."
                }
              },
              {
                "@type": "Question", 
                "name": "Are the free guides really free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, completely free. No hidden costs, no upsells. Just real starter strategies to help you get your first wins."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10" style={{ marginTop: `${headerHeight}px`, paddingTop: '3rem' }}>
        {/* Hero Section */}
        <section className="pb-24 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 relative">
                {/* Left Column - Text Content */}
                <div className={`transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight relative">
                    <div className="absolute inset-0 opacity-[0.05] bg-[conic-gradient(from_0deg,_transparent_70%,_rgba(0,0,0,0.3)_90%,_transparent_100%)] bg-[length:15px_15px]"></div>
                    <span className="relative z-10">
                      <span className="text-brand-black dark:text-brand-cream">Break the Lock.</span>{" "}
                      <span className="text-[#FFD369]">Stack What Was Denied.</span>
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl leading-relaxed text-brand-black dark:text-brand-cream/90 mb-6 font-medium">
                    90% of Black wealth evaporates in one generation—because nobody passed us the real plays. This page flips the script: from no-cost starters to digital hustles, here's where you find the code to move different—one free or low-cost asset at a time. Not theory. Proven moves from the grind, the hood, and those still locked out.
                  </p>

                  <p className="text-base sm:text-lg leading-relaxed text-brand-black dark:text-brand-cream/80 mb-10 font-normal italic">
                    No theory, just receipts. If you've ever felt outside the loop, you're home now.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <Button 
                      size="lg" 
                      className="urban-cta text-black font-bold px-8 py-4 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 relative overflow-hidden glow-effect"
                      onClick={() => document.getElementById('starter-section')?.scrollIntoView({ behavior: 'smooth' })}
                      aria-label="Start With the First Play - Navigate to free resources section"
                    >
                      <Zap className="mr-2 h-5 w-5" />
                      Start With the First Play ⚡
                    </Button>
                  </div>
                </div>

                {/* Right Column - Hero Image */}
                <div className={`relative z-10 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-1000 delay-300`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <OptimizedImage
                      src="/lovable-uploads/bbfe2eff-caae-4c37-8946-23e81350a078.png"
                      alt="Three generations leaning in over a laptop—learning what was never taught. Cycle-breaking in real time."
                      className="w-full h-auto object-cover aspect-[3/2]"
                      width={600}
                      height={400}
                      priority={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Starter Section */}
        <section id="starter-section" className="py-16 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                  <span className="pearlescent-text">Start Broke, Not Blind</span>
                </h2>
                <p className="text-lg text-brand-black dark:text-brand-cream/80 max-w-3xl mx-auto">
                  No-cost plays to break the credit trap and get back in the game.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Card 1 */}
                <Link 
                  to="/guides/first-100-portfolio" 
                  className="group block transform transition-all duration-300 hover:scale-105"
                  aria-label="Open guide: Your First $100 Move"
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    analytics.trackWealthContent('Card Click', 'Your First $100 Move', 'Run the Play');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      analytics.trackWealthContent('Card Click', 'Your First $100 Move', 'Run the Play');
                    }
                  }}
                >
                  <Card className="h-full bg-gradient-to-br from-[#f4d03f]/20 via-[#f7dc6f]/15 to-[#fdeaa7]/25 dark:from-[#f4d03f]/10 dark:via-[#f7dc6f]/8 dark:to-[#fdeaa7]/15 border-2 border-[#FFD700]/30 group-hover:border-[#FFD700]/60 transition-all duration-500 shadow-lg group-hover:shadow-2xl backdrop-blur-sm relative overflow-hidden cursor-pointer group-hover:shadow-[0_0_40px_rgba(255,211,105,0.5)]">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(244,208,63,0.4)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#FFD700]/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* "START HERE" indicator */}
                    <div className="absolute top-3 left-3 text-[#FFD369] text-xs font-bold tracking-wider opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      START HERE
                    </div>
                    
                    <CardHeader className="pb-4 relative z-10 pt-8">
                      <CardTitle className="text-2xl font-black text-brand-black dark:text-brand-cream group-hover:text-brand-black dark:group-hover:text-white transition-all duration-300 leading-tight drop-shadow-lg group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                        Your First $100 Move
                      </CardTitle>
                      <div className="text-[#333] dark:text-[#FFD369] font-bold text-sm tracking-wide mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300 transform rotate-[-1deg] relative">
                        <span className="font-black" style={{ fontFamily: 'Comic Neue, cursive', textShadow: '2px 2px 0px rgba(0,0,0,0.3)', transform: 'skew(-5deg)' }}>
                          ↗ No gatekeepers needed
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-brand-black dark:text-brand-cream text-base leading-relaxed font-medium group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">
                        Start with what's in your wallet—loose bills, small flips, no gatekeepers.
                      </CardDescription>
                      
                      {/* Subtle action indicator */}
                      <div className="mt-4 text-[#FFD369] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        Tap to unlock →
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Card 2 */}
                <Link 
                  to="/guides/system-building-playbook" 
                  className="group block transform transition-all duration-300 hover:scale-105"
                  aria-label="Open guide: No More Winging It"
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    analytics.trackWealthContent('Card Click', 'No More Winging It', 'Run the Play');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      analytics.trackWealthContent('Card Click', 'No More Winging It', 'Run the Play');
                    }
                  }}
                >
                  <Card className="h-full bg-gradient-to-br from-[#f4d03f]/20 via-[#f7dc6f]/15 to-[#fdeaa7]/25 dark:from-[#f4d03f]/10 dark:via-[#f7dc6f]/8 dark:to-[#fdeaa7]/15 border-2 border-[#FFD700]/30 group-hover:border-[#FFD700]/60 transition-all duration-500 shadow-lg group-hover:shadow-2xl backdrop-blur-sm relative overflow-hidden cursor-pointer group-hover:shadow-[0_0_40px_rgba(255,211,105,0.5)]">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(244,208,63,0.4)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#FFD700]/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* "BUILD IT" indicator */}
                    <div className="absolute top-3 left-3 text-[#FFD369] text-xs font-bold tracking-wider opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      BUILD IT
                    </div>
                    
                    <CardHeader className="pb-4 relative z-10 pt-8">
                      <CardTitle className="text-2xl font-black text-brand-black dark:text-brand-cream group-hover:text-brand-black dark:group-hover:text-white transition-all duration-300 leading-tight drop-shadow-lg group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                        No More Winging It
                      </CardTitle>
                      <div className="text-[#333] dark:text-[#FFD369] font-bold text-sm tracking-wide mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300 transform rotate-[1deg] relative">
                        <span className="font-black" style={{ fontFamily: 'Comic Neue, cursive', textShadow: '2px 2px 0px rgba(0,0,0,0.3)', transform: 'skew(3deg)' }}>
                          ↗ System over struggle
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-brand-black dark:text-brand-cream text-base leading-relaxed font-medium group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">
                        Turn survival into a system—here's the flow I wish I had at the start.
                      </CardDescription>
                      
                      {/* Subtle action indicator */}
                      <div className="mt-4 text-[#FFD369] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        Tap to unlock →
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Card 3 */}
                <Link 
                  to="/guides/credit-fix-starter-kit" 
                  className="group block transform transition-all duration-300 hover:scale-105"
                  aria-label="Open guide: Fix What They Filed Wrong"
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    analytics.trackWealthContent('Card Click', 'Fix What They Filed Wrong', 'Run the Play');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      analytics.trackWealthContent('Card Click', 'Fix What They Filed Wrong', 'Run the Play');
                    }
                  }}
                >
                  <Card className="h-full bg-gradient-to-br from-[#f4d03f]/20 via-[#f7dc6f]/15 to-[#fdeaa7]/25 dark:from-[#f4d03f]/10 dark:via-[#f7dc6f]/8 dark:to-[#fdeaa7]/15 border-2 border-[#FFD700]/30 group-hover:border-[#FFD700]/60 transition-all duration-500 shadow-lg group-hover:shadow-2xl backdrop-blur-sm relative overflow-hidden cursor-pointer group-hover:shadow-[0_0_40px_rgba(255,211,105,0.5)]">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(244,208,63,0.4)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#FFD700]/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* "FIX IT" indicator */}
                    <div className="absolute top-3 left-3 text-[#FFD369] text-xs font-bold tracking-wider opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      FIX IT
                    </div>
                    
                    <CardHeader className="pb-4 relative z-10 pt-8">
                      <CardTitle className="text-2xl font-black text-brand-black dark:text-brand-cream group-hover:text-brand-black dark:group-hover:text-white transition-all duration-300 leading-tight drop-shadow-lg group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                        Fix What They Filed Wrong
                      </CardTitle>
                      <div className="text-[#333] dark:text-[#FFD369] font-bold text-sm tracking-wide mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300 transform rotate-[-0.5deg] relative">
                        <span className="font-black" style={{ fontFamily: 'Comic Neue, cursive', textShadow: '2px 2px 0px rgba(0,0,0,0.3)', transform: 'skew(-2deg)' }}>
                          ↗ Challenge the lies
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-brand-black dark:text-brand-cream text-base leading-relaxed font-medium group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">
                        Starter templates + real talk for repairing what credit bureaus got twisted.
                      </CardDescription>
                      
                      {/* Subtle action indicator */}
                      <div className="mt-4 text-[#FFD369] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        Tap to unlock →
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Card 4 */}
                <Link 
                  to="/guides/legacy-toolkit-free" 
                  className="group block transform transition-all duration-300 hover:scale-105"
                  aria-label="Open guide: Don't Wait for Later"
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    analytics.trackWealthContent('Card Click', 'Dont Wait for Later', 'Run the Play');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      analytics.trackWealthContent('Card Click', 'Dont Wait for Later', 'Run the Play');
                    }
                  }}
                >
                  <Card className="h-full bg-gradient-to-br from-[#f4d03f]/20 via-[#f7dc6f]/15 to-[#fdeaa7]/25 dark:from-[#f4d03f]/10 dark:via-[#f7dc6f]/8 dark:to-[#fdeaa7]/15 border-2 border-[#FFD700]/30 group-hover:border-[#FFD700]/60 transition-all duration-500 shadow-lg group-hover:shadow-2xl backdrop-blur-sm relative overflow-hidden cursor-pointer group-hover:shadow-[0_0_40px_rgba(255,211,105,0.5)]">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(244,208,63,0.4)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#FFD700]/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* "SECURE IT" indicator */}
                    <div className="absolute top-3 left-3 text-[#FFD369] text-xs font-bold tracking-wider opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      SECURE IT
                    </div>
                    
                    <CardHeader className="pb-4 relative z-10 pt-8">
                      <CardTitle className="text-2xl font-black text-brand-black dark:text-brand-cream group-hover:text-brand-black dark:group-hover:text-white transition-all duration-300 leading-tight drop-shadow-lg group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                        Don't Wait for 'Later'
                      </CardTitle>
                      <div className="text-[#333] dark:text-[#FFD369] font-bold text-sm tracking-wide mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300 transform rotate-[1.5deg] relative">
                        <span className="font-black" style={{ fontFamily: 'Comic Neue, cursive', textShadow: '2px 2px 0px rgba(0,0,0,0.3)', transform: 'skew(4deg)' }}>
                          ↗ Legacy starts now
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-brand-black dark:text-brand-cream text-base leading-relaxed font-medium group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">
                        Legacy starts with the first habit, not a million dollars. Grab what you can build on.
                      </CardDescription>
                      
                      {/* Subtle action indicator */}
                      <div className="mt-4 text-[#FFD369] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        Tap to unlock →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Real Proof Section */}
        <section className="py-16 bg-gradient-to-r from-brand-brown/10 to-brand-chocolate/10 dark:from-brand-charcoal/30 dark:to-brand-black/30 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                  <span className="text-brand-black dark:text-brand-cream">Proof It's Possible—</span>{" "}
                  <span className="pearlescent-text">Because Real Ones Already Did It</span>
                </h2>
              </div>
              
              <TestimonialCarousel />
            </div>
          </div>
        </section>


        {/* The Vault: Paid Playbook Drop */}
        <PaidGuidesVault />

        {/* Real Talk Q&A */}
        <RealTalkQA />

        {/* Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sales;