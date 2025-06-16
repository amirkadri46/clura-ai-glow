
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
      className="absolute top-5 z-50 border-none rounded-full p-2 transition-colors duration-200 flex items-center justify-center hover:bg-gray-200"
      style={{
        width: 40,
        height: 40,
        background: "transparent",
        color: "#000",
        left: sidebarWidth,
        transition: "left 0.3s"
      }}
      aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
      onClick={onToggle}
      tabIndex={0}
    >
      <span style={{ fontSize: 20, color: "#000" }}>
        {sidebarOpen ? "<" : ">"}
      </span>
    </button>
  );
};

export default SidebarToggle;
