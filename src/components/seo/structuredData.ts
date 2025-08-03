
/**
 * Generate structured data based on props.
 */

interface StructuredDataProps {
  type: 'website' | 'article';
  title: string;
  description: string;
  image: string;
  url: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  category?: string;
  tags?: string[];
}

export function generateStructuredData({
  type,
  title,
  description,
  image,
  url,
  publishedTime,
  modifiedTime,
  author,
  category,
  tags
}: StructuredDataProps) {
  if (type === 'website') {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Standardthought",
      description,
      url,
      logo: {
        "@type": "ImageObject",
        url: "https://www.standardthought.com/favicon.ico"
      },
      sameAs: ["https://twitter.com/standardthought"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "movement@standardthought.com"
      }
    };
  }
  // Article
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      "@type": "Organization",
      name: author
    },
    publisher: {
      "@type": "Organization",
      name: "Standardthought",
      logo: {
        "@type": "ImageObject",
        url: "https://www.standardthought.com/favicon.ico"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    ...(category && { articleSection: category }),
    ...(tags && tags.length > 0 && { keywords: tags.join(", ") })
  };
}
