
// Supabase Client
// Purpose: Links our app to Supabase using Vite env vars.
// Why: Keeps secrets out the repo and lets us swap keys without stress.
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

// Debug environment variables
console.log('Supabase configuration:', {
  url: SUPABASE_URL ? 'SET' : 'MISSING',
  key: SUPABASE_ANON_KEY ? 'SET' : 'MISSING',
  urlValue: SUPABASE_URL,
  keyPreview: SUPABASE_ANON_KEY ? `${SUPABASE_ANON_KEY.substring(0, 20)}...` : 'MISSING'
});

// Use the actual project credentials directly as fallback
const fallbackUrl = 'https://zedewynjmeyhbjysnxld.supabase.co'
const fallbackKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplZGV3eW5qbWV5aGJqeXNueGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNjQ3OTcsImV4cCI6MjA2NDY0MDc5N30.AHawgYUm8V74I_LoLbU2HUmOwV3A35cvL-QTJ-ZVuyA'

const finalUrl = SUPABASE_URL || fallbackUrl
const finalKey = SUPABASE_ANON_KEY || fallbackKey

console.log('Using Supabase URL:', finalUrl);
console.log('Using Supabase Key:', finalKey ? `${finalKey.substring(0, 20)}...` : 'MISSING');

if (!SUPABASE_URL) {
  console.warn('VITE_SUPABASE_URL is missing. Using fallback. Set environment variables for production.')
}

if (!SUPABASE_ANON_KEY) {
  console.warn('VITE_SUPABASE_ANON_KEY is missing. Using fallback. Set environment variables for production.')
}

export const supabase = createClient<Database>(finalUrl, finalKey)

// Test the connection
supabase.from('blog_posts').select('count').then(({ data, error }) => {
  if (error) {
    console.error('Supabase connection test failed:', error);
  } else {
    console.log('Supabase connection test successful:', data);
  }
});
