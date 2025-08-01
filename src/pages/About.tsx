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

const About = () => {
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
    name: "About",
    url: "https://www.standardthought.com/about",
    position: 2
  }];

  // FAQ data for schema markup
  const faqData = [
    {
      question: "What if my story's too messed up?",
      answer: "Start free—flip trauma into strength, step by step."
    },
    {
      question: "How risky is calling out myths?",
      answer: "Low if real—systems beat the fear, rooted in exclusion fights."
    },
    {
      question: "How fast to see flips?",
      answer: "Months of grit, not quick—mindset legacy ain't overnight."
    },
    {
      question: "Do I need to reflect daily?",
      answer: "Nah, automate habits—focus on building the rest."
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
        title="Why Mindset Matters | Standard Thought: Cycle-Breaking & Legacy" 
        description="Standard Thought exposes the real traps holding us back—cycle thinking, generational fear, and hollow advice. Break the pattern: unlearn, rebuild, stack, and transcend. Build systems that outlast struggle and set new legends." 
        keywords="mindset transformation, breaking cycles, mental wealth building, urban mindset, cycle-breaking, survival programming, identity rebuilding, system-building" 
        url="/about" 
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
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="min-h-[70vh] flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
              {/* Text Content - Left Side on Desktop */}
              <div className="flex-1 text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center min-h-[70vh]">
                {/* Headline */}
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 8px rgba(255,215,0,0.2)',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
                    }}>
                  <span className="text-brand-cream dark:text-brand-cream">Welcome to the Home of Cycle-Breakers.</span>{" "}
                  <span className="pearlescent-text">Mindset Isn't Just Step One—It's the Blueprint for Liberation, Legacy, and System-Building.</span>
                </h1>
                
                {/* Subheadline */}
                <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-brand-cream dark:text-brand-cream"
                      style={{
                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))'
                      }}>
                    We grew up surviving. Now we build what lasts. Here, you unlearn survival scripts, rebuild your identity with truth, stack real skills and soul, and design the legacy no one handed you.
                  </h2>
                  
                  <p className="text-base sm:text-lg text-brand-cream/90 dark:text-brand-cream/90 mb-6 leading-relaxed"
                     style={{
                       textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                       filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))'
                     }}>
                    At Standard Thought, you break cycles for good. This is where we drop hustle trauma, heal by building, and create blueprints your family—and your block—will remember. No more shrinking, no more waiting. We design new systems here, together.
                  </p>
                  
                  <p className="text-base sm:text-lg text-brand-cream/90 dark:text-brand-cream/90 mb-8 leading-relaxed"
                     style={{
                       textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                       filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))'
                     }}>
                    This isn't another finance site. This is the digital sanctuary for those who had no blueprint, but choose to build one that lasts. You in?
                  </p>
                </div>
                
                {/* Primary CTA */}
                <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <Button 
                    onClick={() => navigate('/sales')}
                    className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold px-6 py-3 text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 animate-pulse hover:animate-none"
                  >
                    Break the Cycle. Build Your Legacy—Start Now
                  </Button>
                </div>
              </div>

              {/* Hero Image - Right Side on Desktop, Full Height */}
              <div className="flex-none order-1 lg:order-2 lg:w-[45%] h-full">
                <div className={`relative h-[70vh] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="relative overflow-hidden rounded-xl border-2 border-[#FFD700]/30 shadow-2xl h-full">
                    <img 
                      src="/lovable-uploads/c8dcd8ab-7476-4852-b65f-de819b5a1606.png"
                      alt="Black man stands on a rooftop at night, overlooking a city being rebuilt—scaffolding and cranes signal transformation on the skyline"
                      className="w-full h-full object-cover object-center"
                      style={{
                        filter: 'brightness(1.1) contrast(1.1)'
                      }}
                    />
                    
                    {/* City Glimmer Animation Overlay */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-[#FFD700] rounded-full animate-pulse" 
                           style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#FFA500] rounded-full animate-pulse" 
                           style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-[#FFD700] rounded-full animate-pulse" 
                           style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
                      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#FFA500] rounded-full animate-pulse" 
                           style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Mindset Matters Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                  <span className="pearlescent-text">Why Mindset Matters (Real Talk):</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">Because Breaking Cycles is a Revolution—Not a Self-Help Trend.</span>
                </h2>
                <p className="text-lg text-brand-black dark:text-brand-cream/80 max-w-3xl mx-auto">
                  Mindset alone won't save you—but it's where every revolution begins. We flip the script on trauma, grind myths, and trapped stories, showing how real cycle-breakers unlearn, rebuild, stack truth, and transcend for legacy.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream">
                      <span className="pearlescent-text">UNLEARN:</span>{" "}
                      <span className="text-brand-black dark:text-brand-cream">The Cycle Trap</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80">
                      Hood cycles keep us locked in survival mode. Standard Thought is where you UNLEARN the scripts passed down by trauma, family, or your block—so the cycle ends with you.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream">
                      <span className="pearlescent-text">REBUILD:</span>{" "}
                      <span className="text-brand-black dark:text-brand-cream">Fear of Flipping</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80">
                      Generational scars make every flip risky. Here, REBUILDING is about taking fear head-on so you design with courage, not react from pain. We show you how to build identity and system from truth, not old wounds.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream">
                      <span className="pearlescent-text">STACK:</span>{" "}
                      <span className="text-brand-black dark:text-brand-cream">Why Most Advice Fails</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80">
                      Fake positivity and empty 'mindset hacks' ignore culture, pain, and legacy. We STACK real wisdom—showing receipts, naming the myths, and translating street survival into generational power.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-12">
                <p className="text-lg font-semibold text-brand-black dark:text-brand-cream mb-8">
                  TRANSCEND: Stop living someone else's script. Ready to build your own system and set your legacy in motion?
                </p>
                <Button 
                  onClick={() => navigate('/sales')}
                  className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold px-6 py-3 text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Tap to Start Unlearning
                </Button>
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
                  <span className="pearlescent-text">Mindset Myths</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">vs.</span>{" "}
                  <span className="pearlescent-text">Realities</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <Card className="bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm border-red-300/20 dark:border-red-700/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-red-600 dark:text-red-400">
                        Myth: Mindset is just positive thinking.
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className="bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm border-red-300/20 dark:border-red-700/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-red-600 dark:text-red-400">
                        Myth: You need privilege to shift.
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className="bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm border-red-300/20 dark:border-red-700/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-red-600 dark:text-red-400">
                        Myth: Excellence alone breaks cycles.
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </div>
                
                <div className="space-y-8">
                  <Card className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 backdrop-blur-sm border-[#FFD700]/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-[#FFD700]">
                        Reality: It's layered flips blending psych and sociology for hood wins.
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 backdrop-blur-sm border-[#FFD700]/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-[#FFD700]">
                        Reality: Instinct from nothing beats inherited ease every time.
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 backdrop-blur-sm border-[#FFD700]/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-[#FFD700]">
                        Reality: Trojan truth—it's a myth masking systemic chains; real mindset calls it out.
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
                  <span className="text-brand-black dark:text-brand-cream">Step-by-Step: Flip Your</span>{" "}
                  <span className="pearlescent-text">Mindset Empire</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    number: 1,
                    title: "Set Your Story Goal",
                    content: "What cycle you breaking? Legacy mindset? Get clear—your why beats the psych-social dips in Black communities."
                  },
                  {
                    number: 2,
                    title: "Pick Your Tools",
                    content: "Free journals or apps—no cost barriers, avoid fluff promising quick mindset riches."
                  },
                  {
                    number: 3,
                    title: "Start Small, Reflect Consistent",
                    content: "Daily flips on trauma—turn survival into growth, no big leaps needed."
                  },
                  {
                    number: 4,
                    title: "Diversify the Layers",
                    content: "Stack motivation plays with sociology insights—own your full story instead of partial fixes."
                  },
                  {
                    number: 5,
                    title: "Avoid the Myths",
                    content: "Skip excellence hype schemes—those rig the mental game against urban builders."
                  },
                  {
                    number: 6,
                    title: "Level Up",
                    content: "After consistent months, explore 2025 AI mindset tools for auto-flips—build the proven empire."
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
                  <span className="pearlescent-text">Mindset</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">Action Plan</span>
                </h2>
                <p className="text-lg text-brand-black dark:text-brand-cream/80 mb-8">
                  Download the Mindset Action Plan. Your step-by-step to flipping from trapped to legacy.
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
                      "Standard Thought called out my mindset myths—flipped my whole game."
                    </blockquote>
                    <p className="text-sm text-brand-black dark:text-brand-cream/60">
                      — R, Philly
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <blockquote className="text-lg font-semibold text-brand-black dark:text-brand-cream mb-4">
                      "Broke the cycle mentally, no BS."
                    </blockquote>
                    <p className="text-sm text-brand-black dark:text-brand-cream/60">
                      — D, Miami
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <blockquote className="text-lg font-semibold text-brand-black dark:text-brand-cream mb-4">
                      "This hit the culture different."
                    </blockquote>
                    <p className="text-sm text-brand-black dark:text-brand-cream/60">
                      — L, Oakland
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
                  <span className="text-brand-black dark:text-brand-cream">Mindset</span>
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
                  Get exclusive mindset strategies, wins, and flips straight to your inbox.
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
                  ⚡ Get More Mindset Flips—Join
                </Button>
                <p className="text-sm text-brand-black dark:text-brand-cream/60 mt-4">
                  No spam, just blueprints and updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Transformation Education Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                  <span className="text-brand-black dark:text-brand-cream">Core</span>{" "}
                  <span className="pearlescent-text">Transformation Education</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 group cursor-pointer"
                      onClick={() => navigate('/investing')}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      Invest From Ground
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80 mb-4">
                      Stack assets no trust fund.
                    </p>
                    <ExternalLink className="w-5 h-5 text-[#FFD700] group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 group cursor-pointer"
                      onClick={() => navigate('/credit')}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      Credit Empire
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80 mb-4">
                      Build from nothing.
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
                      onClick={() => navigate('/cash-management')}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-black dark:text-brand-cream group-hover:text-[#FFD700] transition-colors">
                      Cash Mastery
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-black dark:text-brand-cream/80 mb-4">
                      Stack smart.
                    </p>
                    <ExternalLink className="w-5 h-5 text-[#FFD700] group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-12">
                <p className="text-lg text-brand-black dark:text-brand-cream/80">
                  Building mental journeys to freedom.
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
                  <span className="pearlescent-text">Mindset Content</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">Coming Soon</span>
                </h2>
                <p className="text-lg text-brand-black dark:text-brand-cream/80 mb-8">
                  Dropping guide for first-gen mindset flips—sign up for notify.
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
        <InternalLinkingHub currentPage="/about" showPillarsOnly={true} limit={3} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;