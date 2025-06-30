
const ExploreMoreAnimations = () => {
  return (
    <style>{`
      @keyframes streetFloat {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
        }
        25% {
          transform: translateY(-3px) rotate(0.5deg);
        }
        50% {
          transform: translateY(-2px) rotate(-0.5deg);
        }
        75% {
          transform: translateY(-4px) rotate(0.3deg);
        }
      }
    `}</style>
  );
};

export default ExploreMoreAnimations;
