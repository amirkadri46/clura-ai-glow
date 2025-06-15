import React, { useRef, useEffect } from "react";
import { Search as SearchIcon, ArrowRight } from "lucide-react";

// Props to control search bar animation, content, and handlers
interface SearchBarProps {
  query: string;
  setQuery: (val: string) => void;
  searchBarAtTop: boolean;
  sidebarOpen: boolean;
  loading: boolean;
  onSearch: (e?: React.FormEvent) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
}

// The search bar smoothly transitions between centered and top,
// and adjusts its horizontal position based on sidebarOpen and search state.
const SearchBar: React.FC<SearchBarProps> = ({
  query,
  setQuery,
  searchBarAtTop,
  sidebarOpen,
  loading,
  onSearch,
  onKeyDown,
  inputRef,
}) => {
  // Calculate left position based on sidebar state for centering when no search yet
  // When in top (searchBarAtTop), always left: 50% for consistency
  // When in center, left padding is half the sidebar, to keep search bar centered in content area
  const sidebarWidth = sidebarOpen ? 320 : 64;
  const left = searchBarAtTop
    ? "50%"
    : `calc(${sidebarWidth}px + 50%)`;

  // Use animated transition for both top/center and left position
  return (
    <div
      className={`
        w-full transition-all duration-700 max-w-xl
        ${searchBarAtTop
          ? "fixed top-8 left-1/2 -translate-x-1/2 z-40"
          : "absolute top-1/2 -translate-y-1/2 left-0 z-30"}
        flex justify-center
      `}
      style={{
        left: searchBarAtTop ? "50%" : `calc(${sidebarWidth}px + 50%)`,
        transform: searchBarAtTop
          ? "translate(-50%, 0)"
          : `translate(-50%, -50%)`,
        zIndex: searchBarAtTop ? 40 : 30,
        alignItems: "center",
        transition: "all 0.65s cubic-bezier(.33,1.01,.61,.99)",
      }}
    >
      <form
        onSubmit={onSearch}
        className="w-full"
        autoComplete="off"
        spellCheck={false}
      >
        <div className="flex items-center w-full rounded-2xl shadow-2xl border border-gray-200 bg-white p-2 
            transition-all focus-within:ring-2 ring-indigo-400"
          style={{ boxShadow: "0 4px 24px 0 rgba(141,148,161,0.14)" }}>
          <SearchIcon className="w-6 h-6 text-gray-400 ml-2 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent outline-none text-xl px-4 py-5 font-light text-black placeholder-[#8d94a1]"
            placeholder="Who are you looking for?"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            aria-label="Who are you looking for?"
            autoFocus={!searchBarAtTop}
            tabIndex={0}
          />
          <button
            aria-label="Search"
            type="submit"
            className="flex items-center rounded-xl p-3 ml-2"
            style={{
              background: "linear-gradient(90deg,#6c47ff 8%,#8b5cf6 80%)",
              boxShadow: "0 2px 16px #6366f15c"
            }}
            tabIndex={0}
            disabled={loading}
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
