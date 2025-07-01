
import { supabase } from '@/integrations/supabase/client';

export const testSupabaseConnection = async () => {
  console.log('🔍 Testing Supabase connection...');
  
  try {
    // Test basic connection
    const { data: healthCheck, error: healthError } = await supabase
      .from('blog_posts')
      .select('count')
      .limit(1);
    
    if (healthError) {
      console.error('❌ Supabase connection failed:', healthError);
      return false;
    }
    
    console.log('✅ Basic Supabase connection successful');
    
    // Test all tables with proper typing
    const tableTests = [
      { name: 'blog_posts', test: () => supabase.from('blog_posts').select('*').limit(1) },
      { name: 'Subscribers', test: () => supabase.from('Subscribers').select('*').limit(1) },
      { name: 'comments', test: () => supabase.from('comments').select('*').limit(1) },
      { name: 'profiles', test: () => supabase.from('profiles').select('*').limit(1) },
      { name: 'guide_downloads', test: () => supabase.from('guide_downloads').select('*').limit(1) }
    ];
    
    for (const { name, test } of tableTests) {
      try {
        const { data, error } = await test();
        
        if (error) {
          console.error(`❌ Table ${name} access failed:`, error);
        } else {
          console.log(`✅ Table ${name} accessible`);
        }
      } catch (err) {
        console.error(`❌ Table ${name} test failed:`, err);
      }
    }
    
    // Test auth
    const { data: { user } } = await supabase.auth.getUser();
    console.log('👤 Current user:', user ? `${user.email} (${user.id})` : 'Not authenticated');
    
    console.log('🎉 Supabase connection test completed');
    return true;
    
  } catch (error) {
    console.error('💥 Supabase connection test failed:', error);
    return false;
  }
};

// Auto-run connection test in development
if (import.meta.env.DEV) {
  testSupabaseConnection();
}
