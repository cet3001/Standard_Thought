import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, Search, ArrowUpDown, ArrowUp, ArrowDown, Mail, Calendar, Trash2 } from 'lucide-react';
import { AdminSectionCard } from './AdminSectionCard';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Subscriber {
  id: number;
  email: string;
  name?: string;
  created_at: string;
  unsubscribed: boolean;
}

export const SubscriberManagement = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Search, Sort, and Filter states
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'subscribed' | 'unsubscribed'>('all');
  const [sortField, setSortField] = useState<'email' | 'created_at'>('created_at');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // Filtered and sorted subscribers
  const filteredAndSortedSubscribers = useMemo(() => {
    let filteredSubscribers = subscribers;

    // Apply status filter
    if (statusFilter === 'subscribed') {
      filteredSubscribers = filteredSubscribers.filter(sub => !sub.unsubscribed);
    } else if (statusFilter === 'unsubscribed') {
      filteredSubscribers = filteredSubscribers.filter(sub => sub.unsubscribed);
    }

    // Apply search filter
    if (searchTerm) {
      filteredSubscribers = filteredSubscribers.filter(sub => 
        sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (sub.name && sub.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply sorting
    return [...filteredSubscribers].sort((a, b) => {
      let comparison = 0;
      
      if (sortField === 'email') {
        comparison = a.email.localeCompare(b.email);
      } else if (sortField === 'created_at') {
        comparison = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      }

      return sortDirection === 'desc' ? -comparison : comparison;
    });
  }, [subscribers, searchTerm, statusFilter, sortField, sortDirection]);

  const handleSort = (field: 'email' | 'created_at') => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: 'email' | 'created_at') => {
    if (sortField !== field) return <ArrowUpDown className="h-4 w-4" />;
    return sortDirection === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />;
  };

  useEffect(() => {
    loadSubscribers();
  }, []);

  const loadSubscribers = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('Subscribers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubscribers(data || []);
    } catch (error) {
      console.error('Error loading subscribers:', error);
      toast({
        title: "Error",
        description: "Failed to load subscribers",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSubscriber = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this subscriber?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('Subscribers')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Subscriber deleted successfully"
      });

      loadSubscribers();
    } catch (error) {
      console.error('Error deleting subscriber:', error);
      toast({
        title: "Error",
        description: "Failed to delete subscriber",
        variant: "destructive"
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusStats = () => {
    const subscribed = subscribers.filter(sub => !sub.unsubscribed).length;
    const unsubscribed = subscribers.filter(sub => sub.unsubscribed).length;
    return { subscribed, unsubscribed, total: subscribers.length };
  };

  const stats = getStatusStats();

  if (loading) {
    return (
      <AdminSectionCard>
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-foreground">Loading subscribers...</p>
        </div>
      </AdminSectionCard>
    );
  }

  return (
    <div className="space-y-6">
      {/* Subscriber Stats */}
      <AdminSectionCard 
        title="Subscriber Overview"
        icon={<Users className="h-5 w-5" />}
      >
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-muted/50 rounded-lg border border-border">
            <div className="text-2xl font-bold text-primary">{stats.total}</div>
            <div className="text-sm text-muted-foreground font-medium">Total Subscribers</div>
          </div>
          <div className="text-center p-4 bg-muted/50 rounded-lg border border-border">
            <div className="text-2xl font-bold text-green-600">{stats.subscribed}</div>
            <div className="text-sm text-muted-foreground font-medium">Active Subscribers</div>
          </div>
          <div className="text-center p-4 bg-muted/50 rounded-lg border border-border">
            <div className="text-2xl font-bold text-destructive">{stats.unsubscribed}</div>
            <div className="text-sm text-muted-foreground font-medium">Unsubscribed</div>
          </div>
        </div>
      </AdminSectionCard>

      {/* Search and Filter Controls */}
      <AdminSectionCard 
        title="Search & Filter Subscribers"
        icon={<Search className="h-5 w-5" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Search Subscribers</label>
            <Input
              type="text"
              placeholder="Search subscribers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-background border-border"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Filter by Status</label>
            <Select value={statusFilter} onValueChange={(value: 'all' | 'subscribed' | 'unsubscribed') => setStatusFilter(value)}>
              <SelectTrigger className="bg-background border-border hover:bg-accent">
                <SelectValue placeholder="Filter subscribers" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border">
                <SelectItem value="all" className="text-foreground">All Statuses</SelectItem>
                <SelectItem value="subscribed" className="text-foreground">Subscribed</SelectItem>
                <SelectItem value="unsubscribed" className="text-foreground">Unsubscribed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          Showing {filteredAndSortedSubscribers.length} of {subscribers.length} subscribers
        </div>
      </AdminSectionCard>

      {/* Subscriber List */}
      <AdminSectionCard 
        title="Subscriber List"
        icon={<Mail className="h-5 w-5" />}
      >
        {filteredAndSortedSubscribers.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              {searchTerm || statusFilter !== 'all' 
                ? "No subscribers found matching your search and filter criteria."
                : "No subscribers found."
              }
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Sortable Headers */}
            <div className="grid grid-cols-4 gap-4 pb-2 border-b border-border">
              <button
                onClick={() => handleSort('email')}
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                Email
                {getSortIcon('email')}
              </button>
              <div className="text-sm font-medium text-foreground">Name</div>
              <button
                onClick={() => handleSort('created_at')}
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                Subscribed Date
                {getSortIcon('created_at')}
              </button>
              <div className="text-sm font-medium text-foreground">Status</div>
            </div>

            {/* Subscriber List */}
            <div className="space-y-2">
              {filteredAndSortedSubscribers.map((subscriber) => (
                <div 
                  key={subscriber.id} 
                  className="grid grid-cols-4 gap-4 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground font-medium">{subscriber.email}</span>
                  </div>
                  <div className="text-muted-foreground">
                    {subscriber.name || 'No name'}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {formatDate(subscriber.created_at)}
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant={subscriber.unsubscribed ? "destructive" : "default"}
                      className={subscriber.unsubscribed ? "" : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"}
                    >
                      {subscriber.unsubscribed ? "Unsubscribed" : "Active"}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteSubscriber(subscriber.id)}
                      className="hover:bg-destructive/10 hover:text-destructive"
                      title="Delete subscriber"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </AdminSectionCard>
    </div>
  );
};