
import SearchSidebar from '../components/SearchSidebar';
import SearchMainArea from '../components/SearchMainArea';

const Search = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SearchSidebar />
      <SearchMainArea />
    </div>
  );
};

export default Search;
