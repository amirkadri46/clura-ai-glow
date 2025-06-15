
import React, { useRef } from "react";
import { Search, User, MoreVertical, Check, X, Heart } from "lucide-react";
import SidebarMenuButton from "./SidebarMenuButton";
import RecentSearchItem from "./RecentSearchItem";
import { useNavigate } from "react-router-dom";

const SIDEBAR_WIDTH = 320;
const SIDEBAR_COLLAPSED_WIDTH = 64;

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  startNewSearch: () => void;
  goToProfile: () => void;
  recentSearches: string[];
  onRecentSearchClick?: (search: string) => void;
  onRecentMenuToggle?: (i: number) => void;
  menuOpenIndex?: number | null;
  onDeleteRecent?: (i: number) => void;
  onStartRename?: (i: number, currentValue: string) => void;
  editIndex?: number | null;
  editValue?: string;
  setEditValue?: (v: string) => void;
  onRename?: (i: number) => void;
  onCancelRename?: () => void;
}

const menuItems = [
  {
    label: "New Search",
    icon: Search,
    key: "search",
  },
  {
    label: "Profile",
    icon: User,
    key: "profile",
  },
  {
    label: "Liked Cards",
    icon: Heart,
    key: "liked",
  },
];

const Sidebar: React.FC<SidebarProps> = (props) => {
  const navigate = useNavigate();
  const {
    sidebarOpen,
    startNewSearch,
    goToProfile,
    recentSearches,
    onRecentSearchClick,
    onRecentMenuToggle,
    menuOpenIndex,
    onDeleteRecent,
    onStartRename,
    editIndex,
    editValue,
    setEditValue,
    onRename,
    onCancelRename,
  } = props;

  // Assign correct click handlers for menuItems
  const itemHandlers = {
    search: startNewSearch,
    profile: goToProfile,
    liked: () => {}, // Placeholder, can customize as needed
  };

  // To focus input on rename open
  const inputRef = useRef<HTMLInputElement>(null);

  // For closing menus by click outside
  const [openMenuIdx, setOpenMenuIdx] = React.useState<number | null>(null);

  React.useEffect(() => {
    setOpenMenuIdx(props.menuOpenIndex ?? null);
  }, [props.menuOpenIndex]);

  // Handle click outside for closing the menu (moved logic to RecentSearchMenu)

  React.useEffect(() => {
    if (editIndex !== null && sidebarOpen) {
      inputRef.current?.focus();
    }
  }, [editIndex, sidebarOpen]);

  return (
    <div
      className="transition-all duration-300 relative flex flex-col border-r"
      style={{
        width: props.sidebarOpen ? 320 : 64,
        minWidth: props.sidebarOpen ? 320 : 64,
        maxWidth: 320,
        background: "#e6eaf6", // match to design - soft light blue, not pure white
        height: "100%",
        overflow: "hidden",
        paddingTop: 8,
        paddingBottom: 20,
        borderColor: "rgba(30,34,61,0.10)"
      }}
    >
      {/* Logo and Brand */}
      <div
        className={`flex items-center transition-all duration-200 w-full px-4 pt-2`}
        style={{
          marginBottom: props.sidebarOpen ? 16 : 0,
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
        {props.sidebarOpen && (
          <img
            src="/lovable-uploads/b44114ab-67b3-40dd-9c6f-fb15199406d2.png"
            alt="Clura"
            className="h-6 ml-2"
            style={{ transition: "opacity 0.2s" }}
          />
        )}
      </div>
      <nav
        className={`flex flex-col mt-2 w-full ${
          props.sidebarOpen ? "px-2 gap-1" : "items-center"
        } flex-1`}
      >
        <SidebarMenuButton
          icon={Search}
          label="New Search"
          sidebarOpen={props.sidebarOpen}
          onClick={props.startNewSearch}
        />
        <SidebarMenuButton
          icon={User}
          label="Profile"
          sidebarOpen={props.sidebarOpen}
          onClick={props.goToProfile}
          style={{ marginTop: props.sidebarOpen ? 0 : undefined }}
        />
        <SidebarMenuButton
          icon={Heart}
          label="Liked Cards"
          sidebarOpen={props.sidebarOpen}
          onClick={() => navigate("/liked")}
          style={{
            marginBottom: props.sidebarOpen ? 8 : 10,
            marginTop: props.sidebarOpen ? 2 : undefined,
          }}
        />
        <div style={{ marginTop: props.sidebarOpen ? 6 : 5 }} />
        {props.recentSearches && props.recentSearches.length > 0 && (
          <div
            className={`w-full ${
              props.sidebarOpen ? "px-4 mt-2" : "flex flex-col items-center mt-2"
            }`}
          >
            <div
              className={`text-xs font-semibold mb-2 text-gray-500 ${
                props.sidebarOpen ? "" : "text-center"
              }`}
            >
              Recent Searches
            </div>
            <div className={`${props.sidebarOpen ? "space-y-1" : ""}`}>
              {props.recentSearches.map((q, i) => (
                <RecentSearchItem
                  key={i}
                  q={q}
                  i={i}
                  sidebarOpen={props.sidebarOpen}
                  isEditing={props.editIndex === i}
                  isMenuOpen={props.menuOpenIndex === i}
                  editValue={props.editValue}
                  setEditValue={props.setEditValue}
                  onRecentSearchClick={props.onRecentSearchClick}
                  onMenuToggle={props.onRecentMenuToggle}
                  onDeleteRecent={props.onDeleteRecent}
                  onStartRename={props.onStartRename}
                  onRename={props.onRename}
                  onCancelRename={props.onCancelRename}
                  closeMenu={() => {}} // For sidebar this is handled in RecentSearchItem
                />
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
