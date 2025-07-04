
import React from "react";
import Sidebar from "./profile/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import { useLikedCards } from "@/hooks/useLikedCards";
import ProfileCard from "@/components/ProfileCard";
import { useRecentSearchMenu } from "@/hooks/useRecentSearchMenu";

const LikedCardsMain: React.FC = () => {
  const { likedProfiles } = useLikedCards();
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [recentSearches, setRecentSearches] = React.useState<string[]>([]);
  const navigate = useNavigate();

  // Recent search menu functionality
  const {
    editIndex,
    editValue,
    setEditValue,
    menuOpenIndex,
    handleMenuToggle,
    handleStartRename,
    handleRename,
    handleCancelRename,
    handleDeleteRecent
  } = useRecentSearchMenu();

  // Proper handlers for sidebar functionality
  const startNewSearch = () => navigate("/search");
  const goToProfile = () => navigate("/profile");
  const handleRecentSearchClick = (recent: string) => {
    navigate(`/search?q=${encodeURIComponent(recent)}`);
  };

  return (
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
        onDeleteRecent={(i) => handleDeleteRecent(i, setRecentSearches)}
        onStartRename={(i, currentValue) => handleStartRename(i, currentValue)}
        editIndex={editIndex}
        editValue={editValue}
        setEditValue={setEditValue}
        onRename={(i) => handleRename(i, recentSearches, setRecentSearches)}
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
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setSidebarOpen(v => !v);
        }}
        tabIndex={0}
        onMouseOver={e => (e.currentTarget.style.background = "#f3f4f6")}
        onMouseOut={e => (e.currentTarget.style.background = "transparent")}
      >
        <span style={{ fontSize: 20, color: "#000" }}>{sidebarOpen ? "<" : ">"}</span>
      </button>

      {/* Main Content: liked cards */}
      <main className="flex flex-1 flex-col items-center justify-start bg-white min-h-screen px-2 md:px-12 pt-24">
        {likedProfiles.length > 0 ? (
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {likedProfiles.map(profile => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        ) : (
          <div className="w-full text-center text-xl text-gray-400 pt-24 animate-fade-in">
            You have not liked any cards yet.
          </div>
        )}
      </main>
    </div>
  );
};

import { LikedCardsProvider } from "@/hooks/useLikedCards";
import { dummyProfiles } from "@/components/dummyProfiles";

const LikedCards: React.FC = () => (
  <LikedCardsProvider profiles={dummyProfiles}>
    <SidebarProvider>
      <LikedCardsMain />
    </SidebarProvider>
  </LikedCardsProvider>
);

export default LikedCards;
