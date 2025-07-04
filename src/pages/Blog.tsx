import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { SectionOverlayBox } from "@/components/layout";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const Blog = () => {
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "Blog", url: "https://www.standardthought.com/blog", position: 2 }
  ];

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
        title="Out the Mud: Real Builder Stories | Standardthought - First-Gen Entrepreneur Success Stories"
        description="Real stories from first-gen hustlers and underestimated creators who built wealth brick by brick. No trust funds, no shortcuts—just proven blueprints from people who figured it out."
        keywords="first-gen entrepreneur stories, urban wealth building success stories, hood to wealth stories, self-made entrepreneur stories, building from nothing success stories"
        url="/blog"
        type="website"
        breadcrumbs={breadcrumbs}
      />

      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Hero Section */}
          <SectionOverlayBox className={`mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[#FFD700]/20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-[#247EFF]/15 animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>

            <div className="text-center relative z-10">
              {/* Main Headline */}
              <div className="relative inline-block mb-6">
                <h1 className="text-5xl md:text-7xl font-black text-brand-black dark:text-brand-cream mb-4 relative">
                  Out the{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 font-permanent-marker text-[#FFD700] transform -rotate-1 inline-block">
                      Mud
                    </span>
                    {/* Graffiti underline */}
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-4 text-[#FFD700]/60"
                      viewBox="0 0 120 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 15C8 12 15 8 25 10C35 12 45 8 55 12C65 16 75 8 85 12C95 16 105 12 115 15"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black dark:text-brand-cream">
                  Real{" "}
                  <span className="relative inline-block">
                    <span className="font-permanent-marker text-[#247EFF] transform rotate-1">
                      Builder Stories
                    </span>
                    {/* Graffiti underline */}
                    <svg
                      className="absolute -bottom-1 left-0 w-full h-3 text-[#247EFF]/50"
                      viewBox="0 0 140 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 12C12 8 22 10 32 8C42 6 52 12 62 8C72 4 82 12 92 8C102 4 112 10 132 12"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                </h2>
              </div>

              {/* Subhead */}
              <p className="text-xl md:text-2xl text-brand-black/80 dark:text-brand-cream/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                No trust funds. No shortcuts. Just real blueprints from folks who built it brick by brick.
              </p>

              {/* Pull Quote */}
              <div className="relative bg-gradient-to-r from-[#FFD700]/10 to-[#247EFF]/10 rounded-xl p-6 border-l-4 border-[#FFD700] max-w-3xl mx-auto">
                <blockquote className="text-lg md:text-xl font-medium text-brand-black dark:text-brand-cream italic">
                  "If you had to figure it out with nothing but vision and grind, these stories are for you."
                </blockquote>
              </div>
            </div>
          </SectionOverlayBox>

          {/* Coming Soon Content */}
          <SectionOverlayBox className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brand-black dark:text-brand-cream mb-4">
                Real Stories Coming Soon
              </h3>
              <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 mb-6">
                We're collecting authentic stories from builders who made it out the struggle. 
                First-gen entrepreneurs, street-smart hustlers, and folks who turned vision into reality.
              </p>
              <div className="bg-[#FFD700]/20 rounded-lg p-4 border border-[#FFD700]/30">
                <p className="text-brand-black dark:text-brand-cream font-medium">
                  Got a story to share? Your journey could inspire the next builder.
                </p>
              </div>
            </div>
          </SectionOverlayBox>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;