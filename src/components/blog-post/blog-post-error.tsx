
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BlogPostErrorProps {
  error: string;
  slug?: string;
}

const BlogPostError = ({ error, slug }: BlogPostErrorProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title={error === 'Blog post not found' ? 'Story Not Found' : 'Error Loading Story'}
        description="The story you're looking for doesn't exist or encountered an error loading."
        url={`https://standardthought.com/blog/${slug}`}
      />
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-4">
              {error === 'Blog post not found' ? 'Story Not Found' : 'Something Went Wrong'}
            </h1>
            <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-8">
              {error === 'Blog post not found' 
                ? "The story you're looking for doesn't exist or has been removed."
                : "We encountered an error loading this story. Please try again."
              }
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => navigate("/blog")}
                className="bg-[#247EFF] hover:bg-[#0057FF] text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Stories
              </Button>
              {error !== 'Blog post not found' && (
                <Button
                  onClick={() => window.location.reload()}
                  variant="outline"
                  className="border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white"
                >
                  Try Again
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostError;
