
import { useState } from 'react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

const Search = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with Clura logo and name from home page */}
      <header className="flex items-center p-4">
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

      {/* Main content area with resizable panels */}
      <div className="flex-1">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          {/* Sidebar */}
          <ResizablePanel defaultSize={25} minSize={15} maxSize={40}>
            <div className="h-full bg-gray-100">
            </div>
          </ResizablePanel>

          {/* Resize handle */}
          <ResizableHandle withHandle />

          {/* Main content */}
          <ResizablePanel defaultSize={75}>
            <div className="h-full">
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Search;
