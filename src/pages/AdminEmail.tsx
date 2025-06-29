
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Navigation } from "@/components/admin/navigation";
import { AdminEmailContent } from "@/components/admin/email/admin-email-content";

const AdminEmail = () => {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-96">
          <CardHeader>
            <CardTitle className="text-center text-destructive">Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              You need admin privileges to access this page.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-cream via-brand-cream to-brand-cream/95 dark:from-brand-black dark:via-brand-black dark:to-brand-black/95">
      <Navigation />
      <AdminEmailContent />
    </div>
  );
};

export default AdminEmail;
