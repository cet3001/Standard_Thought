
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const BlogPostLoading = () => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="animate-pulse">
            <div className="h-4 bg-[#247EFF]/20 rounded w-20 mb-6"></div>
            <div className="h-12 bg-[#247EFF]/20 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-[#247EFF]/20 rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-[#247EFF]/20 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-[#247EFF]/20 rounded"></div>
              <div className="h-4 bg-[#247EFF]/20 rounded w-5/6"></div>
              <div className="h-4 bg-[#247EFF]/20 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostLoading;
