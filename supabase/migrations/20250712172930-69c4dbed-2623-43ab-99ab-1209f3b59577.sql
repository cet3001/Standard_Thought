-- Fix security issues identified in Security Advisor

-- Update the update_updated_at_column function with proper search_path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

-- Update the is_admin_user function with proper search_path  
CREATE OR REPLACE FUNCTION public.is_admin_user()
 RETURNS boolean
 LANGUAGE plpgsql
 STABLE 
 SECURITY DEFINER
 SET search_path = 'public'
AS $function$
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
$function$;