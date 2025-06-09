
const NeuralBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="neural-bg absolute inset-0" />
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-clura-400/20 to-transparent animate-neural-wave"
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + i}s`
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  );
};

export default NeuralBackground;
