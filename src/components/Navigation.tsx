
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Palette } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isVariation = location.pathname === '/variation';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-clura-400 to-clura-600 bg-clip-text text-transparent">
            Clura.ai
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-slate-300 hover:text-clura-400 transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-slate-300 hover:text-clura-400 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-slate-300 hover:text-clura-400 transition-colors">
              Contact
            </Link>
            
            {/* Design Toggle */}
            <Link 
              to={isVariation ? "/" : "/variation"} 
              className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 hover:text-clura-400 hover:border-clura-500/50 transition-all duration-300"
            >
              <Palette className="w-4 h-4" />
              <span>{isVariation ? "Original" : "Variation"}</span>
            </Link>
            
            <Link 
              to="/search" 
              className="bg-gradient-to-r from-clura-500 to-clura-600 text-white px-6 py-2 rounded-lg hover:from-clura-600 hover:to-clura-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-clura-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-700/50">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/about" 
                className="text-slate-300 hover:text-clura-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="text-slate-300 hover:text-clura-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-slate-300 hover:text-clura-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Design Toggle */}
              <Link 
                to={isVariation ? "/" : "/variation"} 
                className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 hover:text-clura-400 hover:border-clura-500/50 transition-all duration-300 w-fit"
                onClick={() => setIsOpen(false)}
              >
                <Palette className="w-4 h-4" />
                <span>{isVariation ? "Original Design" : "Variation Design"}</span>
              </Link>
              
              <Link 
                to="/search" 
                className="bg-gradient-to-r from-clura-500 to-clura-600 text-white px-6 py-2 rounded-lg hover:from-clura-600 hover:to-clura-700 transition-all duration-300 w-fit"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
