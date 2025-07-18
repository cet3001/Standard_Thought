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

const Investing = () => {
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
    name: "Investing",
    url: "https://www.standardthought.com/investing",
    position: 2
  }];

  // FAQ data for schema markup
  const faqData = [
    {
      question: "What if I'm broke?",
      answer: "Start free with our $10 plays—every dollar you invest is one more toward freedom. Skip the coffee comparison; it's about flipping trauma into traction."
    },
    {
      question: "How risky is this, really?",
      answer: "We show how to avoid scams, build slow and steady. Inflation is eating your money safer than gambling, but smart investing with systems beats it."
    },
    {
      question: "How fast will I see results?",
      answer: "No overnight hype. Real investing is about stacking slow and steady wins. You might see growth over months, but the goal is freedom, not quick flips."
    },
    {
      question: "Do I need to watch the market all day?",
      answer: "Nah, that's trade-which is basically gambling. Real investing is set-and-forget: Put your money in index funds, automate, and check maybe once a month. Your time is better spent building your income."
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
        title="Investing From the Ground Up—No Trust Fund, No Excuses | StandardThought" 
        description="Black Wealth Evaporates 90% in One Gen—You Stacking or Just Surviving? Real investing strategies for first-gen entrepreneurs starting with nothing." 
        keywords="investing from nothing, Black wealth building, first generation investing, ground up investing, urban investing, generational wealth" 
        url="/investing" 
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
          {/* Back Button */}
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <button onClick={() => navigate('/sales')} className="mb-8 group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 backdrop-blur-sm border-2 border-[#FFD700] text-[#FFD700] font-bold rounded-xl transition-all duration-300 hover:bg-[#FFD700]/30 hover:scale-105 transform rotate-1 hover:rotate-0" style={{
              fontFamily: 'Permanent Marker, cursive',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              filter: 'drop-shadow(0 2px 4px rgba(255,215,0,0.3))'
            }}>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back
            </button>
          </div>
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 relative">
              {/* Left Column - Text Content */}
              <div className={`transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight relative">
                  <div className="absolute inset-0 opacity-[0.05] bg-[conic-gradient(from_0deg,_transparent_70%,_rgba(0,0,0,0.3)_90%,_transparent_100%)] bg-[length:15px_15px]"></div>
                  <span className="relative z-10">
                    <span className="text-brand-black dark:text-brand-cream">Investing From the</span>{" "}
                    <span className="pearlescent-text">Ground Up</span>
                  </span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-brand-black dark:text-brand-cream">
                  <span className="text-brand-black dark:text-brand-cream">No Trust Fund, No Excuses—But Let's Call Out the</span>{" "}
                  <span className="pearlescent-text">Barriers Locking Black Builders Out</span>
                </h2>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-6 text-brand-black dark:text-brand-cream">
                  <span className="pearlescent-text">Standard Thought Law #4:</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">The Risk Flip—Turn Instinct Fears into</span>{" "}
                  <span className="pearlescent-text">Asset Empires</span>
                </h3>
                
                <p className="text-base sm:text-lg text-brand-black dark:text-brand-cream/80 mb-8 leading-relaxed">
                  <strong>Only 13% of Black families own stocks vs. 31% of white families</strong>—You Stacking or Just Surviving? Flip It with These Plays. 
                  Blending systems thinking (long-term asset frameworks) + behavioral psych (overcoming fear in hood risks), 
                  here's how to stack from $100, build for legacy, and shatter cycles—no cap. 
                  Real talk: Investing ain't just for the rich or connected; it's your playbook for getting out the game tomorrow.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    onClick={() => navigate('/sales')}
                    className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold px-6 py-3 text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    ⚡ Get The Investing Blueprint
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
                        $5.04
                      </div>
                      <p className="text-lg text-brand-black dark:text-brand-cream font-semibold">
                        median net worth of Black families vs. $171k for white families
                      </p>
                      <p className="text-sm text-brand-black dark:text-brand-cream/80 mt-2">
                        Time to flip the script.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Investing Matters Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                  <span className="pearlescent-text">Why Investing</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">Matters</span>{" "}
                  <span className="pearlescent-text">(Real Talk)</span>
                </h2>
                <p className="text-lg text-brand-black dark:text-brand-cream/80 max-w-3xl mx-auto">
                  Investing is how you break the cycle—turning today's hustle into tomorrow's freedom. 
                  If you've been locked out, this is your playbook for getting in the game.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream">
                      <span className="pearlescent-text">The Trust</span>{" "}
                      <span className="text-brand-black dark:text-brand-cream">Problem</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80">
                      While trust fund kids get their first stocks at 16, we're still trying to figure out what a 401k even means. 
                      The wealth-building game was designed to keep certain people out—but don't let that stop you.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream">
                      <span className="text-brand-black dark:text-brand-cream">Fear of</span>{" "}
                      <span className="pearlescent-text">Losing Money</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80">
                      When every dollar counts, the thought of losing it in the market feels impossible. 
                      But real investing isn't gambling—it's about systems to protect your bag while watching it grow.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream">
                      <span className="pearlescent-text">Why Most Advice</span>{" "}
                      <span className="text-brand-black dark:text-brand-cream">Don't Hit</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80">
                      Just 20% with your parents' real investing starts good when you're making six figures and living with parental backup—not $20, $50, $200—we'll show you exactly how to make those dollars multiply.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-12">
                <p className="text-lg font-semibold text-brand-black dark:text-brand-cream">
                  It's time to stop letting other people build wealth while you watch from the sidelines.
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
                  <span className="pearlescent-text">Investing Myths</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">vs.</span>{" "}
                  <span className="pearlescent-text">Realities</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <Card className="bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm border-red-300/20 dark:border-red-700/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-red-600 dark:text-red-400">
                        Myth: You need thousands to start.
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className="bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm border-red-300/20 dark:border-red-700/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-red-600 dark:text-red-400">
                        Myth: Investing is too risky for people like us.
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className="bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm border-red-300/20 dark:border-red-700/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-red-600 dark:text-red-400">
                        Myth: You have to be a stock market genius.
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </div>
                
                <div className="space-y-8">
                  <Card className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 backdrop-blur-sm border-[#FFD700]/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-[#FFD700]">
                        Reality: You can start with $10 and a vision.
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 backdrop-blur-sm border-[#FFD700]/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-[#FFD700]">
                        Reality: The real risk is letting your money sit and lose value.
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 backdrop-blur-sm border-[#FFD700]/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-[#FFD700]">
                        Reality: Simple, consistent moves beat hype every time.
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
                  <span className="pearlescent-text">$10 to Your First Portfolio</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    number: 1,
                    title: "Set Your Goal",
                    content: "What are you investing for? Freedom? Paying off debt? Building generational wealth to break the psych-social traps in Black communities? Get clear—your 'why' keeps you consistent when the market gets shaky."
                  },
                  {
                    number: 2,
                    title: "Pick Your Platform",
                    content: "Look for free or low-cost apps with no minimums and no hidden fees. Fidelity, Schwab, Vanguard are solid choices. Avoid anything promising rich quick—those are designed to lose your money, not build it."
                  },
                  {
                    number: 3,
                    title: "Start Small, Stack Consistent",
                    content: "Set up automatic investing of $10-50 a week, even on a budget. Skip one meal out or $2 a day somewhere. Consistency beats big lump sums—it's how you flip survival into growth."
                  },
                  {
                    number: 4,
                    title: "Diversify the Bag",
                    content: "Spread broad market index funds (like VTI or SPY)—these own pieces of hundreds of companies. It's like owning a slice of the entire economy instead of gambling on individual players."
                  },
                  {
                    number: 5,
                    title: "Avoid the Traps",
                    content: "Stay away from anything promising 50% returns in a month, crypto 'hype', or 'sure things'. If someone's sliding into your DMs with stock tips, those are wealth-building traps—that's how they keep the game rigged."
                  },
                  {
                    number: 6,
                    title: "Level Up",
                    content: "After 12 months of consistent investing and building your foundation, explore real estate, REITs, or ETFs. But start basic 80% of your portfolio in the boring, proven money-makers."
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
                  <span className="pearlescent-text">Investing</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">Action Plan</span>
                </h2>
                <p className="text-lg text-brand-black dark:text-brand-cream/80 mb-8">
                  Download the Investing Action Plan. Your step-by-step guide to building your first portfolio from scratch.
                </p>
                <Button 
                  onClick={() => navigate('/sales')}
                  className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
                >
                  ⚡ Get The Plan
                </Button>
                <p className="text-sm text-brand-black dark:text-brand-cream/60 mt-4">
                  Free plan + no spam. Just the blueprint.
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
                      "Standard Thought broke it down so I could invest without feeling lost."
                    </blockquote>
                    <p className="text-sm text-brand-black dark:text-brand-cream/60">
                      — K, Houston
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <blockquote className="text-lg font-semibold text-brand-black dark:text-brand-cream mb-4">
                      "Flipped my first $100 into real growth—no excuses."
                    </blockquote>
                    <p className="text-sm text-brand-black dark:text-brand-cream/60">
                      — A, Chicago
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <blockquote className="text-lg font-semibold text-brand-black dark:text-brand-cream mb-4">
                      "This changed how I see wealth in the culture."
                    </blockquote>
                    <p className="text-sm text-brand-black dark:text-brand-cream/60">
                      — M, Atlanta
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
                  <span className="text-brand-black dark:text-brand-cream">Investing</span>
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
                  Get exclusive investing strategies, real builder wins, and financial moves that actually work—straight to your inbox.
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
                  ⚡ Get More Investing Moves—Join the Community
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
                      Master Your Cash Flow
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80 mb-4">
                      Build credit from zero without cosigners.
                    </p>
                    <ExternalLink className="w-5 h-5 text-[#FFD700] group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 group cursor-pointer"
                      onClick={() => navigate('/credit')}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      Build Credit From Nothing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80 mb-4">
                      No cosigner, no cap—stack your credit empire.
                    </p>
                    <ExternalLink className="w-5 h-5 text-[#FFD700] group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 group cursor-pointer"
                      onClick={() => navigate('/ai-side-hustles')}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      AI Side Hustles That Pay
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80 mb-4">
                      Stack bread with bots, not just sweat.
                    </p>
                    <ExternalLink className="w-5 h-5 text-[#FFD700] group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 group cursor-pointer"
                      onClick={() => navigate('/about')}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      Mindset Mastery
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80 mb-4">
                      Flip your story, break cycles—not just bread, mental wealth.
                    </p>
                    <ExternalLink className="w-5 h-5 text-[#FFD700] group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-12">
                <p className="text-lg text-brand-black dark:text-brand-cream/80">
                  Building a journey, one step-by-step toward financial freedom.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* Internal Linking for SEO */}
        <InternalLinkingHub currentPage="/investing" showPillarsOnly={true} limit={3} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Investing;