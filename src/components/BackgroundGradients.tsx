
const BackgroundGradients = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#05090e] via-[#101c29] to-[#040a14] transition-all duration-1000" />
      {/* Main Halo Glow */}
      <div className="absolute left-[-30vw] top-[-25vh] animate-bg-float pointer-events-none">
        <div className="w-[1200px] h-[1200px] bg-[#45aaff] opacity-[0.38] rounded-full blur-[170px]" />
      </div>
      {/* Second Halo Glow */}
      <div className="absolute right-[-18vw] top-[5vh] animate-bg-float2 pointer-events-none">
        <div className="w-[950px] h-[900px] bg-[#2196f3] opacity-[0.25] rounded-full blur-[140px]" />
      </div>
      {/* Lower Left Halo */}
      <div className="absolute left-[-15vw] bottom-[-30vh] animate-bg-float3 pointer-events-none">
        <div className="w-[850px] h-[800px] bg-[#00baff] opacity-[0.22] rounded-full blur-[120px]" />
      </div>
      {/* Bottom Right Small Accent */}
      <div className="absolute right-[-7vw] bottom-[-12vh] animate-bg-float4 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#40bbff] opacity-[0.18] rounded-full blur-[100px]" />
      </div>
      <style>
        {`
        @keyframes bg-float {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -25px) scale(1.02);}
          66% { transform: translate(-24px, 36px) scale(0.97);}
        }
        @keyframes bg-float2 {
          0%, 100% { transform: translate(0px, 0px) scale(1);}
          40% { transform: translate(-28px, 18px) scale(0.98);}
          80% { transform: translate(22px, -20px) scale(1.02);}
        }
        @keyframes bg-float3 {
          0%, 100% { transform: translate(0px, 0px) scale(1);}
          35% { transform: translate(34px, -18px) scale(1.05);}
          71% { transform: translate(-21px, 24px) scale(0.96);}
        }
        @keyframes bg-float4 {
          0%, 100% { transform: translate(0px, 0px) scale(1);}
          25% { transform: translate(-12px, 20px) scale(1.01);}
          84% { transform: translate(13px, -16px) scale(0.98);}
        }
        .animate-bg-float { animation: bg-float 20s ease-in-out infinite; }
        .animate-bg-float2 { animation: bg-float2 28s ease-in-out infinite; }
        .animate-bg-float3 { animation: bg-float3 32s ease-in-out infinite; }
        .animate-bg-float4 { animation: bg-float4 38s ease-in-out infinite; }
        `}
      </style>
    </div>
  );
};

export default BackgroundGradients;
