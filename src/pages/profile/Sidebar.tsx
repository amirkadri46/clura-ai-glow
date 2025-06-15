
import React from "react";
import { Search, User } from "lucide-react";

const SIDEBAR_WIDTH = 320;
const SIDEBAR_COLLAPSED_WIDTH = 64;

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  startNewSearch: () => void;
  goToProfile: () => void;
  recentSearches: string[];
}

const menuItems = [
  {
    label: "New Search",
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
  const { sidebarOpen, startNewSearch, goToProfile, recentSearches } = props;

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
      {/* Logo and Brand */}
      <div
        className={`flex items-center transition-all duration-200 w-full px-4 pt-2`}
        style={{
          marginBottom: sidebarOpen ? 16 : 0,
          minHeight: 48,
          justifyContent: "flex-start",
          height: "48px",
        }}
      >
        <img
          src="/lovable-uploads/78ab56d9-6ccc-48d5-8802-a52814ec56ee.png"
          alt="Clura.ai Icon"
          className="w-8 h-8"
          style={{ transition: "opacity 0.2s" }}
        />
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
              background: "#d1d9ed"
            }}
            onMouseOver={e => (e.currentTarget.style.background = "#f3f4f6")}
            onMouseOut={e => (e.currentTarget.style.background = "#d1d9ed")}
          >
            <Icon className={sidebarOpen ? "w-5 h-5 mr-3" : "w-5 h-5"} color="#8d94a1" />
            {sidebarOpen && <span>{label}</span>}
          </button>
        ))}

        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <div className={`w-full ${sidebarOpen ? "px-4 mt-5" : "flex flex-col items-center mt-4"}`}>
            <div className={`text-xs font-semibold mb-2 text-gray-500 ${sidebarOpen ? "" : "text-center"}`}>
              Recent Search's
            </div>
            <div className={`${sidebarOpen ? "space-y-1" : ""}`}>
              {recentSearches.map((q, i) =>
                sidebarOpen ? (
                  <div
                    key={i}
                    className="text-sm text-gray-700 truncate"
                    style={{ background: "transparent", paddingLeft: 8 }}
                  >
                    {q}
                  </div>
                ) : (
                  <div
                    key={i}
                    className="text-xs text-gray-600 w-8 h-8 flex items-center justify-center rounded mb-1"
                    style={{ background: "transparent" }}
                  >
                    <Search className="w-3 h-3 mr-0" />{/* icon only when collapsed */}
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
