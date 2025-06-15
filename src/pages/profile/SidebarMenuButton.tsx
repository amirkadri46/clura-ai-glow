
import React from "react";

interface SidebarMenuButtonProps {
  icon: React.ElementType;
  label: string;
  sidebarOpen: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
}

const SidebarMenuButton: React.FC<SidebarMenuButtonProps> = ({
  icon: Icon,
  label,
  sidebarOpen,
  onClick,
  style = {},
}) => (
  <button
    onClick={onClick}
    className={`flex ${
      sidebarOpen
        ? "flex-row items-center w-full px-4 py-2 rounded-lg"
        : "flex-col items-center justify-center w-12 h-12 my-1 rounded-lg"
    } transition-colors duration-150 font-medium hover:bg-gray-100`}
    style={{
      ...style,
      background: "#d1d9ed",
    }}
  >
    <Icon className={sidebarOpen ? "w-5 h-5 mr-3" : "w-5 h-5"} color="#8d94a1" />
    {sidebarOpen && <span className="text-gray-700">{label}</span>}
  </button>
);

export default SidebarMenuButton;
