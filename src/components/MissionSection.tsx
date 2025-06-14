
const MissionSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-cyan-900/20 opacity-50" />
      <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white leading-tight mb-8">
            "Revolutionizing how we{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 font-normal">
              discover and connect
            </span>{' '}
            with people worldwide."
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Making people discovery effortless, intelligent, and accessible for everyone through the power of artificial intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
