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

// Dynamic Community Ticker Component
const DynamicCommunityTicker = ({ isVisible }: { isVisible: boolean }) => {
  const communityNames = [
    "Alex", "Jamal", "Tiana", "Marcus", "Keisha", "Carlos", "Aaliyah", "Jordan", 
    "Destiny", "Isaiah", "Zara", "Damon", "Simone", "Andre", "Nia", "Terrell", 
    "Yasmin", "Malik", "Camila", "Devon", "Raven", "Xavier", "Amara", "Khalil",
    "Zoe", "Darius", "Imani", "Elijah", "Kendra", "Omar", "Layla", "Jaden",
    "Ebony", "Rashad", "Tierra", "Antonio", "Maya", "Devin", "Aniya", "Tyrone"
  ];

  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [displayedNames, setDisplayedNames] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prev) => (prev + 1) % communityNames.length);
    }, 800); // Change name every 0.8 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Show 5 names at a time, rotating
    const names = [];
    for (let i = 0; i < 5; i++) {
      names.push(communityNames[(currentNameIndex + i) % communityNames.length]);
    }
    setDisplayedNames(names);
  }, [currentNameIndex]);

  return (
    <div className={`mt-6 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="relative overflow-hidden bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 backdrop-blur-sm border border-[#FFD700]/30 rounded-lg py-3 px-4">
        <div className="flex items-center gap-2 text-sm text-brand-cream/80 dark:text-brand-cream/80">
          <span className="font-semibold">This site is built with:</span>
          <div className="flex items-center gap-1">
            <span className="transition-all duration-300 ease-in-out">
              {displayedNames.join(" • ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

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
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight transition-all duration-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
                    className="urban-cta text-black font-bold px-6 py-3 text-lg lg:text-xl"
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
                
                {/* Dynamic Community Social Proof Ticker */}
                <DynamicCommunityTicker isVisible={isVisible} />
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
                  <span className="pearlescent-text">Why Your Mental Game Matters (Real Talk):</span>{" "}
                  <span className="text-brand-black dark:text-brand-cream">Because Breaking Cycles is a Revolution—Not a Self-Help Trend.</span>
                </h2>
                <p className="text-lg text-brand-black dark:text-brand-cream/80 max-w-3xl mx-auto mb-6">
                  Your mental game alone won't save you—but it's where every revolution begins. We flip the script on trauma, grind myths, and trapped stories, showing how real cycle-breakers unlearn, rebuild, stack truth, and transcend for generational power.
                </p>
                
                {/* Reader Quote */}
                <div className="max-w-2xl mx-auto">
                  <blockquote className="text-xl font-bold text-[#FFD700] italic border-l-4 border-[#FFD700] pl-6 py-4 bg-gradient-to-r from-[#FFD700]/10 to-transparent rounded-r-lg">
                    "First time I named the cycle, everything changed. Wasn't about positive thinking—it was about calling out what kept me small."
                    <footer className="text-sm text-brand-cream/80 mt-2 not-italic">— Tiana, Community Builder</footer>
                  </blockquote>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-brand-black dark:text-brand-cream">
                      <span className="pearlescent-text">UNLEARN:</span>{" "}
                      <span className="text-brand-black dark:text-brand-cream">The Cycle Trap</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-brand-black dark:text-brand-cream/80">
                      Hood cycles keep us locked in survival mode. Standard Thought is where you UNLEARN the scripts passed down by trauma, family, or your block—so the pattern ends with you.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-brand-black dark:text-brand-cream">
                      <span className="pearlescent-text">REBUILD:</span>{" "}
                      <span className="text-brand-black dark:text-brand-cream">Fear of Flipping</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-brand-black dark:text-brand-cream/80">
                      Generational scars make every flip risky. Here, REBUILDING is about taking fear head-on so you design with courage, not react from pain. We show you how to build identity and systems from truth, not old wounds.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-brand-black dark:text-brand-cream">
                      <span className="pearlescent-text">STACK:</span>{" "}
                      <span className="text-brand-black dark:text-brand-cream">Why Most Advice Fails</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-brand-black dark:text-brand-cream/80">
                      Fake positivity and empty 'mental hacks' ignore culture, pain, and inheritance. We STACK real wisdom—showing receipts, naming the myths, and translating street survival into generational wealth.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border-gray-300/10 dark:border-gray-700/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-brand-black dark:text-brand-cream">
                      <span className="pearlescent-text">TRANSCEND:</span>{" "}
                      <span className="text-brand-black dark:text-brand-cream">Your Legacy Starts Now</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-brand-black dark:text-brand-cream/80">
                      Stop living someone else's survival code. Ready to build your own game plan and set your inheritance in motion?
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <Button 
                  onClick={() => navigate('/sales')}
                  className="urban-cta text-black font-bold px-6 py-3 text-lg"
                >
                  Tap to Start Unlearning
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mindset Myths vs. Realities Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-brand-black dark:text-brand-cream">
                  Mindset Myths vs.{" "}
                  <span className="pearlescent-text">Realities</span>
                </h2>
                <p className="text-lg text-brand-black dark:text-brand-cream/80 font-medium">
                  Real Talk for Cycle-Breakers: Dismantle Myths, Build Systems.
                </p>
              </div>
              
              <div className="space-y-12 max-w-3xl mx-auto">
                {/* Block 1 */}
                <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-300/10 dark:border-gray-700/10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="bg-red-500/10 backdrop-blur-sm rounded-lg p-4 border border-red-500/20 mb-4">
                        <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2" aria-label="Myth">
                          Myth: "Mindset is just positive thinking."
                        </h3>
                      </div>
                    </div>
                    <div className="flex-1">
                       <div className="bg-[#FFD700]/10 backdrop-blur-sm rounded-lg p-4 border border-[#FFD700]/20">
                         <h3 className="text-xl font-bold text-[#FFD700] mb-2" aria-label="Reality">
                           Reality: "Your mental game is the weapon that shatters inherited cycles and writes blueprints for liberation."
                         </h3>
                         <p className="text-sm text-brand-black dark:text-brand-cream/70 italic">
                           Before I learned this, I kept repeating my mom's money fear. Now, I teach my little cousin how wealth really works.
                         </p>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Block 2 */}
                <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-300/10 dark:border-gray-700/10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="bg-red-500/10 backdrop-blur-sm rounded-lg p-4 border border-red-500/20 mb-4">
                        <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2" aria-label="Myth">
                          Myth: "You need privilege to shift."
                        </h3>
                      </div>
                    </div>
                    <div className="flex-1">
                       <div className="bg-[#FFD700]/10 backdrop-blur-sm rounded-lg p-4 border border-[#FFD700]/20">
                         <h3 className="text-xl font-bold text-[#FFD700] mb-2" aria-label="Reality">
                           Reality: "Instinct and soul-borne truth beat inherited ease—if you choose to rebuild."
                         </h3>
                         <p className="text-sm text-brand-black dark:text-brand-cream/70 italic">
                           Started with food stamps and no connections. Six months later, I was teaching financial workshops at the community center.
                         </p>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Block 3 */}
                <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-300/10 dark:border-gray-700/10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="bg-red-500/10 backdrop-blur-sm rounded-lg p-4 border border-red-500/20 mb-4">
                        <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2" aria-label="Myth">
                          Myth: "Excellence alone breaks cycles."
                        </h3>
                      </div>
                    </div>
                    <div className="flex-1">
                       <div className="bg-[#FFD700]/10 backdrop-blur-sm rounded-lg p-4 border border-[#FFD700]/20">
                         <h3 className="text-xl font-bold text-[#FFD700] mb-2" aria-label="Reality">
                           Reality: "Excellence is the Trojan horse—real freedom calls out every chain and transcends grind."
                         </h3>
                         <p className="text-sm text-brand-black dark:text-brand-cream/70 italic">
                           Worked three jobs perfectly for years, still broke. Then I learned the game was rigged and started building my own rules.
                         </p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

               {/* Declarative Close */}
               <div className="text-center mt-12">
                 <p className="text-lg sm:text-xl text-[#FFD700] font-medium">
                   You've seen the myth. You're living the flip.
                 </p>
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