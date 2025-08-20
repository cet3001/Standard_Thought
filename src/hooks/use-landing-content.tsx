import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface LandingPageContent {
  id: string;
  section_name: string;
  content: any;
  is_active: boolean;
}

export const useLandingContent = (sectionName: string) => {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const { data, error: fetchError } = await supabase
          .from('landing_page_content')
          .select('content')
          .eq('section_name', sectionName)
          .eq('is_active', true)
          .single();

        if (fetchError) {
          throw fetchError;
        }

        setContent(data?.content || null);
      } catch (err) {
        console.error(`Error fetching ${sectionName} content:`, err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [sectionName]);

  return { content, loading, error };
};

export const useAllLandingContent = () => {
  const [contentMap, setContentMap] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllContent = async () => {
      try {
        setLoading(true);
        const { data, error: fetchError } = await supabase
          .from('landing_page_content')
          .select('section_name, content')
          .eq('is_active', true);

        if (fetchError) {
          throw fetchError;
        }

        const contentObject = data?.reduce((acc, item) => {
          acc[item.section_name] = item.content;
          return acc;
        }, {} as Record<string, any>) || {};

        setContentMap(contentObject);
      } catch (err) {
        console.error('Error fetching landing content:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchAllContent();
  }, []);

  return { contentMap, loading, error };
};