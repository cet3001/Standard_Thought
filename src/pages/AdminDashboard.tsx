
// Page: AdminDashboard
// Purpose: Give admins one spot to manage guides and newsletters.
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import { GuideUploader } from '@/components/admin/guide-uploader';
import { SubscriberStats } from '@/components/admin/SubscriberStats';
import { EmailComposer } from '@/components/admin/EmailComposer';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const AdminDashboard = () => {
  const { isAdmin } = useAuth();

  // grab subscriber count once so multiple components can share it
  const { data: subscriberCount = 0 } = useQuery({
    queryKey: ["subscriber-count"],
    queryFn: async () => {
      const { count, error } = await supabase
        .from("Subscribers")
        .select("*", { count: "exact", head: true })
        .eq("unsubscribed", false);
      if (error) throw error;
      return count ?? 0;
    },
    staleTime: 60_000,
  });

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
      <main className="container mx-auto px-4 pt-24 pb-16 space-y-10 max-w-5xl">
        <h1 className="text-3xl font-bold text-center mb-2">Admin Dashboard</h1>
        <p className="text-center text-muted-foreground mb-8">
          Manage guides & newsletters.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column: Guide management */}
          <GuideUploader />

          {/* Right column: subscriber stats */}
          <SubscriberStats />
        </div>

        {/* Compose email */}
        <EmailComposer subscriberCount={subscriberCount} />
      </main>
    </div>
  );
};

export default AdminDashboard;
