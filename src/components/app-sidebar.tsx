
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarGroup } from "@/components/ui/sidebar";
import { ArrowLeft, ArrowRight, User, Search } from "lucide-react";

const SIDEBAR_WIDTH = 260;
const SIDEBAR_COLLAPSED_WIDTH = 48;

function CluraBrand({ sidebarOpen }: { sidebarOpen: boolean }) {
  // Purple hexagon
  return (
    <div className="flex items-center pl-5 pr-2 py-1" style={{ minHeight: 48 }}>
      <svg width={28} height={28} viewBox="0 0 40 40" className="mr-2" aria-label="Clura logo">
        <polygon points="20,4 36,12 36,28 20,36 4,28 4,12" fill="#9133ff" />
      </svg>
      {sidebarOpen && (
        <span className="text-xl font-bold text-gray-900 select-none tracking-wider">
          Clura
        </span>
      )}
    </div>
  );
}

function SidebarToggle({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
}) {
  return (
    <button
      aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
      onClick={() => setSidebarOpen(!sidebarOpen)}
      className="absolute right-3 top-1.5 z-20 flex items-center justify-center rounded-full"
      style={{
        width: 40,
        height: 40,
        background: "#212125",
        color: "#fff",
      }}
    >
      {sidebarOpen ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
    </button>
  );
}

export default function AppSidebar({
  sidebarOpen,
  setSidebarOpen,
  onNewSearch,
  onGoProfile,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onNewSearch: () => void;
  onGoProfile: () => void;
}) {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <div
          className="flex flex-col px-0"
          style={{
            width: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
            minWidth: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
            paddingTop: 20,
          }}
        >
          <div className="relative flex items-center" style={{ marginBottom: 10 }}>
            <CluraBrand sidebarOpen={sidebarOpen} />
            <SidebarToggle sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </div>

          <div
            style={{
              marginBottom: 10,
              display: sidebarOpen ? "flex" : "none",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <button
              onClick={onNewSearch}
              className="w-[200px] h-[36px] rounded-full bg-[#374151] text-white text-sm font-medium flex items-center justify-center cursor-pointer hover:scale-105 transition"
              style={{ border: "none" }}
            >
              <Search className="mr-2 w-4 h-4" /> New Search
            </button>
          </div>

          <div
            style={{
              marginBottom: 10,
              display: sidebarOpen ? "flex" : "none",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <button
              onClick={onGoProfile}
              className="w-[200px] h-[36px] rounded-full border border-[#374151] bg-white/70 text-gray-900 text-sm font-medium flex items-center justify-center cursor-pointer hover:scale-105 transition"
              style={{
                backdropFilter: "blur(16px)",
              }}
            >
              <User className="mr-2 w-4 h-4" />
              Profile
            </button>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
