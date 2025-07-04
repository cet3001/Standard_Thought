-- Create guides table for dynamic guide management
CREATE TABLE public.guides (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  bullets TEXT[] DEFAULT '{}',
  price DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  is_active BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  file_path TEXT,
  file_name TEXT,
  created_by UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.guides ENABLE ROW LEVEL SECURITY;

-- Create policies for guide access
CREATE POLICY "Guides are publicly readable when active" 
ON public.guides 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Admins can manage all guides" 
ON public.guides 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() 
    AND profiles.role = 'admin'
  )
);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_guides_updated_at
BEFORE UPDATE ON public.guides
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for performance
CREATE INDEX idx_guides_active_sort ON public.guides (is_active, sort_order);
CREATE INDEX idx_guides_created_by ON public.guides (created_by);