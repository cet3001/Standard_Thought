
// Supabase Client
// Purpose: Links our app to Supabase. We pull creds from env so Lovable and local dev stay in sync.
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

// Grab credentials from environment. If they aren't set, log a warning.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? ''
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? ''

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase env vars missing. Check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})
