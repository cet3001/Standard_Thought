
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
      
      // First ensure the bucket exists
      const { data: buckets, error: bucketsError } = await supabase.storage.listBuckets();
      console.log('Available buckets:', buckets);
      
      if (bucketsError) {
        console.error('Error listing buckets:', bucketsError);
      }
      
      const guidesBucket = buckets?.find(bucket => bucket.name === 'guides');
      if (!guidesBucket) {
        console.log('Guides bucket not found, creating it...');
        const { data: newBucket, error: createError } = await supabase.storage.createBucket('guides', {
          public: true,
          allowedMimeTypes: ['application/pdf'],
          fileSizeLimit: 10485760 // 10MB
        });
        
        if (createError) {
          console.error('Error creating guides bucket:', createError);
          throw new Error('Failed to create guides storage bucket');
        }
        console.log('Created guides bucket:', newBucket);
      }

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
        description: error.message || "Check storage permissions or create the guides bucket.",
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
