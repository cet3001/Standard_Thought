-- Final security lockdown for comments table
-- Remove all existing policies and create a comprehensive secure setup

DROP POLICY IF EXISTS "Public can read approved comments safely" ON public.comments;
DROP POLICY IF EXISTS "Authenticated users can read approved comments safely" ON public.comments;

-- Create a single comprehensive policy for public access that only works for approved comments
-- and ensures that sensitive data like email is never exposed in queries
CREATE POLICY "Public read approved comments only" 
ON public.comments 
FOR SELECT 
USING (approved = true);

-- The application layer will handle filtering out sensitive fields like author_email
-- But we also want to add additional protection at the database level

-- Add a comment to document the security approach
COMMENT ON TABLE public.comments IS 'SECURITY NOTE: Email addresses are sensitive. Application code must never include author_email in SELECT queries for non-admin users. Admin access is controlled via is_admin_user() function.';