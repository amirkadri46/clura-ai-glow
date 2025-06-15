import React, { useRef, useState, useEffect } from "react";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import Sidebar from "./profile/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import ProfileCard from "@/components/ProfileCard";
import { dummyProfiles, DummyProfile } from "@/components/dummyProfiles";
import { LikedCardsProvider, useLikedCards } from "@/hooks/useLikedCards";

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

  // Fix: Calculate actual content minwidth based on sidebar, so centering is always "dashboard-centered"
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
        {/* Animated Search Bar Centralized (relative to dashboard area) */}
        <div
          className={`w-full transition-all duration-700 max-w-xl
            ${searchBarAtTop
              ? "fixed top-8 left-1/2 -translate-x-1/2 z-40"
              : "relative mx-auto"}
            flex justify-center`}
          style={{
            left: searchBarAtTop ? `calc(${sidebarWidth}px + 50%)` : undefined,
            transform: searchBarAtTop ? "translateX(-50%)" : undefined,
            zIndex: 25,
            alignItems: "center",
            transition: "all 0.65s cubic-bezier(.33,1.01,.61,.99)",
          }}
        >
          <form
            onSubmit={handleSearch}
            className="w-full"
            autoComplete="off"
            spellCheck={false}
          >
            <div className="flex items-center w-full rounded-2xl shadow-2xl border border-gray-200 bg-white p-2 
              transition-all focus-within:ring-2 ring-indigo-400"
              style={{ boxShadow: "0 4px 24px 0 rgba(141,148,161,0.14)" }}>
              <SearchIcon className="w-6 h-6 text-gray-400 ml-2 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                className="flex-1 bg-transparent outline-none text-xl px-4 py-5 font-light text-black placeholder-[#8d94a1]"
                placeholder="Who are you looking for?"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-label="Who are you looking for?"
                autoFocus={!searchBarAtTop}
                tabIndex={0}
              />
              <button
                aria-label="Search"
                type="submit"
                className="flex items-center rounded-xl p-3 ml-2"
                style={{
                  background: "linear-gradient(90deg,#6c47ff 8%,#8b5cf6 80%)",
                  boxShadow: "0 2px 16px #6366f15c"
                }}
                tabIndex={0}
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </form>
        </div>
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
