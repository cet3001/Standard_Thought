
-- Create RLS policy to allow admins to read subscriber counts
CREATE POLICY "Admins can read subscriber counts"
ON public."Subscribers"
FOR SELECT
USING (
  auth.jwt() ->> 'email' = 'cet3001@gmail.com'
  OR EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- Enable RLS on the Subscribers table if not already enabled
ALTER TABLE public."Subscribers" ENABLE ROW LEVEL SECURITY;
