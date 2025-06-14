
import { Link, useLocation } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    // Original transparent footer for home page
    return (
      <footer className="relative z-10">
        {/* Newsletter Section with transparent background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Get the Clura.ai newsletter</h3>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="name@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-[#4B6CB7] to-[#89CFF0] text-white px-6 py-3 rounded-lg font-medium border border-[#89CFF0] shadow-[0_0_10px_#89CFF0] hover:shadow-[0_0_15px_#89CFF0] transition-all duration-300 flex items-center"
                style={{
                  textShadow: '0 0 5px rgba(255, 255, 255, 0.5)'
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content with transparent background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-xl font-semibold text-white">Clura.ai</span>
              </div>
              <p className="text-white/80 max-w-md">
                The next generation of people discovery. Find anyone on the internet with AI-powered search.
              </p>
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-semibold text-white mb-4">Socials</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="text-white/80 hover:text-white transition-colors">Blogs</Link></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Team</a></li>
                <li><Link to="/pricing" className="text-white/80 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms & conditions</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-white/80">hello@clura.ai</li>
                <li className="text-white/80">+1 (555) 123-4567</li>
                <li className="text-white/80">India</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/80">
            <p>&copy; 2024 Clura.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }

  // Dark footer for other pages
  return (
    <footer className="border-t" style={{ backgroundColor: '#1A252F', borderColor: '#4B6CB7' }}>
      {/* Newsletter Section */}
      <div className="border-b" style={{ borderColor: '#4B6CB7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Get the Clura newsletter</h3>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="name@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-clura-400 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-[#4B6CB7] to-[#89CFF0] text-white px-6 py-3 rounded-lg font-medium border border-[#89CFF0] shadow-[0_0_10px_#89CFF0] hover:shadow-[0_0_15px_#89CFF0] transition-all duration-300 flex items-center"
                style={{
                  textShadow: '0 0 5px rgba(255, 255, 255, 0.5)'
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-clura-400 rounded-full"></div>
              <span className="text-xl font-semibold text-white">Clura</span>
            </div>
            <p className="text-gray-400 max-w-md">
              The next generation of people discovery. Find anyone with AI-powered search.
            </p>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold text-white mb-4">Socials</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blogs</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">hello@clura.ai</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400">San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-gray-400" style={{ borderColor: '#4B6CB7' }}>
          <p>&copy; 2024 Clura.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
