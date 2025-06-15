import React, { useState } from "react";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import Sidebar from "./profile/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSend = () => {
    if (query.trim()) {
      console.log("Searched:", query);
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
      setRecentSearches((prev) => [query, ...prev]);
      setQuery("");
    }
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  // Toggle button is outside the sidebar, keep function exactly as before
  // Mimic the same look, position right to sidebar, floating
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
        />

        {/* Toggle Button OUTSIDE the sidebar */}
        <button
          className="absolute top-5 left-[320px] z-50 border border-gray-200 rounded-full shadow p-2 transition flex items-center justify-center"
          style={{
            width: 40,
            height: 40,
            background: "#f3f4f6",
            color: "#8d94a1",
            // sidebarWidth: 320px when open, 64px when closed
            left: sidebarOpen ? 320 : 64,
            transition: "left 0.3s",
          }}
          aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          onClick={handleSidebarToggle}
          tabIndex={0}
          onMouseOver={e => (e.currentTarget.style.background = "#d1d9ed")}
          onMouseOut={e => (e.currentTarget.style.background = "#f3f4f6")}
        >
          <span style={{ fontSize: 18 }}>{sidebarOpen ? "<" : ">"}</span>
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
