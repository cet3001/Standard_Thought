import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface BuilderStory {
  id: string;
  name: string;
  city_area: string;
  quote: string;
  avatar_url: string | null;
  created_at: string;
}

export const useBuilderStories = (limit: number = 3) => {
  const [stories, setStories] = useState<BuilderStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomStories = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch all active stories first
      const { data: allStories, error: fetchError } = await supabase
        .from('builder_stories')
        .select('*')
        .eq('is_active', true);

      if (fetchError) {
        throw fetchError;
      }

      if (allStories && allStories.length > 0) {
        // Shuffle and take the requested number
        const shuffled = [...allStories].sort(() => Math.random() - 0.5);
        setStories(shuffled.slice(0, limit));
      } else {
        setStories([]);
      }
    } catch (err) {
      console.error('Error fetching builder stories:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch stories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomStories();
  }, [limit]);

  return {
    stories,
    loading,
    error,
    refreshStories: fetchRandomStories
  };
};