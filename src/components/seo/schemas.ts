
/**
 * JSON-LD Schema generators for different content types
 */

interface BaseSchemaProps {
  url: string;
  title: string;
  description: string;
  image?: string;
}

interface OrganizationSchemaProps extends BaseSchemaProps {
  name: string;
  logo: string;
  contactEmail?: string;
  socialMedia?: string[];
  address?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}

interface ArticleSchemaProps extends BaseSchemaProps {
  author: string;
  publishedTime: string;
  modifiedTime?: string;
  category: string;
  tags?: string[];
  wordCount?: number;
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
    position: number;
  }>;
}

interface CourseSchemaProps extends BaseSchemaProps {
  provider: string;
  courseMode?: string;
  educationalLevel?: string;
  timeRequired?: string;
  skillLevel?: string;
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const generateOrganizationSchema = ({
  name,
  url,
  title,
  description,
  logo,
  contactEmail,
  socialMedia = [],
  address
}: OrganizationSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name,
  alternateName: "Standard Thought",
  description,
  url,
  logo: {
    "@type": "ImageObject",
    url: logo,
    width: "400",
    height: "400"
  },
  image: logo,
  ...(contactEmail && {
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: contactEmail,
      availableLanguage: "English"
    }
  }),
  ...(socialMedia.length > 0 && { sameAs: socialMedia }),
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
  founder: {
    "@type": "Person",
    name: "Standardthought Team"
  },
  foundingDate: "2024",
  knowsAbout: [
    "Urban Entrepreneurship",
    "Wealth Building",
    "Business Development",
    "Startup Strategies",
    "Personal Development",
    "Financial Education"
  ],
  areaServed: "Worldwide",
  serviceType: "Educational Content & Business Consulting"
});

export const generateArticleSchema = ({
  title,
  description,
  url,
  image,
  author,
  publishedTime,
  modifiedTime,
  category,
  tags = [],
  wordCount
}: ArticleSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
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
      url: "https://www.standardthought.com/lovable-uploads/a8faab87-8319-4fa0-ae53-35597c6f8fc5.png"
    }
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url
  },
  articleSection: category,
  ...(tags.length > 0 && { keywords: tags.join(", ") }),
  ...(wordCount && { wordCount }),
  inLanguage: "en-US",
  copyrightYear: new Date().getFullYear(),
  copyrightHolder: {
    "@type": "Organization",
    name: "Standardthought"
  }
});

export const generateBreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(item => ({
    "@type": "ListItem",
    position: item.position,
    name: item.name,
    item: item.url
  }))
});

export const generateCourseSchema = ({
  title,
  description,
  url,
  image,
  provider,
  courseMode = "online",
  educationalLevel = "beginner",
  timeRequired,
  skillLevel = "Beginner"
}: CourseSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: title,
  description,
  url,
  ...(image && {
    image: {
      "@type": "ImageObject",
      url: image
    }
  }),
  provider: {
    "@type": "Organization",
    name: provider,
    url: "https://www.standardthought.com"
  },
  courseMode,
  educationalLevel,
  ...(timeRequired && { timeRequired }),
  coursePrerequisites: "Basic understanding of business concepts",
  teaches: [
    "Entrepreneurship Skills",
    "Business Strategy",
    "Wealth Building",
    "Personal Development"
  ],
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "Entrepreneur"
  },
  skillLevel,
  inLanguage: "en-US"
});

export const generateFAQSchema = ({ faqs }: FAQSchemaProps) => {
  if (!faqs || faqs.length === 0) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
};

export const generateWebSiteSchema = (url: string) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Standardthought",
  alternateName: "Standard Thought",
  url,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${url}/blog?search={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  publisher: {
    "@type": "Organization",
    name: "Standardthought"
  },
  inLanguage: "en-US",
  copyrightYear: new Date().getFullYear(),
  genre: ["Business", "Entrepreneurship", "Education", "Personal Development"]
});
