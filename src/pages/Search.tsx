
import React, { useState } from "react";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import Sidebar from "./profile/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
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

  const startNewSearch = () => {
    setQuery("");
    // ...add any additional logic if needed
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-white transition-colors duration-300">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          startNewSearch={startNewSearch}
          goToProfile={goToProfile}
        />
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
