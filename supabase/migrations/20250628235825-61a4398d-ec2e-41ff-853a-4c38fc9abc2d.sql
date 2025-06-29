
-- Create a storage bucket for guides and resources
INSERT INTO storage.buckets (id, name, public)
VALUES ('guides', 'guides', false);

-- Create RLS policies for the guides bucket
-- Allow authenticated users to read files
CREATE POLICY "Authenticated users can view guides"
ON storage.objects FOR SELECT
USING (bucket_id = 'guides' AND auth.role() = 'authenticated');

-- Allow admins to upload files
CREATE POLICY "Admins can upload guides" 
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'guides' AND auth.jwt() ->> 'email' = 'cet3001@gmail.com');

-- Allow admins to update files
CREATE POLICY "Admins can update guides"
ON storage.objects FOR UPDATE
USING (bucket_id = 'guides' AND auth.jwt() ->> 'email' = 'cet3001@gmail.com');

-- Allow admins to delete files  
CREATE POLICY "Admins can delete guides"
ON storage.objects FOR DELETE
USING (bucket_id = 'guides' AND auth.jwt() ->> 'email' = 'cet3001@gmail.com');

-- Create a table to track guide downloads
CREATE TABLE public.guide_downloads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email TEXT NOT NULL,
  guide_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  downloaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_agent TEXT,
  ip_address INET
);

-- Enable RLS on guide_downloads
ALTER TABLE public.guide_downloads ENABLE ROW LEVEL SECURITY;

-- Allow users to view their own downloads
CREATE POLICY "Users can view their own downloads"
ON public.guide_downloads FOR SELECT
USING (user_email = auth.jwt() ->> 'email');

-- Allow system to insert download records
CREATE POLICY "System can insert download records"
ON public.guide_downloads FOR INSERT
WITH CHECK (true);
