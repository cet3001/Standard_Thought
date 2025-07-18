import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { SEOManagement } from "@/components/admin/SEOManagement";
import SEO from "@/components/seo";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const AdminSEO = () => {
  useMobilePerformance();
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const { textureImageUrl } = useUrbanTexture();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-cream dark:bg-brand-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-black dark:border-brand-cream mx-auto mb-4"></div>
          <p className="text-brand-black dark:text-brand-cream">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>

      {/* SEO */}
      <SEO
        title="SEO Management | Admin Dashboard"
        description="Manage dynamic SEO settings, meta tags, and AEO optimization for urban wealth building content."
        pageType="admin"
        url="/admin/seo"
        noIndex={true}
      />

      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <SEOManagement />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default AdminSEO;