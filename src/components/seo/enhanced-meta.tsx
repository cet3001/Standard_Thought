
interface EnhancedMetaProps {
  fullImageUrl: string;
}

export const EnhancedMeta = ({ fullImageUrl }: EnhancedMetaProps) => {
  return (
    <>
      {/* Enhanced Mobile & App Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="StandardThought" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-icon" content="/lovable-uploads/ab84a6d6-c2ac-4910-be5f-7bb666463fb8.png" />
      <link rel="apple-touch-icon" href="/lovable-uploads/ab84a6d6-c2ac-4910-be5f-7bb666463fb8.png" />
      <link rel="apple-touch-icon-precomposed" href="/lovable-uploads/ab84a6d6-c2ac-4910-be5f-7bb666463fb8.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/lovable-uploads/ab84a6d6-c2ac-4910-be5f-7bb666463fb8.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/lovable-uploads/ab84a6d6-c2ac-4910-be5f-7bb666463fb8.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/lovable-uploads/ab84a6d6-c2ac-4910-be5f-7bb666463fb8.png" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#FFD700" />
      <meta name="msapplication-TileColor" content="#FFD700" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="twitter:dnt" content="on" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Enhanced SEO Tags */}
      <meta name="language" content="en-US" />
      <meta name="copyright" content="Standardthought" />
      <meta name="category" content="Business, Finance, Education" />
      <meta name="coverage" content="Worldwide" />
      <meta name="reply-to" content="movement@standardthought.com" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
    </>
  );
};
