
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import AboutHero from "@/components/about/about-hero";
import MindsetFirstSection from "@/components/about/mindset-first-section";
import ValuesSection from "@/components/about/values-section";
import TestimonialsCarousel from "@/components/about/testimonials-carousel";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const About = () => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main Urban Background */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-50 bg-cover bg-center"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-slate-700/40 to-slate-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/60 via-brand-cream/65 to-brand-cream/70 dark:from-brand-black/60 dark:via-brand-black/65 dark:to-brand-black/70"></div>
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
        <AboutHero />

        {/* Why Mindset First Section */}
        <MindsetFirstSection />

        {/* Values Section */}
        <ValuesSection />

        {/* Testimonials Carousel Section */}
        <TestimonialsCarousel />

        <Footer />
      </div>
    </div>
  );
};

export default About;
