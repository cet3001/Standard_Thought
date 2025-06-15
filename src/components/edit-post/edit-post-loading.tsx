
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const EditPostLoading = () => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="animate-pulse">
            <div className="h-8 bg-[#247EFF]/20 rounded w-1/3 mb-8"></div>
            <div className="space-y-6">
              <div className="h-12 bg-[#247EFF]/20 rounded"></div>
              <div className="h-32 bg-[#247EFF]/20 rounded"></div>
              <div className="h-64 bg-[#247EFF]/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditPostLoading;
