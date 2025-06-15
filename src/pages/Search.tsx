
import React, { useState } from "react";
import { ToggleLeft, ToggleRight } from "lucide-react";

const SIDEBAR_WIDTH = 260;

const Search = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen h-screen bg-white flex flex-col">
      {/* Header with Clura logo and name, same as home page */}
      <header className="flex items-center p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <img
            src="/lovable-uploads/78ab56d9-6ccc-48d5-8802-a52814ec56ee.png"
            alt="Clura.ai Icon"
            className="w-8 h-8"
          />
          <img
            src="/lovable-uploads/b44114ab-67b3-40dd-9c6f-fb15199406d2.png"
            alt="Clura"
            className="h-6"
          />
        </div>
      </header>
      <div className="flex flex-1 h-0 w-full">
        {/* Sidebar */}
        <div
          className={`transition-all duration-300 ${
            sidebarOpen ? "w-[260px]" : "w-0"
          } relative`}
          style={{
            minWidth: sidebarOpen ? SIDEBAR_WIDTH : 0,
            maxWidth: SIDEBAR_WIDTH,
            overflow: "hidden",
            background: "#f3f4f6", // Tailwind bg-gray-100
            height: "100%",
            borderRight: "1px solid #e5e7eb",
          }}
        >
          {/* Toggle Button */}
          <button
            className="absolute top-3 -right-6 z-20 bg-gray-100 border border-gray-200 rounded-full shadow p-2 transition hover:bg-gray-200 flex items-center justify-center"
            style={{ width: 40, height: 40 }}
            aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            onClick={() => setSidebarOpen((v) => !v)}
            tabIndex={0}
          >
            {sidebarOpen ? (
              <ToggleLeft size={24} />
            ) : (
              <ToggleRight size={24} />
            )}
          </button>
          {/* Sidebar content, left empty for user to add later */}
          <div className="h-full w-full" />
        </div>
        {/* Main content */}
        <div className="flex-1 h-full w-full transition-all duration-300">
          {/* Placeholder for main content */}
        </div>
      </div>
    </div>
  );
};

export default Search;
