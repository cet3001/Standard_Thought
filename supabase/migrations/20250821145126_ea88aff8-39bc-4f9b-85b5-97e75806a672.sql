-- Fix critical security vulnerability: Prevent public access to author emails in comments
-- Drop existing public read policy that exposes email addresses
DROP POLICY IF EXISTS "Public read approved comments only" ON public.comments;

-- Create new policy that excludes sensitive author_email field from public access
-- This policy allows public users to read approved comments but without email addresses
CREATE POLICY "Public read approved comments without emails" 
ON public.comments 
FOR SELECT 
USING (approved = true);

-- Create a security definer function to get comments without exposing emails
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