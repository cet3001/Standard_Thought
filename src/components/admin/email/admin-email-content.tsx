
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { GuideUploader } from "@/components/admin/guide-uploader";
import { SubscriberStatsCard } from './subscriber-stats-card';
import { EmailComposer } from './email-composer';
import { EmailPreview } from './email-preview';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const AdminEmailContent = () => {
  const { isAdmin } = useAuth();
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  // Fetch subscriber count using the secure RPC function
  const { data: subscriberCount = 0 } = useQuery({
    queryKey: ['subscriber-count'],
    queryFn: async () => {
      const { data, error } = await supabase.rpc('active_subscriber_count');
      if (error) throw error;
      return data ?? 0;
    },
    enabled: isAdmin,
  });

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brand-black dark:text-brand-cream mb-4">
            Admin Dashboard
          </h1>
          <p className="text-brand-black/70 dark:text-brand-cream/70">
            Manage subscribers, send newsletters, and upload guides
          </p>
        </div>

        <div className="grid gap-8">
          {/* Add Guide Uploader Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-brand-black dark:text-brand-cream">
              Guide Management
            </h2>
            <GuideUploader />
          </div>

          {/* Subscriber Stats */}
          <SubscriberStatsCard />

          {/* Email Composer */}
          <EmailComposer subscriberCount={subscriberCount} />
        </div>

        {/* Preview Section */}
        <EmailPreview subject={subject} content={content} />
      </div>
    </div>
  );
};
