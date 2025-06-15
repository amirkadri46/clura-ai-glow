
import { useState } from 'react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Menu } from 'lucide-react';

const Search = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with Clura logo and name */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          {/* Clura Logo */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          {/* Clura Name */}
          <h1 className="text-xl font-semibold text-gray-900">Clura</h1>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        >
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* Main content area with resizable panels */}
      <div className="flex-1">
        <ResizablePanelGroup direction="horizontal" className="min-h-full">
          {/* Sidebar */}
          <ResizablePanel 
            defaultSize={25} 
            minSize={15} 
            maxSize={40}
            className={`${sidebarCollapsed ? 'hidden md:block' : 'block'}`}
          >
            <div className="h-full bg-gray-100 p-4">
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-gray-900">Search History</h2>
                <div className="space-y-2">
                  <div className="p-3 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-shadow cursor-pointer">
                    <p className="text-sm text-gray-600">Previous search...</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-shadow cursor-pointer">
                    <p className="text-sm text-gray-600">Another search...</p>
                  </div>
                </div>
              </div>
            </div>
          </ResizablePanel>

          {/* Resize handle */}
          <ResizableHandle withHandle className="bg-gray-200 hover:bg-gray-300 transition-colors" />

          {/* Main content */}
          <ResizablePanel defaultSize={75}>
            <div className="h-full p-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Search</h2>
                <p className="text-gray-600">Main search interface will go here...</p>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Search;
