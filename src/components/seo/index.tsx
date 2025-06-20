import { Helmet } from "react-helmet";
import { DEFAULTS } from "./defaults";
import { normalizeUrl, getFullImageUrl, optimizeDescription } from "./helpers";
import { 
  generateOrganizationSchema, 
  generateArticleSchema, 
  generateWebSiteSchema,
  generateBreadcrumbSchema 
} from "./schemas";

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
  wordCount?: number;
  breadcrumbs?: Array<{
    name: string;
    url: string;
    position: number;
  }>;
}

const SEO = ({
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  keywords = DEFAULTS.keywords,
  image = DEFAULTS.image,
  url = DEFAULTS.url,
  type = "website",
  publishedTime,
  modifiedTime,
  author = DEFAULTS.author,
  category,
  tags = [],
  twitterHandle = DEFAULTS.twitterHandle,
  noIndex = false,
  wordCount,
  breadcrumbs
}: SEOProps) => {
  // Enhanced title optimization - keep under 60 characters but make it compelling
  const optimizedTitle = title.length > 60 
    ? title.substring(0, 57) + "..." 
    : title;
  
  const fullTitle = optimizedTitle.includes("Standardthought") 
    ? optimizedTitle 
    : `${optimizedTitle} | Standardthought`;

  const canonicalUrl = normalizeUrl(url);
  const fullImageUrl = getFullImageUrl(image);
  const optimizedDescription = optimizeDescription(description);

  // Enhanced robots content with additional directives
  const robotsContent = noIndex
    ? "noindex, nofollow"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  // Generate appropriate schema based on type
  let structuredData = [];
  
  if (type === 'website') {
    // For homepage and main pages, use Organization + WebSite schema
    const organizationSchema = generateOrganizationSchema({
      name: "Standardthought",
      url: canonicalUrl,
      title: fullTitle,
      description: optimizedDescription,
      logo: fullImageUrl,
      contactEmail: "hello@standardthought.com",
      socialMedia: [
        "https://twitter.com/standardthought",
        "https://www.linkedin.com/company/standardthought"
      ]
    });

    const webSiteSchema = generateWebSiteSchema(canonicalUrl);
    
    structuredData = [organizationSchema, webSiteSchema];
  } else {
    // For articles, use Article schema
    const articleSchema = generateArticleSchema({
      title: fullTitle,
      description: optimizedDescription,
      url: canonicalUrl,
      image: fullImageUrl,
      author: author || "Standardthought",
      publishedTime: publishedTime || new Date().toISOString(),
      modifiedTime,
      category: category || "Business",
      tags,
      wordCount
    });
    
    structuredData = [articleSchema];
  }

  // Add breadcrumb schema if provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = generateBreadcrumbSchema({ items: breadcrumbs });
    structuredData.push(breadcrumbSchema);
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={optimizedDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />
      
      {/* Enhanced Open Graph Tags */}
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
      
      {/* Enhanced Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@standardthought" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:domain" content="www.standardthought.com" />
      <meta name="twitter:label1" content="Reading time" />
      <meta name="twitter:data1" content={wordCount ? `${Math.ceil(wordCount / 200)} min read` : "Quick read"} />
      
      {/* Enhanced Mobile & App Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Standardthought" />
      <meta name="mobile-web-app-capable" content="yes" />
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
      {type === "article" &&
        tags &&
        tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      
      {/* Enhanced Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="theme-color" content="#247EFF" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="twitter:dnt" content="on" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Enhanced SEO Tags */}
      <meta name="language" content="en-US" />
      <meta name="copyright" content="Standardthought" />
      <meta name="category" content="Business, Finance, Education" />
      <meta name="coverage" content="Worldwide" />
      <meta name="reply-to" content="hello@standardthought.com" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
    </Helmet>
  );
};

export default SEO;
