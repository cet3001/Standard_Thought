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
import { ArrowLeft, DollarSign, Target, PiggyBank, Shield, TrendingUp, Zap, CheckCircle, Star, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";

const CashManagement = () => {
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
    name: "Cash Management",
    url: "https://www.standardthought.com/cash-management",
    position: 2
  }];

  // FAQ data for schema markup
  const faqData = [
    {
      question: "What if my flow's broke?",
      answer: "Start free—flip trauma into traction, step by step."
    },
    {
      question: "How risky is automating?",
      answer: "Low if smart—systems beat the fear, rooted in exclusion fights."
    },
    {
      question: "How fast to see stacks?",
      answer: "Months of grit, not quick—cash legacy ain't overnight."
    },
    {
      question: "Do I need to track daily?",
      answer: "Nah, automate—focus on building the rest."
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
        title="Smart Cash Flow for First-Gen Builders | StandardThought" 
        description="Break paycheck-to-paycheck cycles. Learn to stack, save, and invest your money with proven cash management strategies." 
        keywords="cash management, cash flow control, paycheck to paycheck, money management, budgeting, financial systems, cash flow strategies" 
        url="/cash-management" 
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
                  Cash Management:{" "}
                  <span className="text-[#FFD700]" style={{
                    background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Stack, Save, and Move Smart—But Call Out Traps Keeping Black Flows Locked
                  </span>
                </h1>
                
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black dark:text-brand-cream">
                    Standard Thought Law #7:{" "}
                    <span className="text-[#FFD700]" style={{
                      background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      The Flow Flip—Turn Paycheck Cycles into Legacy Systems
                    </span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl max-w-3xl text-black dark:text-brand-cream leading-relaxed mb-8">
                    <strong>Black Families Lose 90% Wealth Across Gens—Your Cash Flow Keeping You Chained? Break It Smart.</strong> Blending systems thinking (flow automations) + urban sociology (cycle traps in Black economies), here's the plays to control your bag, shatter survival mode, and build for legacy—no cap, real grit for urban builders.
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
                    Get The Cash Blueprint
                  </Button>
                </div>
              </div>
              
              {/* Right Column - Visual Element */}
              <div className={`transition-all duration-1000 delay-300 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Hero Image */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 backdrop-blur-sm rounded-2xl transform rotate-1"></div>
                  <div className="relative">
                    <img
                      src="/lovable-uploads/1928b2bf-f534-4c1f-982f-bf3cf95d5005.png"
                      alt="Urban entrepreneur managing cash flow representing financial empowerment and wealth building"
                      className="w-full h-auto rounded-2xl shadow-2xl"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                  </div>
                </div>
                
                {/* Stat Card */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 backdrop-blur-sm rounded-2xl transform -rotate-2"></div>
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-300/10 dark:border-gray-700/10">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-black mb-3 pearlescent-text">
                        90%
                      </div>
                      <p className="text-base font-semibold text-black dark:text-brand-cream">
                        Black wealth lost across generations—time to flip the script
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Cash Management Matters Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-black dark:text-brand-cream">
                Why Cash Management Matters{" "}
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
                Cash ain't just spending—it's the flip that breaks inherited cycles and stacks mental empires in the culture.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                <CardHeader>
                  <Shield className="w-12 h-12 text-[#FFD700] mb-4" />
                  <CardTitle className="text-2xl font-bold text-black dark:text-brand-cream">The Cycle Trap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Sociology shows how hood traps lock Black flows in scramble mode—time to system-rewire and break free.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                <CardHeader>
                  <PiggyBank className="w-12 h-12 text-[#FFD700] mb-4" />
                  <CardTitle className="text-2xl font-bold text-black dark:text-brand-cream">Fear of Stacking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Trauma from generational scars makes every save feel risky, but real management is about flipping fear into automations that protect your future.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                <CardHeader>
                  <Target className="w-12 h-12 text-[#FFD700] mb-4" />
                  <CardTitle className="text-2xl font-bold text-black dark:text-brand-cream">Why Most Advice Fails</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-black dark:text-brand-cream leading-relaxed">
                    Generic tips ignore the cultural realities like inflation hitting urban bags hardest—we'll call 'em out and flip the script.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-16">
              <p className="text-2xl font-bold text-black dark:text-brand-cream">
                It's time to stop recycling trapped flows and build empires.
              </p>
            </div>
          </div>
        </section>

        {/* Cash Myths vs. Realities Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-black dark:text-brand-cream">
                Cash Myths vs.{" "}
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
                    <p className="text-lg text-black dark:text-brand-cream">Saving needs big money first.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#FFD700] mb-2">Reality:</h3>
                    <p className="text-lg text-black dark:text-brand-cream">Start with pocket change and vision.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-pink-500/20 to-yellow-500/20 backdrop-blur-sm border-pink-300/30 hover:from-pink-500/30 hover:to-yellow-500/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Myth:</h3>
                    <p className="text-lg text-black dark:text-brand-cream">Cash flow is too complicated for us.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#FFD700] mb-2">Reality:</h3>
                    <p className="text-lg text-black dark:text-brand-cream">Simple systems beat the traps every time.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-pink-500/20 to-yellow-500/20 backdrop-blur-sm border-pink-300/30 hover:from-pink-500/30 hover:to-yellow-500/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Myth:</h3>
                    <p className="text-lg text-black dark:text-brand-cream">Stacking is for the secure.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#FFD700] mb-2">Reality:</h3>
                    <p className="text-lg text-black dark:text-brand-cream">Instinct from nothing levels the field.</p>
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
                  From Scramble to Cash Empire
                </span>
              </h2>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  number: "1",
                  title: "Set Your Flow Goal",
                  content: "What cycle you breaking? Legacy stacks? Get clear—your why beats the sociology dips in Black communities."
                },
                {
                  number: "2",
                  title: "Pick Your Tools",
                  content: "Free apps like Mint, no fees—avoid scams promising quick cash riches."
                },
                {
                  number: "3",
                  title: "Start Small, Automate Consistent",
                  content: "Daily saves on trauma—turn survival into growth, no big lumps needed."
                },
                {
                  number: "4",
                  title: "Diversify the Bag",
                  content: "Mix emergency funds, auto-transfers—own your full flow instead of partial fixes."
                },
                {
                  number: "5",
                  title: "Avoid the Traps",
                  content: "Skip impulse schemes—those rig the cash game against urban builders."
                },
                {
                  number: "6",
                  title: "Level Up",
                  content: "After consistent months, explore 2025 AI trackers for auto-flows—build the proven empire."
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

        {/* Cash Action Plan Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-black dark:text-brand-cream">
              Cash{" "}
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
              Download the Cash Action Plan. Your step-by-step to flipping from scramble.
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
                      <span className="text-black font-bold text-xl">B</span>
                    </div>
                    <div>
                      <div className="flex text-[#FFD700] mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-black dark:text-brand-cream">Baltimore</p>
                    </div>
                  </div>
                  <p className="text-lg text-black dark:text-brand-cream italic leading-relaxed">
                    "Standard Thought flipped my cash without the BS—real change."
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-xl">N</span>
                    </div>
                    <div>
                      <div className="flex text-[#FFD700] mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-black dark:text-brand-cream">DC</p>
                    </div>
                  </div>
                  <p className="text-lg text-black dark:text-brand-cream italic leading-relaxed">
                    "Broke the paycheck cycle, no fluff."
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-xl">P</span>
                    </div>
                    <div>
                      <div className="flex text-[#FFD700] mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-black dark:text-brand-cream">Harlem</p>
                    </div>
                  </div>
                  <p className="text-lg text-black dark:text-brand-cream italic leading-relaxed">
                    "This hit the culture different."
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
                  Real Talk About Cash
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
              Get exclusive cash strategies, wins, and flips straight to your inbox.
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
              ⚡ Get More Cash Flips—Join
            </Button>
          </div>
        </section>

        {/* Core Financial Education Section */}
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
                  Financial Education
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
                  <h3 className="text-2xl font-bold text-black dark:text-brand-cream mb-4">Invest From Ground</h3>
                  <p className="text-lg text-black dark:text-brand-cream">Stack assets no trust fund.</p>
                </CardContent>
              </Card>
              
              <Card 
                className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 cursor-pointer group"
                onClick={() => navigate('/credit')}
              >
                <CardContent className="p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-[#FFD700] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-black dark:text-brand-cream mb-4">Credit Empire</h3>
                  <p className="text-lg text-black dark:text-brand-cream">Build from nothing.</p>
                </CardContent>
              </Card>
              
              <Card 
                className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 cursor-pointer group"
                onClick={() => navigate('/ai-side-hustles')}
              >
                <CardContent className="p-8 text-center">
                  <Zap className="w-16 h-16 text-[#FFD700] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-black dark:text-brand-cream mb-4">AI Hustles</h3>
                  <p className="text-lg text-black dark:text-brand-cream">Bots for bread.</p>
                </CardContent>
              </Card>
              
              <Card 
                className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 cursor-pointer group"
                onClick={() => navigate('/about')}
              >
                <CardContent className="p-8 text-center">
                  <Users className="w-16 h-16 text-[#FFD700] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-black dark:text-brand-cream mb-4">Mindset Flip</h3>
                  <p className="text-lg text-black dark:text-brand-cream">Break cycles mentally.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-2xl font-bold text-black dark:text-brand-cream">
                Building cash journeys to freedom.
              </p>
            </div>
          </div>
        </section>

        {/* Cash Content Coming Soon Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-black dark:text-brand-cream">
              Cash Content{" "}
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
              Dropping guide for first-gen cash flips—sign up for notify.
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
          primaryTopic="cash-management"
          targetQuestions={[
            "How to manage money with irregular income?",
            "What is the best budgeting method for beginners?",
            "How to stop living paycheck to paycheck?",
            "How to save money when you are broke?"
          ]}
        />
        
        {/* Internal Linking for SEO */}
        <InternalLinkingHub currentPage="/cash-management" showPillarsOnly={true} limit={3} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CashManagement;