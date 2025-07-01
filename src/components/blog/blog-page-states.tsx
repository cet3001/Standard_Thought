
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Loading from "@/components/ui/loading";

export const BlogPageLoadingState = () => (
  <div className="min-h-screen bg-transparent">
    <Navigation />
    <main className="pt-32 pb-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <Loading />
      </div>
    </main>
    <Footer />
  </div>
);

export const BlogPageErrorState = ({ error, onRetry }: { error: Error | null; onRetry: () => void }) => (
  <div className="min-h-screen bg-transparent">
    <Navigation />
    <main className="pt-32 pb-16">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Blog</h1>
        <p className="text-gray-600 mb-4">
          {error?.message || 'Failed to load blog posts'}
        </p>
        <button 
          onClick={onRetry} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    </main>
    <Footer />
  </div>
);
