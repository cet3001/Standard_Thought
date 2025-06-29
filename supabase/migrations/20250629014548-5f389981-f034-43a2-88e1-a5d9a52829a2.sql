
-- Drop existing policies that use hardcoded email
DROP POLICY IF EXISTS "Admins can upload guides" ON storage.objects;
DROP POLICY IF EXISTS "Admins can update guides" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete guides" ON storage.objects;

-- Create a security definer function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS BOOLEAN AS $$
BEGIN
  -- Check if user has admin role in profiles table OR is the specific admin email
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() 
    AND (role = 'admin' OR (SELECT auth.jwt() ->> 'email') = 'cet3001@gmail.com')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Create new admin policies using the security definer function
CREATE POLICY "Admins can upload guides" 
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'guides' AND public.is_admin_user());

CREATE POLICY "Admins can update guides"
ON storage.objects FOR UPDATE
USING (bucket_id = 'guides' AND public.is_admin_user());

CREATE POLICY "Admins can delete guides"
ON storage.objects FOR DELETE
USING (bucket_id = 'guides' AND public.is_admin_user());

-- Also update the existing read policy to use the same function
DROP POLICY IF EXISTS "Authenticated users can view guides" ON storage.objects;
CREATE POLICY "Authenticated users can view guides"
ON storage.objects FOR SELECT
USING (bucket_id = 'guides' AND auth.role() = 'authenticated');
