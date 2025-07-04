interface UrbanBackgroundProps {
  textureImageUrl?: string;
}

export const UrbanBackground = ({ textureImageUrl }: UrbanBackgroundProps) => {
  return (
    <div className="fixed inset-0 -z-50" aria-hidden="true">
      {textureImageUrl && (
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${textureImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
    </div>
  );
};