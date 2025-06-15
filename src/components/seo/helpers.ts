
/**
 * Helper functions for the SEO component.
 */

export const normalizeUrl = (inputUrl: string): string => {
  if (inputUrl.startsWith('/')) {
    return `https://www.standardthought.com${inputUrl}`;
  }
  return inputUrl
    .replace('://standardthought.com', '://www.standardthought.com')
    .replace('://http://standardthought.com', '://www.standardthought.com')
    .replace('://http://www.standardthought.com', '://www.standardthought.com');
};

export const getFullImageUrl = (image: string): string => {
  return image.startsWith('http')
    ? image
    : `https://www.standardthought.com${image}`;
};

export const optimizeDescription = (desc: string): string => {
  return desc.length > 160
    ? `${desc.slice(0, 157)}...`
    : desc;
};

