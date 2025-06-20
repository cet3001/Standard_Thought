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
import Profile from "@/pages/Profile";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { QueryClient } from 'react-query';
import ImageGeneratorPage from "@/pages/ImageGenerator";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AuthProvider>
          <QueryClient>
            <div className="min-h-screen">
              <Toaster />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/edit-post/:id" element={<EditPost />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/image-generator" element={<ImageGeneratorPage />} />
              </Routes>
            </div>
          </QueryClient>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
