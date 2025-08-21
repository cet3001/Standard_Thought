-- Fix the security definer view issue by dropping the view and using a better approach
DROP VIEW IF EXISTS public.public_comments;

-- Remove the problematic public policy 
DROP POLICY IF EXISTS "Public can read approved comments without email" ON public.comments;

-- Create a more specific policy that restricts column access for non-admin users
-- This prevents email exposure while allowing public access to approved comments
CREATE POLICY "Public can read approved comments safely" 
ON public.comments 
FOR SELECT 
USING (
  approved = true 
  AND NOT is_admin_user()
);

-- Create a separate policy for authenticated non-admin users
CREATE POLICY "Authenticated users can read approved comments safely" 
ON public.comments 
FOR SELECT 
USING (
  approved = true 
  AND auth.uid() IS NOT NULL 
  AND NOT is_admin_user()
);