import React, { useState } from "react";
import { ToggleLeft, ToggleRight } from "lucide-react";

const SIDEBAR_WIDTH = 260;
const SIDEBAR_COLLAPSED_WIDTH = 48;

const Search = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Replace this function with your real search clearing logic
  const startNewSearch = () => {
    // TODO: Insert logic to clear search params and start a new search session
    console.log("Starting a new search...");
  };

  return (
    <div className="min-h-screen h-screen bg-white flex flex-col">
      <div className="flex flex-1 h-0 w-full">
        {/* Sidebar */}
        <div
          className="transition-all duration-300 relative flex flex-col"
          style={{
            width: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
            minWidth: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
            maxWidth: SIDEBAR_WIDTH,
            background: "#f3f4f6", // Tailwind bg-gray-100
            height: "100%",
            borderRight: "1px solid #e5e7eb",
            overflow: "hidden",
          }}
        >
          {/* Top section: Logo & Brand + Button (shown only when sidebar is open) */}
          <div
            className={`flex flex-col items-center w-full px-4 transition-all duration-200 
              ${sidebarOpen ? "opacity-100 h-auto py-5" : "opacity-0 h-0 py-0 overflow-hidden"}
            `}
            style={{
              transitionProperty: "opacity, height, padding",
              paddingTop: sidebarOpen ? 20 : 0,
              paddingBottom: sidebarOpen ? 20 : 0,
            }}
          >
            {/* Brand Logo and Name */}
            <div className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/78ab56d9-6ccc-48d5-8802-a52814ec56ee.png"
                alt="Clura.ai Icon"
                className="w-8 h-8"
                style={{ transition: "opacity 0.2s" }}
              />
              <img
                src="/lovable-uploads/b44114ab-67b3-40dd-9c6f-fb15199406d2.png"
                alt="Clura"
                className="h-6"
                style={{ transition: "opacity 0.2s" }}
              />
            </div>
            {/* Start New Search button */}
            <button
              onClick={startNewSearch}
              type="button"
              aria-label="Start New Search"
              className="mt-2 mb-2"
              style={{
                width: 200,
                height: 50,
                background: "#1A2A44",
                color: "#fff",
                borderRadius: 25,
                fontFamily: "'Montserrat', 'Roboto', 'Inter', 'Arial', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: 1,
                textTransform: "uppercase",
                outline: "none",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "box-shadow 0.2s, background 0.2s",
                display: sidebarOpen ? "block" : "none",
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0px 0px 10px 2px #00A3FF";
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
              }}
            >
              Start New Search
            </button>
          </div>
          {/* Toggle Button always top right of sidebar, always visible */}
          <button
            className="absolute top-3 right-3 z-20 bg-gray-100 border border-gray-200 rounded-full shadow p-2 transition hover:bg-gray-200 flex items-center justify-center"
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
          {/* Sidebar content area, only visible when open */}
          <div className={`h-full w-full transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {/* Add your buttons and features here when open */}
          </div>
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
