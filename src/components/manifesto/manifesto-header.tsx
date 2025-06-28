
export const ManifestoHeader = () => {
  return (
    <div className="text-center mb-12 relative">
      {/* Subtle texture behind heading */}
      <div className="absolute inset-0 opacity-[0.06] bg-[conic-gradient(from_45deg,_transparent_60%,_rgba(0,0,0,0.4)_80%,_transparent_100%)] bg-[length:20px_20px]"></div>
      
      <h2 className="text-4xl md:text-5xl font-black mb-8 text-brand-black dark:text-brand-cream relative z-10">
        The Real About <span className="text-[#247EFF] relative">
          Building Wealth
          
          {/* Enhanced handwritten underline effect */}
          <div 
            className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-72 h-4 opacity-70"
            style={{
              background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 350 25'%3E%3Cpath d='M8 18 Q80 8 170 15 Q260 22 342 12' stroke='%23247EFF' stroke-width='4' fill='none' stroke-linecap='round'/%3E%3Cpath d='M12 20 Q85 10 175 17 Q265 24 340 14' stroke='%23247EFF' stroke-width='2' fill='none' stroke-linecap='round' opacity='0.6'/%3E%3C/svg%3E")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          ></div>
        </span>
        
        {/* Street-style corner tear effect */}
        <div className="absolute top-2 right-2 w-6 h-6 bg-[#FFD700]/20 transform rotate-45 translate-x-3 -translate-y-3"></div>
      </h2>
    </div>
  );
};
