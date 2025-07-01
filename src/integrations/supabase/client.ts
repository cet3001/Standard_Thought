
// Supabase Client
// Purpose: Links our app to Supabase using Vite env vars.
// Why: Keeps secrets out the repo and lets us swap keys without stress.
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!SUPABASE_URL) {
  throw new Error('VITE_SUPABASE_URL is missing. Check your .env setup.')
}

if (!SUPABASE_ANON_KEY) {
  throw new Error('VITE_SUPABASE_ANON_KEY is missing. Check your .env setup.')
}

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
)
