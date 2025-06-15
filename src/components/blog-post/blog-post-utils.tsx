
export const getReadTime = (content: string) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(' ').length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
};

export const getWordCount = (content: string) => {
  return content.split(' ').length;
};

export const generateBlogPostSEO = (post: any) => {
  const metaDescription = post.meta_description || 
    `${post.excerpt.slice(0, 140)}... | Read this ${post.category.toLowerCase()} story on Standardthought - Building legacy from nothing.`;
  
  const metaKeywords = post.meta_keywords || 
    `${post.tags.join(', ')}, ${post.category.toLowerCase()}, standardthought blog, urban entrepreneurship`;

  const pageTitle = `${post.title} | Standardthought Blog`;
  
  return { metaDescription, metaKeywords, pageTitle };
};
