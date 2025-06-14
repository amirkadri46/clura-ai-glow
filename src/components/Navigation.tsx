
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
            ? 'bg-slate-900/70 backdrop-blur-md border border-slate-700/50 rounded-full mx-4 px-6 mt-2 mb-2' 
            : ''
        }`}>
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

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.href
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                } group`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-sm font-medium transition-all duration-300 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="relative px-6 py-2 text-sm font-medium bg-black hover:bg-gray-900 text-white rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg overflow-hidden group"
            >
              <span className="relative z-10">Sign up →</span>
              <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 opacity-75">
                <div className="absolute inset-[2px] bg-black rounded-lg"></div>
              </div>
            </Link>
          </div>

          <button
            className="md:hidden p-2 transition-colors duration-300 text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden fixed inset-y-0 right-0 w-64 bg-slate-900/95 backdrop-blur-md border-l border-slate-700/50 transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="pt-20 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block py-3 text-lg font-medium text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/signup"
            className="relative block mt-6 bg-black hover:bg-gray-900 px-4 py-3 text-center text-white rounded-lg transition-colors overflow-hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="relative z-10">Sign up →</span>
            <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 opacity-75">
              <div className="absolute inset-[2px] bg-black rounded-lg"></div>
            </div>
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;
