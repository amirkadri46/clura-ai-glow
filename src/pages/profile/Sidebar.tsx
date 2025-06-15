
import React from "react";
import { useNavigate } from "react-router-dom";
import { Search, User } from "lucide-react";

const SIDEBAR_WIDTH = 320; // A bit wider for clarity
const SIDEBAR_COLLAPSED_WIDTH = 64; // Remains slim when collapsed

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
    onClick: (props: SidebarProps) => props.startNewSearch(),
    key: "search"
  },
  {
    label: "Profile",
    icon: User,
    onClick: (props: SidebarProps) => props.goToProfile(),
    key: "profile"
  }
];

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { sidebarOpen, setSidebarOpen } = props;

  return (
    <div
      className="transition-all duration-300 relative flex flex-col border-r border-black"
      style={{
        width: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
        minWidth: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
        maxWidth: SIDEBAR_WIDTH,
        background: "#fff",
        height: "100%",
        overflow: "hidden",
        paddingTop: 8,
        paddingBottom: 20,
      }}
    >
      {/* Logo */}
      <div
        className={`flex items-center transition-all duration-200 w-full px-4 pt-2 ${
          sidebarOpen ? "opacity-100 h-16" : "opacity-0 h-0 overflow-hidden"
        }`}
        style={{
          transitionProperty: "opacity,height",
          marginBottom: sidebarOpen ? 16 : 0,
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
      
      {/* Sidebar Menu Items */}
      <nav className="flex flex-col gap-1 mt-2 w-full px-2">
        {menuItems.map(({ label, icon: Icon, onClick, key }) => (
          <button
            key={key}
            onClick={() => onClick(props)}
            className="flex flex-row items-center w-full px-4 py-2 rounded-lg transition-colors duration-150 text-base font-medium"
            style={{
              color: "#8d94a1",
              background: "#fff"
            }}
            // Subtle grey hover. No scaling!
            onMouseOver={e => (e.currentTarget.style.background = "#f3f4f6")}
            onMouseOut={e => (e.currentTarget.style.background = "#fff")}
          >
            <Icon className="w-5 h-5 mr-3" color="#8d94a1" />
            <span>{sidebarOpen ? label : null}</span>
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
        {/* No arrow, collapsed state handled visually by menu items */}
        {/* You can add an icon if you want */}
        <span style={{ fontSize: 18 }}>{sidebarOpen ? "<" : ">"}</span>
      </button>
    </div>
  );
};

export default Sidebar;

