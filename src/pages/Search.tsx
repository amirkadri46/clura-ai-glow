
import React, { useState, useEffect } from "react";
import Sidebar from "./profile/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { dummyProfiles } from "@/components/dummyProfiles";
import { LikedCardsProvider, useLikedCards } from "@/hooks/useLikedCards";
import SearchBar from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";
import SidebarToggle from "@/components/SidebarToggle";
import { useSearch } from "@/hooks/useSearch";
import { useRecentSearchMenu } from "@/hooks/useRecentSearchMenu";

const DashboardContent: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Search functionality
  const {
    query,
    setQuery,
    results,
    loading,
    searchBarAtTop,
    recentSearches,
    setRecentSearches,
    inputRef,
    startNewSearch,
    handleSearch,
    handleRecentSearchClick,
    handleKeyDown
  } = useSearch();

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

  // Liked cards global sync
  const { syncProfiles } = useLikedCards();
  useEffect(() => { 
    syncProfiles(dummyProfiles); 
  }, [syncProfiles]);

  // For sidebar navigation (dummy)
  const goToProfile = () => {};

  const handleSidebarToggle = () => setSidebarOpen((v) => !v);

  // Calculate dynamic sidebar width for SearchBar positioning
  const sidebarWidth = sidebarOpen ? 320 : 64;

  return (
    <div className="flex w-full min-h-screen transition-colors duration-300 relative bg-white">
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
      
      <SidebarToggle
        sidebarOpen={sidebarOpen}
        sidebarWidth={sidebarWidth}
        onToggle={handleSidebarToggle}
      />

      {/* Main Content */}
      <main
        className="flex-1 flex flex-col min-h-screen items-center bg-white p-3 md:px-12"
        style={{ minWidth: 0 }}
      >
        <SearchBar
          searchBarAtTop={searchBarAtTop}
          sidebarOpen={sidebarOpen}
          sidebarWidth={sidebarWidth}
          value={query}
          onChange={setQuery}
          onSubmit={handleSearch}
          onKeyDown={handleKeyDown}
          inputRef={inputRef}
          autoFocus={!searchBarAtTop}
        />
        
        <SearchResults
          results={results}
          loading={loading}
          searchBarAtTop={searchBarAtTop}
        />
      </main>
    </div>
  );
};

const Search: React.FC = () => (
  <LikedCardsProvider profiles={dummyProfiles}>
    <SidebarProvider>
      <DashboardContent />
    </SidebarProvider>
  </LikedCardsProvider>
);

export default Search;
