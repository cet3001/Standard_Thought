
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  category?: string;
  tags?: string[];
  twitterHandle?: string;
  noIndex?: boolean;
}

const SEO = ({ 
  title = "Standardthought - Build Your Legacy From Nothing",
  description = "Join 1000+ urban entrepreneurs building generational wealth from scratch. Get proven frameworks, actionable strategies, and community support to turn your hustle into a legacy business. No safety net required.",
  keywords = "urban entrepreneurship, build from nothing, legacy building, startup frameworks, hustle mentality, first generation wealth, entrepreneur community, business growth strategies, mindset shift, self-made success, urban personal development, generational wealth building",
  image = "/lovable-uploads/a8faab87-8319-4fa0-ae53-35597c6f8fc5.png",
  url = "https://www.standardthought.com",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Standardthought",
  category,
  tags = [],
  twitterHandle = "@standardthought",
  noIndex = false
}: SEOProps) => {
  // Ensure unique titles - don't duplicate "Standardthought" if already present
  const fullTitle = title.includes("Standardthought") ? title : `${title} | Standardthought`;
  
  // CRITICAL: Always ensure canonical URLs point to www version for domain consistency
  const normalizeUrl = (inputUrl: string) => {
    // If it's a relative URL, make it absolute with preferred domain
    if (inputUrl.startsWith('/')) {
      return `https://www.standardthought.com${inputUrl}`;
    }
    
    // If it already has a domain, ensure it's the preferred www version
    return inputUrl
      .replace('://standardthought.com', '://www.standardthought.com')
      .replace('://http://standardthought.com', '://www.standardthought.com')
      .replace('://http://www.standardthought.com', '://www.standardthought.com');
  };

  const canonicalUrl = normalizeUrl(url);
  const fullImageUrl = image.startsWith('http') ? image : `https://www.standardthought.com${image}`;

  // Ensure description is optimal length (150-160 characters) and unique
  const optimizedDescription = description.length > 160 
    ? `${description.slice(0, 157)}...` 
    : description;

  // Generate robots directive based on noIndex prop
  const robotsContent = noIndex 
    ? "noindex, nofollow" 
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "Organization",
    ...(type === "website" ? {
      "name": "Standardthought",
      "description": optimizedDescription,
      "url": "https://www.standardthought.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.standardthought.com/favicon.ico"
      },
      "sameAs": [
        "https://twitter.com/standardthought"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "hello@standardthought.com"
      }
    } : {
      "headline": title,
      "description": optimizedDescription,
      "image": fullImageUrl,
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "author": {
        "@type": "Organization",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Standardthought",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.standardthought.com/favicon.ico"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      ...(category && { "articleSection": category }),
      ...(tags.length > 0 && { "keywords": tags.join(", ") })
    })
  };

  return (
    <Helmet>
      {/* Basic Meta Tags - Ensure unique titles and descriptions */}
      <title>{fullTitle}</title>
      <meta name="description" content={optimizedDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* CRITICAL: Canonical Tag - Always point to preferred www version */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots directive - critical for indexing */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Standardthought" />
      <meta property="og:locale" content="en_US" />

      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@standardthought" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:domain" content="www.standardthought.com" />

      {/* Mobile App Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Standardthought" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Apple Touch Icons for Mobile Link Previews */}
      <meta name="apple-touch-icon" content={fullImageUrl} />
      <link rel="apple-touch-icon" href={fullImageUrl} />
      <link rel="apple-touch-icon-precomposed" href={fullImageUrl} />

      {/* Article specific meta tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}
      {type === "article" && category && (
        <meta property="article:section" content={category} />
      )}
      {type === "article" && tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="theme-color" content="#247EFF" />
      
      {/* Additional Performance and Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Social Media Verification */}
      <meta name="twitter:dnt" content="on" />

      {/* Enhanced SEO Meta Tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 days" />

      {/* Prevent soft 404s by ensuring content is present */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default SEO;
