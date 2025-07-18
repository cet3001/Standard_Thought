
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation } from "react-router-dom";

const BreadcrumbNavigation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const breadcrumbItems = [
    { name: 'Homebase', path: '/', keywords: 'entrepreneurship hub, wealth building foundation' },
    { name: 'Builder Stories', path: '/blog', keywords: 'success stories, entrepreneurial journeys' },
    { name: 'About + Mindset Tools', path: '/about', keywords: 'mindset development, success psychology' },
    { name: 'Blueprints & Offers', path: '/sales', keywords: 'business strategies, revenue optimization' },
  ];

  const getCurrentBreadcrumb = (path: string) => {
    return breadcrumbItems.find(item => item.path === path) || 
           { name: path.replace('-', ' '), path, keywords: 'business content' };
  };

  if (pathnames.length === 0) return null;

  return (
    <div className="container mx-auto px-6 py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink 
              href="/" 
              className="text-[#247EFF] hover:text-[#0057FF]"
              title="Return to entrepreneurship hub and wealth building foundation"
            >
              Homebase
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          {pathnames.map((pathname, index) => {
            const path = `/${pathnames.slice(0, index + 1).join('/')}`;
            const breadcrumb = getCurrentBreadcrumb(path);
            const isLast = index === pathnames.length - 1;

            return (
              <div key={path} className="flex items-center">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="text-[#0A0A0A] dark:text-brand-cream capitalize">
                      {breadcrumb.name}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink 
                      href={path}
                      className="text-[#247EFF] hover:text-[#0057FF] capitalize"
                      title={`Navigate to ${breadcrumb.keywords}`}
                    >
                      {breadcrumb.name}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbNavigation;
