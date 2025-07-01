
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
    
    // Test all tables
    const tables = ['blog_posts', 'Subscribers', 'comments', 'profiles', 'guide_downloads'];
    
    for (const table of tables) {
      try {
        const { data, error } = await supabase
          .from(table)
          .select('*')
          .limit(1);
        
        if (error) {
          console.error(`❌ Table ${table} access failed:`, error);
        } else {
          console.log(`✅ Table ${table} accessible`);
        }
      } catch (err) {
        console.error(`❌ Table ${table} test failed:`, err);
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
