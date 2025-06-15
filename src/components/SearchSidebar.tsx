
import { Circle, Settings } from 'lucide-react';

const SearchSidebar = () => {
  return (
    <div className="w-[300px] bg-[#E8E3FF] border-r border-[#D3D3D3] p-5 flex flex-col h-screen">
      {/* Logo and Brand */}
      <div className="flex items-center gap-[10px] mb-5">
        <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#6B48FF] to-[#A78BFA]"></div>
        <span className="text-black text-[20px] font-bold">MyApp</span>
      </div>

      {/* Start New Action Button */}
      <button className="w-[200px] h-[50px] bg-white border border-[#6B48FF] text-[#6B48FF] text-[16px] font-bold rounded-[10px] mb-5 hover:scale-105 transition-transform hover:shadow-lg">
        Start New Action
      </button>

      {/* Navigation Sections */}
      <div className="flex-1">
        <div className="mb-5">
          <div className="flex items-center gap-3 mb-5">
            <Circle className="w-[20px] h-[20px] fill-[#D3D3D3] text-[#D3D3D3]" />
            <span className="text-black text-[16px] font-bold">All Items</span>
          </div>
          <div className="flex items-center gap-3">
            <Circle className="w-[20px] h-[20px] fill-[#D3D3D3] text-[#D3D3D3]" />
            <span className="text-black text-[16px] font-bold">Saved Items</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto">
        {/* Recent Activity */}
        <div className="mb-5">
          <h3 className="text-black text-[16px] font-bold mb-2">Recent Activity</h3>
          <p className="text-gray-500 text-[14px]">No recent activity yet</p>
        </div>

        {/* Usage Section */}
        <div className="mb-5">
          <h3 className="text-black text-[16px] font-bold mb-3">Usage</h3>
          
          {/* Searches Progress */}
          <div className="mb-3">
            <span className="text-black text-[14px] block mb-1">Searches</span>
            <div className="w-[200px] h-[10px] bg-[#D3D3D3] rounded-[5px] overflow-hidden">
              <div className="w-[50%] h-full bg-[#6B48FF]"></div>
            </div>
          </div>

          {/* Emails Progress */}
          <div>
            <span className="text-black text-[14px] block mb-1">Emails</span>
            <div className="w-[200px] h-[10px] bg-[#D3D3D3] rounded-[5px] overflow-hidden">
              <div className="w-[30%] h-full bg-[#6B48FF]"></div>
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2">
          <div className="w-[30px] h-[30px] bg-[#007BFF] rounded-full"></div>
          <span className="text-[#007BFF] text-[14px]">user123</span>
          <Settings className="w-[20px] h-[20px] text-[#D3D3D3] ml-auto" />
        </div>
      </div>
    </div>
  );
};

export default SearchSidebar;
