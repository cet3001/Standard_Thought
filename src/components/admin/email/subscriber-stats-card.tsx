
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const SubscriberStatsCard = () => {
  const { data: subscriberCount, error: subscriberError, isLoading } = useQuery({
    queryKey: ['subscriber-count'],
    queryFn: async () => {
      console.log('Fetching subscriber count using RPC...');
      
      try {
        // ✅ Use the secure RPC function
        const { data, error } = await supabase.rpc('active_subscriber_count');
        
        if (error) {
          console.error('RPC subscriber count error:', error);
          throw error;
        }
        
        console.log('Active subscribers from RPC:', data);
        return data ?? 0;
      } catch (err) {
        console.error('Error fetching subscriber count:', err);
        throw err;
      }
    },
    retry: 3,
    retryDelay: 1000,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Users className="w-5 h-5" />
          Subscribers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-primary flex items-center gap-2">
          {isLoading ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" />
              <span className="text-lg">Loading...</span>
            </>
          ) : subscriberError ? (
            <span className="text-sm text-destructive">
              Error loading count
            </span>
          ) : (
            subscriberCount || 0
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          Active subscribers who will receive this email
        </p>
        {subscriberError && (
          <p className="text-xs text-destructive mt-2">
            Debug info: {subscriberError.message}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
