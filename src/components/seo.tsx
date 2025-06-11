
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
  description = "Join the movement of entrepreneurs building legacy from nothing. Get frameworks, strategies, and community support to turn your dreams into reality.",
  keywords = "entrepreneurship, business strategy, legacy building, startup advice, business growth, entrepreneur community, self-made success",
  image = "/lovable-uploads/a8faab87-8319-4fa0-ae53-35597c6f8fc5.png",
  url = "https://standardthought.com",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Standardthought",
  category,
  tags = [],
  twitterHandle = "@standardthought",
  noIndex = false
}: SEOProps) => {
  const fullTitle = title.includes("Standardthought") ? title : `${title} | Standardthought`;
  const fullUrl = url.startsWith('http') ? url : `https://standardthought.com${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://standardthought.com${image}`;

  // Generate robots directive based on noIndex prop
  const robotsContent = noIndex 
    ? "noindex, nofollow" 
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "Organization",
    ...(type === "website" ? {
      "name": "Standardthought",
      "description": description,
      "url": "https://standardthought.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://standardthought.com/favicon.ico"
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
      "description": description,
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
          "url": "https://standardthought.com/favicon.ico"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": fullUrl
      },
      ...(category && { "articleSection": category }),
      ...(tags.length > 0 && { "keywords": tags.join(", ") })
    })
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Robots directive - critical for indexing */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Standardthought" />
      <meta property="og:locale" content="en_US" />

      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@standardthought" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:domain" content="standardthought.com" />

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

      {/* Prevent soft 404s by ensuring content is present */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default SEO;
