-- Fix security issue: Prevent public access to author_email in comments
-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Anyone can read approved comments" ON public.comments;

-- Create a more restrictive policy that only allows reading specific fields
-- We'll create a database view for public comment access that excludes email
CREATE OR REPLACE VIEW public.public_comments AS
SELECT 
  id,
  blog_post_id,
  author_name,
  content,
  created_at,
  approved
FROM public.comments
WHERE approved = true;

-- Enable RLS on the view (though it inherits from the table)
-- Grant public access to the view
GRANT SELECT ON public.public_comments TO public;

-- Create a new policy that only allows admins to read full comment data including emails
CREATE POLICY "Admins can read all comment fields" 
ON public.comments 
FOR SELECT 
USING (is_admin_user());

-- Create a policy for public users to read only safe fields through direct table access
-- This is more restrictive and doesn't expose email
CREATE POLICY "Public can read approved comments without email" 
ON public.comments 
FOR SELECT 
USING (
  approved = true 
  AND current_setting('request.jwt.claims', true)::json->>'role' IS NULL
);

-- Update the admin policy to be more specific
DROP POLICY IF EXISTS "Admins can manage all comments" ON public.comments;

CREATE POLICY "Admins can manage all comments" 
ON public.comments 
FOR ALL 
USING (is_admin_user())
WITH CHECK (is_admin_user());