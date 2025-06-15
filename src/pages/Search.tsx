
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

const Search = () => {
  return (
    <div className="min-h-screen h-screen flex flex-col bg-white">
      {/* Header with Clura logo and name, same as home page */}
      <header className="flex items-center p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/78ab56d9-6ccc-48d5-8802-a52814ec56ee.png" 
            alt="Clura.ai Icon" 
            className="w-8 h-8"
          />
          <img 
            src="/lovable-uploads/b44114ab-67b3-40dd-9c6f-fb15199406d2.png" 
            alt="Clura" 
            className="h-6"
          />
        </div>
      </header>
      <div className="flex-1 h-0">
        <ResizablePanelGroup direction="horizontal" className="h-full w-full">
          {/* Sidebar - light grey and full height */}
          <ResizablePanel defaultSize={25} minSize={15} maxSize={40}>
            <div className="bg-gray-100 h-full w-full flex flex-col"></div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          {/* Main content (empty for now) */}
          <ResizablePanel defaultSize={75}>
            <div className="h-full w-full"></div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Search;
