
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import AboutHero from "@/components/about/about-hero";
import MindsetFirstSection from "@/components/about/mindset-first-section";
import ValuesSection from "@/components/about/values-section";
import TestimonialsCarousel from "@/components/about/testimonials-carousel";
import { SectionWrapper, PageShell } from "@/components/layout";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const About = () => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <PageShell>
      {/* Background texture for enhanced visual */}
      <div className="fixed inset-0 -z-40" aria-hidden="true">
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
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
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
    </PageShell>
  );
};

export default About;
