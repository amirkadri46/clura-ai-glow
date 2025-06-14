
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import SpaceBackground from '@/components/SpaceBackground';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Set login status in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      // Redirect to search page after login
      navigate('/search');
    }, 1500);
  };

  return (
    <div className="min-h-screen relative">
      <SpaceBackground />
      <Navigation />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-md w-full">
          <div className="glass-card p-8 bg-slate-900/70 border border-clura-500/40 shadow-2xl shadow-clura-500/30 rounded-3xl backdrop-blur-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light text-foreground mb-2">Welcome Back</h2>
              <p className="text-muted-foreground">Sign in to your Clura.ai account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-clura-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-transparent border border-clura-500/30 rounded-lg text-foreground placeholder-muted-foreground focus:border-clura-400 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-clura-400" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-transparent border border-clura-500/30 rounded-lg text-foreground placeholder-muted-foreground focus:border-clura-400 focus:outline-none transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-clura-400 focus:ring-clura-400 border-clura-500/30 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link to="/forgot-password" className="text-clura-400 hover:text-clura-300 transition-colors">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full neuro-button px-6 py-4 text-lg font-medium text-foreground hover:text-clura-400 transition-all duration-300 group disabled:opacity-50 transform hover:scale-105"
              >
                {isLoading ? (
                  <span>Signing In...</span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <span>Sign In</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </button>

              <div className="text-center">
                <p className="text-muted-foreground">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-clura-400 hover:text-clura-300 transition-colors">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
