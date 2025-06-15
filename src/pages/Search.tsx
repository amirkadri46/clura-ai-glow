
import React, { useRef, useState } from "react";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import Sidebar from "./profile/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import ProfileCard from "@/components/ProfileCard";
import { dummyProfiles, DummyProfile } from "@/components/dummyProfiles";

function scoreProfile(profile: DummyProfile, query: string): number {
  // Basic scoring system that can be elaborated
  // Lower score (1) = best match!
  if (!query.trim()) return profile.relevance;

  const lowerQuery = query.toLowerCase();

  // Hard boosting: check for top keywords (order matters)
  // These words/combos will boost best matches; lower returned value = higher ranking
  if (/ai engineer.*startup|machine learning founder|ai researcher.*healthcare|deep learning engineer|computer vision startup|nlp engineer|ai product manager|robotics ai engineer|fintech ai engineer|healthcare ai researcher/i.test(query)) {
    // Return actual relevance field (pre-labeled 1-10)
    return profile.relevance;
  }

  let score = 10;

  // Name/Title/Company/Description inclusion = strong relevance
  const fields = [
    profile.fullName,
    profile.role,
    profile.company,
    profile.description,
    profile.background.join(" "),
    profile.location
  ].join(" ").toLowerCase();

  if (fields.includes(lowerQuery)) score -= 4;

  // Individual tokens
  lowerQuery.split(/\s+/g).forEach(token => {
    if (profile.fullName.toLowerCase().includes(token)) score -= 1;
    if (profile.role.toLowerCase().includes(token)) score -= 2;
    if (profile.company.toLowerCase().includes(token)) score -= 1;
    if (profile.description.toLowerCase().includes(token)) score -= 1;
    if (profile.background.join(" ").toLowerCase().includes(token)) score -= 1;
    if (profile.location.toLowerCase().includes(token)) score -= 1;
  });

  // Clamp between 1–10
  return Math.max(1, Math.min(10, score));
}

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<DummyProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchBarAtTop, setSearchBarAtTop] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [menuOpenIndex, setMenuOpenIndex] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  // Dummy sidebar navigation
  const startNewSearch = () => {
    setSearchBarAtTop(false);
    setQuery("");
    setResults([]);
    inputRef.current?.focus();
  };

  const goToProfile = () => {};

  // Sidebar recent search callbacks - not implemented for demo
  const handleRecentSearchClick = (_recent: string) => {};
  const handleMenuToggle = (_i: number) => {};
  const handleDeleteRecent = (_i: number) => {};
  const handleStartRename = (_i: number) => {};
  const handleRename = (_i: number) => {};
  const handleCancelRename = () => {};

  const handleSidebarToggle = () => setSidebarOpen((v) => !v);

  // Animation for bar movement & loading
  const handleSearch = (evt?: React.FormEvent) => {
    if (evt) evt.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setTimeout(() => {
      // Compute results
      const profilesWithCustomScore = dummyProfiles
        .map((p) => ({
          ...p,
          __score: scoreProfile(p, query)
        }))
        .sort((a, b) => a.__score - b.__score);

      setResults(profilesWithCustomScore as DummyProfile[]);
      setSearchBarAtTop(true);
      setLoading(false);
    }, 550);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-neutral-100/90 transition-colors duration-300 relative neural-bg">
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
        {/* Main Search/App Content */}
        <main className="flex-1 flex flex-col min-h-screen justify-start items-center transition-all pt-0 px-3 md:px-12">
          {/* Animated Search Bar */}
          <div
            className={`w-full max-w-xl transition-all duration-500 ${
              searchBarAtTop
                ? "fixed top-12 left-1/2 -translate-x-1/2 z-40"
                : "mt-32 relative"
            }`}
          >
            <form onSubmit={handleSearch}>
              <div className="flex items-center w-full rounded-2xl shadow-2xl border border-gray-300 bg-white p-2 transition-all focus-within:ring-2 ring-indigo-400">
                <SearchIcon className="w-6 h-6 text-gray-400 ml-2" />
                <input
                  ref={inputRef}
                  type="text"
                  className="flex-1 bg-transparent outline-none text-xl px-4 py-5 font-light text-black placeholder-[#8d94a1]"
                  placeholder="Search for AI engineers, founders, or skills..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button
                  aria-label="Search"
                  type="submit"
                  className="flex items-center rounded-xl p-3 ml-2 bg-indigo-600 hover:bg-indigo-700 transition text-white"
                  style={{
                    boxShadow: "0 2px 16px #6366f15c"
                  }}
                  tabIndex={0}
                >
                  <ArrowRight className="w-5 h-5" />
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
            <div className="w-full pt-40 md:pt-32 max-w-7xl mx-auto transition-all">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {results.map((profile, idx) => (
                  <ProfileCard
                    profile={profile}
                    key={profile.id}
                  />
                ))}
              </div>
            </div>
          )}
          {!loading && searchBarAtTop && results.length === 0 && (
            <div className="w-full pt-40 md:pt-32 text-xl text-gray-500 flex items-center justify-center min-h-[300px] animate-fade-in">
              No results found.
            </div>
          )}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Search;
