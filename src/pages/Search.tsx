import React, { useState } from "react";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import Sidebar from "./profile/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [menuOpenIndex, setMenuOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  // NOTE: handleSend is now ONLY for UI effect, not recentSearches
  const handleSend = () => {
    // No add to recentSearches here
    // Only UI effect (grey on button handled via styles)
    // In future: call backend here.
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Only add to recentSearches with New Search
  const startNewSearch = () => {
    if (query.trim()) {
      if (
        !recentSearches.some(
          q => q.trim().toLowerCase() === query.trim().toLowerCase()
        )
      ) {
        setRecentSearches((prev) => [query, ...prev]);
      }
      setQuery("");
    }
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  const handleRecentSearchClick = (recent: string) => {
    setQuery(recent);
  };

  const handleMenuToggle = (i: number) => {
    setMenuOpenIndex(menuOpenIndex === i ? null : i);
    setEditIndex(null);
  };

  const handleDeleteRecent = (i: number) => {
    setRecentSearches(prev => prev.filter((_, j) => j !== i));
    setMenuOpenIndex(null);
  };

  const handleStartRename = (i: number) => {
    setEditIndex(i);
    setEditValue(recentSearches[i]);
    setMenuOpenIndex(null);
  };

  const handleRename = (i: number) => {
    if (editValue.trim()) {
      setRecentSearches(prev =>
        prev.map((item, idx) => (idx === i ? editValue.trim() : item))
      );
      setEditIndex(null);
      setEditValue("");
    }
  };

  const handleCancelRename = () => {
    setEditIndex(null);
    setEditValue("");
  };

  const handleSidebarToggle = () => setSidebarOpen((v) => !v);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-white transition-colors duration-300 relative">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          startNewSearch={startNewSearch}
          goToProfile={goToProfile}
          recentSearches={recentSearches}
          onRecentSearchClick={handleRecentSearchClick}
          onRecentMenuToggle={handleMenuToggle}
          menuOpenIndex={menuOpenIndex}
          onDeleteRecent={handleDeleteRecent}
          onStartRename={handleStartRename}
          editIndex={editIndex}
          editValue={editValue}
          setEditValue={setEditValue}
          onRename={handleRename}
          onCancelRename={handleCancelRename}
        />

        {/* Sidebar Toggle Button */}
        <button
          className="absolute top-5 z-50 border-none rounded-full p-2 transition flex items-center justify-center"
          style={{
            width: 40,
            height: 40,
            background: "transparent",
            color: "#000",
            left: sidebarOpen ? 320 : 64,
            transition: "left 0.3s, background 0.2s",
          }}
          aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          onClick={handleSidebarToggle}
          tabIndex={0}
          onMouseOver={e => (e.currentTarget.style.background = "#f3f4f6")}
          onMouseOut={e => (e.currentTarget.style.background = "transparent")}
        >
          <span style={{ fontSize: 20, color: "#000" }}>{sidebarOpen ? "<" : ">"}</span>
        </button>

        {/* Main Content */}
        <main className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-2xl">
            <div
              className="border shadow-2xl"
              style={{
                borderColor: "#8d94a1",
                background: "#fff",
                borderRadius: 24,
                boxShadow: "0 4px 32px 0 #0008, 0 2px 8px 0 #23242622",
                padding: 0,
              }}
            >
              <div
                className="flex items-center"
                style={{
                  paddingLeft: 32,
                  paddingRight: 32,
                  paddingTop: 24,
                  paddingBottom: 24,
                  borderRadius: 24,
                }}
              >
                <SearchIcon className="w-6 h-6" style={{ color: "#8d94a1" }} />
                <input
                  type="text"
                  className="flex-1 bg-transparent outline-none text-xl font-light text-black placeholder-[#8d94a1] ml-4 mr-4"
                  placeholder="who are you looking for"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  style={{ color: "#000" }}
                />
                {/* Send Button with grey hover effect */}
                <button
                  aria-label="Send"
                  // No onClick for backend/LLM yet
                  onClick={handleSend}
                  style={{
                    background: "#fff",
                    border: "1.5px solid #8d94a1",
                    borderRadius: 12,
                    padding: "12px 24px",
                    color: "#8d94a1",
                    transition: "background 0.2s",
                  }}
                  className="hover:bg-gray-100 transition-colors duration-200"
                  tabIndex={0}
                  onMouseDown={e => (e.currentTarget.style.background = "#f3f4f6")}
                  onMouseUp={e => (e.currentTarget.style.background = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
                  disabled={false}
                >
                  <ArrowRight className="w-5 h-5" style={{ color: "#8d94a1" }} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Search;
