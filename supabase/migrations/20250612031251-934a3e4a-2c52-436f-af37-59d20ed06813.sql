
-- Update the notify_new_subscriber function to include proper search_path setting
CREATE OR REPLACE FUNCTION public.notify_new_subscriber()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Log the new subscriber for debugging
  RAISE LOG 'New subscriber added: % (ID: %)', NEW.email, NEW.id;
  
  RETURN NEW;
END;
$$;
