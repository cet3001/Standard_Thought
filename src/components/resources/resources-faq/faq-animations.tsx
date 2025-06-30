
const FAQAnimations = () => {
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
      
      @keyframes tagGlow {
        0%, 100% {
          filter: drop-shadow(0 0 5px rgba(248, 231, 28, 0.6));
        }
        50% {
          filter: drop-shadow(0 0 12px rgba(248, 231, 28, 0.9)) drop-shadow(0 0 20px rgba(248, 231, 28, 0.4));
        }
      }
    `}</style>
  );
};

export default FAQAnimations;
