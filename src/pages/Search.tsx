
import React, { useState } from "react";
import { Search as SearchIcon, ArrowRight, MoreVertical } from "lucide-react";
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

  // When user "submits" search (send or enter)
  const handleSend = () => {
    if (query.trim()) {
      if (
        !recentSearches.some(
          q => q.trim().toLowerCase() === query.trim().toLowerCase()
        )
      ) {
        setRecentSearches((prev) => [query, ...prev]);
      }
      // Here you can handle search, e.g. call an API
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Add a new recent search; called by sidebar's "New Search"
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

  // Click on a recent search: populate the search bar with that query.
  const handleRecentSearchClick = (recent: string) => {
    setQuery(recent);
  };

  // Handle open/close of 3-dot menu
  const handleMenuToggle = (i: number) => {
    setMenuOpenIndex(menuOpenIndex === i ? null : i);
    setEditIndex(null); // hide rename if open
  };

  // Delete a recent search
  const handleDeleteRecent = (i: number) => {
    setRecentSearches(prev => prev.filter((_, j) => j !== i));
    setMenuOpenIndex(null);
  };

  // Start rename mode for a recent search
  const handleStartRename = (i: number) => {
    setEditIndex(i);
    setEditValue(recentSearches[i]);
    setMenuOpenIndex(null);
  };

  // Confirm rename
  const handleRename = (i: number) => {
    if (editValue.trim()) {
      setRecentSearches(prev =>
        prev.map((item, idx) => (idx === i ? editValue.trim() : item))
      );
      setEditIndex(null);
      setEditValue("");
    }
  };

  // Cancel rename
  const handleCancelRename = () => {
    setEditIndex(null);
    setEditValue("");
  };

  // Toggle button logic and styling as per your requirements
  const handleSidebarToggle = () => setSidebarOpen((v) => !v);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-white transition-colors duration-300 relative">
        {/* Sidebar */}
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

        {/* Toggle Button OUTSIDE the sidebar */}
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
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
                boxShadow: "0 4px 32px 0 #0008, 0 2px 8px 0 #23242622",
                padding: "0",
              }}
            >
              <div
                className="flex items-center"
                style={{
                  paddingLeft: "32px",
                  paddingRight: "32px",
                  paddingTop: "24px",
                  paddingBottom: "24px",
                  borderRadius: "24px",
                }}
              >
                <SearchIcon className="w-6 h-6" style={{ color: "#8d94a1" }} />
                <input
                  type="text"
                  className="flex-1 bg-transparent outline-none text-xl font-light text-[#8d94a1] placeholder-[#8d94a1] ml-4 mr-4"
                  placeholder="who are you looking for"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
                <button
                  aria-label="Send"
                  onClick={handleSend}
                  style={{
                    background: "#fff",
                    border: `1.5px solid #8d94a1`,
                    borderRadius: "12px",
                    padding: "12px 24px",
                    color: "#8d94a1",
                    transition: "background 0.2s",
                  }}
                  className="hover:bg-gray-100 transition-colors duration-200"
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
