
interface CardTitleProps {
  title: string;
  color: string;
}

const CardTitle = ({ title, color }: CardTitleProps) => {
  return (
    <h3 
      className="text-brand-cream font-black text-xl mb-3 leading-tight uppercase tracking-wide transform -rotate-1 relative group/title"
      style={{
        fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
        textShadow: `
          3px 3px 0px rgba(0,0,0,0.9), 
          5px 5px 0px rgba(0,0,0,0.4),
          2px 2px 0px ${color}50,
          -1px -1px 0px rgba(0,0,0,0.6)
        `,
        color: color,
        fontWeight: '900',
        letterSpacing: '1px'
      }}
    >
      {title}
      {/* Hover underline highlight */}
      <div 
        className="absolute -bottom-1 left-0 right-0 h-1 opacity-0 group-hover/title:opacity-80 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent 5%, #FFD700 15%, #F4D03F 30%, #DDBF47 50%, #D4AF37 70%, #FFD700 85%, transparent 95%)`,
          borderRadius: '20px 15px 25px 10px',
          transform: 'rotate(1deg) skew(-1deg)',
          filter: 'blur(0.3px)',
          boxShadow: '0 0 8px rgba(255, 215, 0, 0.4)'
        }}
      />
    </h3>
  );
};

export default CardTitle;
