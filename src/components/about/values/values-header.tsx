
const ValuesHeader = () => {
  return (
    <div className="text-center mb-16">
      <div className="relative mb-6">
        <h2 
          className="text-4xl font-bold text-[#0A0A0A] dark:text-brand-cream relative z-10"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            transform: 'rotate(-0.5deg)'
          }}
        >
          Standard Thought{' '}
          <span 
            className="relative inline-block"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFFF00 75%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '900',
              transform: 'rotate(-1deg)',
              display: 'inline-block'
            }}
          >
            Codes
          </span>
          .
        </h2>
        {/* Spray-paint/torn-paper effect */}
        <div 
          className="absolute -top-2 -left-4 -right-4 -bottom-2 opacity-30 z-0"
          style={{
            background: 'linear-gradient(45deg, transparent 40%, #FFD700/20 42%, #FFD700/20 58%, transparent 60%)',
            transform: 'rotate(-1deg) skew(-2deg)',
            borderRadius: '20px 40px 30px 50px'
          }}
        ></div>
      </div>
      <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto mb-8">
        These ain't your typical self-help mantras. These are the mental blueprints that separate 
        those who break through from those who stay stuck. This is how we rewire the game.
      </p>
      <div className="bg-[#247EFF]/10 border border-[#247EFF]/20 rounded-2xl p-6 max-w-3xl mx-auto">
        <p className="text-lg text-[#247EFF] font-medium">
          💡 <strong>How to Lock These In:</strong> Screenshot this page and make it your mental reset button. 
          When doubt creeps in or life hits different, come back to these codes and keep pushing.
        </p>
      </div>
    </div>
  );
};

export default ValuesHeader;
