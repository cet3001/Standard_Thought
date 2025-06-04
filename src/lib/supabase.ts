
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type NewsletterSignup = {
  id?: string
  email: string
  source: 'newsletter' | 'builder-access' | 'footer'
  created_at?: string
  is_active?: boolean
}
