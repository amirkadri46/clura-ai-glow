
import { Settings } from "lucide-react";

export default function SearchSidebarFooter() {
  return (
    <div className="flex flex-col gap-6">
      {/* Recent Activity */}
      <div>
        <h4 className="text-black text-[16px] font-bold mb-1">Recent Activity</h4>
        <div className="text-[#888] text-[14px]">No recent activity yet</div>
      </div>
      {/* Usage bars */}
      <div>
        <h4 className="text-black text-[14px] font-bold mb-2">Usage</h4>
        <div className="mb-2">
          <span className="text-black text-[14px]">Searches</span>
          <div className="w-[200px] h-2 bg-[#D3D3D3] rounded-full mt-1">
            <div className="h-2 bg-[#6B48FF] rounded-full" style={{ width: "50%" }}></div>
          </div>
        </div>
        <div>
          <span className="text-black text-[14px]">Emails</span>
          <div className="w-[200px] h-2 bg-[#D3D3D3] rounded-full mt-1">
            <div className="h-2 bg-[#6B48FF] rounded-full" style={{ width: "35%" }}></div>
          </div>
        </div>
      </div>
      {/* User profile */}
      <div className="flex items-center gap-3 mt-3">
        <div className="w-[30px] h-[30px] rounded-full bg-[#007BFF] flex items-center justify-center text-white font-bold text-[18px]">
          k
        </div>
        <span className="text-[#007BFF] text-[14px] font-semibold">user123</span>
        <Settings className="w-5 h-5 text-[#D3D3D3] cursor-pointer" />
      </div>
    </div>
  );
}
