
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10" style={{ backgroundColor: '#1A252F' }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Get the Clura newsletter</h3>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="name@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-clura-400"
            />
            <button className="px-6 py-3 bg-clura-500 hover:bg-clura-600 text-white rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-clura-400 rounded-full"></div>
              <h4 className="text-xl font-semibold text-white">Clura</h4>
            </div>
            <p className="text-white/70 text-sm">
              The next generation of people discovery. Find anyone with AI-powered search.
            </p>
          </div>

          {/* Socials Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Socials</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Facebook</a></li>
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-white/70 hover:text-white transition-colors">Blogs</Link></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Team</a></li>
              <li><Link to="/pricing" className="text-white/70 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms & conditions</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy policy</a></li>
            </ul>
          </div>

          {/* Empty fourth column for spacing */}
          <div></div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; 2024 Clura.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
