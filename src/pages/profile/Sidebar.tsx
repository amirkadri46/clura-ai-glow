
import React, { useRef } from "react";
import { Search, User, MoreVertical, Check, X, Heart } from "lucide-react";

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
  onStartRename?: (i: number) => void;
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

  React.useEffect(() => {
    if (editIndex !== null && sidebarOpen) {
      inputRef.current?.focus();
    }
  }, [editIndex, sidebarOpen]);

  return (
    <div
      className="transition-all duration-300 relative flex flex-col border-r border-black"
      style={{
        width: sidebarOpen ? 320 : 64,
        minWidth: sidebarOpen ? 320 : 64,
        maxWidth: 320,
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
      <nav
        className={`flex flex-col mt-2 w-full ${
          sidebarOpen ? "px-2 gap-1" : "items-center"
        } flex-1`}
      >
        {menuItems.map(({ label, icon: Icon, key }, idx) => (
          <button
            key={key}
            onClick={itemHandlers[key]}
            className={`flex ${
              sidebarOpen
                ? "flex-row items-center w-full px-4 py-2 rounded-lg"
                : "flex-col items-center justify-center w-12 h-12 my-1 rounded-lg"
            } transition-colors duration-150 font-medium`}
            style={{
              color: "#8d94a1",
              background: "#d1d9ed",
              marginBottom:
                key === "profile"
                  ? 4 // Even smaller gap under profile for liked
                  : key === "liked"
                  ? 10 // SMALLER gap under liked
                  : 0,
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "#f3f4f6")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "#d1d9ed")
            }
          >
            <Icon
              className={sidebarOpen ? "w-5 h-5 mr-3" : "w-5 h-5"}
              color="#8d94a1"
            />
            {sidebarOpen && <span>{label}</span>}
          </button>
        ))}

        {/* Spacer to push recent searches lower - reduce the margin top */}
        <div style={{ marginTop: sidebarOpen ? 12 : 8 }} />

        {/* Recent Searches with grey hover effect */}
        {props.recentSearches && props.recentSearches.length > 0 && (
          <div
            className={`w-full ${
              sidebarOpen ? "px-4 mt-4" : "flex flex-col items-center mt-4"
            }`}
          >
            <div
              className={`text-xs font-semibold mb-2 text-gray-500 ${
                sidebarOpen ? "" : "text-center"
              }`}
            >
              Recent Search's
            </div>
            <div className={`${sidebarOpen ? "space-y-1" : ""}`}>
              {props.recentSearches.map((q, i) =>
                props.sidebarOpen ? (
                  <div
                    key={i}
                    className="flex items-center group"
                    style={{
                      background: "transparent",
                      paddingLeft: 8,
                      position: "relative",
                    }}
                  >
                    {props.editIndex === i && props.setEditValue ? (
                      <>
                        <input
                          ref={inputRef}
                          className="text-sm px-2 py-1 border border-gray-300 rounded focus:outline-none mr-2 flex-1 bg-white"
                          value={props.editValue}
                          onChange={(e) =>
                            props.setEditValue!(e.target.value)
                          }
                          onBlur={() =>
                            props.onRename && props.onRename(i)
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              props.onRename && props.onRename(i);
                            } else if (e.key === "Escape") {
                              props.onCancelRename &&
                                props.onCancelRename();
                            }
                          }}
                        />
                        <button
                          onClick={() => props.onRename && props.onRename(i)}
                          tabIndex={-1}
                          className="ml-1 p-1 hover:bg-gray-200 rounded"
                        >
                          <Check size={14} />
                        </button>
                        <button
                          onClick={props.onCancelRename}
                          tabIndex={-1}
                          className="ml-1 p-1 hover:bg-gray-200 rounded"
                        >
                          <X size={14} />
                        </button>
                      </>
                    ) : (
                      <>
                        {/* Recent search clickable with grey on hover */}
                        <div
                          onClick={() =>
                            props.onRecentSearchClick &&
                            props.onRecentSearchClick(q)
                          }
                          className="text-sm text-gray-700 truncate cursor-pointer flex-1 hover:underline rounded-lg transition-colors"
                          title={q}
                          style={{
                            padding: "6px 8px",
                            marginRight: 2,
                            userSelect: "none",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.background = "#f3f4f6")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                        >
                          {q}
                        </div>
                        <button
                          onClick={() =>
                            props.onRecentMenuToggle &&
                            props.onRecentMenuToggle(i)
                          }
                          className="ml-2 p-1 rounded transition"
                          style={{
                            background: "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <MoreVertical size={18} color="#323232" /> {/* dark grey */}
                        </button>
                        {props.menuOpenIndex === i && (
                          <div
                            className="absolute z-20 left-36 top-1/2 -translate-y-1/2 min-w-[120px] shadow-xl border border-gray-100 rounded-xl bg-white px-0.5 py-1 flex flex-col gap-1"
                            style={{
                              boxShadow:
                                "0 2px 10px 0 rgba(0,0,0,0.08), 0 0.5px 1.5px rgba(60,60,60,0.09)",
                              border: "1px solid #eee",
                            }}
                          >
                            <button
                              onClick={() =>
                                props.onStartRename &&
                                props.onStartRename(i)
                              }
                              className="modernMenuBtn w-full block text-xs font-semibold text-gray-700 hover:bg-[#f3f4f6] px-4 py-2 leading-6 text-left rounded-t-xl transition"
                              style={{
                                borderBottom:
                                  "1px solid #e5e7eb",
                              }}
                            >
                              Rename
                            </button>
                            <button
                              onClick={() =>
                                props.onDeleteRecent &&
                                props.onDeleteRecent(i)
                              }
                              className="modernMenuBtn w-full block text-xs font-semibold text-red-600 hover:bg-[#f3f4f6] px-4 py-2 text-left rounded-b-xl transition"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ) : (
                  <div
                    key={i}
                    className="text-xs text-gray-600 w-8 h-8 flex items-center justify-center rounded mb-1 relative"
                    style={{ background: "transparent" }}
                  >
                    <button
                      onClick={() =>
                        props.onRecentSearchClick &&
                        props.onRecentSearchClick(q)
                      }
                      className="p-0 m-0 rounded hover:bg-gray-200 transition"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <Search className="w-3 h-3 mr-0" />
                    </button>
                    <button
                      onClick={() =>
                        props.onRecentMenuToggle &&
                        props.onRecentMenuToggle(i)
                      }
                      className="absolute right-0 top-0 p-1 rounded transition"
                      style={{
                        background: "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MoreVertical size={12} color="#323232" /> {/* dark grey */}
                    </button>
                    {props.menuOpenIndex === i && (
                      <div className="absolute right-full top-0 bg-white rounded-xl shadow-xl border border-gray-100 px-0.5 py-1 flex flex-col min-w-[90px] gap-0.5 z-20">
                        <button
                          onClick={() =>
                            props.onStartRename &&
                            props.onStartRename(i)
                          }
                          className="modernMenuBtn w-full block text-xs font-semibold text-gray-700 hover:bg-[#f3f4f6] px-3 py-2 rounded-t-xl transition"
                        >
                          Rename
                        </button>
                        <button
                          onClick={() =>
                            props.onDeleteRecent &&
                            props.onDeleteRecent(i)
                          }
                          className="modernMenuBtn w-full block text-xs font-semibold text-red-600 hover:bg-[#f3f4f6] px-3 py-2 rounded-b-xl transition"
                        >
                          Delete
                        </button>
                      </div>
                    )}
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

