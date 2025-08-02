
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { generateBreadcrumbSchema } from "./schemas";

const BreadcrumbSchema = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Don't show breadcrumb schema on homepage
  if (pathnames.length === 0) return null;

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Receipts & Real Talk', path: '/blog' },
    { name: 'Mindset Tools', path: '/about' },
    { name: 'Success Strategies', path: '/sales' },
    { name: 'Contact', path: '/contact' },
  ];

  const getCurrentBreadcrumb = (path: string) => {
    const found = breadcrumbItems.find(item => item.path === path);
    if (found) return found;
    
    // Handle dynamic routes like blog posts
    if (path.startsWith('/blog/')) {
      return { name: 'Article', path };
    }
    
    return { name: path.replace('/', '').replace('-', ' '), path };
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
