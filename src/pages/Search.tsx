
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
            <div className="glass-card p-8 bg-slate-900/40 backdrop-blur-lg border border-slate-700/50 rounded-2xl shadow-2xl">
              <div className="flex items-center space-x-4">
                <SearchIcon className="w-6 h-6 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-xl py-3 font-light"
                  placeholder="who are you looking for"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button
                  aria-label="Send"
                  onClick={handleSend}
                  className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-300 group"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

