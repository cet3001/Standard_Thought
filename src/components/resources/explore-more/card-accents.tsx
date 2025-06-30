
import { getCornerAccentStyles, getBottomAccentStyles, getHoverGlowStyles, getShadowStyles } from './card-styles';

interface CardAccentsProps {
  color: string;
}

const CardAccents = ({ color }: CardAccentsProps) => {
  return (
    <>
      {/* Street art corner accent with torn edge */}
      <div 
        className="absolute top-0 right-0 w-16 h-16 opacity-40"
        style={getCornerAccentStyles(color)}
      />

      {/* Enhanced street art bottom accent with texture */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 opacity-70"
        style={getBottomAccentStyles(color)}
      />

      {/* Enhanced hover glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"
        style={getHoverGlowStyles(color)}
      />

      {/* Scrapbook-style torn edges shadow */}
      <div 
        className="absolute -inset-1 -z-10 opacity-60"
        style={getShadowStyles()}
      />
    </>
  );
};

export default CardAccents;
