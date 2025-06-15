import React, { useRef, useState, useEffect, useCallback } from "react";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import Sidebar from "./profile/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import ProfileCard from "@/components/ProfileCard";
import { dummyProfiles, DummyProfile } from "@/components/dummyProfiles";
import { LikedCardsProvider, useLikedCards } from "@/hooks/useLikedCards";
import SearchBar from "@/components/SearchBar";

// Relevance algorithm remains unchanged
function scoreProfile(profile: DummyProfile, query: string): number {
  if (!query.trim()) return profile.relevance;
  const lowerQuery = query.toLowerCase();
  if (/ai engineer.*startup|machine learning founder|ai researcher.*healthcare|deep learning engineer|computer vision startup|nlp engineer|ai product manager|robotics ai engineer|fintech ai engineer|healthcare ai researcher/i.test(query)) {
    return profile.relevance;
  }
  let score = 10;
  const fields = [
    profile.fullName,
    profile.role,
    profile.company,
    profile.description,
    profile.background.join(" "),
    profile.location
  ].join(" ").toLowerCase();
  if (fields.includes(lowerQuery)) score -= 4;
  lowerQuery.split(/\s+/g).forEach(token => {
    if (profile.fullName.toLowerCase().includes(token)) score -= 1;
    if (profile.role.toLowerCase().includes(token)) score -= 2;
    if (profile.company.toLowerCase().includes(token)) score -= 1;
    if (profile.description.toLowerCase().includes(token)) score -= 1;
    if (profile.background.join(" ").toLowerCase().includes(token)) score -= 1;
    if (profile.location.toLowerCase().includes(token)) score -= 1;
  });
  return Math.max(1, Math.min(10, score));
}

const DashboardContent: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<DummyProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchBarAtTop, setSearchBarAtTop] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Recent searches, edit, etc.
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [menuOpenIndex, setMenuOpenIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // For outside click detection (RecentSearchMenu)
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Liked cards global sync
  const { syncProfiles } = useLikedCards();
  useEffect(() => { syncProfiles(dummyProfiles); }, [syncProfiles]);

  // To reset for new search
  const startNewSearch = () => {
    setSearchBarAtTop(false);
    setQuery("");
    setResults([]);
    setLoading(false);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  // For sidebar navigation (dummy)
  const goToProfile = () => {};

  // Recent search logic, unchanged
  const handleRecentSearchClick = (recent: string) => {
    setQuery(recent);
    setSearchBarAtTop(false);
    setResults([]);
    setLoading(false);
    setTimeout(() => {
      handleSearch(undefined, recent);
    }, 150);
  };

  const handleMenuToggle = (i: number) => {
    setMenuOpenIndex(menuOpenIndex === i ? null : i);
  };

  const handleDeleteRecent = (i: number) => {
    setRecentSearches(prev => prev.filter((_, idx) => idx !== i));
    setMenuOpenIndex(null);
  };
  const handleStartRename = (i: number) => {
    setEditIndex(i);
    setEditValue(recentSearches[i]);
  };
  const handleRename = (i: number) => {
    setRecentSearches(prev => prev.map((v, idx) => idx === i ? editValue : v));
    setEditIndex(null);
    setEditValue("");
  };
  const handleCancelRename = () => setEditIndex(null);

  const handleSidebarToggle = () => setSidebarOpen((v) => !v);

  // Animate bar upwards on search (center to top, but centered in available space)
  const handleSearch = (evt?: React.FormEvent, directQuery?: string) => {
    if (evt) evt.preventDefault();
    const searchFor = typeof directQuery === "string" ? directQuery : query;
    if (!searchFor.trim()) return;
    setLoading(true);
    setTimeout(() => {
      // Compute results
      const profilesWithCustomScore = dummyProfiles
        .map((p) => ({
          ...p,
          __score: scoreProfile(p, searchFor)
        }))
        .sort((a, b) => a.__score - b.__score);

      setResults(profilesWithCustomScore as DummyProfile[]);
      setSearchBarAtTop(true);
      setLoading(false);

      // Add to recent searches, but not duplicates
      setRecentSearches(prev => {
        let arr = prev.filter((q) => q !== searchFor);
        arr.unshift(searchFor);
        return arr.slice(0, 8);
      });
    }, 550);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  // Fix: Center bar regardless of sidebar
  // Remove dynamic left/transform, use left: 50% and translateX(-50%) always

  // --- Fix RecentSearchMenu: click anywhere closes menu ---
  useEffect(() => {
    if (menuOpenIndex === null) return;
    function handleClickOutside(event: MouseEvent) {
      let clickedOnMenu = false;
      for (const ref of menuRefs.current) {
        if (ref && ref.contains(event.target as Node)) {
          clickedOnMenu = true;
          break;
        }
      }
      if (!clickedOnMenu) setMenuOpenIndex(null);
    }
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => document.removeEventListener("mousedown", handleClickOutside, true);
  }, [menuOpenIndex]);

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
        onRecentSearchClick={(recent) => {
          setQuery(recent);
          setSearchBarAtTop(false);
          setResults([]);
          setLoading(false);
          setTimeout(() => {
            handleSearch(undefined, recent);
          }, 150);
        }}
        onRecentMenuToggle={setMenuOpenIndex}
        menuOpenIndex={menuOpenIndex}
        onDeleteRecent={(i) => setRecentSearches(prev => prev.filter((_, idx) => idx !== i))}
        onStartRename={(i) => { setEditIndex(i); setEditValue(recentSearches[i]); }}
        editIndex={editIndex}
        editValue={editValue}
        setEditValue={setEditValue}
        onRename={(i) => { setRecentSearches(prev => prev.map((v, idx) => idx === i ? editValue : v)); setEditIndex(null); setEditValue(""); }}
        onCancelRename={() => setEditIndex(null)}
      />
      {/* Sidebar Toggle Button */}
      <button
        className="absolute top-5 z-50 border-none rounded-full p-2 transition flex items-center justify-center"
        style={{
          width: 40,
          height: 40,
          background: "transparent",
          color: "#000",
          left: sidebarWidth,
          transition: "left 0.3s, background 0.2s"
        }}
        aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        onClick={handleSidebarToggle}
        tabIndex={0}
        onMouseOver={e => (e.currentTarget.style.background = "#f3f4f6")}
        onMouseOut={e => (e.currentTarget.style.background = "transparent")}
      >
        <span style={{ fontSize: 20, color: "#000" }}>{sidebarOpen ? "<" : ">"}</span>
      </button>
      {/* Main Content (should take full available width after sidebar) */}
      <main
        className="flex-1 flex flex-col min-h-screen items-center bg-white p-3 md:px-12"
        style={{ minWidth: 0 }}
      >
        {/* --- Use new SearchBar component here --- */}
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
        {/* Loader */}
        {loading && (
          <div className="flex-1 flex items-center justify-center w-full h-60">
            <div className="text-lg font-medium text-indigo-600 animate-pulse">Searching...</div>
          </div>
        )}
        {/* Results */}
        {!loading && results.length > 0 && (
          <div className="w-full pt-40 md:pt-36 max-w-7xl mx-auto transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {results.map((profile, idx) => (
                <ProfileCard
                  profile={profile}
                  key={profile.id + "_" + idx}
                />
              ))}
            </div>
          </div>
        )}
        {!loading && searchBarAtTop && results.length === 0 && (
          <div className="w-full pt-40 md:pt-36 text-xl text-gray-500 flex items-center justify-center min-h-[300px] animate-fade-in">
            No results found.
          </div>
        )}
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
