
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useHeaderHeight } from "@/hooks/use-header-height";
import SEO from "@/components/seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-gray-100"
      style={{ paddingTop: `${useHeaderHeight() + 48}px` }}
    >
      {/* SEO: noIndex and canonical to homepage for soft 404 compliance */}
      <SEO
        title="404 Not Found | Standardthought"
        description="Page not found. You may have entered the wrong link, or the page was moved. Visit our home for proven frameworks and real stories."
        url="https://www.standardthought.com/"
        noIndex={true}
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
