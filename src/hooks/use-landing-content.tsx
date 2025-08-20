import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface LandingContent {
  id: string;
  section_name: string;
  content: any;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useLandingContent = (sectionName: string) => {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('landing_page_content')
          .select('*')
          .eq('section_name', sectionName)
          .eq('is_active', true)
          .maybeSingle();

        if (error) {
          setError(error.message);
          return;
        }

        setContent(data?.content || null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [sectionName]);

  return { content, loading, error };
};