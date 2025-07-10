
// Supabase Client
// Purpose: Links our app to Supabase using Vite env vars.
// Why: Keeps secrets out the repo and lets us swap keys without stress.
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validate required environment variables
if (!SUPABASE_URL) {
  throw new Error('VITE_SUPABASE_URL is required but missing from environment variables')
}

if (!SUPABASE_ANON_KEY) {
  throw new Error('VITE_SUPABASE_ANON_KEY is required but missing from environment variables')
}

const supabaseUrl = SUPABASE_URL
const supabaseKey = SUPABASE_ANON_KEY

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})
