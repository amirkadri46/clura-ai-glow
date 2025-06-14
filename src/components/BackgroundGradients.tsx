
const BackgroundGradients = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Dark base background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
      
      {/* Flowing blue gradients */}
      <div className="absolute inset-0">
        {/* Main blue flow - top left */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[80%] bg-gradient-to-br from-blue-500/30 via-blue-600/20 to-transparent rounded-full blur-3xl animate-pulse" />
        </div>
        
        {/* Secondary blue flow - center right */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-[10%] right-[-30%] w-[70%] h-[90%] bg-gradient-to-bl from-blue-400/25 via-cyan-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Tertiary blue accent - bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full">
          <div className="absolute bottom-[-40%] left-[-20%] w-[80%] h-[60%] bg-gradient-to-t from-blue-600/20 via-indigo-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        </div>
      </div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </div>
  );
};

export default BackgroundGradients;
