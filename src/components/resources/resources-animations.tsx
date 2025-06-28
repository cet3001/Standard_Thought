
const ResourcesAnimations = () => {
  return (
    <style>{`
      @keyframes pearlescent {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      @keyframes float {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-15px) rotate(180deg);
        }
      }
    `}</style>
  );
};

export default ResourcesAnimations;
