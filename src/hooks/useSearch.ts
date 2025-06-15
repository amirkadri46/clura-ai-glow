
import { useState, useRef, useCallback } from "react";
import { DummyProfile, dummyProfiles } from "@/components/dummyProfiles";

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

export const useSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<DummyProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchBarAtTop, setSearchBarAtTop] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const startNewSearch = useCallback(() => {
    setSearchBarAtTop(false);
    setQuery("");
    setResults([]);
    setLoading(false);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, []);

  const handleSearch = useCallback((evt?: React.FormEvent, directQuery?: string) => {
    if (evt) evt.preventDefault();
    const searchFor = typeof directQuery === "string" ? directQuery : query;
    if (!searchFor.trim()) return;
    
    setLoading(true);
    setTimeout(() => {
      const profilesWithCustomScore = dummyProfiles
        .map((p) => ({
          ...p,
          __score: scoreProfile(p, searchFor)
        }))
        .sort((a, b) => a.__score - b.__score);

      setResults(profilesWithCustomScore as DummyProfile[]);
      setSearchBarAtTop(true);
      setLoading(false);

      setRecentSearches(prev => {
        let arr = prev.filter((q) => q !== searchFor);
        arr.unshift(searchFor);
        return arr.slice(0, 8);
      });
    }, 550);
  }, [query]);

  const handleRecentSearchClick = useCallback((recent: string) => {
    setQuery(recent);
    setSearchBarAtTop(false);
    setResults([]);
    setLoading(false);
    setTimeout(() => {
      handleSearch(undefined, recent);
    }, 150);
  }, [handleSearch]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  }, [handleSearch]);

  return {
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
  };
};
