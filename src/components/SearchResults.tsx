
import React from "react";
import ProfileCard from "./ProfileCard";
import { DummyProfile } from "./dummyProfiles";

interface SearchResultsProps {
  results: DummyProfile[];
  loading: boolean;
  searchBarAtTop: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  loading,
  searchBarAtTop,
}) => {
  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center w-full h-60">
        <div className="text-lg font-medium text-indigo-600 animate-pulse">
          Searching...
        </div>
      </div>
    );
  }

  if (!loading && results.length > 0) {
    return (
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
    );
  }

  if (!loading && searchBarAtTop && results.length === 0) {
    return (
      <div className="w-full pt-40 md:pt-36 text-xl text-gray-500 flex items-center justify-center min-h-[300px] animate-fade-in">
        No results found.
      </div>
    );
  }

  return null;
};

export default SearchResults;
