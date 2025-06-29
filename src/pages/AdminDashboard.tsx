
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import { GuideManagement } from '@/components/admin/GuideManagement';
import { SubscriberStats } from '@/components/admin/SubscriberStats';
import { EmailComposer } from '@/components/admin/EmailComposer';
import { EmailPreview } from '@/components/admin/EmailPreview';

const AdminDashboard = () => {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-brand-cream dark:bg-brand-black flex items-center justify-center p-6">
        <Card className="w-full max-w-md bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border-[#247EFF]/20">
          <CardHeader className="text-center">
            <CardTitle className="text-[#0A0A0A] dark:text-brand-cream text-2xl">
              Access Denied
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70">
              You don't have permission to access this page.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      {/* Navigation */}
      <Navigation />
      
      {/* Admin Dashboard Badge */}
      <div className="fixed top-20 right-4 z-40">
        <div className="bg-[#247EFF] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          Admin Dashboard
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Guide Management */}
          <div className="min-h-[200px] border border-gray-300 rounded-lg">
            <GuideManagement />
          </div>

          {/* Subscriber Stats */}
          <div className="min-h-[200px] border border-gray-300 rounded-lg">
            <SubscriberStats />
          </div>

          {/* Email Composer */}
          <div className="min-h-[200px] border border-gray-300 rounded-lg">
            <EmailComposer />
          </div>

          {/* Email Preview */}
          <div className="min-h-[200px] border border-gray-300 rounded-lg">
            <EmailPreview />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
