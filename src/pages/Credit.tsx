import Analytics from "@/components/analytics";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { generateFAQSchema } from "@/components/seo/schemas";
import InternalLinkingHub from "@/components/seo/internal-linking-hub";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { NewsletterSection } from "@/components/newsletter-section";
import { useState, useEffect } from "react";

const Credit = () => {
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const breadcrumbs = [{
    name: "Home",
    url: "https://www.standardthought.com",
    position: 1
  }, {
    name: "Credit",
    url: "https://www.standardthought.com/credit",
    position: 2
  }];

  // FAQ data for schema markup
  const faqData = [
    {
      question: "What if my score's trashed?",
      answer: "Start free—flip trauma into traction, step by step."
    },
    {
      question: "How risky is disputing?",
      answer: "Low if smart—systems beat the fear, rooted in real exclusion fights."
    },
    {
      question: "How fast to see jumps?",
      answer: "Months of grit, not quick—legacy ain't overnight."
    },
    {
      question: "Do I need to monitor daily?",
      answer: "Nah, automate checks—focus on building income."
    }
  ];

  const faqSchema = generateFAQSchema({ faqs: faqData });

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
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
        title="Build Credit From Nothing—No Cosigner, No Cap | StandardThought" 
        description="Build credit without cosigners or connections. Real strategies for breaking systemic gates and stacking scores from nothing." 
        keywords="build credit without cosigner, credit building from zero, urban credit strategies, Black credit building, first generation credit" 
        url="/credit" 
        type="article" 
        breadcrumbs={breadcrumbs} 
      />

      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {/* Analytics */}
      <Analytics />

      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pt-20 sm:pt-24 lg:pt-28">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 relative">
              {/* Left Column - Text Content */}
              <div className={`transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight relative">
                  <div className="absolute inset-0 opacity-[0.05] bg-[conic-gradient(from_0deg,_transparent_70%,_rgba(0,0,0,0.3)_90%,_transparent_100%)] bg-[length:15px_15px]"></div>
                  <span className="relative z-10">
                    <span className="text-brand-black dark:text-brand-cream">Build Credit From</span>{" "}
                    <span className="pearlescent-text">Nothing</span>
                  </span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-brand-black dark:text-brand-cream">
                  <span className="pearlescent-text">No Cosigner, No Cap</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">—But Call Out</span>{" "}
                  <span className="pearlescent-text">Gates Rigging Black Credit from Jump</span>
                </h2>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-6 text-brand-black dark:text-brand-cream">
                  <span className="pearlescent-text">Standard Thought Law #5:</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">The Score Flip—Turn</span>{" "}
                  <span className="pearlescent-text">Trauma Traps into Legacy Keys</span>
                </h3>
                
                <p className="text-base sm:text-lg text-brand-black dark:text-brand-cream/80 mb-8 leading-relaxed">
                  <strong>Black Wealth Drops 90% Across Gens</strong>—Your Credit Score Keeping You Locked? Flip It No Cosigner Needed. 
                  Blending urban sociology (hood exclusion traps) + behavioral psych (trauma rewires for credit wins), 
                  here's the plays to stack scores, shatter cycles, and open doors—no shortcuts, real talk for urban builders grinding from instinct.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    onClick={() => navigate('/sales')}
                    className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold px-6 py-3 text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    ⚡ Get The Credit Blueprint
                  </Button>
                </div>
              </div>
              
              {/* Right Column - Visual Element */}
              <div className={`transition-all duration-1000 delay-300 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 backdrop-blur-sm rounded-2xl transform rotate-2"></div>
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/10 dark:border-gray-700/10">
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl font-black mb-4 pearlescent-text">
                        658
                      </div>
                      <p className="text-lg text-brand-black dark:text-brand-cream font-semibold">
                        average Black credit score vs. 734 for white families
                      </p>
                      <p className="text-sm text-brand-black dark:text-brand-cream/80 mt-2">
                        Time to flip the system.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Credit Matters Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                  <span className="pearlescent-text">Why Credit</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">Matters</span>{" "}
                  <span className="pearlescent-text">(Real Talk)</span>
                </h2>
                <p className="text-lg text-brand-black dark:text-brand-cream/80 max-w-3xl mx-auto">
                  Credit ain't just numbers—it's the key to rates, moves, and breaking those inherited cycles keeping Black families trapped.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream">
                      <span className="pearlescent-text">The Exclusion</span>{" "}
                      <span className="text-brand-black dark:text-brand-cream">Problem</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80">
                      While others get co-signs and boosts, we're fighting systemic gates that tank scores from birth—time to smuggle past 'em.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream">
                      <span className="text-brand-black dark:text-brand-cream">Fear of</span>{" "}
                      <span className="pearlescent-text">Debt Cycles</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80">
                      Psych trauma from hood debt makes every point feel like a loss, but real credit building is about flipping fear into systems that protect your future.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream">
                      <span className="pearlescent-text">Why Most Advice</span>{" "}
                      <span className="text-brand-black dark:text-brand-cream">Misses</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80">
                      Generic tips assume you got backup—not starting from zero in communities where wealth vanishes quick; we'll show the cultural flips.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-12">
                <p className="text-lg font-semibold text-brand-black dark:text-brand-cream">
                  It's time to stop letting bad credit lock you out of legacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Myths vs Realities Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                  <span className="pearlescent-text">Credit Myths</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">vs.</span>{" "}
                  <span className="pearlescent-text">Realities</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <Card className="bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm border-red-300/20 dark:border-red-700/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-red-600 dark:text-red-400">
                        Myth: You need a cosigner to start.
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className="bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm border-red-300/20 dark:border-red-700/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-red-600 dark:text-red-400">
                        Myth: Credit repair is too complicated for us.
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className="bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm border-red-300/20 dark:border-red-700/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-red-600 dark:text-red-400">
                        Myth: High scores are for the connected.
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </div>
                
                <div className="space-y-8">
                  <Card className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 backdrop-blur-sm border-[#FFD700]/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-[#FFD700]">
                        Reality: Build solo with no-cap plays.
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 backdrop-blur-sm border-[#FFD700]/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-[#FFD700]">
                        Reality: Simple steps beat the traps every time.
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 backdrop-blur-sm border-[#FFD700]/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-[#FFD700]">
                        Reality: Instinct and systems level the field.
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Blueprint Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                  <span className="text-brand-black dark:text-brand-cream">Step-by-Step: From</span>{" "}
                  <span className="pearlescent-text">Zero to Credit Empire</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    number: 1,
                    title: "Set Your Score Goal",
                    content: "What you building for? Legacy rates? Breaking psych-social traps in Black communities? Get clear—your why beats the dips."
                  },
                  {
                    number: 2,
                    title: "Pick Your Tools",
                    content: "Free apps like Credit Karma, no fees—avoid scams promising quick fixes designed to keep you in debt cycles."
                  },
                  {
                    number: 3,
                    title: "Start Small, Dispute Consistent",
                    content: "Pull reports, dispute errors weekly—flip survival into growth, no big lumps needed."
                  },
                  {
                    number: 4,
                    title: "Diversify the Plays",
                    content: "Mix secured cards, on-time bills—own pieces of the system instead of getting played by it."
                  },
                  {
                    number: 5,
                    title: "Avoid the Traps",
                    content: "Skip payday loans or hype schemes—those rig the game against urban builders."
                  },
                  {
                    number: 6,
                    title: "Level Up",
                    content: "After 6 months consistent, explore 2025 AI tools for auto-disputes—build the boring, proven empire."
                  }
                ].map((step) => (
                  <Card key={step.number} className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold flex items-center gap-4">
                        <span className="w-8 h-8 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black rounded-full flex items-center justify-center font-black">
                          {step.number}
                        </span>
                        <span className="text-brand-black dark:text-brand-cream">{step.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-brand-black dark:text-brand-cream/80 pl-12">
                        {step.content}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Action Plan Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-12 border border-gray-300/10 dark:border-gray-700/10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                  <span className="pearlescent-text">Credit</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">Action Plan</span>
                </h2>
                <p className="text-lg text-brand-black dark:text-brand-cream/80 mb-8">
                  Download the Credit Action Plan. Your step-by-step to flipping from nothing.
                </p>
                <Button 
                  onClick={() => navigate('/sales')}
                  className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
                >
                  ⚡ Get The Plan
                </Button>
                <p className="text-sm text-brand-black dark:text-brand-cream/60 mt-4">
                  Free + no spam. Just the blueprint.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real Builder Wins Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                  <span className="pearlescent-text">Real Builder</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">Wins</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <blockquote className="text-lg font-semibold text-brand-black dark:text-brand-cream mb-4">
                      "Standard Thought flipped my score without the BS—real change."
                    </blockquote>
                    <p className="text-sm text-brand-black dark:text-brand-cream/60">
                      — J, Detroit
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <blockquote className="text-lg font-semibold text-brand-black dark:text-brand-cream mb-4">
                      "Broke the cycle, no cosigner needed."
                    </blockquote>
                    <p className="text-sm text-brand-black dark:text-brand-cream/60">
                      — T, LA
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <blockquote className="text-lg font-semibold text-brand-black dark:text-brand-cream mb-4">
                      "This hit different for the culture."
                    </blockquote>
                    <p className="text-sm text-brand-black dark:text-brand-cream/60">
                      — S, NYC
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                  <span className="text-brand-black dark:text-brand-cream">FAQ:</span>{" "}
                  <span className="pearlescent-text">Real Talk About</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">Credit</span>
                </h2>
              </div>
              
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/10 dark:border-gray-700/10">
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-brand-black dark:text-brand-cream hover:text-[#FFD700] transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-brand-black dark:text-brand-cream/80">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Join Movement Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-12 border border-gray-300/10 dark:border-gray-700/10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                  <span className="pearlescent-text">Join the</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">Movement</span>
                </h2>
                <p className="text-lg text-brand-black dark:text-brand-cream/80 mb-8">
                  Get exclusive credit strategies, wins, and moves straight to your inbox.
                </p>
                <Button 
                  onClick={() => {
                    const newsletterSection = document.querySelector('[data-section="newsletter"]');
                    if (newsletterSection) {
                      newsletterSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
                >
                  ⚡ Get More Credit Flips—Join
                </Button>
                <p className="text-sm text-brand-black dark:text-brand-cream/60 mt-4">
                  No spam, just blueprints and updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Financial Education Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                  <span className="text-brand-black dark:text-brand-cream">Core</span>{" "}
                  <span className="pearlescent-text">Financial Education</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 group cursor-pointer"
                      onClick={() => navigate('/cash-management')}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      Master Cash Flow
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80 mb-4">
                      Stack, save smart.
                    </p>
                    <ExternalLink className="w-5 h-5 text-[#FFD700] group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 group cursor-pointer"
                      onClick={() => navigate('/investing')}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      Invest From Ground Up
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80 mb-4">
                      No trust fund needed.
                    </p>
                    <ExternalLink className="w-5 h-5 text-[#FFD700] group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 group cursor-pointer"
                      onClick={() => navigate('/ai-side-hustles')}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      AI Hustles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80 mb-4">
                      Bots for bread.
                    </p>
                    <ExternalLink className="w-5 h-5 text-[#FFD700] group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 group cursor-pointer"
                      onClick={() => navigate('/about')}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      Mindset Flip
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80 mb-4">
                      Break cycles mentally.
                    </p>
                    <ExternalLink className="w-5 h-5 text-[#FFD700] group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-12">
                <p className="text-lg text-brand-black dark:text-brand-cream/80">
                  Building journeys to freedom.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-12 border border-gray-300/10 dark:border-gray-700/10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                  <span className="pearlescent-text">Credit Content</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">Coming Soon</span>
                </h2>
                <p className="text-lg text-brand-black dark:text-brand-cream/80 mb-8">
                  Dropping comprehensive guide for first-gen—sign up for notify.
                </p>
                <Button 
                  onClick={() => {
                    const newsletterSection = document.querySelector('[data-section="newsletter"]');
                    if (newsletterSection) {
                      newsletterSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Notified
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* Internal Linking for SEO */}
        <InternalLinkingHub currentPage="/credit" showPillarsOnly={true} limit={3} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Credit;