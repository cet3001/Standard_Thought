
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import AboutHero from "@/components/about/about-hero";
import MindsetFirstSection from "@/components/about/mindset-first-section";
import ValuesSection from "@/components/about/values-section";
import TestimonialsCarousel from "@/components/about/testimonials-carousel";
import { SectionWrapper } from "@/components/layout";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const About = () => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Site-wide Urban Background */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-50 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          />
        )}
        
        {/* Enhanced gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-slate-700/50 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-slate-800/20"></div>
        
        {/* Content overlay for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/80 via-brand-cream/85 to-brand-cream/80 dark:from-brand-black/80 dark:via-brand-black/85 dark:to-brand-black/80"></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_2px_2px,_rgba(0,0,0,1)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="relative z-10">
        <SEO 
          title="About Standardthought - Why We're Here"
          description="Learn about Standardthought's mission to help entrepreneurs build legacy from nothing. Founded by outsiders and underdogs who earned every win through hustle and grit."
          keywords="about standardthought, entrepreneur community, business legacy, startup founders, underdog entrepreneurs, business mentorship"
          url="https://standardthought.com/about"
        />
        <Navigation />
        
        {/* Hero Section */}
        <SectionWrapper>
          <AboutHero />
        </SectionWrapper>

        {/* Why Mindset First Section */}
        <SectionWrapper>
          <MindsetFirstSection />
        </SectionWrapper>

        {/* Values Section */}
        <SectionWrapper>
          <ValuesSection />
        </SectionWrapper>

        {/* Testimonials Carousel Section */}
        <SectionWrapper>
          <TestimonialsCarousel />
        </SectionWrapper>

        <Footer />
      </div>
    </div>
  );
};

export default About;
