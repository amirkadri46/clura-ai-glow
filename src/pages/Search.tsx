
import React, { useState } from "react";
import { Send } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";

const Search = () => {
  const [query, setQuery] = useState("");

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

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#18191A]">
        {/* Sidebar */}
        <AppSidebar />
        {/* Main Content */}
        <main className="flex flex-1 items-center justify-center">
          <div
            className="w-full max-w-2xl rounded-2xl bg-[#232426] shadow-xl flex items-center px-8 py-6"
            style={{
              boxShadow: "0 4px 32px 0 #0004, 0 1.5px 8px 0 #23242699",
            }}
          >
            <input
              type="text"
              className="flex-1 bg-transparent outline-none text-lg text-neutral-200 placeholder:text-neutral-400 font-normal"
              placeholder="What do you want to know?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                background: "transparent",
              }}
            />
            <button
              aria-label="Send"
              onClick={handleSend}
              className="ml-4 flex items-center justify-center rounded-full bg-[#333436] hover:bg-[#37393C] transition-colors duration-200"
              style={{
                width: 48,
                height: 48,
                boxShadow: "0 2px 8px 0 #0002, 0 0.5px 2px 0 #23242655",
              }}
            >
              <Send className="text-neutral-300" size={24} />
            </button>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Search;
