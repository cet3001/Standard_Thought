import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    console.log('Auto-sitemap trigger activated')

    // This function will be called automatically when:
    // 1. New blog posts are published
    // 2. Blog posts are updated
    // 3. New guides are added
    // 4. Any content that affects the sitemap is modified

    const body = await req.json()
    const { table, type, record } = body

    console.log(`Sitemap trigger: ${type} operation on ${table}`, record)

    // Only trigger sitemap regeneration for relevant changes
    const relevantTables = ['blog_posts', 'guides']
    const relevantTypes = ['INSERT', 'UPDATE', 'DELETE']

    if (relevantTables.includes(table) && relevantTypes.includes(type)) {
      // For blog posts, only regenerate if published status is true or changes
      if (table === 'blog_posts') {
        const isPublished = record?.published === true
        const wasPublished = record?.old_record?.published === true
        
        // Skip if unpublished post or no change in published status
        if (!isPublished && type !== 'DELETE' && isPublished === wasPublished) {
          console.log('Skipping sitemap regeneration - unpublished blog post')
          return new Response(JSON.stringify({ skipped: true }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          })
        }
      }

      // For guides, only regenerate if active
      if (table === 'guides') {
        const isActive = record?.is_active === true
        const wasActive = record?.old_record?.is_active === true
        
        if (!isActive && type !== 'DELETE' && isActive === wasActive) {
          console.log('Skipping sitemap regeneration - inactive guide')
          return new Response(JSON.stringify({ skipped: true }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          })
        }
      }

      // Call the sitemap generation function
      console.log('Triggering sitemap regeneration...')
      
      const { data, error } = await supabase.functions.invoke('generate-sitemap', {
        body: { trigger: 'auto', source: table, operation: type }
      })

      if (error) {
        console.error('Error generating sitemap:', error)
        throw error
      }

      console.log('Sitemap regenerated successfully')

      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Sitemap regenerated due to content change',
        trigger: { table, type, timestamp: new Date().toISOString() }
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Return success but no action taken
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'No sitemap regeneration needed',
      reason: 'Not a relevant table or operation'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Auto-sitemap trigger error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})