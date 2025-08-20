
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
const Manifesto = lazy(() => import("@/pages/Manifesto"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const CreatePost = lazy(() => import("@/pages/CreatePost"));
const EditPost = lazy(() => import("@/pages/EditPost"));
const Sales = lazy(() => import("@/pages/Sales"));
const Auth = lazy(() => import("@/pages/Auth"));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard"));
const AdminGuides = lazy(() => import("@/pages/AdminGuides"));
const AdminPaidGuides = lazy(() => import("@/pages/AdminPaidGuides"));
const AdminCTA = lazy(() => import("@/pages/AdminCTA"));
const AdminGuideForge = lazy(() => import("@/pages/AdminGuideForge"));
const AdminEmail = lazy(() => import("@/pages/AdminEmail"));
const AdminSEO = lazy(() => import("@/pages/AdminSEO"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const CookiePolicy = lazy(() => import("@/pages/CookiePolicy"));
const ImageGeneratorPage = lazy(() => import("@/pages/ImageGenerator"));
const PaymentSuccess = lazy(() => import("@/pages/PaymentSuccess"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Unsubscribe = lazy(() => import("@/pages/Unsubscribe"));
const SubmitStory = lazy(() => import("@/pages/SubmitStory"));
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "@/components/ui/toaster"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from "@/components/error-boundary";
import PerformanceOptimizer from "@/components/performance/performance-optimizer";
import LighthouseAuditor from "@/components/performance/lighthouse-auditor";
import PrerenderOptimizer from "@/components/performance/prerender-optimizer";
import { useAnalyticsTracking } from "@/hooks/use-analytics";

console.log('App.tsx: Component loaded');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function AppContent() {
  useAnalyticsTracking(); // Initialize and track page views
  
  return (
    <>
      {/* Temporarily disable these to find the source of the overlay */}
      {/* <PerformanceOptimizer /> */}
      {/* <PrerenderOptimizer /> */}
      {/* <LighthouseAuditor /> */}
      
      <Toaster />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
          <Route path="/submit-story" element={<SubmitStory />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/guides" element={<AdminGuides />} />
          <Route path="/admin/paid-guides" element={<AdminPaidGuides />} />
          <Route path="/admin/cta" element={<AdminCTA />} />
          <Route path="/admin/guide-forge" element={<AdminGuideForge />} />
          <Route path="/admin/email" element={<AdminEmail />} />
          <Route path="/admin/seo" element={<AdminSEO />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/image-generator" element={<ImageGeneratorPage />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/unsubscribe/:token" element={<Unsubscribe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

function App() {
  console.log('App.tsx: App component rendering...');
  
  try {
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <AppContent />
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
