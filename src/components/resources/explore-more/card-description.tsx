
interface CardDescriptionProps {
  description: string;
}

const CardDescription = ({ description }: CardDescriptionProps) => {
  return (
    <p 
      className="text-brand-cream/95 text-sm leading-relaxed mb-4 font-medium" 
      style={{
        textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
        color: 'rgba(248, 248, 242, 0.95)',
        lineHeight: '1.6'
      }}
    >
      {description}
    </p>
  );
};

export default CardDescription;
