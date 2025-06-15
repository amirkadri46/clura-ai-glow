
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToggleLeft, ToggleRight, User } from "lucide-react";

const SIDEBAR_WIDTH = 260;
const SIDEBAR_COLLAPSED_WIDTH = 48;

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  startNewSearch: () => void;
  goToProfile: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  sidebarOpen,
  setSidebarOpen,
  startNewSearch,
  goToProfile,
}) => {
  return (
    <div
      className="transition-all duration-300 relative flex flex-col border-r border-black"
      style={{
        width: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
        minWidth: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
        maxWidth: SIDEBAR_WIDTH,
        background: "#f3f4f6",
        height: "100%",
        overflow: "hidden",
        paddingTop: 8,
        paddingBottom: 20,
      }}
    >
      {/* Logo & Brand */}
      <div
        className={`flex items-center transition-all duration-200 w-full px-4 pt-2 ${
          sidebarOpen ? "opacity-100 h-16" : "opacity-0 h-0 overflow-hidden"
        }`}
        style={{
          transitionProperty: "opacity,height",
          marginBottom: sidebarOpen ? 10 : 0,
          minHeight: 48,
          justifyContent: "flex-start",
        }}
      >
        <img
          src="/lovable-uploads/78ab56d9-6ccc-48d5-8802-a52814ec56ee.png"
          alt="Clura.ai Icon"
          className="w-8 h-8"
          style={{ transition: "opacity 0.2s" }}
        />
        <img
          src="/lovable-uploads/b44114ab-67b3-40dd-9c6f-fb15199406d2.png"
          alt="Clura"
          className="h-6 ml-2"
          style={{ transition: "opacity 0.2s" }}
        />
      </div>

      {/* Start New Search */}
      {sidebarOpen && (
        <div className="w-full flex justify-center mb-2">
          <button
            onClick={startNewSearch}
            className="text-white text-sm font-medium cursor-pointer hover:scale-110 transition-transform duration-200"
            style={{
              background: "#374151",
              borderRadius: "24px",
              width: "200px",
              height: "36px",
              border: "none",
              outline: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            new search
          </button>
        </div>
      )}

      {/* Profile Button */}
      {sidebarOpen && (
        <div className="w-full flex justify-center mb-2">
          <button
            onClick={goToProfile}
            className="flex items-center justify-center text-gray-800 text-sm font-medium cursor-pointer hover:scale-110 transition-transform duration-200 bg-transparent backdrop-blur-sm"
            style={{
              borderRadius: "24px",
              width: "200px",
              height: "36px",
              border: "1px solid #374151",
              outline: "none",
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(20px)",
            }}
          >
            <User className="w-4 h-4 mr-2" />
            Profile
          </button>
        </div>
      )}

      {/* Toggle */}
      <button
        className="absolute top-3 right-3 z-20 border border-gray-200 rounded-full shadow p-2 transition flex items-center justify-center"
        style={{
          width: 40,
          height: 40,
          background: "#23272f",
          color: "#fff",
        }}
        aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        onClick={() => setSidebarOpen((v) => !v)}
        tabIndex={0}
      >
        {sidebarOpen ? (
          <ToggleLeft size={24} />
        ) : (
          <ToggleRight size={24} />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
