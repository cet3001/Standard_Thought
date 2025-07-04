import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Download, Lock, CheckCircle, Star, ArrowRight, CreditCard, TrendingUp, Bot, DollarSign } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { trackButtonClick } from "@/lib/analytics-utils";

const Sales = () => {
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials array with 15 diverse testimonials
  const testimonials = [
    { quote: "Finally, a guide that speaks my language.", name: "Tasha", location: "Detroit" },
    { quote: "I flipped my first $100 into $2,000 thanks to this blueprint.", name: "Jamal", location: "Oakland" },
    { quote: "No cap, this actually works. Changed my whole mindset.", name: "Maria", location: "South Bronx" },
    { quote: "Real talk for real people. None of that fake guru nonsense.", name: "Kevin", location: "Chicago" },
    { quote: "First time someone explained investing without the BS.", name: "Aisha", location: "Atlanta" },
    { quote: "Went from broke college student to $5K saved in 6 months.", name: "Diego", location: "Phoenix" },
    { quote: "This hit different. Actually made for people like us.", name: "Jasmine", location: "Houston" },
    { quote: "Finally got my credit above 650. Game changer.", name: "Marcus", location: "Baltimore" },
    { quote: "Street smart advice that actually makes sense.", name: "Destiny", location: "Memphis" },
    { quote: "No trust fund, no problem. This blueprint is everything.", name: "Carlos", location: "Las Vegas" },
    { quote: "Turned my side hustle into my main income stream.", name: "Kendra", location: "Milwaukee" },
    { quote: "First financial guide that didn't talk down to me.", name: "Andre", location: "New Orleans" },
    { quote: "Built my emergency fund from zero using these tips.", name: "Brianna", location: "Cleveland" },
    { quote: "Finally someone who gets what it's like starting from nothing.", name: "Isaiah", location: "Kansas City" },
    { quote: "This blueprint is pure gold for first-gen wealth builders.", name: "Zoe", location: "Philadelphia" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate testimonials every 4 seconds
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleGetStarted = () => {
    trackButtonClick('Get Started', 'sales_hero', 'scroll_to_products');
    // TODO: Add scroll to products section when created
  };

  const handleDownloadGuide = () => {
    trackButtonClick('Download Free', 'featured_guides', 'download_10k_blueprint');
    // TODO: Add download functionality
  };

  const handleExploreCredit = () => {
    trackButtonClick('Explore Credit', 'explore_blueprints', 'credit_blueprint');
    // TODO: Navigate to /credit-blueprint page
  };

  const handleExploreInvesting = () => {
    trackButtonClick('Explore Investing', 'explore_blueprints', 'investing_blueprint');
    // TODO: Navigate to /investing-blueprint page
  };

  const handleExploreAI = () => {
    trackButtonClick('Explore AI', 'explore_blueprints', 'ai_blueprint');
    // TODO: Navigate to /ai-blueprint page
  };

  const handleExploreCash = () => {
    trackButtonClick('Explore Cash Management', 'explore_blueprints', 'cash_blueprint');
    // TODO: Navigate to /cash-blueprint page
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

      {/* SEO */}
      <SEO
        title="Unlock Your Urban Wealth Blueprint | Standardthought Sales"
        description="The official spot for free and premium guides, playbooks, and tools to help you stack bread, fix your credit, and build generational wealth—no trust fund needed."
        keywords="urban wealth blueprint, premium guides, financial playbooks, credit repair tools, generational wealth building"
        url="/sales"
      />

      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-40 pb-24 relative overflow-hidden">
          {/* Enhanced Urban Background with Better Texture Visibility */}
          <div className="absolute inset-0" aria-hidden="true">
            {/* AI-Generated or Curated Urban Texture */}
            {textureImageUrl && (
              <div 
                className="absolute inset-0 opacity-50 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${textureImageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            )}
            
            {/* Background gradient overlay - lighter for better texture visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-slate-700/50 to-slate-900/40"></div>
            
            {/* Content overlay for text readability - reduced opacity */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/70 via-brand-cream/75 to-brand-cream/80 dark:from-brand-black/70 dark:via-brand-black/75 dark:to-brand-black/80"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#FFD700]/10 animate-float"></div>
            <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-[#247EFF]/20 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              {/* Hero Content */}
              <div className="text-center mb-16 relative">
                {/* Urban grain texture overlay */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none" aria-hidden="true">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.8)_1px,_transparent_0)] bg-[length:8px_8px]"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_46%,_rgba(0,0,0,0.2)_47%,_rgba(0,0,0,0.2)_53%,_transparent_54%)] bg-[length:4px_4px] opacity-60"></div>
                </div>

                {/* Subtle graffiti tags background */}
                <div className="absolute top-10 right-10 transform rotate-12 opacity-[0.08] pointer-events-none" aria-hidden="true">
                  <div 
                    className="text-[#247EFF] text-6xl font-black"
                    style={{ 
                      fontFamily: "'Permanent Marker', 'Kalam', cursive",
                      textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
                      filter: 'blur(0.5px)'
                    }}
                  >
                    BLUEPRINT
                  </div>
                  {/* Drip effect */}
                  <div className="absolute bottom-0 left-8 w-2 h-8 bg-[#247EFF] opacity-40 transform rotate-12 blur-sm"></div>
                </div>

                <div className="absolute bottom-20 left-10 transform -rotate-6 opacity-[0.06] pointer-events-none" aria-hidden="true">
                  <div 
                    className="text-[#FFD700] text-4xl font-black"
                    style={{ 
                      fontFamily: "'Permanent Marker', 'Kalam', cursive",
                      textShadow: '1px 1px 0px rgba(0,0,0,0.2)',
                      filter: 'blur(0.3px)'
                    }}
                  >
                    WEALTH
                  </div>
                </div>

                <div className={`transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight text-brand-black dark:text-brand-cream relative">
                    {/* Additional texture behind main heading */}
                    <div className="absolute inset-0 opacity-[0.05] bg-[conic-gradient(from_0deg,_transparent_70%,_rgba(0,0,0,0.3)_90%,_transparent_100%)] bg-[length:15px_15px]"></div>
                    
                    Unlock Your <span 
                      className="text-[#FFD700] relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                        backgroundSize: '400% 400%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'shimmer 3s ease-in-out infinite'
                      }}
                    >
                      Urban
                      {/* Pearlescent overlay */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 animate-[shimmer_2s_ease-in-out_infinite]"
                        style={{
                          background: 'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)',
                          backgroundSize: '200% 100%',
                          mixBlendMode: 'overlay'
                        }}
                      />
                    </span><br />
                    <span 
                      className="text-[#FFD700] relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                        backgroundSize: '400% 400%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'shimmer 3s ease-in-out infinite'
                      }}
                    >
                      Wealth Blueprint
                      {/* Pearlescent overlay */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 animate-[shimmer_2s_ease-in-out_infinite]"
                        style={{
                          background: 'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)',
                          backgroundSize: '200% 100%',
                          mixBlendMode: 'overlay',
                          animationDelay: '1s'
                        }}
                      />
                    </span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto text-brand-black dark:text-brand-cream leading-relaxed px-4">
                    The official spot for free and premium guides, playbooks, and tools to help you stack bread, fix your credit, and build generational wealth—no trust fund needed.
                  </p>

                  {/* Primary CTA */}
                  <div className="flex justify-center mb-12 px-4">
                    <Button 
                      size="lg"
                      onClick={handleGetStarted}
                      className="w-full sm:w-auto bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700] after:absolute after:inset-0 after:bg-gradient-to-45 after:from-transparent after:via-white/20 after:to-transparent after:animate-[shimmer_3s_ease-in-out_infinite]"
                      aria-label="Get started with wealth building tools"
                    >
                      <Zap className="mr-3 h-5 w-5 sm:h-6 sm:w-6" aria-label="Lightning bolt icon representing fast action" />
                      <span 
                        style={{ 
                          fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                          textShadow: '2px 2px 0px rgba(0,0,0,0.3), 1px 1px 0px rgba(255,255,255,0.1)',
                          transform: 'rotate(-1deg)',
                          display: 'inline-block'
                        }}
                      >
                        Get Started
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guides Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-brand-black dark:text-brand-cream relative">
                  <span 
                    className="text-[#FFD700] relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'shimmer 3s ease-in-out infinite'
                    }}
                  >
                    Featured Guides
                  </span>
                </h2>
              </div>

              {/* Guides Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* The $10K Starter Blueprint - Available */}
                <Card className="backdrop-blur-sm border-2 border-yellow-400/30 shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden" style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                }}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-black text-brand-black dark:text-brand-cream font-ibm-plex-mono">
                      The $10K Starter Blueprint
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-brand-black dark:text-brand-cream text-sm leading-relaxed font-kalam">
                      Step-by-step, street-smart investing for first-gen hustlers and underestimated creatives. Real stories, no jargon, actionable moves.
                    </p>
                    
                    {/* Bullets */}
                    <ul className="space-y-2">
                      <li className="flex items-start text-brand-black dark:text-brand-cream text-sm font-kalam">
                        <CheckCircle className="h-4 w-4 text-[#FFD700] mr-2 mt-0.5 flex-shrink-0" />
                        Street-smart steps to your first $10K
                      </li>
                      <li className="flex items-start text-brand-black dark:text-brand-cream text-sm font-kalam">
                        <CheckCircle className="h-4 w-4 text-[#FFD700] mr-2 mt-0.5 flex-shrink-0" />
                        Scam-avoidance tips
                      </li>
                      <li className="flex items-start text-brand-black dark:text-brand-cream text-sm font-kalam">
                        <CheckCircle className="h-4 w-4 text-[#FFD700] mr-2 mt-0.5 flex-shrink-0" />
                        No fluff—just real moves
                      </li>
                    </ul>

                    {/* CTA Button */}
                    <Button 
                      onClick={handleDownloadGuide}
                      className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold py-3 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 mt-6"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      <span 
                        style={{ 
                          fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                          textShadow: '1px 1px 0px rgba(0,0,0,0.2)',
                          transform: 'rotate(-1deg)',
                          display: 'inline-block'
                        }}
                      >
                        Download Free
                      </span>
                    </Button>
                  </CardContent>
                </Card>

                {/* Credit Repair Playbook - Coming Soon */}
                <Card className="backdrop-blur-sm border-2 border-gray-400/30 shadow-2xl relative overflow-hidden opacity-75" style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                }}>
                  {/* Lock Icon */}
                  <div className="absolute top-4 right-4 z-10">
                    <Lock className="h-6 w-6 text-gray-500" />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-black text-brand-black/60 dark:text-brand-cream/60 font-ibm-plex-mono">
                      Credit Repair Playbook
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-brand-black/60 dark:text-brand-cream/60 text-sm leading-relaxed font-kalam">
                      Fix your credit fast with proven strategies that actually work. No credit repair company needed—do it yourself and save thousands.
                    </p>
                    
                    {/* Bullets */}
                    <ul className="space-y-2">
                      <li className="flex items-start text-brand-black/60 dark:text-brand-cream/60 text-sm font-kalam">
                        <CheckCircle className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                        Dispute letter templates that work
                      </li>
                      <li className="flex items-start text-brand-black/60 dark:text-brand-cream/60 text-sm font-kalam">
                        <CheckCircle className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                        Timeline and tracking systems
                      </li>
                      <li className="flex items-start text-brand-black/60 dark:text-brand-cream/60 text-sm font-kalam">
                        <CheckCircle className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                        Credit building strategies
                      </li>
                    </ul>

                    {/* Coming Soon Label */}
                    <div className="text-center py-4">
                      <span className="bg-gray-500/20 text-gray-600 dark:text-gray-400 px-4 py-2 rounded-full text-sm font-ibm-plex-mono">
                        Coming Soon
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Side Hustle Masterclass - Coming Soon */}
                <Card className="backdrop-blur-sm border-2 border-gray-400/30 shadow-2xl relative overflow-hidden opacity-75" style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                }}>
                  {/* Lock Icon */}
                  <div className="absolute top-4 right-4 z-10">
                    <Lock className="h-6 w-6 text-gray-500" />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-black text-brand-black/60 dark:text-brand-cream/60 font-ibm-plex-mono">
                      AI Side Hustle Masterclass
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-brand-black/60 dark:text-brand-cream/60 text-sm leading-relaxed font-kalam">
                      Turn AI tools into consistent income streams. Real case studies from people making $2K-$10K monthly with ChatGPT, Midjourney, and more.
                    </p>
                    
                    {/* Bullets */}
                    <ul className="space-y-2">
                      <li className="flex items-start text-brand-black/60 dark:text-brand-cream/60 text-sm font-kalam">
                        <CheckCircle className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                        Step-by-step AI business setups
                      </li>
                      <li className="flex items-start text-brand-black/60 dark:text-brand-cream/60 text-sm font-kalam">
                        <CheckCircle className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                        Client acquisition templates
                      </li>
                      <li className="flex items-start text-brand-black/60 dark:text-brand-cream/60 text-sm font-kalam">
                        <CheckCircle className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                        Pricing and scaling strategies
                      </li>
                    </ul>

                    {/* Coming Soon Label */}
                    <div className="text-center py-4">
                      <span className="bg-gray-500/20 text-gray-600 dark:text-gray-400 px-4 py-2 rounded-full text-sm font-ibm-plex-mono">
                        Coming Soon
                      </span>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </section>

        {/* Social Proof & Urgency Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Urban spray-paint effect background */}
          <div className="absolute inset-0" aria-hidden="true">
            {/* Spray paint splatters */}
            <div className="absolute top-10 left-20 w-16 h-16 bg-[#FFD700]/10 rounded-full blur-xl"></div>
            <div className="absolute top-32 right-16 w-24 h-24 bg-[#247EFF]/15 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-32 w-20 h-20 bg-[#FFD700]/8 rounded-full blur-xl"></div>
            
            {/* Graffiti texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_2px_2px,_rgba(0,0,0,0.8)_2px,_transparent_0)] bg-[length:12px_12px]"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Street Cred Badge */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  {/* Badge background with spray-paint effect */}
                  <div className="bg-gradient-to-br from-[#FFD700]/20 via-[#FFF8DC]/15 to-[#FFA500]/20 backdrop-blur-sm border-2 border-[#FFD700]/40 rounded-2xl px-6 py-3 transform -rotate-2 shadow-2xl">
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-[#FFD700]" />
                      <span 
                        className="text-[#FFD700] font-black text-lg"
                        style={{ 
                          fontFamily: "'Permanent Marker', 'Kalam', cursive",
                          textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
                          transform: 'rotate(1deg)',
                          display: 'inline-block'
                        }}
                      >
                        STREET CRED
                      </span>
                      <Star className="h-5 w-5 text-[#FFD700]" />
                    </div>
                  </div>
                  
                  {/* Graffiti drip effects */}
                  <div className="absolute -bottom-2 left-4 w-1 h-4 bg-[#FFD700]/30 transform rotate-12 blur-sm"></div>
                  <div className="absolute -bottom-2 right-6 w-1 h-3 bg-[#FFD700]/20 transform -rotate-12 blur-sm"></div>
                </div>
              </div>

              {/* Section Title */}
              <h2 className="text-4xl md:text-5xl font-black mb-12 text-brand-black dark:text-brand-cream relative">
                Trusted by{" "}
                <span 
                  className="text-[#FFD700] relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                    backgroundSize: '400% 400%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'shimmer 3s ease-in-out infinite'
                  }}
                >
                  1,000+
                  {/* Pearlescent overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 animate-[shimmer_2s_ease-in-out_infinite]"
                    style={{
                      background: 'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)',
                      backgroundSize: '200% 100%',
                      mixBlendMode: 'overlay'
                    }}
                  />
                </span><br />
                First-Gen Hustlers
              </h2>

              {/* Rotating Testimonial */}
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-[#FFD700]/20 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  {/* Urban texture background */}
                  <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(45deg,_transparent_48%,_rgba(0,0,0,0.3)_49%,_rgba(0,0,0,0.3)_51%,_transparent_52%)] bg-[length:6px_6px] rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <blockquote className="text-lg md:text-xl font-medium text-brand-black dark:text-brand-cream mb-4 leading-relaxed font-kalam">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    <cite className="text-[#FFD700] font-bold not-italic font-ibm-plex-mono">
                      —{testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].location}
                    </cite>
                  </div>

                  {/* Subtle graffiti accent */}
                  <div className="absolute -top-2 -right-2 transform rotate-12 opacity-20" aria-hidden="true">
                    <div 
                      className="text-[#247EFF] text-2xl font-black"
                      style={{ 
                        fontFamily: "'Permanent Marker', cursive",
                        filter: 'blur(1px)'
                      }}
                    >
                      REAL
                    </div>
                  </div>
                </div>

                {/* Testimonial pagination dots */}
                <div className="flex justify-center space-x-2 mt-6">
                  {testimonials.slice(0, 5).map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial % 5 
                          ? 'bg-[#FFD700] w-8' 
                          : 'bg-[#FFD700]/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Additional street-smart messaging */}
              <div className="text-center">
                <p className="text-brand-black dark:text-brand-cream text-lg font-kalam opacity-80">
                  Real people, real results—no fake testimonials, no BS promises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore More Blueprints Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Urban background effects */}
          <div className="absolute inset-0" aria-hidden="true">
            {/* Scattered urban elements */}
            <div className="absolute top-16 left-24 w-12 h-12 bg-[#247EFF]/5 rounded-lg blur-sm transform rotate-45"></div>
            <div className="absolute top-32 right-20 w-8 h-8 bg-[#FFD700]/8 rounded-full blur-md"></div>
            <div className="absolute bottom-24 left-16 w-16 h-16 bg-[#FFD700]/5 rounded-full blur-lg"></div>
            
            {/* Subtle texture */}
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(60deg,_transparent_48%,_rgba(0,0,0,0.4)_49%,_rgba(0,0,0,0.4)_51%,_transparent_52%)] bg-[length:8px_8px]"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-brand-black dark:text-brand-cream relative">
                  Explore More{" "}
                  <span 
                    className="text-[#FFD700] relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'shimmer 3s ease-in-out infinite'
                    }}
                  >
                    Blueprints
                    {/* Pearlescent overlay */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 animate-[shimmer_2s_ease-in-out_infinite]"
                      style={{
                        background: 'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)',
                        backgroundSize: '200% 100%',
                        mixBlendMode: 'overlay'
                      }}
                    />
                  </span>
                </h2>
                <p className="text-lg text-brand-black dark:text-brand-cream opacity-80 font-kalam max-w-2xl mx-auto">
                  Deep-dive into specific areas where you want to level up your money game
                </p>
              </div>

              {/* Blueprint Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Credit Blueprint */}
                <Card 
                  className="backdrop-blur-sm border-2 border-[#247EFF]/30 shadow-2xl hover:scale-105 hover:border-[#247EFF]/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(36,126,255,0.1), rgba(36,126,255,0.05))',
                  }}
                  onClick={handleExploreCredit}
                >
                  {/* Urban texture background */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,_rgba(36,126,255,0.8)_1px,_transparent_0)] bg-[length:6px_6px]"></div>
                  
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 rounded-2xl bg-[#247EFF]/20 group-hover:bg-[#247EFF]/30 transition-all duration-300">
                        <CreditCard className="h-8 w-8 text-[#247EFF]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-black mb-3 text-brand-black dark:text-brand-cream font-ibm-plex-mono">
                      Credit
                    </h3>
                    <p className="text-sm text-brand-black dark:text-brand-cream opacity-80 mb-4 font-kalam">
                      Fix your credit, build your score, unlock better rates
                    </p>
                    <div className="flex items-center justify-center text-[#247EFF] group-hover:text-[#247EFF] transition-colors duration-300">
                      <span className="text-sm font-ibm-plex-mono mr-2">Learn More</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>

                {/* Investing Blueprint */}
                <Card 
                  className="backdrop-blur-sm border-2 border-[#22C55E]/30 shadow-2xl hover:scale-105 hover:border-[#22C55E]/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(34,197,94,0.05))',
                  }}
                  onClick={handleExploreInvesting}
                >
                  {/* Urban texture background */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,_rgba(34,197,94,0.8)_1px,_transparent_0)] bg-[length:6px_6px]"></div>
                  
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 rounded-2xl bg-[#22C55E]/20 group-hover:bg-[#22C55E]/30 transition-all duration-300">
                        <TrendingUp className="h-8 w-8 text-[#22C55E]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-black mb-3 text-brand-black dark:text-brand-cream font-ibm-plex-mono">
                      Investing
                    </h3>
                    <p className="text-sm text-brand-black dark:text-brand-cream opacity-80 mb-4 font-kalam">
                      Smart moves for building wealth over time
                    </p>
                    <div className="flex items-center justify-center text-[#22C55E] group-hover:text-[#22C55E] transition-colors duration-300">
                      <span className="text-sm font-ibm-plex-mono mr-2">Learn More</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>

                {/* AI Side Hustles Blueprint */}
                <Card 
                  className="backdrop-blur-sm border-2 border-[#8B5CF6]/30 shadow-2xl hover:scale-105 hover:border-[#8B5CF6]/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(139,92,246,0.05))',
                  }}
                  onClick={handleExploreAI}
                >
                  {/* Urban texture background */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,_rgba(139,92,246,0.8)_1px,_transparent_0)] bg-[length:6px_6px]"></div>
                  
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 rounded-2xl bg-[#8B5CF6]/20 group-hover:bg-[#8B5CF6]/30 transition-all duration-300">
                        <Bot className="h-8 w-8 text-[#8B5CF6]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-black mb-3 text-brand-black dark:text-brand-cream font-ibm-plex-mono">
                      AI Side Hustles
                    </h3>
                    <p className="text-sm text-brand-black dark:text-brand-cream opacity-80 mb-4 font-kalam">
                      Turn AI tools into consistent income streams
                    </p>
                    <div className="flex items-center justify-center text-[#8B5CF6] group-hover:text-[#8B5CF6] transition-colors duration-300">
                      <span className="text-sm font-ibm-plex-mono mr-2">Learn More</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>

                {/* Cash Management Blueprint */}
                <Card 
                  className="backdrop-blur-sm border-2 border-[#FFD700]/30 shadow-2xl hover:scale-105 hover:border-[#FFD700]/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,215,0,0.05))',
                  }}
                  onClick={handleExploreCash}
                >
                  {/* Urban texture background */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,_rgba(255,215,0,0.8)_1px,_transparent_0)] bg-[length:6px_6px]"></div>
                  
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 rounded-2xl bg-[#FFD700]/20 group-hover:bg-[#FFD700]/30 transition-all duration-300">
                        <DollarSign className="h-8 w-8 text-[#FFD700]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-black mb-3 text-brand-black dark:text-brand-cream font-ibm-plex-mono">
                      Cash Management
                    </h3>
                    <p className="text-sm text-brand-black dark:text-brand-cream opacity-80 mb-4 font-kalam">
                      Master budgeting, saving, and cash flow
                    </p>
                    <div className="flex items-center justify-center text-[#FFD700] group-hover:text-[#FFD700] transition-colors duration-300">
                      <span className="text-sm font-ibm-plex-mono mr-2">Learn More</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>

              </div>

              {/* Call-to-Action Message */}
              <div className="text-center mt-12">
                <p className="text-brand-black dark:text-brand-cream text-lg font-kalam opacity-70">
                  Each blueprint includes step-by-step guides, templates, and real-world examples
                </p>
              </div>
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