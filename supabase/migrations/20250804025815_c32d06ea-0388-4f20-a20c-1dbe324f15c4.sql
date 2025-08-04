-- Fix function search path security issue
-- Update the security check function with proper search path

DROP FUNCTION IF EXISTS public.security_check_leaked_passwords();

CREATE OR REPLACE FUNCTION public.security_check_leaked_passwords()
RETURNS text
LANGUAGE sql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT 'Leaked password protection should be enabled in Supabase dashboard at: https://supabase.com/dashboard/project/zedewynjmeyhbjysnxld/settings/auth'::text;
$$;