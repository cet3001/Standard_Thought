import { useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";

/**
 * Hook to set up database triggers for automatic sitemap regeneration
 * This will regenerate the sitemap when blog posts or guides are added/updated
 */
export const useSitemapAutoTrigger = () => {
  useEffect(() => {
    // Set up real-time listeners for content changes
    const blogPostsChannel = supabase
      .channel('blog-posts-sitemap-trigger')
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'blog_posts',
          filter: 'published=eq.true'
        }, 
        async (payload) => {
          console.log('Blog post changed, triggering sitemap regeneration...', payload);
          
          try {
            await supabase.functions.invoke('auto-sitemap-trigger', {
              body: {
                table: 'blog_posts',
                type: payload.eventType,
                record: payload.new || payload.old
              }
            });
          } catch (error) {
            console.error('Failed to trigger sitemap regeneration:', error);
          }
        }
      )
      .subscribe();

    const guidesChannel = supabase
      .channel('guides-sitemap-trigger')
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'guides',
          filter: 'is_active=eq.true'
        }, 
        async (payload) => {
          console.log('Guide changed, triggering sitemap regeneration...', payload);
          
          try {
            await supabase.functions.invoke('auto-sitemap-trigger', {
              body: {
                table: 'guides',
                type: payload.eventType,
                record: payload.new || payload.old
              }
            });
          } catch (error) {
            console.error('Failed to trigger sitemap regeneration:', error);
          }
        }
      )
      .subscribe();

    // Cleanup subscriptions on unmount
    return () => {
      supabase.removeChannel(blogPostsChannel);
      supabase.removeChannel(guidesChannel);
    };
  }, []);

  // Manual trigger function that can be called from components
  const triggerSitemapRegeneration = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('generate-sitemap', {
        body: { trigger: 'manual', timestamp: new Date().toISOString() }
      });

      if (error) throw error;

      console.log('Manual sitemap regeneration triggered successfully');
      return { success: true, data };
    } catch (error) {
      console.error('Failed to manually trigger sitemap regeneration:', error);
      return { success: false, error };
    }
  };

  return { triggerSitemapRegeneration };
};