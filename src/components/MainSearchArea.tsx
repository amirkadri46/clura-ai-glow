
import { Circle, ChevronDown } from 'lucide-react';

interface MainSearchAreaProps {
  query: string;
  onSearch: (query: string) => void;
  searchHistory: string[];
}

const MainSearchArea = ({ query, onSearch, searchHistory }: MainSearchAreaProps) => {
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const recentSuggestions = [
    { text: "Recent search 1", highlighted: false },
    { text: "ope", highlighted: true },
    { text: "Recent search 2", highlighted: false },
    { text: "Recent search 3", highlighted: false }
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-start pt-20 px-8">
      {/* Main Heading */}
      <div className="flex items-center gap-2 mb-8">
        <h1 className="text-[48px] font-bold text-black">Search Dashboard</h1>
        <ChevronDown className="w-[48px] h-[48px] text-black" />
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearchSubmit} className="relative mb-8">
        <div className="w-[600px] h-[50px] bg-white border border-[#D3D3D3] rounded-[10px] flex items-center px-4">
          <input
            type="text"
            value={query}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search for anything..."
            className="flex-1 text-[16px] text-gray-500 bg-transparent outline-none"
          />
          
          <div className="flex items-center gap-2">
            <Circle className="w-[20px] h-[20px] fill-[#D3D3D3] text-[#D3D3D3]" />
            <button
              type="button"
              className="w-[120px] h-[40px] bg-white text-[#6B48FF] text-[14px] border border-[#6B48FF] rounded-[5px] hover:scale-105 transition-transform"
            >
              Deep Search
            </button>
            <button
              type="button"
              className="w-[80px] h-[40px] bg-[#D3D3D3] text-white text-[14px] rounded-[5px] hover:scale-105 transition-transform"
            >
              Upgrade
            </button>
          </div>
        </div>
      </form>

      {/* Recent Search Suggestions */}
      <div className="flex gap-[10px] flex-wrap justify-center max-w-4xl">
        {recentSuggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSearch(suggestion.text)}
            className={`w-[200px] h-[40px] rounded-[10px] border border-[#D3D3D3] text-[14px] hover:scale-105 transition-transform hover:shadow-lg ${
              suggestion.highlighted
                ? 'bg-[#A78BFA] text-white'
                : 'bg-white text-gray-600'
            }`}
          >
            {suggestion.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainSearchArea;
