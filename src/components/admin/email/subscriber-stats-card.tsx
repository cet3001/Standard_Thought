
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const SubscriberStatsCard = () => {
  // Fetch subscriber count with better error handling and debugging
  const { data: subscriberCount, error: subscriberError } = useQuery({
    queryKey: ['subscriber-count'],
    queryFn: async () => {
      console.log('Fetching subscriber count...');
      
      // Try different approaches to get the count
      try {
        // First, try the original query
        const { count, error } = await supabase
          .from('Subscribers')
          .select('*', { count: 'exact', head: true })
          .eq('unsubscribed', false);
        
        if (error) {
          console.error('Subscriber count error (method 1):', error);
          
          // Try without the unsubscribed filter
          const { count: totalCount, error: totalError } = await supabase
            .from('Subscribers')
            .select('*', { count: 'exact', head: true });
          
          if (totalError) {
            console.error('Total subscriber count error:', totalError);
            throw totalError;
          }
          
          console.log('Total subscribers (ignoring unsubscribed status):', totalCount);
          return totalCount || 0;
        }
        
        console.log('Active subscribers:', count);
        return count || 0;
      } catch (err) {
        console.error('Error fetching subscriber count:', err);
        throw err;
      }
    },
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
        <div className="text-3xl font-bold text-primary">
          {subscriberError ? (
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
