
import React from "react";
import { Search, User } from "lucide-react";

const SIDEBAR_WIDTH = 320;
const SIDEBAR_COLLAPSED_WIDTH = 64;

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  startNewSearch: () => void;
  goToProfile: () => void;
}

const menuItems = [
  {
    label: "Search",
    icon: Search,
    key: "search"
  },
  {
    label: "Profile",
    icon: User,
    key: "profile"
  }
];

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { sidebarOpen, setSidebarOpen, startNewSearch, goToProfile } = props;

  // Assign correct click handlers for menuItems
  const itemHandlers = {
    search: startNewSearch,
    profile: goToProfile,
  };

  return (
    <div
      className="transition-all duration-300 relative flex flex-col border-r border-black"
      style={{
        width: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
        minWidth: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
        maxWidth: SIDEBAR_WIDTH,
        background: "#d1d9ed",
        height: "100%",
        overflow: "hidden",
        paddingTop: 8,
        paddingBottom: 20,
      }}
    >
      {/* Logo row: always show the brand icon, show brand name only if expanded */}
      <div
        className={`flex items-center transition-all duration-200 w-full px-4 pt-2`}
        style={{
          marginBottom: sidebarOpen ? 16 : 0,
          minHeight: 48,
          justifyContent: "flex-start",
          height: "48px",
        }}
      >
        {/* Brand icon ALWAYS visible */}
        <img
          src="/lovable-uploads/78ab56d9-6ccc-48d5-8802-a52814ec56ee.png"
          alt="Clura.ai Icon"
          className="w-8 h-8"
          style={{ transition: "opacity 0.2s" }}
        />
        {/* Brand name only when open */}
        {sidebarOpen && (
          <img
            src="/lovable-uploads/b44114ab-67b3-40dd-9c6f-fb15199406d2.png"
            alt="Clura"
            className="h-6 ml-2"
            style={{ transition: "opacity 0.2s" }}
          />
        )}
      </div>

      {/* Sidebar Menu Items */}
      <nav className={`flex flex-col mt-2 w-full ${sidebarOpen ? "px-2 gap-1" : "items-center"} flex-1`}>
        {menuItems.map(({ label, icon: Icon, key }) => (
          <button
            key={key}
            onClick={itemHandlers[key]}
            className={`flex ${sidebarOpen ? "flex-row items-center w-full px-4 py-2 rounded-lg" : "flex-col items-center justify-center w-12 h-12 my-1 rounded-lg"} transition-colors duration-150 font-medium`}
            style={{
              color: "#8d94a1",
              background: "#fff"
            }}
            onMouseOver={e => (e.currentTarget.style.background = "#f3f4f6")}
            onMouseOut={e => (e.currentTarget.style.background = "#fff")}
          >
            <Icon className={sidebarOpen ? "w-5 h-5 mr-3" : "w-5 h-5"} color="#8d94a1" />
            {sidebarOpen && <span>{label}</span>}
          </button>
        ))}
      </nav>
      
      {/* Toggle Button */}
      <button
        className="absolute top-3 right-3 z-20 border border-gray-200 rounded-full shadow p-2 transition flex items-center justify-center"
        style={{
          width: 40,
          height: 40,
          background: "#f3f4f6",
          color: "#8d94a1",
        }}
        aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        onClick={() => setSidebarOpen((v) => !v)}
        tabIndex={0}
      >
        <span style={{ fontSize: 18 }}>{sidebarOpen ? "<" : ">"}</span>
      </button>
    </div>
  );
};

export default Sidebar;
