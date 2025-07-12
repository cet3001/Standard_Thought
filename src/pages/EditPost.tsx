import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/seo";
import Navigation from "@/components/navigation";
import { useHeaderHeight } from "@/hooks/use-header-height";
import Footer from "@/components/footer";

const EditPost = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page since blog functionality has been removed
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Page Not Found | Standardthought"
        description="This page is no longer available. Visit our homepage for urban wealth building strategies and AI side hustles."
        url="/edit-post"
      />
      
      <Navigation />
      
      <main style={{ marginTop: `${useHeaderHeight()}px`, paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h1 className="text-3xl font-bold text-black dark:text-brand-cream mb-4">
            Page Not Available
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            This content has been moved. Redirecting you to our homepage...
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EditPost;