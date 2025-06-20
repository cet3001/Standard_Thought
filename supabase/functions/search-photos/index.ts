
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const unsplashAccessKey = Deno.env.get('UNSPLASH_ACCESS_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query, page = 1, perPage = 12, orientation = 'landscape' } = await req.json();

    if (!query) {
      return new Response(JSON.stringify({ error: 'Search query is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}&orientation=${orientation}`,
      {
        headers: {
          'Authorization': `Client-ID ${unsplashAccessKey}`,
        },
      }
    );

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.errors?.[0] || 'Failed to search photos');
    }

    // Format the response for easier use
    const formattedResults = {
      total: data.total,
      totalPages: data.total_pages,
      results: data.results.map((photo: any) => ({
        id: photo.id,
        description: photo.description || photo.alt_description,
        urls: {
          raw: photo.urls.raw,
          full: photo.urls.full,
          regular: photo.urls.regular,
          small: photo.urls.small,
          thumb: photo.urls.thumb,
        },
        user: {
          name: photo.user.name,
          username: photo.user.username,
          profileUrl: photo.user.links.html,
        },
        downloadUrl: photo.links.download,
        htmlUrl: photo.links.html,
        width: photo.width,
        height: photo.height,
      })),
    };

    return new Response(JSON.stringify(formattedResults), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in search-photos function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
