
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Add a utility to handle hover state for demo (could use a className utility or scoped CSS)
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'transform translate-y-0' 
        : 'transform translate-y-0 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex justify-between items-center h-16 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/70 backdrop-blur-md border border-gray-200/20 rounded-full mx-4 px-6 mt-2 mb-2' 
            : ''
        }`} style={isScrolled ? {
          borderLeftStyle: 'solid',
          borderRightStyle: 'solid',
          borderLeftWidth: '2px',
          borderRightWidth: '2px',
          borderRadius: '50px',
          borderLeftColor: 'rgba(229, 231, 235, 0.2)',
          borderRightColor: 'rgba(229, 231, 235, 0.2)'
        } : {}}>
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/78ab56d9-6ccc-48d5-8802-a52814ec56ee.png" 
              alt="Clura.ai Icon" 
              className="w-8 h-8"
            />
            <img 
              src="/lovable-uploads/b44114ab-67b3-40dd-9c6f-fb15199406d2.png" 
              alt="Clura" 
              className="h-6"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.href
                    ? isScrolled ? 'text-clura-600' : 'text-clura-400'
                    : isScrolled ? 'text-gray-700 hover:text-clura-600' : 'text-muted-foreground hover:text-foreground'
                } group`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-clura-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full login-signup-btn ${
                isScrolled ? 'text-gray-700 hover:text-white' : 'text-muted-foreground hover:text-white'
              }`}
              style={{}}
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 transform hover:scale-105 login-signup-btn ${
                isScrolled 
                  ? 'bg-black text-white hover:bg-black'
                  : 'neuro-button text-foreground hover:text-white'
              }`}
            >
              Sign up →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-foreground'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-y-0 right-0 w-64 bg-background/95 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="pt-20 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/signup"
            className="block mt-6 neuro-button px-4 py-3 text-center text-foreground hover:text-white login-signup-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign up →
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Button Hover Style */}
      <style>
        {`
        .login-signup-btn {
          position: relative;
          z-index: 1;
          transition: background 0.23s, color 0.23s;
        }
        .login-signup-btn:hover, 
        .login-signup-btn:focus-visible {
          background: #191919 !important;
          color: #fff !important;
          box-shadow: 0 3px 12px 0 rgba(25,25,25,0.15);
        }
        `}
      </style>
    </nav>
  );
};

export default Navigation;
