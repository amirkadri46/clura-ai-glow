
import React from "react";
import AppSidebar from "@/components/app-sidebar";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC<{
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  startNewSearch: () => void;
  goToProfile: () => void;
}> = ({
  sidebarOpen,
  setSidebarOpen,
  startNewSearch,
  goToProfile,
}) => {
  return (
    <AppSidebar
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
      onNewSearch={startNewSearch}
      onGoProfile={goToProfile}
    />
  );
};

export default Sidebar;
