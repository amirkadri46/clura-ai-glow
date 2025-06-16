
import React, { useRef } from "react";
import { Search, User, Heart } from "lucide-react";
import SidebarMenuButton from "./SidebarMenuButton";
import RecentSearchItem from "./RecentSearchItem";
import UserCreditsBox from "@/components/UserCreditsBox";
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

  const inputRef = useRef<HTMLInputElement>(null);
  const [openMenuIdx, setOpenMenuIdx] = React.useState<number | null>(null);

  React.useEffect(() => {
    setOpenMenuIdx(props.menuOpenIndex ?? null);
  }, [props.menuOpenIndex]);

  React.useEffect(() => {
    if (editIndex !== null && sidebarOpen) {
      inputRef.current?.focus();
    }
  }, [editIndex, sidebarOpen]);

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div
      className="relative flex flex-col border-r h-full overflow-hidden"
      style={{
        width: props.sidebarOpen ? 320 : 64,
        minWidth: props.sidebarOpen ? 320 : 64,
        maxWidth: 320,
        background: "#e6eaf6",
        paddingTop: 8,
        paddingBottom: 0,
        borderColor: "rgba(30,34,61,0.10)",
        transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      }}
    >
      {/* Logo and Brand */}
      <div
        className={`flex items-center w-full px-4 pt-2 cursor-pointer hover:bg-gray-100 rounded-lg mx-2 transition-colors duration-200`}
        style={{
          marginBottom: props.sidebarOpen ? 16 : 0,
          minHeight: 48,
          justifyContent: "flex-start",
          height: "48px",
        }}
        onClick={handleLogoClick}
      >
        <img
          src="/lovable-uploads/78ab56d9-6ccc-48d5-8802-a52814ec56ee.png"
          alt="Clura.ai Icon"
          className="w-8 h-8 transition-opacity duration-300"
        />
        {props.sidebarOpen && (
          <img
            src="/lovable-uploads/b44114ab-67b3-40dd-9c6f-fb15199406d2.png"
            alt="Clura"
            className="h-6 ml-2 transition-opacity duration-300"
          />
        )}
      </div>
      
      {/* Navigation Menu */}
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
        
        {/* Recent Searches */}
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
                  closeMenu={() => {}}
                />
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Credits Box at Bottom */}
      <UserCreditsBox sidebarOpen={props.sidebarOpen} />
    </div>
  );
};

export default Sidebar;
