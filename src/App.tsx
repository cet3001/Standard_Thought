
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import Index from "@/pages/Index"; // Keep homepage as non-lazy for fast initial load
import Loading from "@/components/ui/loading";

// Lazy load non-critical pages for code splitting
const About = lazy(() => import("@/pages/About"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const CreatePost = lazy(() => import("@/pages/CreatePost"));
const Sales = lazy(() => import("@/pages/Sales"));
const Credit = lazy(() => import("@/pages/Credit"));
const Investing = lazy(() => import("@/pages/Investing"));
const AISideHustles = lazy(() => import("@/pages/AISideHustles"));
const CashManagement = lazy(() => import("@/pages/CashManagement"));
const Auth = lazy(() => import("@/pages/Auth"));
const AdminGuides = lazy(() => import("@/pages/AdminGuides"));
const AdminEmail = lazy(() => import("@/pages/AdminEmail"));
const AdminSEO = lazy(() => import("@/pages/AdminSEO"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const CookiePolicy = lazy(() => import("@/pages/CookiePolicy"));
const ImageGeneratorPage = lazy(() => import("@/pages/ImageGenerator"));
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "@/components/ui/toaster"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from "@/components/error-boundary";
import PerformanceOptimizer from "@/components/performance/performance-optimizer";
import LighthouseAuditor from "@/components/performance/lighthouse-auditor";
import PrerenderOptimizer from "@/components/performance/prerender-optimizer";

console.log('App.tsx: Component loaded');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  console.log('App.tsx: App component rendering...');
  
  try {
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <div className="min-h-screen">
                <PerformanceOptimizer />
                <PrerenderOptimizer />
                <LighthouseAuditor />
                <Toaster />
                <Suspense fallback={<Loading />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="/admin/guides" element={<AdminGuides />} />
                    <Route path="/admin/email" element={<AdminEmail />} />
                    <Route path="/admin/seo" element={<AdminSEO />} />
                    <Route path="/sales" element={<Sales />} />
                    <Route path="/credit" element={<Credit />} />
                    <Route path="/investing" element={<Investing />} />
                    <Route path="/ai-side-hustles" element={<AISideHustles />} />
                    <Route path="/cash-management" element={<CashManagement />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                    <Route path="/image-generator" element={<ImageGeneratorPage />} />
                  </Routes>
                </Suspense>
              </div>
            </AuthProvider>
          </QueryClientProvider>
        </BrowserRouter>
      </ErrorBoundary>
    );
  } catch (error) {
    console.error('App.tsx: Error in App component:', error);
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Application Error</h1>
          <p className="text-gray-600 mb-4">Failed to load application. Check console for details.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }
}

export default App;
