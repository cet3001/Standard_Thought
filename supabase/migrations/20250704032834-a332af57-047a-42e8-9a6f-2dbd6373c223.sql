-- Create table for storing builder stories/testimonials
CREATE TABLE public.builder_stories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  city_area TEXT NOT NULL,
  quote TEXT NOT NULL,
  avatar_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (but make it publicly readable)
ALTER TABLE public.builder_stories ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Builder stories are publicly readable" 
ON public.builder_stories 
FOR SELECT 
USING (is_active = true);

-- Create policy for authenticated users to insert stories (for admins)
CREATE POLICY "Authenticated users can insert builder stories" 
ON public.builder_stories 
FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

-- Create policy for authenticated users to update stories (for admins)
CREATE POLICY "Authenticated users can update builder stories" 
ON public.builder_stories 
FOR UPDATE 
USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_builder_stories_updated_at
BEFORE UPDATE ON public.builder_stories
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample builder stories
INSERT INTO public.builder_stories (name, city_area, quote, avatar_url) VALUES 
('Marcus', 'Detroit, MI', 'I went from overthinking every opportunity to just taking action. The mindset shift changed everything for me.', '/lovable-uploads/1336e121-a69f-44f5-887c-ae15280ab9b0.png'),
('Jasmine', 'Atlanta, GA', 'These tools helped me break out of that scarcity mindset I inherited. Now I see possibilities everywhere.', '/lovable-uploads/21728a70-c6c7-4f2f-8689-d74741cb605b.png'),
('Carlos', 'Phoenix, AZ', 'Finally learned to flip "I can''t afford it" to "How can I afford it?" Real game changer mentality.', '/lovable-uploads/319b9311-4018-46d0-9292-5c7220a671c7.png'),
('Keisha', 'Chicago, IL', 'The self-talk flip exercise literally rewired how I think about challenges. I''m unstoppable now.', '/lovable-uploads/44b44c48-a7dc-4d1e-8480-8e3d666ede2e.png'),
('David', 'Houston, TX', 'I used to think success was for other people. Now I know it starts with how you think about yourself.', '/lovable-uploads/4d0b232a-9f5f-4c60-9a61-04047f4a0a45.png'),
('Anaya', 'Oakland, CA', 'Money trauma reset helped me understand why I sabotaged every opportunity. Finally building for real.', '/lovable-uploads/4fd61de9-3d13-4e62-8cd6-4c10748ee279.png'),
('Tony', 'Brooklyn, NY', 'Learned that mindset ain''t just positive thinking—it''s about building systems that actually work.', '/lovable-uploads/5a73c6c8-6cb4-4b24-bc21-793d647712be.png'),
('Maria', 'Miami, FL', 'The vision board blueprint turned my dreams into actual plans. No more just wishing, now I''m building.', '/lovable-uploads/94cc6adb-cf25-4c3e-b059-ee67f8401562.png'),
('Jerome', 'Memphis, TN', 'These codes became my daily mantras. Level up over easy changed how I approach every situation.', '/lovable-uploads/a8faab87-8319-4fa0-ae53-35597c6f8fc5.png'),
('Aaliyah', 'Los Angeles, CA', 'Finally understood that my mindset was my biggest asset. Everything shifted when I started investing in it.', '/lovable-uploads/b293ef64-21e7-478b-aad6-46b9df35a06d.png'),
('Rico', 'Philadelphia, PA', 'From broke mindset to builder mindset. The tools here gave me the framework I needed to flip my life.', '/lovable-uploads/b4e3b459-4253-40a2-bc9a-74ec02d85e18.png'),
('Zara', 'Seattle, WA', 'Stopped making excuses and started making moves. The mindset reset was exactly what I needed.', '/lovable-uploads/c32d557b-f984-4e31-8e74-82fb6c5fd20c.png'),
('Andre', 'New Orleans, LA', 'These frameworks taught me that every setback is setup for a comeback. Changed my whole perspective.', '/lovable-uploads/120d4385-153e-4704-ad3a-0f64d8a24a04.png'),
('Simone', 'Las Vegas, NV', 'Learned to see opportunities where I used to see obstacles. The mindset tools are pure gold.', '/lovable-uploads/1928b2bf-f534-4c1f-982f-bf3cf95d5005.png'),
('Malik', 'Dallas, TX', 'Finally broke the cycle of thinking small. Now every move I make is about building something bigger.', '/lovable-uploads/4696326a-6203-4b1e-b0bc-e1ccc29263be.png');