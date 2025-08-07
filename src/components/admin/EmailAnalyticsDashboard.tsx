import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Mail, Users, TrendingUp, Send, Clock } from 'lucide-react';
import { AdminSectionCard } from './AdminSectionCard';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Campaign {
  id: string;
  campaign_type: string;
  subject: string;
  sent_count: number;
  failed_count: number;
  created_at: string;
  sent_at: string | null;
}

interface EmailStats {
  total_subscribers: number;
  recent_campaigns: Campaign[];
  weekly_growth: number;
}

export const EmailAnalyticsDashboard = () => {
  const [stats, setStats] = useState<EmailStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [sendingWeekly, setSendingWeekly] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadEmailStats();
  }, []);

  const loadEmailStats = async () => {
    try {
      // Get total subscribers
      const { data: subscriberCount } = await supabase.rpc('active_subscriber_count');
      
      // Get recent campaigns
      const { data: campaigns, error: campaignsError } = await supabase
        .from('email_campaigns')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (campaignsError) throw campaignsError;

      // Calculate weekly growth (simplified)
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      
      const { count: weeklySignups } = await supabase
        .from('Subscribers')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', weekAgo.toISOString());

      setStats({
        total_subscribers: subscriberCount || 0,
        recent_campaigns: campaigns || [],
        weekly_growth: weeklySignups || 0
      });
    } catch (error) {
      console.error('Error loading email stats:', error);
      toast({
        title: "Error loading stats",
        description: "Could not load email analytics data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const sendWeeklyNewsletter = async () => {
    setSendingWeekly(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-weekly-newsletter');
      
      if (error) throw error;

      toast({
        title: "Weekly newsletter sent! 🔥",
        description: `Successfully sent to ${data.sent_count} subscribers`,
      });

      // Reload stats to show the new campaign
      loadEmailStats();
    } catch (error) {
      console.error('Error sending weekly newsletter:', error);
      toast({
        title: "Error sending newsletter",
        description: "Could not send the weekly newsletter",
        variant: "destructive",
      });
    } finally {
      setSendingWeekly(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const getCampaignTypeColor = (type: string) => {
    switch (type) {
      case 'welcome': return 'bg-green-100 text-green-800';
      case 'newsletter': return 'bg-blue-100 text-blue-800';
      case 'weekly': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-brand-black dark:text-brand-cream">
            Email Marketing Analytics
          </h1>
          <p className="text-brand-black/70 dark:text-brand-cream/70">
            Track your email campaigns and subscriber growth
          </p>
        </div>
        <Button 
          onClick={sendWeeklyNewsletter}
          disabled={sendingWeekly}
          className="urban-cta"
        >
          {sendingWeekly ? (
            <>
              <Clock className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Weekly Newsletter
            </>
          )}
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AdminSectionCard>
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">Total Subscribers</div>
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats?.total_subscribers}</div>
          <p className="text-xs text-muted-foreground">
            Active newsletter subscribers
          </p>
        </AdminSectionCard>

        <AdminSectionCard>
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">Weekly Growth</div>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">+{stats?.weekly_growth}</div>
          <p className="text-xs text-muted-foreground">
            New subscribers this week
          </p>
        </AdminSectionCard>

        <AdminSectionCard>
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">Campaigns Sent</div>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats?.recent_campaigns.length}</div>
          <p className="text-xs text-muted-foreground">
            Total campaigns this month
          </p>
        </AdminSectionCard>
      </div>

      {/* Recent Campaigns */}
      <AdminSectionCard 
        title="Recent Email Campaigns"
        description="Your latest email sends and their performance"
        icon={<Mail className="h-5 w-5" />}
      >
          {stats?.recent_campaigns.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Mail className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No campaigns sent yet</p>
              <p className="text-sm">Send your first weekly newsletter to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {stats?.recent_campaigns.map((campaign) => (
                <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{campaign.subject}</h3>
                        <Badge className={getCampaignTypeColor(campaign.campaign_type)}>
                          {campaign.campaign_type}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(campaign.created_at).toLocaleDateString()}
                        </span>
                        <span>Sent to {campaign.sent_count} subscribers</span>
                        {campaign.failed_count > 0 && (
                          <span className="text-red-600">
                            {campaign.failed_count} failed
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-green-600">
                      {campaign.sent_count > 0 ? '✓ Sent' : 'Draft'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </AdminSectionCard>
    </div>
  );
};