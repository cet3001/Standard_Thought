
// Supabase Client
// Purpose: Links our app to Supabase. We pull creds from env so Lovable and local dev stay in sync.
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

// Use the actual Supabase project credentials directly
const supabaseUrl = 'https://zedewynjmeyhbjysnxld.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplZGV3eW5qbWV5aGJqeXNueGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNjQ3OTcsImV4cCI6MjA2NDY0MDc5N30.AHawgYUm8V74I_LoLbU2HUmOwV3A35cvL-QTJ-ZVuyA'

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})
