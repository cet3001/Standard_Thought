import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { SEOManagement } from "@/components/admin/SEOManagement";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { AdminLayout } from "@/components/admin/AdminLayout";

const AdminSEO = () => {
  useMobilePerformance();
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading) {
    return (
      <AdminLayout title="Loading...">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </AdminLayout>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <AdminLayout title="SEO Management" description="Manage dynamic SEO settings, meta tags, and AEO optimization for urban wealth building content.">
      <SEOManagement />
    </AdminLayout>
  );
};

export default AdminSEO;