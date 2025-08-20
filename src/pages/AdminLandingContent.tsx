import { useAuth } from '@/contexts/AuthContext';
import LandingContentManager from '@/components/admin/LandingContentManager';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Navigate } from 'react-router-dom';

const AdminLandingContent = () => {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Landing Page Content</h1>
            <p className="text-muted-foreground">
              Manage dynamic content for the homepage sections
            </p>
          </div>
          
          <LandingContentManager />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminLandingContent;