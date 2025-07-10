import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { BlogHero, BlogGrid, BlogTestimonials } from "@/components/blog";

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

      {/* SEO */}
      <SEO
        title="First-Gen Success Stories & Wealth Tips | StandardThought"
        description="Real stories from hustlers who built wealth from zero. No trust funds, just proven strategies for credit, investing, and AI income."
        keywords="first-gen entrepreneur stories, urban wealth building success stories, hood to wealth stories, self-made entrepreneur stories, building from nothing success stories"
        url="/blog"
        type="website"
        breadcrumbs={breadcrumbs}
      />

      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pt-36 md:pt-36 pb-16 mobile:pt-44 sm:pt-40">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Hero Section */}
          <BlogHero isVisible={isVisible} />

          {/* Main Blog Section */}
          <BlogGrid isVisible={isVisible} />

          {/* Testimonials Section */}
          <BlogTestimonials isVisible={isVisible} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;