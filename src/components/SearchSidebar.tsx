
import { useNavigate } from 'react-router-dom';

const SearchSidebar = () => {
  const navigate = useNavigate();
  
  const recentSearches = [
    'people who started a startup in AI field',
    'employee who works at top mnc\'s and has experience of 3years and currently live in mumbai',
    'founders in fintech space',
    'marketing professionals in SaaS companies'
  ];

  const handleBackClick = () => {
    navigate('/');
  };

  return (
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
  );
};

export default SearchSidebar;
