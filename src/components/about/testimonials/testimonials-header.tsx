
const TestimonialsHeader = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
        Real People. Real Results.{" "}
        <span 
          className="font-black"
          style={{ 
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'pearlescent 3s ease-in-out infinite'
          }}
        >
          Real Talk.
        </span>
      </h2>
      <p className="text-xl text-white/80 max-w-2xl mx-auto">
        See what happens when you stop settling for average
      </p>

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
      `}</style>
    </div>
  );
};

export default TestimonialsHeader;
