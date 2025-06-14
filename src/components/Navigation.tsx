import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      const atTop = currentScrollY < 10;
      
      setIsScrolled(currentScrollY > 50);
      setIsScrollingUp(scrollingUp);
      setIsAtTop(atTop);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const getNavbarBackground = () => {
    if (isAtTop) {
      return 'bg-transparent';
    }
    return 'bg-white/70 backdrop-blur-md border border-white/20';
  };

  const getTextColor = () => {
    if (isAtTop) {
      return 'text-gray-300';
    }
    return 'text-gray-800';
  };

  const getHoverTextColor = () => {
    if (isAtTop) {
      return 'hover:text-white';
    }
    return 'hover:text-gray-600';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrollingUp || isAtTop ? 'transform translate-y-0' : 'transform -translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex justify-between items-center h-16 transition-all duration-500 ${
          isScrolled && !isAtTop
            ? `${getNavbarBackground()} rounded-full mx-4 px-6 mt-2 mb-2` 
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
                    ? isAtTop ? 'text-blue-400' : 'text-blue-600'
                    : `${getTextColor()} ${getHoverTextColor()}`
                } group`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                  isAtTop ? 'bg-blue-400' : 'bg-blue-600'
                } transition-all duration-300 group-hover:w-full`}></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-lg ${getTextColor()} ${getHoverTextColor()}`}
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="px-6 py-2 text-sm font-medium rounded-lg"
              style={{
                background: "#1A252F",
                color: "#fff",
                border: "1px solid #89CFF0",
                boxShadow: "0 0 10px #89CFF022"
              }}
            >
              Sign up →
            </Link>
          </div>

          <button
            className={`md:hidden p-2 transition-colors duration-300 ${getTextColor()}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden fixed inset-y-0 right-0 w-64 bg-white/95 backdrop-blur-md border-l border-gray-200/50 transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="pt-20 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block py-3 text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/signup"
            className="block mt-6 px-4 py-3 text-center rounded-lg font-medium"
            style={{
              background: "#1A252F",
              color: "#fff",
              border: "1px solid #89CFF0",
              boxShadow: "0 0 10px #89CFF022"
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign up →
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
