/**
 * Enhanced JSON-LD Schema generators with Rich Results optimization
 */

interface ProductSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  price?: number;
  currency?: string;
  brand: string;
  category: string;
  availability?: string;
  reviews?: Array<{
    rating: number;
    reviewBody: string;
    author: string;
    datePublished: string;
  }>;
}

interface PersonSchemaProps {
  name: string;
  url: string;
  image?: string;
  jobTitle?: string;
  worksFor?: string;
  sameAs?: string[];
  knowsAbout?: string[];
}

interface HowToSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  steps: Array<{
    name: string;
    text: string;
    url?: string;
    image?: string;
  }>;
  totalTime?: string;
  estimatedCost?: string;
  supply?: string[];
  tool?: string[];
}

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  telephone?: string;
  email?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  openingHours?: string[];
  priceRange?: string;
  serviceArea?: string;
}

interface VideoSchemaProps {
  name: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
  transcript?: string;
}

interface BlogPostingSchemaProps {
  headline: string;
  description: string;
  url: string;
  image?: string;
  author: string;
  publishedTime: string;
  modifiedTime?: string;
  category: string;
  tags?: string[];
  wordCount?: number;
  readingTime?: string;
  commentCount?: number;
}

export const generateBlogPostingSchema = ({
  headline,
  description,
  url,
  image,
  author,
  publishedTime,
  modifiedTime,
  category,
  tags = [],
  wordCount,
  readingTime,
  commentCount
}: BlogPostingSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline,
  description,
  url,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url
  },
  image: image ? {
    "@type": "ImageObject",
    url: image,
    width: "1200",
    height: "630"
  } : undefined,
  datePublished: publishedTime,
  dateModified: modifiedTime || publishedTime,
  author: {
    "@type": "Organization",
    name: author,
    url: "https://www.standardthought.com"
  },
  publisher: {
    "@type": "Organization",
    name: "Standardthought",
    logo: {
      "@type": "ImageObject",
      url: "https://www.standardthought.com/lovable-uploads/a8faab87-8319-4fa0-ae53-35597c6f8fc5.png",
      width: "400",
      height: "400"
    }
  },
  articleSection: category,
  ...(tags.length > 0 && { keywords: tags.join(", ") }),
  ...(wordCount && { wordCount }),
  ...(readingTime && { timeRequired: readingTime }),
  ...(commentCount !== undefined && { commentCount }),
  inLanguage: "en-US",
  genre: ["Business", "Entrepreneurship", "Finance", "Personal Development"],
  audience: {
    "@type": "Audience",
    audienceType: "Entrepreneurs, Business Owners, First-Generation Wealth Builders"
  },
  about: [
    {
      "@type": "Thing",
      name: "Entrepreneurship"
    },
    {
      "@type": "Thing", 
      name: "Wealth Building"
    },
    {
      "@type": "Thing",
      name: "Business Strategy"
    }
  ],
  mentions: tags.map(tag => ({
    "@type": "Thing",
    name: tag.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  }))
});

export const generateProductSchema = ({
  name,
  description,
  url,
  image,
  price,
  currency = "USD",
  brand,
  category,
  availability = "InStock",
  reviews = []
}: ProductSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name,
  description,
  url,
  ...(image && {
    image: {
      "@type": "ImageObject",
      url: image
    }
  }),
  brand: {
    "@type": "Brand",
    name: brand
  },
  category,
  ...(price && {
    offers: {
      "@type": "Offer",
      price: price.toString(),
      priceCurrency: currency,
      availability: `https://schema.org/${availability}`,
      url,
      seller: {
        "@type": "Organization",
        name: "Standardthought"
      }
    }
  }),
  ...(reviews.length > 0 && {
    review: reviews.map(review => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: "5"
      },
      reviewBody: review.reviewBody,
      author: {
        "@type": "Person",
        name: review.author
      },
      datePublished: review.datePublished
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
      reviewCount: reviews.length,
      bestRating: "5",
      worstRating: "1"
    }
  })
});

export const generatePersonSchema = ({
  name,
  url,
  image,
  jobTitle,
  worksFor,
  sameAs = [],
  knowsAbout = []
}: PersonSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  url,
  ...(image && {
    image: {
      "@type": "ImageObject",
      url: image
    }
  }),
  ...(jobTitle && { jobTitle }),
  ...(worksFor && {
    worksFor: {
      "@type": "Organization",
      name: worksFor
    }
  }),
  ...(sameAs.length > 0 && { sameAs }),
  ...(knowsAbout.length > 0 && { knowsAbout })
});

export const generateHowToSchema = ({
  name,
  description,
  url,
  image,
  steps,
  totalTime,
  estimatedCost,
  supply = [],
  tool = []
}: HowToSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name,
  description,
  url,
  ...(image && {
    image: {
      "@type": "ImageObject",
      url: image
    }
  }),
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
    ...(step.url && { url: step.url }),
    ...(step.image && {
      image: {
        "@type": "ImageObject",
        url: step.image
      }
    })
  })),
  ...(totalTime && { totalTime }),
  ...(estimatedCost && { estimatedCost }),
  ...(supply.length > 0 && {
    supply: supply.map(item => ({
      "@type": "HowToSupply",
      name: item
    }))
  }),
  ...(tool.length > 0 && {
    tool: tool.map(item => ({
      "@type": "HowToTool",
      name: item
    }))
  })
});

export const generateVideoSchema = ({
  name,
  description,
  url,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl,
  transcript
}: VideoSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name,
  description,
  url,
  thumbnailUrl,
  uploadDate,
  ...(duration && { duration }),
  ...(contentUrl && { contentUrl }),
  ...(embedUrl && { embedUrl }),
  ...(transcript && { transcript }),
  publisher: {
    "@type": "Organization",
    name: "Standardthought",
    logo: {
      "@type": "ImageObject",
      url: "https://www.standardthought.com/lovable-uploads/a8faab87-8319-4fa0-ae53-35597c6f8fc5.png"
    }
  }
});

export const generateLocalBusinessSchema = ({
  name,
  description,
  url,
  image,
  telephone,
  email,
  address,
  openingHours = [],
  priceRange,
  serviceArea
}: LocalBusinessSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name,
  description,
  url,
  ...(image && {
    image: {
      "@type": "ImageObject",
      url: image
    }
  }),
  ...(telephone && { telephone }),
  ...(email && { email }),
  ...(address && {
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.country
    }
  }),
  ...(openingHours.length > 0 && { openingHours }),
  ...(priceRange && { priceRange }),
  ...(serviceArea && { areaServed: serviceArea })
});

// Enhanced WebPage schema for specific page types
export const generateWebPageSchema = (url: string, pageType: 'AboutPage' | 'ContactPage' | 'WebPage' = 'WebPage') => ({
  "@context": "https://schema.org",
  "@type": pageType,
  url,
  isPartOf: {
    "@type": "WebSite",
    name: "Standardthought",
    url: "https://www.standardthought.com"
  },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "ReadAction",
    target: url
  }
});