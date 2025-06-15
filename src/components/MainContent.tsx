
import SearchBar from "./SearchBar";
import SearchSuggestions from "./SearchSuggestions";
import { ChevronDown } from "lucide-react";

export default function MainContent() {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {/* Heading */}
      <div className="flex items-center justify-center mt-24 mb-6">
        <h1 className="text-black text-[48px] font-bold leading-tight font-inter text-center">
          The People Search Engine for
          <span className="ml-2 align-middle">Georgian Court University</span>
          <ChevronDown className="inline-block w-8 h-8 ml-2 text-black" />
        </h1>
      </div>
      <SearchBar />
      <SearchSuggestions />
    </div>
  );
}
