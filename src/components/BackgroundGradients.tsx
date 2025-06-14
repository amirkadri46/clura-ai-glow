
const BackgroundGradients = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      
      {/* Large blue gradient orb */}
      <div className="absolute top-0 left-0 w-[600%] h-[600%]">
        <div className="absolute top-1/6 left-1/6 w-[1800px] h-[1800px] bg-gradient-radial from-blue-500/50 via-blue-400/30 to-transparent rounded-full blur-3xl" style={{
          animation: 'float 100s ease-in-out infinite'
        }}></div>
      </div>
      
      {/* Large purple gradient orb */}
      <div className="absolute top-0 right-0 w-[600%] h-[600%]">
        <div className="absolute top-1/5 right-1/5 w-[1600px] h-[1600px] bg-gradient-radial from-purple-500/45 via-purple-400/25 to-transparent rounded-full blur-3xl" style={{
          animation: 'float 130s ease-in-out infinite reverse'
        }}></div>
      </div>
      
      {/* Large cyan/teal gradient orb */}
      <div className="absolute bottom-0 left-0 w-[600%] h-[600%]">
        <div className="absolute bottom-1/5 left-1/2 w-[1400px] h-[1400px] bg-gradient-radial from-cyan-500/40 via-teal-400/20 to-transparent rounded-full blur-3xl" style={{
          animation: 'float 160s ease-in-out infinite'
        }}></div>
      </div>
      
      {/* Additional pink accent */}
      <div className="absolute top-1/2 right-1/3 w-[1200px] h-[1200px] bg-gradient-radial from-pink-500/35 via-pink-400/18 to-transparent rounded-full blur-3xl" style={{
        animation: 'float 120s ease-in-out infinite reverse'
      }}></div>
      
      {/* Additional yellow accent */}
      <div className="absolute bottom-1/3 left-1/4 w-[1000px] h-[1000px] bg-gradient-radial from-yellow-500/30 via-orange-400/15 to-transparent rounded-full blur-3xl" style={{
        animation: 'float 140s ease-in-out infinite'
      }}></div>

      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) translateX(0px) scale(1);
            }
            25% {
              transform: translateY(-40px) translateX(30px) scale(1.15);
            }
            50% {
              transform: translateY(20px) translateX(-20px) scale(0.9);
            }
            75% {
              transform: translateY(-10px) translateX(40px) scale(1.05);
            }
          }
        `}
      </style>
    </div>
  );
};

export default BackgroundGradients;
