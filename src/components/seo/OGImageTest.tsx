import React from 'react';

interface OGImageTestProps {
  title: string;
  category?: string;
}

/**
 * Component to test and preview OG image generation
 * This shows how the dynamic OG images will look when shared on social media
 */
export const OGImageTest: React.FC<OGImageTestProps> = ({ title, category }) => {
  const ogImageUrl = `https://zedewynjmeyhbjysnxld.supabase.co/functions/v1/generate-og-image?title=${encodeURIComponent(title)}&category=${encodeURIComponent(category || '')}`;

  return (
    <div className="border rounded-lg p-4 max-w-md">
      <h3 className="font-semibold mb-2">OG Image Preview</h3>
      <img 
        src={ogImageUrl} 
        alt={`OG Image for: ${title}`}
        className="w-full rounded border"
        style={{ aspectRatio: '1200/630' }}
      />
      <p className="text-sm text-muted-foreground mt-2">
        Title: {title}
        {category && <><br />Category: {category}</>}
      </p>
      <a 
        href={ogImageUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline text-sm"
      >
        View Full Size
      </a>
    </div>
  );
};

export default OGImageTest;