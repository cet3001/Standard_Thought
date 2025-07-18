import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

interface DynamicSEOMetaProps {
  pageType: 'homepage' | 'blog' | 'blog-post' | 'credit' | 'cash-management' | 'investing' | 'ai-side-hustles';
  customData?: SEOData;
  blogPost?: {
    title: string;
    content: string;
    excerpt: string;
    image_url?: string;
    slug?: string;
  };
}

const defaultSEOData: Record<string, SEOData> = {
  homepage: {
    title: 'Build generational wealth from grit and instinct—no inheritance needed',
    description: 'Urban wealth-building blueprints for the grind generation. Real strategies, no trust fund required. Transform your mindset, build your empire.',
    keywords: 'urban wealth, generational wealth, wealth building, financial independence, entrepreneurship, mindset, grit',
    ogTitle: 'Build generational wealth from grit and instinct—no inheritance needed',
    ogDescription: 'Urban wealth-building blueprints for the grind generation. Real strategies, no trust fund required.',
    twitterTitle: 'Build generational wealth from grit and instinct—no inheritance needed',
    twitterDescription: 'Urban wealth-building blueprints for the grind generation. Real strategies, no trust fund required.',
  },
  blog: {
    title: 'Urban Wealth Blueprints - Financial Wisdom for the Grind Generation',
    description: 'Street-smart financial strategies and wealth-building insights. Real talk on money, entrepreneurship, and building generational wealth without a trust fund.',
    keywords: 'financial education, wealth building, urban entrepreneurship, money mindset, financial literacy',
    ogTitle: 'Urban Wealth Blueprints - Financial Wisdom',
    ogDescription: 'Street-smart financial strategies and wealth-building insights for the grind generation.',
    twitterTitle: 'Urban Wealth Blueprints - Financial Wisdom',
    twitterDescription: 'Street-smart financial strategies and wealth-building insights for the grind generation.',
  },
  credit: {
    title: 'Master Your Credit Game - Urban Wealth Blueprints',
    description: 'Transform your credit from liability to wealth-building tool. Street-smart strategies for credit optimization and financial leverage.',
    keywords: 'credit building, credit repair, credit optimization, financial leverage, wealth building',
    ogTitle: 'Master Your Credit Game - Urban Wealth Blueprints',
    ogDescription: 'Transform your credit from liability to wealth-building tool with proven strategies.',
    twitterTitle: 'Master Your Credit Game - Urban Wealth Blueprints',
    twitterDescription: 'Transform your credit from liability to wealth-building tool with proven strategies.',
  },
  'cash-management': {
    title: 'Cash Flow Mastery - Urban Wealth Blueprints',
    description: 'Master the art of cash management and build sustainable wealth. Real strategies for cash flow optimization and financial freedom.',
    keywords: 'cash management, cash flow, financial planning, wealth building, money management',
    ogTitle: 'Cash Flow Mastery - Urban Wealth Blueprints',
    ogDescription: 'Master the art of cash management and build sustainable wealth with proven strategies.',
    twitterTitle: 'Cash Flow Mastery - Urban Wealth Blueprints',
    twitterDescription: 'Master the art of cash management and build sustainable wealth with proven strategies.',
  },
  investing: {
    title: 'Investment Strategies for the Grind Generation',
    description: 'Build wealth through strategic investing. No-nonsense investment education for those starting from the bottom.',
    keywords: 'investing, investment strategies, wealth building, financial freedom, portfolio building',
    ogTitle: 'Investment Strategies for the Grind Generation',
    ogDescription: 'Build wealth through strategic investing with education for those starting from the bottom.',
    twitterTitle: 'Investment Strategies for the Grind Generation',
    twitterDescription: 'Build wealth through strategic investing with education for those starting from the bottom.',
  },
  'ai-side-hustles': {
    title: 'AI Side Hustles - Future-Proof Income Streams',
    description: 'Leverage AI to build multiple income streams. Modern side hustles for the digital economy and financial independence.',
    keywords: 'AI side hustles, passive income, digital entrepreneurship, online business, financial freedom',
    ogTitle: 'AI Side Hustles - Future-Proof Income Streams',
    ogDescription: 'Leverage AI to build multiple income streams in the digital economy.',
    twitterTitle: 'AI Side Hustles - Future-Proof Income Streams',
    twitterDescription: 'Leverage AI to build multiple income streams in the digital economy.',
  },
};

// Generate blog post SEO from content
const generateBlogPostSEO = (blogPost: NonNullable<DynamicSEOMetaProps['blogPost']>): SEOData => {
  const baseTitle = blogPost.title + ' - Urban Wealth Blueprints';
  const description = blogPost.excerpt || blogPost.content.substring(0, 155) + '...';
  
  // Simple keyword extraction for SEO
  const keywords = 'urban wealth, financial education, wealth building, ' + blogPost.title.toLowerCase().split(' ').slice(0, 3).join(', ');
  
  return {
    title: baseTitle,
    description,
    keywords,
    ogTitle: blogPost.title,
    ogDescription: description,
    ogImage: blogPost.image_url,
    twitterTitle: blogPost.title,
    twitterDescription: description,
    twitterImage: blogPost.image_url,
    canonicalUrl: blogPost.slug ? `/blog/${blogPost.slug}` : undefined,
  };
};

export const DynamicSEOMeta: React.FC<DynamicSEOMetaProps> = ({
  pageType,
  customData,
  blogPost,
}) => {
  // Determine SEO data based on page type and available data
  let seoData: SEOData;
  
  if (pageType === 'blog-post' && blogPost) {
    seoData = generateBlogPostSEO(blogPost);
  } else {
    seoData = defaultSEOData[pageType] || defaultSEOData.homepage;
  }
  
  // Override with custom data if provided
  if (customData) {
    seoData = { ...seoData, ...customData };
  }
  
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const siteUrl = 'https://urbanwealthblueprints.com'; // Update with actual domain
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      {seoData.keywords && <meta name="keywords" content={seoData.keywords} />}
      
      {/* Canonical URL */}
      {seoData.canonicalUrl && <link rel="canonical" href={`${siteUrl}${seoData.canonicalUrl}`} />}
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={pageType === 'blog-post' ? 'article' : 'website'} />
      <meta property="og:title" content={seoData.ogTitle || seoData.title} />
      <meta property="og:description" content={seoData.ogDescription || seoData.description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Urban Wealth Blueprints" />
      {seoData.ogImage && <meta property="og:image" content={seoData.ogImage} />}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoData.twitterTitle || seoData.title} />
      <meta name="twitter:description" content={seoData.twitterDescription || seoData.description} />
      {seoData.twitterImage && <meta name="twitter:image" content={seoData.twitterImage} />}
      
      {/* Additional meta tags for AEO optimization */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Urban Wealth Blueprints" />
      
      {/* Answer Engine Optimization */}
      {pageType === 'blog-post' && (
        <>
          <meta property="article:author" content="Urban Wealth Blueprints" />
          <meta property="article:section" content="Finance" />
          <meta property="article:tag" content={seoData.keywords} />
        </>
      )}
      
      {/* Schema.org JSON-LD for better AEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": pageType === 'blog-post' ? "Article" : "WebSite",
          "name": seoData.title,
          "description": seoData.description,
          "url": currentUrl,
          ...(pageType === 'blog-post' && blogPost ? {
            "headline": blogPost.title,
            "articleBody": blogPost.content,
            "author": {
              "@type": "Organization",
              "name": "Urban Wealth Blueprints"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Urban Wealth Blueprints"
            }
          } : {
            "publisher": {
              "@type": "Organization",
              "name": "Urban Wealth Blueprints"
            }
          })
        })}
      </script>
    </Helmet>
  );
};

export default DynamicSEOMeta;