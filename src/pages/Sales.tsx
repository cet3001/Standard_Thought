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
        <title>Unlock Your Urban Wealth Blueprint | Build Generational Wealth</title>
        <meta name="description" content="Turn systemic barriers into bread. Free and premium guides for building generational wealth, fixing credit, and breaking cycles." />
        <meta name="keywords" content="urban wealth, generational wealth, credit repair, investing, financial freedom, Black wealth building" />
        <meta property="og:title" content="Unlock Your Urban Wealth Blueprint" />
        <meta property="og:description" content="The Exclusion Flip—Turn Systemic Barriers into Bread. Build wealth from nothing." />
        <meta property="og:type" content="website" />
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
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-brand-black dark:text-brand-cream relative">
                    <div className="absolute inset-0 opacity-[0.05] bg-[conic-gradient(from_0deg,_transparent_70%,_rgba(0,0,0,0.3)_90%,_transparent_100%)] bg-[length:15px_15px]"></div>
                    <span className="relative z-10">
                      Unlock Your Urban Wealth Blueprint
                    </span>
                  </h1>

                  <div className="mb-8 p-6 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 border border-[#FFD700]/30 rounded-2xl backdrop-blur-sm">
                    <p className="text-xl sm:text-2xl font-bold text-brand-black dark:text-brand-cream leading-relaxed">
                      <span className="text-[#FFD700]">Standard Thought Law #2:</span> The Exclusion Flip—Turn Systemic Barriers into Bread
                    </p>
                  </div>

                  <p className="text-lg sm:text-xl leading-relaxed text-brand-black dark:text-brand-cream/90 mb-10 font-medium">
                    In Black communities, 90% of wealth evaporates in one generation—ready to flip that script? This is your spot for free and premium guides, playbooks, and tools to stack bread, fix credit, and build generational wealth—no trust fund vibes. Build your journey from no-cost plays to premium flips, blending urban sociology (breaking hood traps) + behavioral psych (rewiring instinct for wins). No shortcuts, no cap: Smuggle past gates keeping us out, shatter money trauma, and rise with real, layered insight.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                      onClick={() => document.getElementById('starter-section')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <Zap className="mr-2 h-5 w-5" />
                      ⚡ Get The Blueprint
                    </Button>
                  </div>
                </div>

                {/* Right Column - Hero Image */}
                <div className={`relative z-10 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-1000 delay-300`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <OptimizedImage
                      src="/lovable-uploads/83d7ca67-81a0-42da-a27c-e3d308dc57bd.png"
                      alt="Urban entrepreneur writing financial plans in notebook under street lighting, embodying the dedication and strategic planning needed for wealth building"
                      className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                      width={600}
                      height={800}
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
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-brand-black dark:text-brand-cream">
                  Starter Blueprints: No-Cost Plays to Flip Credit Trauma
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Card 1 */}
                <Card className="group bg-gradient-to-br from-brand-cream/95 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/95 dark:via-brand-black/90 dark:to-brand-black/85 border-2 border-brand-black/10 dark:border-brand-cream/20 hover:border-[#FFD700]/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.3)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
                  <CardHeader className="pb-4 relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] via-[#FFF8DC] to-[#FFA500] rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="h-7 w-7 text-black" />
                    </div>
                    <CardTitle className="text-xl font-black text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      How to Create Your First Portfolio
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10">
                    <CardDescription className="text-brand-black/80 dark:text-brand-cream/80 text-base leading-relaxed font-medium">
                      Start with pocket change. Build a basic stock portfolio for first-gen builders—urban strategies to flip $100 into assets without gatekeepers.
                    </CardDescription>
                    <Button 
                      className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                      onClick={() => handleDownload('First Portfolio Guide')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Free
                    </Button>
                  </CardContent>
                </Card>

                {/* Card 2 */}
                <Card className="group bg-gradient-to-br from-brand-cream/95 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/95 dark:via-brand-black/90 dark:to-brand-black/85 border-2 border-brand-black/10 dark:border-brand-cream/20 hover:border-[#FFD700]/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.3)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
                  <CardHeader className="pb-4 relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] via-[#FFF8DC] to-[#FFA500] rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-7 w-7 text-black" />
                    </div>
                    <CardTitle className="text-xl font-black text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      System Building Action Plan
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10">
                    <CardDescription className="text-brand-black/80 dark:text-brand-cream/80 text-base leading-relaxed font-medium">
                      Flip survival mode into systems. Step-by-step to automate cash flow, rooted in psych hacks for Black hustlers breaking cycles.
                    </CardDescription>
                    <Link to="/cash-management">
                      <Button 
                        className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Grab Free Plan
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Card 3 */}
                <Card className="group bg-gradient-to-br from-brand-cream/95 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/95 dark:via-brand-black/90 dark:to-brand-black/85 border-2 border-brand-black/10 dark:border-brand-cream/20 hover:border-[#FFD700]/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.3)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
                  <CardHeader className="pb-4 relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] via-[#FFF8DC] to-[#FFA500] rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CreditCard className="h-7 w-7 text-black" />
                    </div>
                    <CardTitle className="text-xl font-black text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      Credit Repair Master Class
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10">
                    <CardDescription className="text-brand-black/80 dark:text-brand-cream/80 text-base leading-relaxed font-medium">
                      No cosigner? No problem. Advanced templates to dispute, rebuild, and stack credit—Trojan truths on how exclusion keeps scores low in our communities.
                    </CardDescription>
                    <Button 
                      className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                      onClick={() => handleDownload('Credit Repair Master Class')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Start Repair Free
                    </Button>
                  </CardContent>
                </Card>

                {/* Card 4 */}
                <Card className="group bg-gradient-to-br from-brand-cream/95 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/95 dark:via-brand-black/90 dark:to-brand-black/85 border-2 border-brand-black/10 dark:border-brand-cream/20 hover:border-[#FFD700]/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.3)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
                  <CardHeader className="pb-4 relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] via-[#FFF8DC] to-[#FFA500] rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-7 w-7 text-black" />
                    </div>
                    <CardTitle className="text-xl font-black text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      Ultimate Legacy Toolkit
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10">
                    <CardDescription className="text-brand-black/80 dark:text-brand-cream/80 text-base leading-relaxed font-medium">
                      Protect your bag long-term. Free resources blending sociology on generational scars + instinct flips for urban legacy builders.
                    </CardDescription>
                    <Link to="/investing">
                      <Button 
                        className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Toolkit
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-gradient-to-r from-brand-brown/10 to-brand-chocolate/10 dark:from-brand-charcoal/30 dark:to-brand-black/30 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-brand-black dark:text-brand-cream">
                  Trusted by 1,000+ First-Gen Hustlers
                </h2>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-brand-cream/80 to-brand-tan/80 dark:from-brand-charcoal/80 dark:to-brand-black/80 border-2 border-[#FFD700]/30 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-8 w-8 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                  <blockquote className="text-2xl sm:text-3xl font-bold text-brand-black dark:text-brand-cream mb-6 leading-relaxed">
                    "No cap, this actually changed my whole mindset."
                  </blockquote>
                  <p className="text-lg text-brand-black dark:text-brand-cream/80 mb-4">
                    — Marco, South Bronx
                  </p>
                  <p className="text-brand-black dark:text-brand-cream/70">
                    Real people, real results—no fake testimonials, no BS promises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dives Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-brand-black dark:text-brand-cream">
                  Deep Dives: Paid Playbooks for Legacy Stacking
                </h2>
                <p className="text-lg text-brand-black dark:text-brand-cream/80 max-w-3xl mx-auto">
                  Fresh 2025 updates on AI-wealth shifts—tech turning generational assets without Silicon Valley access.
                </p>
              </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Card 1 */}
                <Card className="group bg-gradient-to-br from-brand-cream/95 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/95 dark:via-brand-black/90 dark:to-brand-black/85 border-2 border-brand-black/10 dark:border-brand-cream/20 hover:border-[#FFD700]/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.3)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
                  <CardHeader className="pb-4 relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] via-[#FFF8DC] to-[#FFA500] rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CreditCard className="h-7 w-7 text-black" />
                    </div>
                    <CardTitle className="text-xl font-black text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      Credit Hub
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10">
                    <CardDescription className="text-brand-black/80 dark:text-brand-cream/80 text-base leading-relaxed font-medium">
                      Comprehensive strategies, investment management, generational wealth transfer—smuggle in truths on financial exclusion hitting Black families hardest.
                    </CardDescription>
                    <Link to="/credit">
                      <Button 
                        className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                      >
                        Buy Now $47
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Card 2 */}
                <Card className="group bg-gradient-to-br from-brand-cream/95 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/95 dark:via-brand-black/90 dark:to-brand-black/85 border-2 border-brand-black/10 dark:border-brand-cream/20 hover:border-[#FFD700]/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.3)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
                  <CardHeader className="pb-4 relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] via-[#FFF8DC] to-[#FFA500] rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="h-7 w-7 text-black" />
                    </div>
                    <CardTitle className="text-xl font-black text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      Investing Hub
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10">
                    <CardDescription className="text-brand-black/80 dark:text-brand-cream/80 text-base leading-relaxed font-medium">
                      Advanced mapping for side-income hustles—layered with psych on risk instinct + sociology on hood barriers.
                    </CardDescription>
                    <Button 
                      className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                      onClick={() => handlePurchase('Investing Hub')}
                    >
                      Unlock $97
                    </Button>
                  </CardContent>
                </Card>

                {/* Card 3 */}
                <Card className="group bg-gradient-to-br from-brand-cream/95 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/95 dark:via-brand-black/90 dark:to-brand-black/85 border-2 border-brand-black/10 dark:border-brand-cream/20 hover:border-[#FFD700]/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.3)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
                  <CardHeader className="pb-4 relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] via-[#FFF8DC] to-[#FFA500] rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-7 w-7 text-black" />
                    </div>
                    <CardTitle className="text-xl font-black text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      AI-Wealth Arbitrage
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10">
                    <CardDescription className="text-brand-black/80 dark:text-brand-cream/80 text-base leading-relaxed font-medium">
                      Playable models for tech generational assets—early plays on 2025 shifts, no fluff.
                    </CardDescription>
                    <Button 
                      className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                      onClick={() => handlePurchase('AI-Wealth Arbitrage')}
                    >
                      Get Access $67
                    </Button>
                  </CardContent>
                </Card>

                {/* Card 4 */}
                <Card className="group bg-gradient-to-br from-brand-cream/95 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/95 dark:via-brand-black/90 dark:to-brand-black/85 border-2 border-brand-black/10 dark:border-brand-cream/20 hover:border-[#FFD700]/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.3)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
                  <CardHeader className="pb-4 relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] via-[#FFF8DC] to-[#FFA500] rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <PiggyBank className="h-7 w-7 text-black" />
                    </div>
                    <CardTitle className="text-xl font-black text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      Cash Mastery
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10">
                    <CardDescription className="text-brand-black/80 dark:text-brand-cream/80 text-base leading-relaxed font-medium">
                      Emergency funds, passive income—Trojan hits on breaking paycheck trauma in urban legacies.
                    </CardDescription>
                    <Link to="/cash-management">
                      <Button 
                        className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                      >
                        Secure $57
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-r from-brand-brown/10 to-brand-chocolate/10 dark:from-brand-charcoal/30 dark:to-brand-black/30 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-brand-black dark:text-brand-cream">
                  Real Questions, Real Answers
                </h2>
                <p className="text-lg text-brand-black dark:text-brand-cream/80 max-w-3xl mx-auto">
                  No sugar-coating, no BS—just talk about building wealth from nothing.
                </p>
              </div>

              <div className="space-y-8">
                {/* FAQ 1 */}
                <div className="bg-gradient-to-br from-brand-cream/80 to-brand-tan/80 dark:from-brand-charcoal/80 dark:to-brand-black/80 border-2 border-brand-brown/20 dark:border-brand-cream/20 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-brand-black dark:text-brand-cream mb-4">
                    What if I'm broke?
                  </h3>
                  <p className="text-brand-black dark:text-brand-cream/80 leading-relaxed">
                    Start with free plays—flip trauma into traction, no excuses.
                  </p>
                </div>

                {/* FAQ 2 */}
                <div className="bg-gradient-to-br from-brand-cream/80 to-brand-tan/80 dark:from-brand-charcoal/80 dark:to-brand-black/80 border-2 border-brand-brown/20 dark:border-brand-cream/20 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-brand-black dark:text-brand-cream mb-4">
                    Can this fix my credit if it's shot?
                  </h3>
                  <p className="text-brand-black dark:text-brand-cream/80 leading-relaxed">
                    Hell yeah—templates to rebuild from scratch, rooted in real exclusion fights.
                  </p>
                </div>

                {/* FAQ 3 */}
                <div className="bg-gradient-to-br from-brand-cream/80 to-brand-tan/80 dark:from-brand-charcoal/80 dark:to-brand-black/80 border-2 border-brand-brown/20 dark:border-brand-cream/20 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-brand-black dark:text-brand-cream mb-4">
                    Is this just another get-rich-quick scheme?
                  </h3>
                  <p className="text-brand-black dark:text-brand-cream/80 leading-relaxed">
                    Nah, it's legacy from grit—layered strategies for the culture, no shortcuts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 text-center relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 border border-[#FFD700]/30 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-black dark:text-brand-cream mb-4">
                Got questions? We keep it 100%, always.
              </h2>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('starter-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="mr-2 h-5 w-5" />
                ⚡ Get The Blueprint
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sales;