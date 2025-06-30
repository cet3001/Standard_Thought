
interface CardIconProps {
  IconComponent: any;
  color: string;
}

const CardIcon = ({ IconComponent, color }: CardIconProps) => {
  return (
    <div className="relative z-10 p-6 pb-4">
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-1"
        style={{
          background: 'transparent',
          borderColor: `${color}80`,
          boxShadow: `
            inset 2px 2px 4px rgba(255,255,255,0.1),
            inset -2px -2px 4px rgba(0,0,0,0.3),
            0 4px 12px ${color}30,
            inset 0 0 10px rgba(0,0,0,0.1)
          `,
          transform: 'rotate(-2deg)',
          clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)'
        }}
      >
        <IconComponent 
          className="w-8 h-8 drop-shadow-lg" 
          style={{ 
            color: color,
            filter: `
              drop-shadow(1px 1px 2px rgba(0,0,0,0.5))
              drop-shadow(0 0 4px ${color}40)
            `,
            strokeWidth: 2.5,
            opacity: 1
          }}
        />
      </div>
    </div>
  );
};

export default CardIcon;
