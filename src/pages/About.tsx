
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import AboutHero from "@/components/about/about-hero";
import MindsetFirstSection from "@/components/about/mindset-first-section";
import ValuesSection from "@/components/about/values-section";
import TestimonialsCarousel from "@/components/about/testimonials-carousel";

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Urban Background - Matching Home Page */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>
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
  );
};

export default About;
