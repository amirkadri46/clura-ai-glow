
import React, { useState } from "react";
import { Info, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UserCreditsBoxProps {
  sidebarOpen: boolean;
}

const UserCreditsBox: React.FC<UserCreditsBoxProps> = ({ sidebarOpen }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate();

  if (!sidebarOpen) return null;

  return (
    <div className="p-4 border-t border-gray-200 mt-auto">
      {/* Credits Box */}
      <div className="bg-white border border-gray-300 rounded-lg p-4 mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Search credits use</span>
          <div className="relative">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <Info className="w-4 h-4" />
            </button>
            {showTooltip && (
              <div className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-50 max-w-xs">
                You have used your daily search credits. Upgrade to pro
                <div className="absolute top-full right-2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-800"></div>
              </div>
            )}
          </div>
        </div>
        <div className="text-xs text-gray-500">0/5</div>
        <div className="text-xs text-gray-400 mt-1">0 of your daily credits used</div>
      </div>

      {/* Settings */}
      <div className="flex items-center justify-between mb-3">
        <button 
          onClick={() => navigate("/settings")}
          className="flex items-center w-full px-4 py-2 rounded-lg transition-colors duration-150 font-medium"
          style={{ background: "#d1d9ed" }}
          onMouseOver={e => (e.currentTarget.style.background = "#f3f4f6")}
          onMouseOut={e => (e.currentTarget.style.background = "#d1d9ed")}
        >
          <Settings className="w-5 h-5 mr-3" color="#8d94a1" />
          <span className="text-gray-700">Settings</span>
        </button>
      </div>

      {/* Upgrade Button */}
      <button
        onClick={() => navigate("/pricing")}
        className="w-full bg-black text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
      >
        Upgrade
      </button>
    </div>
  );
};

export default UserCreditsBox;
