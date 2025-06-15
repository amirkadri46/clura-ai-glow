import React, { useState } from "react";
import Sidebar from "./profile/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";

const LikedCards = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [menuOpenIndex, setMenuOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  // Dummy handlers to keep sidebar functionality
  const startNewSearch = () => {};
  const goToProfile = () => navigate("/profile");
  const handleRecentSearchClick = (_recent: string) => {};
  const handleMenuToggle = (_i: number) => {};
  const handleDeleteRecent = (_i: number) => {};
  const handleStartRename = (_i: number) => {};
  const handleRename = (_i: number) => {};
  const handleCancelRename = () => {};
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

        {/* Main Content: blank white */}
        <main className="flex flex-1 items-center justify-center bg-white" />
      </div>
    </SidebarProvider>
  );
};

export default LikedCards;
