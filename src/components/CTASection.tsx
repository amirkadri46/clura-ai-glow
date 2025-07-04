
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
            className="px-8 py-4 text-lg font-medium rounded-lg mt-4"
            style={{
              background: "#1A252F",
              color: "#fff",
              border: "1px solid #89CFF0",
              boxShadow: "0 0 10px #89CFF022"
            }}
          >
            Start Searching People
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
