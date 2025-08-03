import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export type PaidGuide = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  price: number; // in cents
  currency: string;
  slug: string;
  stripe_product_id?: string;
  stripe_price_id?: string;
  watermark_url?: string;
  featured: boolean;
  active: boolean;
  created_at: string;
  updated_at: string;
};

export type PaidGuideInsert = Omit<PaidGuide, 'id' | 'created_at' | 'updated_at'>;
export type PaidGuideUpdate = Partial<PaidGuideInsert>;

export const usePaidGuides = (includeInactive = false) => {
  const [guides, setGuides] = useState<PaidGuide[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchPaidGuides = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('paid_guides')
        .select('*')
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (!includeInactive) {
        query = query.eq('active', true);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching paid guides:', error);
        toast({
          title: "Error",
          description: "Failed to fetch paid guides",
          variant: "destructive",
        });
        return;
      }

      setGuides(data || []);
    } catch (error) {
      console.error('Error fetching paid guides:', error);
      toast({
        title: "Error",
        description: "Failed to fetch paid guides",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const createPaidGuide = async (guide: PaidGuideInsert) => {
    try {
      const { data, error } = await supabase
        .from('paid_guides')
        .insert([guide])
        .select()
        .single();

      if (error) {
        console.error('Error creating paid guide:', error);
        toast({
          title: "Error",
          description: "Failed to create paid guide",
          variant: "destructive",
        });
        return null;
      }

      toast({
        title: "Success",
        description: "Paid guide created successfully",
      });

      await fetchPaidGuides();
      return data;
    } catch (error) {
      console.error('Error creating paid guide:', error);
      toast({
        title: "Error",
        description: "Failed to create paid guide",
        variant: "destructive",
      });
      return null;
    }
  };

  const updatePaidGuide = async (id: string, updates: PaidGuideUpdate) => {
    try {
      const { data, error } = await supabase
        .from('paid_guides')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error updating paid guide:', error);
        toast({
          title: "Error",
          description: "Failed to update paid guide",
          variant: "destructive",
        });
        return null;
      }

      toast({
        title: "Success",
        description: "Paid guide updated successfully",
      });

      await fetchPaidGuides();
      return data;
    } catch (error) {
      console.error('Error updating paid guide:', error);
      toast({
        title: "Error",
        description: "Failed to update paid guide",
        variant: "destructive",
      });
      return null;
    }
  };

  const deletePaidGuide = async (id: string) => {
    try {
      const { error } = await supabase
        .from('paid_guides')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting paid guide:', error);
        toast({
          title: "Error",
          description: "Failed to delete paid guide",
          variant: "destructive",
        });
        return false;
      }

      toast({
        title: "Success",
        description: "Paid guide deleted successfully",
      });

      await fetchPaidGuides();
      return true;
    } catch (error) {
      console.error('Error deleting paid guide:', error);
      toast({
        title: "Error",
        description: "Failed to delete paid guide",
        variant: "destructive",
      });
      return false;
    }
  };

  const initiatePurchase = async (guide: PaidGuide) => {
    try {
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          guide_id: guide.id,
          guide_title: guide.title,
          amount: guide.price,
          currency: guide.currency.toLowerCase(),
        },
      });

      if (error) {
        console.error('Error creating payment session:', error);
        toast({
          title: "Payment Error",
          description: "Failed to create payment session. Please try again.",
          variant: "destructive",
        });
        return;
      }

      if (data?.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Error initiating purchase:', error);
      toast({
        title: "Payment Error",
        description: "Failed to initiate purchase. Please try again.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchPaidGuides();
  }, [includeInactive]);

  return {
    guides,
    loading,
    createPaidGuide,
    updatePaidGuide,
    deletePaidGuide,
    initiatePurchase,
    refetch: fetchPaidGuides,
  };
};