
import React from "react";

interface SidebarToggleProps {
  sidebarOpen: boolean;
  sidebarWidth: number;
  onToggle: () => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({
  sidebarOpen,
  sidebarWidth,
  onToggle,
}) => {
  return (
    <button
      className="absolute top-5 z-50 border-none rounded-full p-2 flex items-center justify-center hover:bg-gray-200 transition-all duration-300"
      style={{
        width: 40,
        height: 40,
        background: "transparent",
        color: "#000",
        left: sidebarWidth,
        transition: "left 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s ease"
      }}
      aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
      onClick={onToggle}
      tabIndex={0}
    >
      <span 
        style={{ 
          fontSize: 20, 
          color: "#000",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        }}
        className={sidebarOpen ? "" : "transform rotate-180"}
      >
        {sidebarOpen ? "<" : ">"}
      </span>
    </button>
  );
};

export default SidebarToggle;
