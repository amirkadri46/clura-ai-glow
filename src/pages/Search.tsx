
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
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

  // "New Search" on the sidebar should reset the query.
  const startNewSearch = () => {
    setQuery("");
    // ...add any additional logic if needed
  };

  // "Profile" on the sidebar should navigate to the profile page.
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
          <div
            className="w-full max-w-2xl rounded-2xl bg-white border border-gray-200 shadow-lg flex items-center px-8 py-6"
            style={{
              boxShadow: "0 4px 32px 0 #0004, 0 1.5px 8px 0 #23242611",
            }}
          >
            <input
              type="text"
              className="flex-1 bg-white border border-gray-200 rounded-md outline-none text-lg text-neutral-900 placeholder:text-neutral-400 font-normal px-4 py-3 mr-4"
              placeholder="What do you want to know?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              aria-label="Send"
              onClick={handleSend}
              className="ml-2 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
              style={{
                width: 48,
                height: 48,
                boxShadow: "0 2px 8px 0 #0002, 0 0.5px 2px 0 #23242622",
              }}
            >
              <ArrowRight
                size={32}
                strokeWidth={4}
                color="#18181b"
                className="mx-auto"
              />
            </button>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Search;
