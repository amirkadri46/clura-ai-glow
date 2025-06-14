
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
        <button 
          onClick={handleStartSearching}
          className="neuro-button px-8 py-4 text-lg font-medium text-foreground hover:text-clura-400 transform hover:scale-105 transition-all duration-300"
        >
          Start Searching People
        </button>
      </div>
    </section>
  );
};

export default CTASection;
