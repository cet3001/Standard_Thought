
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
      <meta property="og:title" content="Standard Thought | Flip the Script" />
      <meta property="og:description" content="Build legacy from nothing. Soul-rooted content for people who weren't handed blueprints." />
      <meta property="og:image" content="https://standardthought.com/social-preview.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`Standard Thought - ${title} - Urban wealth building and financial education platform`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:secure_url" content="https://standardthought.com/social-preview.jpg" />
      <meta property="og:url" content="https://standardthought.com" />
      <meta property="og:site_name" content="Standard Thought - Urban Wealth Building Hub" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:determiner" content="the" />
      <meta property="fb:app_id" content="" />
      <meta property="og:rich_attachment" content="true" />
      
      {/* Enhanced Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@standardthought" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={`StandardThought - ${title} - Urban financial education and wealth building strategies`} />
      <meta name="twitter:domain" content="www.standardthought.com" />
      <meta name="twitter:label1" content="Reading time" />
      <meta name="twitter:data1" content={wordCount ? `${Math.ceil(wordCount / 200)} min read` : "Quick read"} />
      <meta name="twitter:label2" content="Category" />
      <meta name="twitter:data2" content="Financial Education" />
      
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
