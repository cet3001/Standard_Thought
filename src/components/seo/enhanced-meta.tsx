
interface EnhancedMetaProps {
  fullImageUrl: string;
}

export const EnhancedMeta = ({ fullImageUrl }: EnhancedMetaProps) => {
  return (
    <>
      {/* Enhanced Mobile & App Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Standardthought" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-icon" content={fullImageUrl} />
      <link rel="apple-touch-icon" href={fullImageUrl} />
      <link rel="apple-touch-icon-precomposed" href={fullImageUrl} />
      
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
    </>
  );
};
