
-- Create a secure function to get active subscriber count
CREATE OR REPLACE FUNCTION public.active_subscriber_count()
RETURNS bigint
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT count(*) FROM "Subscribers" WHERE unsubscribed IS NOT TRUE;
$$;

-- Grant execute permissions to all users
GRANT EXECUTE ON FUNCTION public.active_subscriber_count() TO anon, authenticated;
