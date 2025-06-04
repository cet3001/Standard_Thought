
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zedewynjmeyhbjysnxld.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplZGV3eW5qbWV5aGJqeXNueGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNjQ3OTcsImV4cCI6MjA2NDY0MDc5N30.AHawgYUm8V74I_LoLbU2HUmOwV3A35cvL-QTJ-ZVuyA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type NewsletterSignup = {
  id?: string
  email: string
  source: 'newsletter' | 'builder-access' | 'footer'
  created_at?: string
  is_active?: boolean
}
