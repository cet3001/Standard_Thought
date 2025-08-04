import Analytics from "@/components/analytics";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { generateBreadcrumbSchema, generateArticleSchema } from "@/components/seo/schemas";

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
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();

  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "Manifesto", url: "https://www.standardthought.com/manifesto", position: 2 }
  ];

  const structuredData = [
    generateBreadcrumbSchema({ items: breadcrumbs }),
    generateArticleSchema({
      title: "The Standard Thought Manifesto - Built for Cycle-Breakers",
      description: "Our manifesto for the underestimated - those who refuse to stay boxed in by inherited limitations.",
      url: "https://www.standardthought.com/manifesto",
      author: "Standard Thought",
      publishedTime: new Date().toISOString(),
      category: "Philosophy"
    })
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
    <div className="relative min-h-screen bg-brand-black text-brand-cream">
      <Analytics />
      <SEO 
        title="Manifesto - Standard Thought"
        description="Our manifesto for the underestimated - those who refuse to stay boxed in by inherited limitations. We unlearn, rebuild, stack, and transcend."
        keywords="manifesto, cycle-breakers, wealth building, urban entrepreneurship, mindset transformation"
        url="https://www.standardthought.com/manifesto"
        breadcrumbs={breadcrumbs}
      />

      {/* Dynamic Background */}
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/85 via-brand-black/90 to-brand-black/85"></div>
      </div>

      <Navigation />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <ManifestoSection>
              <div className="text-center mb-16">
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  We weren't raised to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
                    thrive
                  </span>
                  .
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-brand-cream/80 max-w-4xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  We were taught to survive. Standard Thought wasn't built for the average—it's for the ones who were never supposed to make it.
                </motion.p>
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
                  >
                    {section.title}
                  </a>
                ))}
                <a
                  href="#commitments"
                  className="px-4 py-2 text-sm font-medium border border-[#FFD700]/30 rounded-lg hover:bg-[#FFD700]/10 hover:border-[#FFD700]/50 transition-all duration-300"
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
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
                        {section.title}
                      </span>
                    </h2>
                    
                    <div className="grid gap-6">
                      {section.items.map((item, index) => (
                        <motion.div
                          key={index}
                          className="relative border border-[#FFD700]/20 rounded-xl p-6 bg-gradient-to-r from-brand-cream/5 to-brand-cream/10 backdrop-blur-sm"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <p className="text-lg md:text-xl text-brand-cream/90 leading-relaxed">
                            {item}
                          </p>
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
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
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
                        className="flex items-start gap-4 p-6 border border-[#FFD700]/20 rounded-xl bg-gradient-to-r from-brand-cream/5 to-brand-cream/10 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#FFD700] mt-3 flex-shrink-0"></div>
                        <p className="text-lg md:text-xl text-brand-cream/90 leading-relaxed">
                          {commitment}
                        </p>
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
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 text-brand-cream">
                    If you're ready to rebuild for real, not just read about it—
                  </h3>
                  
                  <Link to="/sales">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-brand-black font-bold text-lg px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                      Run the Play
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  
                  <p className="mt-6 text-brand-cream/60 text-sm">
                    Real plays, no fluff—just field-tested moves.
                  </p>
                </div>
              </section>
            </ManifestoSection>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Manifesto;