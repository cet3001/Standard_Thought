
import { Helmet } from "react-helmet";

interface MetaTagsProps {
  title: string;
  description: string;
  keywords: string;
  author: string;
  canonicalUrl: string;
  fullImageUrl: string;
  twitterHandle: string;
  type: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  category?: string;
  tags?: string[];
  wordCount?: number;
}

export const MetaTags = ({
  title,
  description,
  keywords,
  author,
  canonicalUrl,
  fullImageUrl,
  twitterHandle,
  type,
  publishedTime,
  modifiedTime,
  category,
  tags = [],
  wordCount
}: MetaTagsProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Enhanced Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Standardthought" />
      <meta property="og:locale" content="en_US" />
      
      {/* Enhanced Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@standardthought" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:domain" content="www.standardthought.com" />
      <meta name="twitter:label1" content="Reading time" />
      <meta name="twitter:data1" content={wordCount ? `${Math.ceil(wordCount / 200)} min read` : "Quick read"} />
      
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
    </>
  );
};
