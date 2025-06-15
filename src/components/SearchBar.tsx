
import React, { forwardRef } from "react";
import { Search as SearchIcon, ArrowRight } from "lucide-react";

interface SearchBarProps {
  searchBarAtTop: boolean;
  sidebarOpen: boolean;
  sidebarWidth: number;
  value: string;
  onChange: (v: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  autoFocus?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchBarAtTop,
  sidebarOpen,
  sidebarWidth,
  value,
  onChange,
  onSubmit,
  onKeyDown,
  inputRef,
  autoFocus,
}) => {
  // Calculate position: always horizontally centered in main area (not viewport)
  // If at top: fixed, else: relative in flow.
  const fixedStyles = searchBarAtTop
    ? {
        position: "fixed",
        top: 32, // 2rem
        left: `calc(${sidebarWidth}px + 50%)`,
        transform: "translateX(-50%)",
        zIndex: 40,
        width: "100%",
        maxWidth: "32rem", // Tailwind max-w-xl
        transition:
          "all 0.65s cubic-bezier(.33,1.01,.61,.99), left 0.3s cubic-bezier(.33,1.01,.61,.99)",
      }
    : {
        position: "relative",
        left: "auto",
        transform: "none",
        zIndex: 25,
        width: "100%",
        maxWidth: "32rem",
        margin: "0 auto",
        transition:
          "all 0.65s cubic-bezier(.33,1.01,.61,.99), left 0.3s cubic-bezier(.33,1.01,.61,.99)",
      };

  return (
    <div
      className={`transition-all duration-700 flex justify-center`}
      style={fixedStyles}
    >
      <form
        onSubmit={onSubmit}
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
            value={value}
            onChange={e => onChange(e.target.value)}
            onKeyDown={onKeyDown}
            aria-label="Who are you looking for?"
            autoFocus={autoFocus}
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
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
