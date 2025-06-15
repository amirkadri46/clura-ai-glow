
import SearchSidebarFooter from "./SearchSidebarFooter";
import { Settings } from "lucide-react";

export default function SearchSidebar() {
  return (
    <aside className="w-[300px] flex flex-col justify-between h-screen bg-[#E8E3FF] border-r border-[#D3D3D3] p-5">
      {/* Top logo and brand name */}
      <div>
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6B48FF] to-[#A78BFA] flex items-center justify-center" />
          <span className="font-bold text-[20px] text-black ml-2">MyApp</span>
        </div>
        {/* Start New Action Button */}
        <button className="w-[200px] h-[50px] rounded-[10px] bg-white border border-[#6B48FF] text-[#6B48FF] font-bold text-[16px] flex items-center justify-center shadow-sm transition transform hover:scale-105 hover:shadow-md mb-8">
          Start New Action
        </button>
        {/* Menu options */}
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#D3D3D3]" />
            <span className="font-bold text-[16px] text-black">All Items</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#D3D3D3]" />
            <span className="font-bold text-[16px] text-black">Saved Items</span>
          </div>
        </div>
      </div>
      {/* Recent Activity & Usage & Footer */}
      <SearchSidebarFooter />
    </aside>
  );
}
