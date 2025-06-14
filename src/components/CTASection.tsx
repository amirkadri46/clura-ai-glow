
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  const handleStartSearching = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/search');
    } else {
      navigate('/login');
    }
  };

  return (
    <section className="py-20 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-8">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of professionals who trust our AI-powered search
          </p>
          <button 
            onClick={handleStartSearching}
            className="relative px-8 py-4 text-lg font-medium bg-black hover:bg-gray-900 text-white rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg overflow-hidden group"
          >
            <span className="relative z-10">Start Searching People</span>
            <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 opacity-75">
              <div className="absolute inset-[2px] bg-black rounded-lg"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
