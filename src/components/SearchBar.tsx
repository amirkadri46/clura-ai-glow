
import React, { useState, useEffect } from "react";
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
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (!searchBarAtTop) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsScrollingUp(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsScrollingUp(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, searchBarAtTop]);

  // Calculate the available width and center position
  const availableWidth = `calc(100vw - ${sidebarWidth}px)`;
  const leftOffset = sidebarWidth;

  const fixedStyles: React.CSSProperties = searchBarAtTop
    ? {
        position: "fixed" as "fixed",
        top: isScrollingUp || lastScrollY < 100 ? 32 : -100,
        left: leftOffset,
        width: availableWidth,
        zIndex: 40,
        display: "flex",
        justifyContent: "center",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1), left 0.3s cubic-bezier(.33,1.01,.61,.99)",
        opacity: isScrollingUp || lastScrollY < 100 ? 1 : 0,
        transform: `translateY(${isScrollingUp || lastScrollY < 100 ? 0 : -20}px)`,
      }
    : {
        position: "relative" as "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 25,
        transition: "all 0.65s cubic-bezier(.33,1.01,.61,.99)",
      };

  return (
    <div
      className="transition-all duration-300"
      style={fixedStyles}
    >
      <form
        onSubmit={onSubmit}
        className="w-full max-w-2xl"
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
            className="flex items-center rounded-xl p-3 ml-2 bg-black hover:bg-gray-800 transition-colors"
            style={{
              boxShadow: "0 2px 16px rgba(0,0,0,0.2)"
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
