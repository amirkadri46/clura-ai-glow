
import React, { useRef } from "react";
import { MoreVertical, Search, Check, X } from "lucide-react";
import RecentSearchMenu from "./RecentSearchMenu";

interface RecentSearchItemProps {
  q: string;
  i: number;
  sidebarOpen: boolean;
  isEditing: boolean;
  isMenuOpen: boolean;
  editValue?: string;
  setEditValue?: (v: string) => void;
  onRecentSearchClick?: (search: string) => void;
  onMenuToggle?: (i: number) => void;
  onDeleteRecent?: (i: number) => void;
  onStartRename?: (i: number) => void;
  onRename?: (i: number) => void;
  onCancelRename?: () => void;
  closeMenu?: () => void;
}

const RecentSearchItem: React.FC<RecentSearchItemProps> = ({
  q,
  i,
  sidebarOpen,
  isEditing,
  isMenuOpen,
  editValue,
  setEditValue,
  onRecentSearchClick,
  onMenuToggle,
  onDeleteRecent,
  onStartRename,
  onRename,
  onCancelRename,
  closeMenu,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (isEditing && sidebarOpen) {
      inputRef.current?.focus();
    }
  }, [isEditing, sidebarOpen]);

  if (sidebarOpen) {
    return (
      <div
        className="flex items-center group"
        style={{
          background: "transparent",
          paddingLeft: 8,
          position: "relative",
        }}
      >
        {isEditing && setEditValue ? (
          <>
            <input
              ref={inputRef}
              className="text-sm px-2 py-1 border border-gray-300 rounded focus:outline-none mr-2 flex-1 bg-white"
              value={editValue}
              onChange={e => setEditValue!(e.target.value)}
              onBlur={() => onRename && onRename(i)}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  onRename && onRename(i);
                } else if (e.key === "Escape") {
                  onCancelRename && onCancelRename();
                }
              }}
            />
            <button
              onClick={() => onRename && onRename(i)}
              tabIndex={-1}
              className="ml-1 p-1 hover:bg-gray-200 rounded"
            >
              <Check size={14} />
            </button>
            <button
              onClick={onCancelRename}
              tabIndex={-1}
              className="ml-1 p-1 hover:bg-gray-200 rounded"
            >
              <X size={14} />
            </button>
          </>
        ) : (
          <>
            <div
              onClick={() => onRecentSearchClick && onRecentSearchClick(q)}
              className="text-sm text-gray-700 truncate cursor-pointer flex-1 hover:underline rounded-lg transition-colors"
              title={q}
              style={{
                padding: "6px 8px",
                marginRight: 2,
                userSelect: "none",
              }}
              onMouseOver={e => (e.currentTarget.style.background = "#f3f4f6")}
              onMouseOut={e => (e.currentTarget.style.background = "transparent")}
            >
              {q}
            </div>
            <button
              onClick={() => onMenuToggle && onMenuToggle(i)}
              className="ml-2 p-1 rounded transition"
              style={{
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MoreVertical size={18} color="#24292f" /> {/* even darker grey */}
            </button>
            {isMenuOpen && (
              <RecentSearchMenu
                onRename={() => {
                  onStartRename && onStartRename(i);
                  closeMenu && closeMenu();
                }}
                onDelete={() => {
                  onDeleteRecent && onDeleteRecent(i);
                  closeMenu && closeMenu();
                }}
                onClose={closeMenu || (() => {})}
                style={{ left: 180, top: "50%", transform: "translateY(-50%)" }}
              />
            )}
          </>
        )}
      </div>
    );
  }

  return (
    <div
      className="text-xs text-gray-600 w-8 h-8 flex items-center justify-center rounded mb-1 relative"
      style={{ background: "transparent" }}
    >
      <button
        onClick={() => onRecentSearchClick && onRecentSearchClick(q)}
        className="p-0 m-0 rounded hover:bg-gray-200 transition"
        style={{ width: "100%", height: "100%" }}
      >
        <Search className="w-3 h-3 mr-0" />
      </button>
      <button
        onClick={() => onMenuToggle && onMenuToggle(i)}
        className="absolute right-0 top-0 p-1 rounded transition"
        style={{
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MoreVertical size={12} color="#24292f" /> {/* even darker grey */}
      </button>
      {isMenuOpen && (
        <RecentSearchMenu
          onRename={() => {
            onStartRename && onStartRename(i);
            closeMenu && closeMenu();
          }}
          onDelete={() => {
            onDeleteRecent && onDeleteRecent(i);
            closeMenu && closeMenu();
          }}
          onClose={closeMenu || (() => {})}
          style={{
            right: "100%",
            top: 0,
            minWidth: 90,
          }}
        />
      )}
    </div>
  );
};

export default RecentSearchItem;
