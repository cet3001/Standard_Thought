-- Fix security linter warnings

-- 1. Fix function search path mutable warning for get_public_comments
DROP FUNCTION IF EXISTS public.get_public_comments(uuid);

CREATE OR REPLACE FUNCTION public.get_public_comments(post_id uuid)
RETURNS TABLE (
  id uuid,
  blog_post_id uuid,
  created_at timestamptz,
  author_name text,
  content text
) 
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT 
    c.id,
    c.blog_post_id,
    c.created_at,
    c.author_name,
    c.content
  FROM public.comments c
  WHERE c.blog_post_id = post_id 
    AND c.approved = true
  ORDER BY c.created_at DESC;
$$;

-- Grant execute permission to authenticated and anonymous users
GRANT EXECUTE ON FUNCTION public.get_public_comments(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_public_comments(uuid) TO anon;

-- 2. Check and fix any other functions that might have search_path issues
-- Update existing functions to have proper search_path settings
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS boolean
LANGUAGE plpgsql
STABLE 
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    user_role public.user_role;
BEGIN
    -- Only check if user has admin role in profiles table
    SELECT role INTO user_role 
    FROM public.profiles 
    WHERE id = auth.uid();
    
    RETURN (user_role = 'admin');
END;
$$;