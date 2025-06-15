
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
        background: "#c0d1fa", // Updated lighter blue
        height: "100%",
        overflow: "hidden",
        paddingTop: 8,
        paddingBottom: 20,
      }}
    >
      {/* Logo Icon + Wordmark: Always show icon; show wordmark beside it if expanded, below icon if collapsed */}
      <div
        className="flex flex-col items-center transition-all duration-200 w-full px-2 pt-2"
        style={{
          marginBottom: sidebarOpen ? 16 : 0,
        }}
      >
        <img
          src="/lovable-uploads/78ab56d9-6ccc-48d5-8802-a52814ec56ee.png"
          alt="Clura.ai Icon"
          className={`w-8 h-8 mb-1`}
          style={{ transition: "opacity 0.2s" }}
        />
        {sidebarOpen ? (
          <img
            src="/lovable-uploads/b44114ab-67b3-40dd-9c6f-fb15199406d2.png"
            alt="Clura"
            className="h-6 ml-2"
            style={{ transition: "opacity 0.2s" }}
          />
        ) : (
          <img
            src="/lovable-uploads/b44114ab-67b3-40dd-9c6f-fb15199406d2.png"
            alt="Clura"
            className="h-5 mt-1"
            style={{ transition: "opacity 0.2s" }}
          />
        )}
      </div>

      {/* Sidebar Menu Items */}
      <nav className="flex flex-col gap-1 mt-2 w-full px-2">
        {menuItems.map(({ label, icon: Icon, onClick, key }) => (
          <button
            key={key}
            onClick={() => onClick(props)}
            className="flex items-center w-full px-4 py-2 rounded-lg transition-colors duration-150 text-base font-medium"
            style={{
              color: "#8d94a1",
              background: "#fff"
            }}
            // Subtle grey hover effect, as requested
            onMouseOver={e => (e.currentTarget.style.background = "#f3f4f6")}
            onMouseOut={e => (e.currentTarget.style.background = "#fff")}
          >
            <Icon className="w-5 h-5 mr-3" color="#8d94a1" />
            {/* Always show icon; text label only in expanded mode */}
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
        <span style={{ fontSize: 18 }}>{sidebarOpen ? "<" : ">"}</span>
      </button>
    </div>
  );
};

export default Sidebar;

