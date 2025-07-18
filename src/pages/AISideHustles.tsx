import Analytics from "@/components/analytics";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { generateFAQSchema } from "@/components/seo/schemas";
import InternalLinkingHub from "@/components/seo/internal-linking-hub";
import AnswerEngineOptimizer from "@/components/seo/answer-engine-optimizer";
import { useState, useEffect } from "react";
import { ArrowLeft, Bot, Smartphone, Zap, Shield, Target, TrendingUp, CheckCircle, Star, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";

const AISideHustles = () => {
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const breadcrumbs = [{
    name: "Home",
    url: "https://www.standardthought.com",
    position: 1
  }, {
    name: "AI Side Hustles",
    url: "https://www.standardthought.com/ai-side-hustles",
    position: 2
  }];

  // FAQ data for schema markup
  const faqData = [
    {
      question: "No tech background?",
      answer: "Start free—flip fear into traction."
    },
    {
      question: "Risky in recession?",
      answer: "Low if smart—systems beat hype, rooted in fights."
    },
    {
      question: "Fast bread?",
      answer: "Months of grit—AI legacy ain't quick."
    },
    {
      question: "Code daily?",
      answer: "Nah, automate—focus on rest."
    }
  ];

  const faqSchema = generateFAQSchema({ faqs: faqData });

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {textureImageUrl && <div className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed" style={{
        backgroundImage: `url(${textureImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }} />}
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>

      {/* SEO */}
      <SEO 
        title="AI Side Hustles—Stack Bread with Bots, Not Just Sweat | StandardThought" 
        description="AI flipping $5K/month for urban creators—unlock bot empires in 2025. Real strategies for Black creators to automate income and shatter exclusion cycles." 
        keywords="AI side hustles, bot income, Black AI creators, automated income, urban AI strategies, recession AI tools, phone to empire" 
        url="/ai-side-hustles" 
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
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <button onClick={() => navigate('/sales')} className="mb-8 group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 backdrop-blur-sm border-2 border-[#FFD700] text-[#FFD700] font-bold rounded-xl transition-all duration-300 hover:bg-[#FFD700]/30 hover:scale-105 transform rotate-1 hover:rotate-0" style={{
              fontFamily: 'Permanent Marker, cursive',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              filter: 'drop-shadow(0 2px 4px rgba(255,215,0,0.3))'
            }}>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back
            </button>
          </div>
          
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Content */}
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
                  AI Side Hustles:{" "}
                  <span className="text-[#FFD700]" style={{
                    background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Stack Bread with Bots, Not Just Sweat—But Call Out Gates Rigging Black AI Access from Jump
                  </span>
                </h1>
                
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black dark:text-brand-cream">
                    Standard Thought Law #9:{" "}
                    <span className="text-[#FFD700]" style={{
                      background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      The Bot Flip—Turn Tech Gates into Hood Empires
                    </span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl max-w-3xl text-black dark:text-brand-cream leading-relaxed mb-8">
                    <strong>AI Flipping $5K/Month for Urban Creators—But Why's It Locked for the Culture? Unlock in 2025.</strong> Here's the plays to automate income, turn phone into empires, and shatter exclusion cycles—no shortcuts, real grit blending tech with urban realities.
                  </p>
                  
                  <Button 
                    onClick={() => navigate('/sales')}
                    className="group bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold px-8 py-4 rounded-xl text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#FFD700]/50"
                    style={{
                      fontFamily: 'Permanent Marker, cursive',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                      filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.4))'
                    }}
                  >
                    <Zap className="w-6 h-6 mr-2 group-hover:animate-pulse" />
                    Get The AI Blueprint
                  </Button>
                </div>
              </div>
              
              {/* Right Column - Visual Element */}
              <div className={`transition-all duration-1000 delay-300 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Stat Card */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 backdrop-blur-sm rounded-2xl transform -rotate-2"></div>
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-300/10 dark:border-gray-700/10">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-black mb-3 pearlescent-text">
                        $5K+
                      </div>
                      <p className="text-base font-semibold text-black dark:text-brand-cream">
                        monthly AI income for urban creators—time to unlock your bots
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why AI Hustles Matter Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-black dark:text-brand-cream">
                Why AI Hustles Matter{" "}
                <span className="text-[#FFD700]" style={{
                  background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  (Real Talk)
                </span>
              </h2>
              <p className="text-xl sm:text-2xl text-black dark:text-brand-cream max-w-4xl mx-auto leading-relaxed">
                AI ain't hype—it's the flip that breaks tech exclusion and stacks legacies in the culture.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                <CardHeader>
                  <Shield className="w-12 h-12 text-[#FFD700] mb-4" />
                  <CardTitle className="text-2xl font-bold text-black dark:text-brand-cream">The Gate Trap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Realities show how AI gates lock Black creators out—time to smuggle in and flip.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                <CardHeader>
                  <Bot className="w-12 h-12 text-[#FFD700] mb-4" />
                  <CardTitle className="text-2xl font-bold text-black dark:text-brand-cream">Fear of Bot Flips</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Trauma from economic scars makes every hustle feel risky, but real AI is about stacking instinct over fear.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                <CardHeader>
                  <Target className="w-12 h-12 text-[#FFD700] mb-4" />
                  <CardTitle className="text-2xl font-bold text-black dark:text-brand-cream">Why Most Guides Miss</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Generic tips ignore cultural hits like recession tanking urban stacks—we'll call 'em out and bot the script.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-16">
              <p className="text-2xl font-bold text-black dark:text-brand-cream">
                It's time to stop watching AI enrich outsiders and build your bot bag.
              </p>
            </div>
          </div>
        </section>

        {/* AI Myths vs. Realities Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-black dark:text-brand-cream">
                AI Myths vs.{" "}
                <span className="text-[#FFD700]" style={{
                  background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Realities
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-pink-500/20 to-yellow-500/20 backdrop-blur-sm border-pink-300/30 hover:from-pink-500/30 hover:to-yellow-500/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Myth:</h3>
                    <p className="text-lg text-black dark:text-brand-cream">AI needs coding pros.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#FFD700] mb-2">Reality:</h3>
                    <p className="text-lg text-black dark:text-brand-cream">Start with tools and vision—no code.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-pink-500/20 to-yellow-500/20 backdrop-blur-sm border-pink-300/30 hover:from-pink-500/30 hover:to-yellow-500/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Myth:</h3>
                    <p className="text-lg text-black dark:text-brand-cream">Too risky for the grind.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#FFD700] mb-2">Reality:</h3>
                    <p className="text-lg text-black dark:text-brand-cream">Real risk is missing 2025 shifts.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-pink-500/20 to-yellow-500/20 backdrop-blur-sm border-pink-300/30 hover:from-pink-500/30 hover:to-yellow-500/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Myth:</h3>
                    <p className="text-lg text-black dark:text-brand-cream">For insiders only.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#FFD700] mb-2">Reality:</h3>
                    <p className="text-lg text-black dark:text-brand-cream">Bots beat hype for the culture every time.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Step-by-Step Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-black dark:text-brand-cream">
                Step-by-Step:{" "}
                <span className="text-[#FFD700]" style={{
                  background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  From Phone to AI Empire
                </span>
              </h2>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  number: "1",
                  title: "Set Your Hustle Goal",
                  content: "What gate you breaking? Legacy stacks? Get clear—your why beats the dips in Black communities."
                },
                {
                  number: "2",
                  title: "Pick Your Tools",
                  content: "Free like ChatGPT—avoid scams promising quick bot riches."
                },
                {
                  number: "3",
                  title: "Start Small, Automate Consistent",
                  content: "Daily bot plays—turn survival into growth, no big investments."
                },
                {
                  number: "4",
                  title: "Diversify the Plays",
                  content: "Mix services, content—own your full hustle instead of partial."
                },
                {
                  number: "5",
                  title: "Avoid the Traps",
                  content: "Skip hype—those rig the AI game against urban builders."
                },
                {
                  number: "6",
                  title: "Level Up",
                  content: "After months, explore 2025 recession bots—build the proven empire."
                }
              ].map((step) => (
                <Card key={step.number} className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                          <span className="text-black font-bold text-xl">{step.number}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black dark:text-brand-cream mb-4">{step.title}</h3>
                        <p className="text-lg text-black dark:text-brand-cream leading-relaxed">{step.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Hustle Action Plan Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-black dark:text-brand-cream">
              AI Hustle{" "}
              <span className="text-[#FFD700]" style={{
                background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Action Plan
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-black dark:text-brand-cream mb-12 leading-relaxed">
              Download the AI Hustle Plan. Step-by-step to bot bread.
            </p>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 backdrop-blur-sm rounded-2xl transform rotate-1"></div>
              <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-12 border border-gray-300/10 dark:border-gray-700/10">
                <Button 
                  onClick={() => navigate('/sales')}
                  size="lg"
                  className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold px-12 py-6 rounded-xl text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#FFD700]/50 mb-4"
                  style={{
                    fontFamily: 'Permanent Marker, cursive',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                    filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.4))'
                  }}
                >
                  <Zap className="w-8 h-8 mr-3" />
                  Get The Plan
                </Button>
                <p className="text-lg text-black dark:text-brand-cream">
                  Free + no spam. Just the blueprint.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real Builder Wins Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-black dark:text-brand-cream">
                Real{" "}
                <span className="text-[#FFD700]" style={{
                  background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Builder Wins
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-xl">H</span>
                    </div>
                    <div>
                      <div className="flex text-[#FFD700] mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-black dark:text-brand-cream">Compton</p>
                    </div>
                  </div>
                  <p className="text-lg text-black dark:text-brand-cream italic leading-relaxed">
                    "Standard Thought bot-flipped my side game—no gates."
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-xl">J</span>
                    </div>
                    <div>
                      <div className="flex text-[#FFD700] mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-black dark:text-brand-cream">Bronx</p>
                    </div>
                  </div>
                  <p className="text-lg text-black dark:text-brand-cream italic leading-relaxed">
                    "Broke the exclusion with AI stacks."
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-xl">K</span>
                    </div>
                    <div>
                      <div className="flex text-[#FFD700] mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-black dark:text-brand-cream">ATL</p>
                    </div>
                  </div>
                  <p className="text-lg text-black dark:text-brand-cream italic leading-relaxed">
                    "Hit the culture with real bot wins."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-black dark:text-brand-cream">
                FAQ:{" "}
                <span className="text-[#FFD700]" style={{
                  background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Real Talk About AI Hustles
                </span>
              </h2>
            </div>
            
            <div className="bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/10 dark:border-gray-700/10">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-gray-300/20 dark:border-gray-700/20">
                    <AccordionTrigger className="text-left text-xl font-bold text-black dark:text-brand-cream hover:text-[#FFD700] transition-colors duration-300">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg text-black dark:text-brand-cream leading-relaxed pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Join the Movement Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-black dark:text-brand-cream">
              Join the{" "}
              <span className="text-[#FFD700]" style={{
                background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Movement
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-black dark:text-brand-cream mb-12 leading-relaxed">
              Exclusive AI strategies, wins straight to inbox.
            </p>
            
            <Button 
              onClick={() => navigate('/sales')}
              size="lg"
              className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold px-12 py-6 rounded-xl text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#FFD700]/50"
              style={{
                fontFamily: 'Permanent Marker, cursive',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.4))'
              }}
            >
              <Mail className="w-8 h-8 mr-3" />
              ⚡ Get More Bot Flips—Join
            </Button>
          </div>
        </section>

        {/* Core Hustle Education Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-black dark:text-brand-cream">
                Core{" "}
                <span className="text-[#FFD700]" style={{
                  background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Hustle Education
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card 
                className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 cursor-pointer group"
                onClick={() => navigate('/investing')}
              >
                <CardContent className="p-8 text-center">
                  <TrendingUp className="w-16 h-16 text-[#FFD700] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-black dark:text-brand-cream mb-4">Invest Ground Up</h3>
                  <p className="text-lg text-black dark:text-brand-cream">Stack no trust fund.</p>
                </CardContent>
              </Card>
              
              <Card 
                className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 cursor-pointer group"
                onClick={() => navigate('/credit')}
              >
                <CardContent className="p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-[#FFD700] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-black dark:text-brand-cream mb-4">Credit Empire</h3>
                  <p className="text-lg text-black dark:text-brand-cream">Build nothing.</p>
                </CardContent>
              </Card>
              
              <Card 
                className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 cursor-pointer group"
                onClick={() => navigate('/cash-management')}
              >
                <CardContent className="p-8 text-center">
                  <Smartphone className="w-16 h-16 text-[#FFD700] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-black dark:text-brand-cream mb-4">Cash Mastery</h3>
                  <p className="text-lg text-black dark:text-brand-cream">Stack smart.</p>
                </CardContent>
              </Card>
              
              <Card 
                className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 cursor-pointer group"
                onClick={() => navigate('/about')}
              >
                <CardContent className="p-8 text-center">
                  <Users className="w-16 h-16 text-[#FFD700] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-black dark:text-brand-cream mb-4">Mindset Flip</h3>
                  <p className="text-lg text-black dark:text-brand-cream">Break cycles.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-2xl font-bold text-black dark:text-brand-cream">
                Building AI journeys to freedom.
              </p>
            </div>
          </div>
        </section>

        {/* AI Content Coming Soon Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-black dark:text-brand-cream">
              AI Content{" "}
              <span className="text-[#FFD700]" style={{
                background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Coming Soon
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-black dark:text-brand-cream mb-12 leading-relaxed">
              Dropping guide for first-gen bot flips—sign up notify.
            </p>
            
            <Button 
              onClick={() => navigate('/sales')}
              size="lg"
              className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold px-12 py-6 rounded-xl text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#FFD700]/50"
              style={{
                fontFamily: 'Permanent Marker, cursive',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.4))'
              }}
            >
              Sign Up for Notify
            </Button>
          </div>
        </section>
        
        {/* Answer Engine Optimization */}
        <AnswerEngineOptimizer 
          primaryTopic="ai-side-hustles"
          targetQuestions={[
            "How to make money with AI in 2025?",
            "What are the best AI side hustles?",
            "How to use AI for income generation?",
            "Can you make money with ChatGPT?"
          ]}
        />
        
        {/* Internal Linking for SEO */}
        <InternalLinkingHub currentPage="/ai-side-hustles" showPillarsOnly={true} limit={3} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AISideHustles;