
/**
 * Helper functions for the SEO component.
 */

export const normalizeUrl = (inputUrl: string): string => {
  if (inputUrl.startsWith('/')) {
    return `https://standardthought.com${inputUrl}`;
  }
  return inputUrl
    .replace('://www.standardthought.com', '://standardthought.com')
    .replace('://http://standardthought.com', '://standardthought.com')
    .replace('://http://www.standardthought.com', '://standardthought.com');
};

export const getFullImageUrl = (image: string): string => {
  return image.startsWith('http')
    ? image
    : `https://standardthought.com${image}`;
};

export const optimizeDescription = (desc: string): string => {
  return desc.length > 160
    ? `${desc.slice(0, 157)}...`
    : desc;
};

