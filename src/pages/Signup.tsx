
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to login page after signup
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen relative bg-black">
      <ParticleBackground />
      <Navigation />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-md w-full">
          <div className="glass-card p-8 bg-slate-900/70 border border-clura-500/40 shadow-2xl shadow-clura-500/30 rounded-3xl backdrop-blur-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white to-[#599cf0] mb-2">Create Account</h2>
              <p className="text-muted-foreground">Join Clura.ai to discover amazing people</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-clura-400" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-transparent border border-clura-500/30 rounded-lg text-foreground placeholder-muted-foreground focus:border-clura-400 focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-clura-400" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-transparent border border-clura-500/30 rounded-lg text-foreground placeholder-muted-foreground focus:border-clura-400 focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>

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

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-clura-400" />
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-transparent border border-clura-500/30 rounded-lg text-foreground placeholder-muted-foreground focus:border-clura-400 focus:outline-none transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full neuro-button px-6 py-4 text-lg font-medium text-foreground hover:text-clura-400 transition-all duration-300 group disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Creating Account...</span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <span>Create Account</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </button>

              <div className="text-center">
                <p className="text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/login" className="text-clura-400 hover:text-clura-300 transition-colors">
                    Sign in
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

export default Signup;
