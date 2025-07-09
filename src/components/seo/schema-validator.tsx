/**
 * Schema Validation Helper for Google Rich Results Testing
 */

interface ValidationResult {
  url: string;
  schemaType: string;
  isValid: boolean;
  errors: string[];
  warnings: string[];
  richResultsEligible: boolean;
}

interface SchemaTestConfig {
  testUrl: string;
  expectedSchemas: string[];
  userAgent?: string;
}

/**
 * Generate Google Rich Results Test URLs for validation
 */
export const generateRichResultsTestUrls = (baseUrl: string) => {
  const testUrls = {
    homepage: `https://search.google.com/test/rich-results?url=${encodeURIComponent(baseUrl)}`,
    blog: `https://search.google.com/test/rich-results?url=${encodeURIComponent(`${baseUrl}/blog`)}`,
    sampleBlogPost: `https://search.google.com/test/rich-results?url=${encodeURIComponent(`${baseUrl}/blog/ai-side-hustles-that-actually-work-in-2025-no-hype-just-real-bread`)}`,
    about: `https://search.google.com/test/rich-results?url=${encodeURIComponent(`${baseUrl}/about`)}`,
    cashManagement: `https://search.google.com/test/rich-results?url=${encodeURIComponent(`${baseUrl}/cash-management`)}`,
    credit: `https://search.google.com/test/rich-results?url=${encodeURIComponent(`${baseUrl}/credit`)}`,
    investing: `https://search.google.com/test/rich-results?url=${encodeURIComponent(`${baseUrl}/investing`)}`,
    aiSideHustles: `https://search.google.com/test/rich-results?url=${encodeURIComponent(`${baseUrl}/ai-side-hustles`)}`
  };

  return testUrls;
};

/**
 * Expected schema types for each page type
 */
export const expectedSchemas = {
  homepage: [
    'Organization',
    'WebSite',
    'BreadcrumbList'
  ],
  blogList: [
    'Organization', 
    'WebSite',
    'BreadcrumbList'
  ],
  blogPost: [
    'BlogPosting',
    'BreadcrumbList',
    'Organization'
  ],
  pillarPage: [
    'WebPage',
    'Organization',
    'BreadcrumbList',
    'Course' // For educational content
  ],
  aboutPage: [
    'AboutPage',
    'Organization',
    'BreadcrumbList'
  ]
};

/**
 * Common schema validation errors and fixes
 */
export const commonSchemaIssues = {
  'Missing required property': {
    error: 'Required schema properties are missing',
    fix: 'Ensure all required properties like @type, name, url are included',
    impact: 'High - May prevent rich results'
  },
  'Invalid date format': {
    error: 'Date properties not in ISO 8601 format',
    fix: 'Use ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ',
    impact: 'Medium - May affect date display in results'
  },
  'Missing image dimensions': {
    error: 'Image objects missing width/height',
    fix: 'Add width and height properties to ImageObject',
    impact: 'Low - Affects image optimization'
  },
  'Invalid URL format': {
    error: 'URLs are not absolute or properly formatted',
    fix: 'Use full absolute URLs starting with https://',
    impact: 'High - May break structured data'
  },
  'Duplicate @id values': {
    error: 'Multiple entities with same @id',
    fix: 'Ensure unique @id values for each schema entity',
    impact: 'Medium - May cause confusion for crawlers'
  }
};

/**
 * Generate validation checklist for manual testing
 */
export const generateValidationChecklist = () => {
  return {
    preValidation: [
      'Ensure all pages are accessible and not blocked by robots.txt',
      'Verify structured data is properly embedded in HTML',
      'Check that all referenced images and URLs are accessible',
      'Confirm no duplicate @id values across schemas'
    ],
    duringValidation: [
      'Test each page type with Google Rich Results Test',
      'Verify no critical errors are reported',
      'Check that all expected schema types are detected',
      'Validate image URLs and dimensions are correct',
      'Ensure date formats are ISO 8601 compliant'
    ],
    postValidation: [
      'Monitor Google Search Console for structured data errors',
      'Track rich results appearance in search results',
      'Set up alerts for schema validation failures',
      'Document any recurring issues for future reference'
    ],
    criticalChecks: [
      'Organization schema has valid logo and contact info',
      'BlogPosting schema includes all required fields',
      'BreadcrumbList maintains proper hierarchy',
      'All URLs are absolute and working',
      'Images have proper alt text and dimensions'
    ]
  };
};

/**
 * Performance impact of structured data
 */
export const schemaPerformanceGuidelines = {
  sizeOptimization: [
    'Keep JSON-LD blocks under 8KB when possible',
    'Avoid deeply nested schema structures',
    'Use schema references (@id) to reduce duplication',
    'Minify JSON-LD in production builds'
  ],
  loadingOptimization: [
    'Place JSON-LD in document head for faster parsing',
    'Avoid dynamic schema generation that blocks rendering',
    'Use static schema where possible',
    'Consider schema caching for frequently accessed pages'
  ],
  maintainability: [
    'Centralize schema generation in reusable functions',
    'Use TypeScript interfaces for schema validation',
    'Document schema decisions and mappings',
    'Version control schema changes carefully'
  ]
};

/**
 * Rich Results eligibility criteria
 */
export const richResultsCriteria = {
  article: {
    required: ['headline', 'image', 'datePublished', 'author'],
    recommended: ['dateModified', 'publisher', 'mainEntityOfPage'],
    richResultTypes: ['Article Rich Results', 'Top Stories', 'Carousel']
  },
  organization: {
    required: ['name', 'url'],
    recommended: ['logo', 'contactPoint', 'sameAs', 'address'],
    richResultTypes: ['Knowledge Panel', 'Sitelinks Search Box']
  },
  breadcrumb: {
    required: ['itemListElement', 'position', 'name'],
    recommended: ['item (URL)'],
    richResultTypes: ['Breadcrumb Navigation']
  },
  website: {
    required: ['name', 'url'],
    recommended: ['potentialAction', 'sameAs'],
    richResultTypes: ['Sitelinks Search Box']
  }
};

export default {
  generateRichResultsTestUrls,
  expectedSchemas,
  commonSchemaIssues,
  generateValidationChecklist,
  schemaPerformanceGuidelines,
  richResultsCriteria
};