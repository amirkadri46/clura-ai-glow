
import SearchSidebar from "@/components/SearchSidebar";
import MainContent from "@/components/MainContent";

const Search = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-white to-[#F5F5F5] font-inter">
      <SearchSidebar />
      <div className="flex-1 flex flex-col items-center justify-center">
        <MainContent />
      </div>
    </div>
  );
};

export default Search;
