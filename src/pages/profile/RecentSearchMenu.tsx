
import React, { useRef, useEffect } from "react";

interface RecentSearchMenuProps {
  onRename: () => void;
  onDelete: () => void;
  onClose: () => void;
  style?: React.CSSProperties;
}

const RecentSearchMenu: React.FC<RecentSearchMenuProps> = ({
  onRename,
  onDelete,
  onClose,
  style = {},
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler, true);
    return () => {
      document.removeEventListener("mousedown", handler, true);
    };
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="absolute z-50 min-w-[120px] shadow-xl border border-gray-200 rounded-xl bg-white px-0.5 py-1 flex flex-col gap-1"
      style={{
        ...style,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <button
        onClick={onRename}
        className="w-full block text-xs font-semibold text-gray-700 hover:bg-gray-100 px-4 py-2 leading-6 text-left rounded-t-xl transition"
        style={{
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <span className="flex items-center gap-2">
          <svg width="16" height="16" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><path d="M16.475 5.408l2.117 2.117m-2.743 1.992L6 19l.022 1.955L8 21.983 19.902 10.057M16.475 5.408l1.414-1.415a2 2 0 112.829 2.829l-1.415 1.415"/></svg>
          Rename
        </span>
      </button>
      <button
        onClick={onDelete}
        className="w-full block text-xs font-semibold text-white bg-red-600 hover:bg-red-700 px-4 py-2 text-left rounded-b-xl transition"
      >
        <span className="flex items-center gap-2">
          <svg width="16" height="16" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18M9 6V4a2 2 0 012-2h2a2 2 0 012 2v2M10 11v6M14 11v6M5 6v14a2 2 0 002 2h10a2 2 0 002-2V6"></path></svg>
          Delete
        </span>
      </button>
    </div>
  );
};

export default RecentSearchMenu;
