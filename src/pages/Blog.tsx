import { useEffect, useState } from "react";
import { useHeaderHeight } from "@/hooks/use-header-height";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { BlogHero, BlogGrid, BlogTestimonials } from "@/components/blog";
import BlogPerformanceOptimizer from "@/components/blog/BlogPerformanceOptimizer";
import { Helmet } from "react-helmet";

const Blog = () => {
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();
  const [isVisible, setIsVisible] = useState(false);
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "The Code They Never Gave Us", url: "https://www.standardthought.com/blog", position: 2 }
  ];

  // FAQ Schema for AEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is 'The Code They Never Gave Us'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's Standard Thought's blog hub—a lived archive of stories, strategies, and systems built by those who never had a roadmap. No fluff. No recycled tips. Just proof, playbooks, and personal rewrites."
        }
      },
      {
        "@type": "Question",
        "name": "What topics are covered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Topics include mental rewiring, cultural finance, first-gen strategies, side hustles, credit flips, and soul-rooted sovereignty. All tagged and filterable by real-life relevance."
        }
      }
    ]
  };

  // Collection Page Schema
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "The Code They Never Gave Us",
    "description": "Real builder stories, strategies, and breakthroughs from the front lines of transformation.",
    "url": "https://www.standardthought.com/blog",
    "hasPart": {
      "@type": "Blog",
      "name": "The Code They Never Gave Us",
      "description": "Not founder stories. These are lived lessons from people who had to build with no map.",
      "url": "https://www.standardthought.com/blog",
      "publisher": {
        "@type": "Organization",
        "name": "Standard Thought",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.standardthought.com/favicon-192x192.png"
        }
      }
    }
  };

  // Speakable Schema for voice search
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "The Code They Never Gave Us",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".hero-description"]
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced SEO with AEO Optimization */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>The Code They Never Gave Us | Builder Knowledge, Unfiltered</title>
        <meta name="description" content="Not founder stories. These are lived lessons from people who had to build with no map. Find blog posts on strategy, healing, hustle pivots, and wealth—written by and for cycle-breakers." />
        <meta name="keywords" content="builder stories, self-taught entrepreneur, first-gen wealth, urban finance, cycle breaker, financial independence, street-smart money, hood to wealth" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.standardthought.com/blog" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="The Code They Never Gave Us" />
        <meta property="og:description" content="Real stories and playbooks from self-taught builders. No fluff. Just code, pivots, and truth." />
        <meta property="og:url" content="https://www.standardthought.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.standardthought.com/lovable-uploads/blog-hero-social.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Standard Thought" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Code They Never Gave Us" />
        <meta name="twitter:description" content="Read the receipts. Real builders. No blueprint handed down." />
        <meta name="twitter:image" content="https://www.standardthought.com/lovable-uploads/blog-hero-social.jpg" />
        <meta name="twitter:creator" content="@standardthought" />
        <meta name="twitter:site" content="@standardthought" />
        
        {/* Additional Meta Tags for AEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Standard Thought" />
        <meta name="publisher" content="Standard Thought" />
        <meta name="language" content="en-US" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(collectionSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(speakableSchema)}
        </script>
        
        {/* Preload critical resources */}
        <link rel="preload" as="image" href={textureImageUrl} />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

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

      {/* SEO Component for additional metadata */}
      <SEO
        title="The Code They Never Gave Us | Builder Knowledge, Unfiltered"
        description="Not founder stories. These are lived lessons from people who had to build with no map. Find blog posts on strategy, healing, hustle pivots, and wealth—written by and for cycle-breakers."
        keywords="builder stories, self-taught entrepreneur, first-gen wealth, urban finance, cycle breaker, financial independence, street-smart money, hood to wealth"
        url="/blog"
        type="website"
        breadcrumbs={breadcrumbs}
        pageType="blog"
      />

      {/* Performance Optimizer */}
      <BlogPerformanceOptimizer />

      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pb-16" style={{ marginTop: `${headerHeight}px`, paddingTop: '3rem' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Hero Section */}
          <div className="hero">
            <BlogHero isVisible={isVisible} />
          </div>

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