
import React, { useRef } from "react";
import { Search as SearchIcon, ArrowRight } from "lucide-react";

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  onSearch: (evt?: React.FormEvent, directQuery?: string) => void;
  searchBarAtTop: boolean;
  sidebarOpen: boolean;
  loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  setQuery,
  onSearch,
  searchBarAtTop,
  sidebarOpen,
  loading,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch();
  };

  // Calculate positioning based on sidebar state and search state
  const getPositionStyles = () => {
    if (searchBarAtTop) {
      // When at top, position relative to the available viewport width
      const sidebarWidth = sidebarOpen ? 320 : 64;
      const availableWidth = `calc(100vw - ${sidebarWidth}px)`;
      const leftOffset = sidebarWidth;
      
      return {
        position: "fixed" as const,
        top: "32px",
        left: `${leftOffset}px`,
        width: availableWidth,
        transform: "none",
        zIndex: 40,
        transition: "all 0.65s cubic-bezier(.33,1.01,.61,.99)",
      };
    } else {
      // When centered, always center in the available space
      return {
        position: "relative" as const,
        top: "auto",
        left: "auto",
        width: "100%",
        transform: "none",
        zIndex: 25,
        transition: "all 0.65s cubic-bezier(.33,1.01,.61,.99)",
      };
    }
  };

  return (
    <div
      className={`transition-all duration-700 max-w-xl mx-auto flex justify-center`}
      style={getPositionStyles()}
    >
      <form
        onSubmit={onSearch}
        className="w-full max-w-xl"
        autoComplete="off"
        spellCheck={false}
      >
        <div 
          className="flex items-center w-full rounded-2xl shadow-2xl border border-gray-200 bg-white p-2 
            transition-all focus-within:ring-2 ring-indigo-400"
          style={{ boxShadow: "0 4px 24px 0 rgba(141,148,161,0.14)" }}
        >
          <SearchIcon className="w-6 h-6 text-gray-400 ml-2 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent outline-none text-xl px-4 py-5 font-light text-black placeholder-[#8d94a1]"
            placeholder="Who are you looking for?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
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
