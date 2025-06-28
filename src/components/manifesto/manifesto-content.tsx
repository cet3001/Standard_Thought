
export const ManifestoContent = () => {
  return (
    <div className="space-y-6 text-lg leading-relaxed text-brand-black dark:text-brand-cream relative">
      {/* Additional grain texture behind text */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_2px_2px,_rgba(0,0,0,1)_1px,_transparent_0)] bg-[length:24px_24px]"></div>
      
      <p className="text-xl font-semibold relative z-10">
        <span className="relative">
          Let's keep it 100:
          {/* Enhanced underline */}
          <div 
            className="absolute -bottom-2 left-0 w-full h-3 bg-[#247EFF] opacity-25 transform -rotate-1 blur-sm"
          ></div>
        </span> Most wealth advice wasn't built for us. We're breaking cycles, flipping money trauma, and building legacy from the ground up.
      </p>
      
      <p className="relative z-10">
        This ain't about overnight success—it's about <span className="relative text-[#247EFF] font-semibold">
          street-smart moves
          {/* Enhanced handwritten circle effect */}
          <div className="absolute -inset-2 border-3 border-[#247EFF] rounded-full opacity-50 transform rotate-2 border-dashed"></div>
          <div className="absolute -inset-1 border-2 border-[#247EFF] rounded-full opacity-30 transform -rotate-1 border-dotted"></div>
        </span>, real setbacks, and stacking paper for the long haul.
      </p>

      <p className="relative z-10">
        If you're tired of fake gurus and ready for <span className="relative text-[#247EFF] font-semibold">
          blueprints that work in the real world
          {/* Enhanced highlight with texture */}
          <div className="absolute -inset-2 bg-[#247EFF] opacity-15 transform -rotate-1 -z-10 blur-sm"></div>
          <div className="absolute -inset-1 bg-[#247EFF] opacity-10 transform rotate-1 -z-10"></div>
        </span>, you're in the right spot.
      </p>

      <p className="text-xl font-bold text-[#247EFF] text-center mt-8 relative z-10">
        <span className="relative">
          Real builders. Real strategies. Real results.
          {/* Enhanced handwritten underline with multiple layers */}
          <div 
            className="absolute -bottom-3 left-0 w-full h-3 opacity-70"
            style={{
              background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 450 20'%3E%3Cpath d='M15 12 Q120 4 230 11 Q340 18 435 8' stroke='%23247EFF' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3Cpath d='M18 14 Q125 6 235 13 Q345 20 440 10' stroke='%23247EFF' stroke-width='2' fill='none' stroke-linecap='round' opacity='0.7'/%3E%3C/svg%3E")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </span>
      </p>
    </div>
  );
};
