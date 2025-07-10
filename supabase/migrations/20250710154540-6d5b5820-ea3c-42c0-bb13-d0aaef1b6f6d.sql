-- Remove hardcoded admin email from is_admin_user function for security
-- This ensures admin access is only granted through proper role assignment in profiles table

CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS BOOLEAN AS $$
DECLARE
    user_role public.user_role;
BEGIN
    -- Only check if user has admin role in profiles table
    -- No more hardcoded email exceptions
    SELECT role INTO user_role 
    FROM public.profiles 
    WHERE id = auth.uid();
    
    RETURN (user_role = 'admin');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Ensure the admin user still has proper access by updating their profile
-- This will only work if the admin email already exists in profiles table
UPDATE public.profiles 
SET role = 'admin' 
WHERE email = 'cet3001@gmail.com' AND role != 'admin';

-- Add index for better performance on role-based queries
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role) WHERE role = 'admin';