
// Supabase Client
// Purpose: Links our app to Supabase using direct project configuration.
// Note: Lovable doesn't support VITE_* environment variables, so we use direct URLs.
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

// Direct Supabase configuration for Lovable
const supabaseUrl = 'https://zedewynjmeyhbjysnxld.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplZGV3eW5qbWV5aGJqeXNueGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNjQ3OTcsImV4cCI6MjA2NDY0MDc5N30.AHawgYUm8V74I_LoLbU2HUmOwV3A35cvL-QTJ-ZVuyA'

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})
