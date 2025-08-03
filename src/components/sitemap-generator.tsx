
import { useEffect } from 'react';

const SitemapGenerator = () => {
  useEffect(() => {
    // Generate sitemap.xml content
    const generateSitemap = () => {
      const baseUrl = 'https://www.standardthought.com';
      const currentDate = new Date().toISOString().split('T')[0];
      
      const pages = [
        { url: '', changefreq: 'weekly', priority: '1.0' },
        { url: '/about', changefreq: 'monthly', priority: '0.8' },
        { url: '/blog', changefreq: 'daily', priority: '0.9' },
        { url: '/sales', changefreq: 'monthly', priority: '0.7' },
        
        // Pillar Content Pages - High Priority
        
        // Utility Pages
        { url: '/auth', changefreq: 'yearly', priority: '0.3' },
        { url: '/privacy-policy', changefreq: 'yearly', priority: '0.2' },
        { url: '/terms-of-service', changefreq: 'yearly', priority: '0.2' },
        { url: '/cookie-policy', changefreq: 'yearly', priority: '0.2' },
      ];

      const pageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

      const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/page-sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;

      // Log sitemap files for SEO compliance
      if (process.env.NODE_ENV !== 'production') {
        console.log('Generated page-sitemap.xml content:');
        console.log(pageSitemap);
        console.log('\nGenerated sitemap_index.xml content:');
        console.log(sitemapIndex);
      }
    };

    generateSitemap();
  }, []);

  return null;
};

export default SitemapGenerator;
