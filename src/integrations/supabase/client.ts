
// Supabase Client
// Purpose: Connects the app to Supabase using env vars.
// Why: Keeps secrets out of the repo and makes swapping keys painless.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Use the hardcoded values since env vars aren't working in Lovable preview
const SUPABASE_URL = 'https://zedewynjmeyhbjysnxld.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplZGV3eW5qbWV5aGJqeXNueGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNjQ3OTcsImV4cCI6MjA2NDY0MDc5N30.AHawgYUm8V74I_LoLbU2HUmOwV3A35cvL-QTJ-ZVuyA';

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
