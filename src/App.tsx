
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index from "@/pages/Index";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import CreatePost from "@/pages/CreatePost";
import EditPost from "@/pages/EditPost";
import Auth from "@/pages/Auth";
import About from "@/pages/About";
import Resources from "@/pages/Resources";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import AISideHustlesGuide from "@/pages/AISideHustlesGuide";
import FreeInvestingGuide from "@/pages/FreeInvestingGuide";
import StartInvestingGuide from "@/pages/StartInvestingGuide";
import FinancialEducationGuide from "@/pages/FinancialEducationGuide";
import WealthBuildingStrategies from "@/pages/WealthBuildingStrategies";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "@/components/ui/toaster"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ImageGeneratorPage from "@/pages/ImageGenerator";

console.log('App.tsx: Component loaded');

const queryClient = new QueryClient();

function App() {
  console.log('App.tsx: App component rendering...');
  
  try {
    return (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <div className="min-h-screen">
              <Toaster />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/blog/ai-side-hustles-guide" element={<AISideHustlesGuide />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/edit-post/:id" element={<EditPost />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/free-investing-guide" element={<FreeInvestingGuide />} />
                <Route path="/start-investing-guide" element={<StartInvestingGuide />} />
                <Route path="/financial-education-guide" element={<FinancialEducationGuide />} />
                <Route path="/wealth-building-strategies" element={<WealthBuildingStrategies />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/image-generator" element={<ImageGeneratorPage />} />
              </Routes>
            </div>
          </AuthProvider>
        </QueryClientProvider>
      </BrowserRouter>
    );
  } catch (error) {
    console.error('App.tsx: Error in App component:', error);
    return <div>Error loading application. Check console for details.</div>;
  }
}

export default App;
