
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
      className="absolute top-5 z-50 border-none rounded-full p-2 transition flex items-center justify-center"
      style={{
        width: 40,
        height: 40,
        background: "transparent",
        color: "#000",
        left: sidebarWidth,
        transition: "left 0.3s, background 0.2s"
      }}
      aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
      onClick={onToggle}
      tabIndex={0}
      onMouseOver={e => (e.currentTarget.style.background = "#f3f4f6")}
      onMouseOut={e => (e.currentTarget.style.background = "transparent")}
    >
      <span style={{ fontSize: 20, color: "#000" }}>
        {sidebarOpen ? "<" : ">"}
      </span>
    </button>
  );
};

export default SidebarToggle;
