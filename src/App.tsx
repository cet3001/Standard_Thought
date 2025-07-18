
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createLazyRoute } from "@/components/lazy-route-wrapper";

// Lazy load all routes for better performance
const Index = createLazyRoute(() => import("@/pages/Index"));
const About = createLazyRoute(() => import("@/pages/About"));
const Blog = createLazyRoute(() => import("@/pages/Blog"));
const BlogPost = createLazyRoute(() => import("@/pages/BlogPost"));
const CreatePost = createLazyRoute(() => import("@/pages/CreatePost"));
const Sales = createLazyRoute(() => import("@/pages/Sales"));
const Credit = createLazyRoute(() => import("@/pages/Credit"));
const Investing = createLazyRoute(() => import("@/pages/Investing"));
const AISideHustles = createLazyRoute(() => import("@/pages/AISideHustles"));
const CashManagement = createLazyRoute(() => import("@/pages/CashManagement"));
const Auth = createLazyRoute(() => import("@/pages/Auth"));
const AdminGuides = createLazyRoute(() => import("@/pages/AdminGuides"));
const AdminEmail = createLazyRoute(() => import("@/pages/AdminEmail"));
const AdminAnalytics = createLazyRoute(() => import("@/pages/AdminAnalytics"));
const AdminContentScheduler = createLazyRoute(() => import("@/pages/AdminContentScheduler"));
const PrivacyPolicy = createLazyRoute(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = createLazyRoute(() => import("@/pages/TermsOfService"));
const CookiePolicy = createLazyRoute(() => import("@/pages/CookiePolicy"));
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const ImageGeneratorPage = createLazyRoute(() => import("@/pages/ImageGenerator"));
import ErrorBoundary from "@/components/error-boundary";
import { AnalyticsTracker } from "@/components/analytics";

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
  return (
    <div className="min-h-screen">
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/admin/guides" element={<AdminGuides />} />
        <Route path="/admin/email" element={<AdminEmail />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />
        <Route path="/admin/content-scheduler" element={<AdminContentScheduler />} />
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
    </div>
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
