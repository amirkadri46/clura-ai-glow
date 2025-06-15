
import { useState, useEffect } from 'react';
import { ArrowLeft, Plus, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const [currentWord, setCurrentWord] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  
  const animatedWords = ['Hiring', 'Sales', 'Student', 'Researchers', 'Founders', 'Networking'];
  
  const recentSearches = [
    'people who started a startup in AI field',
    'employee who works at top mnc\'s and has experience of 3years and currently live in mumbai',
    'founders focused on ed-tech or online learning platforms',
    'who works at a VC firm and studied finance?',
    'people working on AI lead generation'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % animatedWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleBackToDashboard = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#2A2A2A] text-white flex">
      {/* Left Sidebar */}
      <div className="w-80 p-6 flex flex-col">
        {/* Logo and Brand */}
        <div className="flex items-center mb-8">
          <div 
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6B48FF] to-[#A78BFA] cursor-pointer"
            onClick={handleBackToDashboard}
          ></div>
          <span 
            className="ml-[10px] text-white text-2xl font-bold cursor-pointer"
            onClick={handleBackToDashboard}
          >
            Clura
          </span>
        </div>

        {/* Action Cards */}
        <div className="space-y-[10px] mb-8">
          <button className="w-[200px] h-[50px] border border-white bg-[#2A2A2A] text-white text-base font-bold rounded flex items-center justify-center hover:bg-[#3A3A3A] transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            New Search
          </button>
          <button className="w-[200px] h-[50px] border border-white bg-[#2A2A2A] text-white text-base font-bold rounded flex items-center justify-center hover:bg-[#3A3A3A] transition-colors">
            <User className="w-4 h-4 mr-2" />
            Profile
          </button>
        </div>

        {/* Recent Search Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Recent Searches</h3>
          <div className="space-y-[10px]">
            {recentSearches.map((search, index) => (
              <div 
                key={index}
                className="w-[300px] h-[40px] border border-white bg-[#2A2A2A] rounded-[5px] flex items-center px-3 cursor-pointer hover:bg-[#3A3A3A] transition-colors"
              >
                <span className="text-gray-400 text-sm truncate">{search}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto space-y-4">
          <div className="text-sm text-gray-400">
            <div className="flex items-center justify-between">
              <span>All Prospects</span>
              <span>...</span>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            <div className="flex items-center justify-between">
              <span>Saved</span>
              <span>...</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-6">
            <p>Recent Chats</p>
            <p className="mt-1">No saved chats yet.</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 relative">
        {/* Back Button */}
        <button 
          onClick={handleBackToDashboard}
          className="absolute top-6 right-6 w-[30px] h-[30px] border border-white rounded flex items-center justify-center hover:bg-[#3A3A3A] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-white" />
        </button>

        {/* Main Title with Animation */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">
            The People Search Engine for
          </h1>
          <div className="h-12 flex items-center justify-center">
            <span 
              key={currentWord}
              className="text-4xl font-bold text-white animate-fade-in"
              style={{
                animation: 'fadeInOut 3s ease-in-out infinite'
              }}
            >
              {animatedWords[currentWord]}
            </span>
          </div>
        </div>

        {/* Search Bar Container */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="People who..."
              className="w-[600px] h-[50px] border border-white bg-[#2A2A2A] text-white text-base px-4 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
          <button className="w-[120px] h-[50px] border border-white bg-[#2A2A2A] text-white text-sm font-medium rounded hover:bg-[#3A3A3A] transition-colors">
            Deep Research
          </button>
        </div>

        {/* Suggestion Pills */}
        <div className="flex flex-wrap gap-3 mt-8 max-w-4xl justify-center">
          {[
            'Founders focused on ed-tech or online learning platforms',
            'People who started companies in Web3 or crypto',
            'Who works at a VC firm and studied finance?',
            'People working on AI lead generation'
          ].map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setSearchQuery(suggestion)}
              className="px-4 py-2 border border-gray-600 bg-[#2A2A2A] text-gray-300 text-sm rounded-full hover:bg-[#3A3A3A] hover:text-white transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInOut {
          0%, 20% { opacity: 1; }
          25%, 95% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Search;
