
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
      <div className="relative max-w-3xl mx-auto">
        {/* Background with street-style texture */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 via-[#FFA500]/15 to-[#FFD700]/20 rounded-2xl"
          style={{
            transform: 'rotate(-0.5deg)',
            borderRadius: '25px 15px 30px 20px'
          }}
        ></div>
        <div className="relative bg-[#0A0A0A]/90 dark:bg-brand-cream/90 border-2 border-[#FFD700]/60 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="text-3xl">💡</div>
            <div>
              <h3 className="text-xl font-bold text-[#FFD700] mb-2">How to Lock These In:</h3>
              <p className="text-lg text-brand-cream dark:text-[#0A0A0A] font-medium leading-relaxed">
                Screenshot this page and make it your mental reset button. 
                When doubt creeps in or life hits different, come back to these codes and keep pushing.
              </p>
            </div>
          </div>
          {/* Graffiti-style accent */}
          <div 
            className="absolute -top-1 -right-1 w-6 h-6 bg-[#FFD700] rounded-full opacity-80"
            style={{
              transform: 'rotate(15deg)',
              boxShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ValuesHeader;
