
import { Plus, Zap } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center w-[600px] h-[50px] bg-white rounded-[10px] border border-[#D3D3D3] shadow-sm px-4 gap-3">
      <input
        placeholder="People who started companies in Web3 or crypto..."
        className="flex-1 h-full bg-transparent outline-none text-[16px] text-black placeholder-[#999] font-inter"
      />
      <div className="flex items-center gap-2">
        {/* Icon for left of buttons */}
        <div className="w-5 h-5 rounded-full bg-[#D3D3D3] flex items-center justify-center">
          <Plus className="w-4 h-4 text-[#6B48FF]" />
        </div>
        {/* Deep Search Button */}
        <button className="w-[120px] h-[40px] rounded-[5px] bg-white border border-[#6B48FF] text-[#6B48FF] font-bold text-[14px] flex items-center justify-center gap-2 shadow-sm transition transform hover:scale-105 hover:shadow-md">
          <Zap className="w-4 h-4" />
          Deep Search
        </button>
        {/* Upgrade Button */}
        <button className="w-[80px] h-[40px] rounded-[5px] bg-[#D3D3D3] border border-[#D3D3D3] text-white font-bold text-[14px] flex items-center justify-center shadow-sm transition transform hover:scale-105 hover:shadow-md ml-1">
          UPGRADE
        </button>
      </div>
    </div>
  );
}
