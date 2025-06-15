
import { useState, useEffect } from 'react';
import { ArrowLeft, Search as SearchIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const animatedWords = ['Hiring', 'Sales', 'Student', 'Researchers', 'Founders', 'Networking'];
  
  const recentSearches = [
    'people who started a startup in AI field',
    'employee who works at top mnc\'s and has experience of 3years and currently live in mumbai',
    'founders in fintech space',
    'marketing professionals in SaaS companies'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 p-6">
        {/* Clura Logo and Name */}
        <div className="flex items-center mb-8">
          <div 
            className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6B48FF] to-[#A78BFA] cursor-pointer"
            onClick={handleBackClick}
          ></div>
          <span className="ml-2.5 text-black text-2xl font-bold">Clura</span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 mb-8">
          <button className="w-full h-12 border border-gray-300 bg-white text-black text-base font-bold rounded-lg hover:bg-gray-50 transition-colors">
            New Search
          </button>
          <button className="w-full h-12 border border-gray-300 bg-white text-black text-base font-bold rounded-lg hover:bg-gray-50 transition-colors">
            Profile
          </button>
        </div>

        {/* Recent Search Section */}
        <div>
          <h3 className="text-gray-600 text-sm font-medium mb-4">Recent Searches</h3>
          <div className="space-y-2.5">
            {recentSearches.map((search, index) => (
              <div
                key={index}
                className="w-full h-10 border border-gray-300 bg-white rounded-md px-3 flex items-center cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-600 text-sm truncate">{search}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>All Prospects</span>
              <span>...</span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Saved</span>
              <span>...</span>
            </div>
            <div className="text-xs text-gray-400 mt-6">
              Recent Chats
              <div className="mt-2">No saved chats yet.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Right Back Button */}
        <div className="flex justify-end p-6">
          <button
            onClick={handleBackClick}
            className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Central Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 -mt-20">
          {/* Main Title with Animated Text */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-black mb-2">
              The People Search Engine for
            </h1>
            <div className="text-5xl font-bold text-black h-16 flex items-center justify-center">
              <span
                key={currentWordIndex}
                className="animate-fade-in"
                style={{
                  animation: 'fadeInOut 3s infinite'
                }}
              >
                {animatedWords[currentWordIndex]}
              </span>
            </div>
          </div>

          {/* Search Bar and Deep Research Button */}
          <div className="flex items-center gap-4 w-full max-w-4xl">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="People who started companies in Web3 or crypto..."
                className="w-full h-14 border border-gray-300 bg-white rounded-2xl px-6 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <SearchIcon className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <button className="px-6 h-14 border border-gray-300 bg-white text-gray-700 text-sm font-medium rounded-2xl hover:bg-gray-50 transition-colors flex items-center gap-2">
              <span>🔍 Deep Research</span>
              <span className="bg-gray-200 text-xs px-2 py-1 rounded">UPGRADE</span>
            </button>
          </div>

          {/* Search Suggestions */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center max-w-6xl">
            {[
              'Founders focused on ed-tech or online learning platforms',
              'People who started companies',
              'Who works at a VC firm and studied finance?',
              'People working on AI lead generation'
            ].map((suggestion, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-50 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="border-t border-gray-200 p-6">
          <div className="flex items-center justify-between text-sm text-gray-500 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <span>Usage</span>
              <button className="bg-purple-600 text-white px-3 py-1 rounded text-xs">Upgrade</button>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm text-gray-500">
            <div className="flex justify-between">
              <span>Searches</span>
              <span>loading</span>
            </div>
            <div className="flex justify-between">
              <span>Emails</span>
              <span>loading</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
