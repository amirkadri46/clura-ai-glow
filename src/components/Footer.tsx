
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
// Import Separator from shadcn/ui
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="relative z-10">
      {/* Slim Separator line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Separator className="mb-10 mt-0 bg-white/30" />
      </div>
      {/* Newsletter Section with transparent background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-0">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#599cf0] mb-4">Get the Clura.ai newsletter</h3>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="name@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
            />
            <button
              className="px-6 py-3 rounded-lg font-medium flex items-center"
              style={{
                background: "#1A252F",
                color: "#fff",
                border: "1px solid #89CFF0",
                boxShadow: "0 0 10px #89CFF022"
              }}
            >
              <span className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Subscribe
              </span>
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
};

export default Footer;
