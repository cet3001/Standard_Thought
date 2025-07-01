
// Supabase Client
// Purpose: Links our app to Supabase using Vite env vars.
// Why: Keeps secrets out the repo and lets us swap keys without stress.
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

// Provide fallback values to prevent app crashes when env vars are missing
const fallbackUrl = 'https://placeholder.supabase.co'
const fallbackKey = 'placeholder-key'

if (!SUPABASE_URL) {
  console.warn('VITE_SUPABASE_URL is missing. Using fallback. App functionality may be limited.')
}

if (!SUPABASE_ANON_KEY) {
  console.warn('VITE_SUPABASE_ANON_KEY is missing. Using fallback. App functionality may be limited.')
}

export const supabase = createClient<Database>(
  SUPABASE_URL || fallbackUrl,
  SUPABASE_ANON_KEY || fallbackKey
)
