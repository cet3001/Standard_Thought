
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import AboutHero from "@/components/about/about-hero";
import MindsetFirstSection from "@/components/about/mindset-first-section";
import ValuesSection from "@/components/about/values-section";
import TestimonialsCarousel from "@/components/about/testimonials-carousel";

const About = () => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
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
