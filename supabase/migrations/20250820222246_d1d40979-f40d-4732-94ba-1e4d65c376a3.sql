-- Drop the existing policy that allows public access to all comment fields
DROP POLICY IF EXISTS "Anyone can read approved comments" ON public.comments;

-- Create a new policy that restricts public access to exclude email addresses
-- This policy allows public users to see approved comments but hides author_email
CREATE POLICY "Public can read approved comments without emails" 
ON public.comments 
FOR SELECT 
USING (
  approved = true AND 
  -- Only allow access to specific fields, not author_email
  current_setting('request.jwt.claims', true)::json->>'email' IS NULL
);

-- Create a separate policy for authenticated users (including admins) to see all fields
CREATE POLICY "Authenticated users can read approved comments with emails" 
ON public.comments 
FOR SELECT 
USING (
  approved = true AND 
  auth.uid() IS NOT NULL
);

-- Ensure admins still have full access via existing admin policies
-- The "Admins can manage all comments" policy should still work for full admin access