import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { DEFAULTS } from "./defaults";
import { normalizeUrl, getFullImageUrl, optimizeDescription } from "./helpers";
import { 
  generateOrganizationSchema, 
  generateArticleSchema, 
  generateWebSiteSchema,
  generateBreadcrumbSchema 
} from "./schemas";
import { generateBlogPostingSchema } from "./enhanced-schemas";
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
  pageType?: string; // For database lookup
  autoGenerate?: boolean; // Auto-generate from blog content
  content?: string; // Blog content for auto-generation
  breadcrumbs?: Array<{
    name: string;
    url: string;
    position: number;
  }>;
}

interface SEOSettings {
  title: string;
  description: string;
  keywords: string;
  meta_image?: string;
  og_title?: string;
  og_description?: string;
  twitter_title?: string;
  twitter_description?: string;
}

// Auto-generate content from blog post
const autoGenerateFromContent = (content: string, title: string): SEOSettings => {
  const textContent = content.replace(/<[^>]*>/g, '').substring(0, 500);
  const words = textContent.split(' ').slice(0, 50);
  
  return {
    title: `${title} | Urban Wealth Building Guide`,
    description: `${textContent.substring(0, 155)}... Learn proven urban wealth building strategies.`,
    keywords: `${title.toLowerCase()}, urban wealth building, generational wealth, first-gen entrepreneurs, ${words.filter(w => w.length > 4).slice(0, 8).join(', ')}`
  };
};

const SEO = ({
  title,
  description,
  keywords,
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
  pageType,
  autoGenerate = false,
  content,
  breadcrumbs
}: SEOProps) => {
  const [dynamicSEO, setDynamicSEO] = useState<SEOSettings | null>(null);
  const [loading, setLoading] = useState(false);

  // Load SEO settings from database
  useEffect(() => {
    const loadSEOSettings = async () => {
      if (!pageType) return;
      
      setLoading(true);
      try {
        const { data } = await supabase
          .from('seo_settings')
          .select('*')
          .eq('page_type', pageType)
          .eq('is_active', true)
          .single();
        
        if (data) {
          setDynamicSEO(data);
        }
      } catch (error) {
        console.log('No custom SEO settings found for:', pageType);
      } finally {
        setLoading(false);
      }
    };

    loadSEOSettings();
  }, [pageType]);

  // Auto-generate SEO for blog posts
  const generatedSEO = autoGenerate && content && title ? 
    autoGenerateFromContent(content, title) : null;

  // Determine final SEO values with priority: props > database > auto-generated > defaults
  const finalTitle = title || dynamicSEO?.title || generatedSEO?.title || DEFAULTS.title;
  const finalDescription = description || dynamicSEO?.description || generatedSEO?.description || DEFAULTS.description;
  const finalKeywords = keywords || dynamicSEO?.keywords || generatedSEO?.keywords || DEFAULTS.keywords;

  // Enhanced title optimization with AEO focus
  const optimizedTitle = finalTitle.length > 60 
    ? finalTitle.substring(0, 57) + "..." 
    : finalTitle;
  
  const fullTitle = optimizedTitle.includes("Standardthought") 
    ? optimizedTitle 
    : `${optimizedTitle} | Standardthought`;

  const canonicalUrl = normalizeUrl(url);
  
  // Generate dynamic OG image for blog posts
  const shouldGenerateDynamicOG = type === 'article' && title;
  const dynamicOGImageUrl = shouldGenerateDynamicOG 
    ? `https://zedewynjmeyhbjysnxld.supabase.co/functions/v1/generate-og-image?title=${encodeURIComponent(title)}&category=${encodeURIComponent(category || '')}`
    : null;
  
  const fullImageUrl = getFullImageUrl(dynamicSEO?.meta_image || dynamicOGImageUrl || image);
  const optimizedDescription = optimizeDescription(finalDescription);

  // Add AEO-optimized keywords for better answer engine visibility
  const aeoEnhancedKeywords = `${finalKeywords}, ${DEFAULTS.aeoKeywords}`;

  if (loading) return null;

  // Generate appropriate schema based on type
  let structuredData = [];
  
  if (type === 'website') {
    // For homepage and main pages, use Organization + WebSite schema
    const organizationSchema = generateOrganizationSchema({
      name: "Standard Thought",
      url: "https://standardthought.com",
      title: fullTitle,
      description: optimizedDescription,
      logo: "https://standardthought.com/logo.svg",
      contactEmail: "movement@standardthought.com",
      socialMedia: [
        "https://instagram.com/standardthought",
        "https://tiktok.com/@standardthought"
      ]
    });

    const webSiteSchema = generateWebSiteSchema("https://standardthought.com");
    
    structuredData = [organizationSchema, webSiteSchema];
  } else {
    // For articles, use enhanced BlogPosting schema
    const blogPostingSchema = generateBlogPostingSchema({
      headline: fullTitle,
      description: optimizedDescription,
      url: canonicalUrl,
      image: fullImageUrl,
      author: author || "Standardthought",
      publishedTime: publishedTime || new Date().toISOString(),
      modifiedTime,
      category: category || "Business",
      tags,
      wordCount,
      readingTime: wordCount ? `PT${Math.ceil(wordCount / 200)}M` : undefined
    });
    
    structuredData = [blogPostingSchema];
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
        keywords={aeoEnhancedKeywords}
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
      
      {/* AEO Intent-Based Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:160, max-image-preview:large" />
      <meta name="answer-engine-intent" content="urban wealth building strategies" />
      <meta name="answer-engine-context" content="first-generation entrepreneurs, generational wealth building, mindset shifts" />
      
      {/* Enhanced Open Graph for Social Sharing */}
      <meta property="og:title" content={dynamicSEO?.og_title || fullTitle} />
      <meta property="og:description" content={dynamicSEO?.og_description || optimizedDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${fullTitle} - Standard Thought`} />
      <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
      <meta property="og:site_name" content="Standardthought" />
      
      {/* Enhanced Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={dynamicSEO?.twitter_title || fullTitle} />
      <meta name="twitter:description" content={dynamicSEO?.twitter_description || optimizedDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={`${fullTitle} - Standard Thought`} />
      
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
