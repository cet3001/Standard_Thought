
import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Guide {
  name: string;
  metadata?: {
    size?: number;
  };
  created_at?: string;
}

export const useGuideStorage = () => {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const loadGuides = useCallback(async () => {
    setLoading(true);
    try {
      console.log('Loading guides from storage...');
      
      // ✅ Just list objects in the bucket - no admin calls
      const { data, error } = await supabase.storage
        .from('guides')
        .list('', { 
          sortBy: { column: 'created_at', order: 'desc' },
          limit: 100
        });

      if (error) {
        console.error('Error loading guides:', error);
        throw error;
      }

      console.log('Guides loaded:', data);
      setGuides(data || []);
    } catch (error: any) {
      console.error('Error loading guides:', error);
      toast({
        title: "Error loading guides",
        description: error.message || "Check RLS on storage.objects or ensure the guides bucket exists.",
        variant: "destructive",
      });
      setGuides([]);
    } finally {
      setLoading(false);
    }
  }, [toast]);

  return {
    guides,
    loading,
    loadGuides,
  };
};
