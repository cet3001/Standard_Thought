import Analytics from "@/components/analytics";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useHeaderHeight } from "@/hooks/use-header-height";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { generateBreadcrumbSchema, generateArticleSchema } from "@/components/seo/schemas";
import { useState, useEffect } from "react";

const ManifestoSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="mb-16"
    >
      {children}
    </motion.div>
  );
};

const Manifesto = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerHeight = useHeaderHeight();
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();

  useEffect(() => {
    // Delay visibility to prevent layout shift
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "Manifesto", url: "https://www.standardthought.com/manifesto", position: 2 }
  ];

  const manifestoSections = [
    {
      id: "unlearn",
      title: "What We Unlearn",
      items: [
        "We unlearn inherited shame. We unlearn grinding for someone else's dream.",
        "We unlearn the fear that kept our brilliance boxed.",
        "We unlearn scarcity thinking disguised as 'being realistic.'",
        "We unlearn accepting less because that's 'all we deserve.'"
      ]
    },
    {
      id: "rebuild",
      title: "What We Rebuild",
      items: [
        "We rebuild identity from lived truth, not borrowed templates.",
        "We rebuild systems worthy of our roots.",
        "We rebuild wealth that can't be taken or taxed away.",
        "We rebuild community without the crabs-in-a-barrel mentality."
      ]
    },
    {
      id: "stack",
      title: "What We Stack",
      items: [
        "Income with integrity. Tools that work in our reality.",
        "Peace that can't be shaken.",
        "Knowledge that transforms generations.",
        "Networks that elevate instead of exploit."
      ]
    },
    {
      id: "transcend",
      title: "What We Transcend",
      items: [
        "We transcend scarcity, the myth of the lone wolf.",
        "We transcend spiritual gaslighting and toxic positivity.",
        "We transcend anyone selling us lack disguised as culture.",
        "We transcend the need to prove we belong—we build our own tables."
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background - Same as Homepage */}
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

      <Analytics />
      <SEO 
        title="Manifesto - Standard Thought"
        description="Our manifesto for the underestimated - those who refuse to stay boxed in by inherited limitations. We unlearn, rebuild, stack, and transcend."
        keywords="manifesto, cycle-breakers, wealth building, urban entrepreneurship, mindset transformation"
        url="https://www.standardthought.com/manifesto"
        breadcrumbs={breadcrumbs}
      />

      <Navigation />

      <main className="relative z-10">
        <section 
          className="pb-24 relative overflow-hidden"
          style={{ 
            marginTop: `${headerHeight || 80}px`,
            paddingTop: '3rem'
          }}
        >
          {/* Floating Elements - Same as Homepage */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#FFD700]/10 animate-float"></div>
            <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-[#247EFF]/20 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              {/* Hero Section */}
              <ManifestoSection>
                <div className={`transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-inter leading-[1.1] mb-8">
                      <span style={{ color: 'var(--color-lovable-black)' }}>We weren't raised to</span>{" "}
                      <span className="pearlescent-text">thrive</span>
                      <span style={{ color: 'var(--color-lovable-black)' }}>.</span>
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-inter font-semibold leading-[1.4] max-w-4xl mx-auto">
                      We were taught to survive. Standard Thought wasn't built for the average—it's for the ones who were never supposed to make it.
                    </p>
                    
                    {/* Video Section */}
                    <div className="mt-12 flex justify-center">
                      <div className="relative max-w-4xl w-full">
                        <video
                          className="w-full h-auto rounded-2xl shadow-2xl shadow-[#FFD700]/30 border border-[#FFD700]/30"
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source src="/manifesto-video.mp4.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </ManifestoSection>

              {/* Quick Navigation */}
              <ManifestoSection delay={0.4}>
                <nav className="flex flex-wrap justify-center gap-4 mb-20" aria-label="Manifesto sections">
                  {manifestoSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="px-4 py-2 text-sm font-medium border border-[#FFD700]/30 rounded-lg hover:bg-[#FFD700]/10 hover:border-[#FFD700]/50 transition-all duration-300"
                      style={{ color: 'var(--color-lovable-black)' }}
                    >
                      {section.title}
                    </a>
                  ))}
                  <a
                    href="#commitments"
                    className="px-4 py-2 text-sm font-medium border border-[#FFD700]/30 rounded-lg hover:bg-[#FFD700]/10 hover:border-[#FFD700]/50 transition-all duration-300"
                    style={{ color: 'var(--color-lovable-black)' }}
                  >
                    Our Commitments
                  </a>
                </nav>
              </ManifestoSection>

              {/* Manifesto Sections */}
              {manifestoSections.map((section, sectionIndex) => (
                <ManifestoSection key={section.id} delay={sectionIndex * 0.2}>
                  <section id={section.id} className="mb-20">
                    <div className="max-w-4xl mx-auto">
                      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        <span className="pearlescent-text">
                          {section.title}
                        </span>
                      </h2>
                      
                      <div className="grid gap-6">
                        {section.items.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Card className="border border-[#FFD700]/40 bg-gradient-to-br from-[#FFD700]/20 via-[#FFA500]/15 to-[#FFD700]/10 backdrop-blur-md shadow-lg shadow-[#FFD700]/30 hover:from-[#FFD700]/30 hover:via-[#FFA500]/25 hover:to-[#FFD700]/20 hover:border-[#FFD700]/60 hover:shadow-xl hover:shadow-[#FFD700]/40 transition-all duration-300 hover:scale-[1.03] relative overflow-hidden">
                              {/* Glass reflection effect */}
                              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                              <CardContent className="p-6 relative z-10">
                                <p className="text-lg md:text-xl leading-relaxed font-medium" style={{ color: 'var(--color-lovable-black)' }}>
                                  {item}
                                </p>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </section>
                </ManifestoSection>
              ))}

              {/* Our Commitments Section */}
              <ManifestoSection delay={0.6}>
                <section id="commitments" className="mb-20">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                      <span className="pearlescent-text">
                        Our Commitments
                      </span>
                    </h2>
                    
                    <div className="space-y-6">
                      {[
                        "Never sell you empty promises.",
                        "Never talk down to you.",
                        "Always keep it real, even when real is tough.",
                        "Always build for US, not just for clicks.",
                        "Always remember where we came from.",
                        "Always honor the struggle that brought us here."
                      ].map((commitment, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Card className="border border-[#FFD700]/40 bg-gradient-to-br from-[#FFD700]/20 via-[#FFA500]/15 to-[#FFD700]/10 backdrop-blur-md shadow-lg shadow-[#FFD700]/30 hover:from-[#FFD700]/30 hover:via-[#FFA500]/25 hover:to-[#FFD700]/20 hover:border-[#FFD700]/60 hover:shadow-xl hover:shadow-[#FFD700]/40 transition-all duration-300 hover:scale-[1.03] relative overflow-hidden">
                            {/* Glass reflection effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                            <CardContent className="p-6 relative z-10">
                              <div className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#FFD700] mt-3 flex-shrink-0 shadow-sm shadow-[#FFD700]/50"></div>
                                <p className="text-lg md:text-xl leading-relaxed font-medium" style={{ color: 'var(--color-lovable-black)' }}>
                                  {commitment}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>
              </ManifestoSection>

              {/* Final CTA */}
              <ManifestoSection delay={0.8}>
                <section className="text-center">
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: 'var(--color-lovable-black)' }}>
                      If you're ready to rebuild for real, not just read about it—
                    </h3>
                    
                    <Link to="/sales">
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-brand-black font-black text-xl px-12 py-6 rounded-2xl hover:shadow-2xl hover:shadow-[#FFD700]/60 hover:scale-110 transition-all duration-500 shadow-lg shadow-[#FFD700]/40 border-2 border-[#FFD700]/50 relative overflow-hidden group"
                        style={{ fontFamily: 'Permanent Marker, Kalam, cursive' }}
                      >
                        {/* Additional glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/30 to-[#FFA500]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
                        <span className="relative z-10 text-brand-black" style={{ textShadow: '0 0 5px rgba(0, 0, 0, 0.3)' }}>
                          Run the Play
                        </span>
                        <ArrowRight className="ml-3 h-6 w-6 relative z-10" />
                      </Button>
                    </Link>
                    
                    <p className="mt-6 text-sm" style={{ color: 'var(--color-lovable-black)', opacity: 0.6 }}>
                      Real plays, no fluff—just field-tested moves.
                    </p>
                  </div>
                </section>
              </ManifestoSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Manifesto;