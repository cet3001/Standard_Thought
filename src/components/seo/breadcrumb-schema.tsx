
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { generateBreadcrumbSchema } from "./schemas";

const BreadcrumbSchema = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Don't show breadcrumb schema on homepage
  if (pathnames.length === 0) return null;

  const breadcrumbItems = [
    { name: 'The Root', path: '/' },
    { name: 'The Code They Never Gave Us', path: '/blog' },
    { name: 'The Shift', path: '/about' },
    { name: 'Run From This or Build With It', path: '/manifesto' },
    { name: 'Run the Play', path: '/sales' },
    { name: 'Submit Your Story', path: '/submit-story' },
    { name: 'Admin Dashboard', path: '/admin' },
    { name: 'Free Guides', path: '/admin/guides' },
    { name: 'Paid Guides', path: '/admin/paid-guides' },
    { name: 'CTA Management', path: '/admin/cta' },
    { name: 'Email Campaigns', path: '/admin/email' },
    { name: 'SEO Management', path: '/admin/seo' },
  ];

  const getCurrentBreadcrumb = (path: string) => {
    const found = breadcrumbItems.find(item => item.path === path);
    if (found) return found;
    
    // Handle dynamic routes
    if (path.startsWith('/blog/')) {
      return { name: 'Article', path };
    }
    if (path.startsWith('/edit-post/')) {
      return { name: 'Edit Post', path };
    }
    if (path.startsWith('/unsubscribe/')) {
      return { name: 'Unsubscribe', path };
    }
    if (path.startsWith('/admin/')) {
      return { name: 'Admin', path };
    }
    
    // Convert path to readable name
    const name = path
      .replace('/', '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return { name: name || 'Page', path };
  };

  const items = [
    { name: 'Home', url: 'https://www.standardthought.com', position: 1 }
  ];

  pathnames.forEach((pathname, index) => {
    const path = `/${pathnames.slice(0, index + 1).join('/')}`;
    const breadcrumb = getCurrentBreadcrumb(path);
    items.push({
      name: breadcrumb.name,
      url: `https://www.standardthought.com${path}`,
      position: index + 2
    });
  });

  const schema = generateBreadcrumbSchema({ items });

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default BreadcrumbSchema;
