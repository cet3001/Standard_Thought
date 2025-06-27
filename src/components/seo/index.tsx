import { Helmet } from "react-helmet";
import { DEFAULTS } from "./defaults";
import { normalizeUrl, getFullImageUrl, optimizeDescription } from "./helpers";
import { 
  generateOrganizationSchema, 
  generateArticleSchema, 
  generateWebSiteSchema,
  generateBreadcrumbSchema 
} from "./schemas";
import { MetaTags } from "./meta-tags";
import { RobotsDirectives } from "./robots-directives";
import { EnhancedMeta } from "./enhanced-meta";

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
  noIndex = false, // Explicitly default to false to ensure indexing
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
      <MetaTags
        title={fullTitle}
        description={optimizedDescription}
        keywords={keywords}
        author={author}
        canonicalUrl={canonicalUrl}
        fullImageUrl={fullImageUrl}
        twitterHandle={twitterHandle}
        type={type}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
        category={category}
        tags={tags}
        wordCount={wordCount}
      />
      
      <RobotsDirectives noIndex={noIndex} />
      
      <EnhancedMeta fullImageUrl={fullImageUrl} />
      
      {/* Enhanced Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
