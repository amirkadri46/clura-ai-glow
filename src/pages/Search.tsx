
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchSidebar from '@/components/SearchSidebar';
import MainSearchArea from '@/components/MainSearchArea';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [searchHistory, setSearchHistory] = useState([
    "AI engineers in Silicon Valley",
    "Product managers at startups", 
    "Full stack developers near me"
  ]);

  useEffect(() => {
    if (searchParams.get('q')) {
      setQuery(searchParams.get('q') || '');
    }
  }, [searchParams]);

  const handleSearch = (newQuery: string) => {
    if (newQuery.trim()) {
      setQuery(newQuery);
      if (!searchHistory.includes(newQuery)) {
        setSearchHistory([newQuery, ...searchHistory.slice(0, 4)]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 font-inter flex">
      <SearchSidebar />
      <MainSearchArea 
        query={query} 
        onSearch={handleSearch}
        searchHistory={searchHistory}
      />
    </div>
  );
};

export default Search;
