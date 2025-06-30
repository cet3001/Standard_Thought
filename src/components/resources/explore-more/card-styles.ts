
export const getCardStyles = (index: number) => ({
  borderRadius: '12px 20px 15px 18px',
  filter: `
    drop-shadow(4px 6px 12px rgba(0, 0, 0, 0.4))
    drop-shadow(-2px 3px 8px rgba(0, 0, 0, 0.2))
    drop-shadow(6px -2px 10px rgba(0, 0, 0, 0.15))
  `,
  animation: `streetFloat 4s ease-in-out infinite ${index * 0.7}s`,
  border: '2px solid rgba(255, 215, 0, 0.2)',
  clipPath: `polygon(
    0% 2%, 3% 0%, 97% 0%, 100% 3%, 
    100% 95%, 98% 100%, 2% 100%, 0% 97%
  )`
});

export const getCornerAccentStyles = (color: string) => ({
  background: `conic-gradient(from 45deg, ${color}60 0deg, transparent 120deg)`,
  clipPath: 'polygon(65% 0%, 100% 0%, 100% 45%, 85% 35%)',
  filter: 'blur(1px)'
});

export const getBottomAccentStyles = (color: string) => ({
  background: `
    linear-gradient(90deg, 
      transparent 0%, 
      ${color}80 20%, 
      ${color} 50%, 
      ${color}80 80%, 
      transparent 100%
    ),
    repeating-linear-gradient(
      45deg,
      rgba(0,0,0,0.1) 0px,
      rgba(0,0,0,0.1) 1px,
      transparent 1px,
      transparent 2px
    )
  `,
  filter: 'blur(0.5px)',
  clipPath: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)'
});

export const getHoverGlowStyles = (color: string) => ({
  background: `
    radial-gradient(circle at center, ${color}40 0%, transparent 70%),
    repeating-conic-gradient(from 0deg at 50% 50%, 
      ${color}10 0deg, transparent 60deg)
  `
});

export const getShadowStyles = () => ({
  background: 'rgba(0, 0, 0, 0.3)',
  filter: 'blur(3px)',
  clipPath: `polygon(
    1% 3%, 4% 1%, 96% 1%, 99% 4%, 
    99% 94%, 97% 99%, 3% 99%, 1% 96%
  )`,
  transform: 'rotate(0.5deg) scale(1.02)'
});
