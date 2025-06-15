
import { useState, useRef, useEffect } from "react";

export const useRecentSearchMenu = () => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [menuOpenIndex, setMenuOpenIndex] = useState<number | null>(null);
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Close menu on outside click
  useEffect(() => {
    if (menuOpenIndex === null) return;
    
    function handleClickOutside(event: MouseEvent) {
      let clickedOnMenu = false;
      for (const ref of menuRefs.current) {
        if (ref && ref.contains(event.target as Node)) {
          clickedOnMenu = true;
          break;
        }
      }
      if (!clickedOnMenu) setMenuOpenIndex(null);
    }
    
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => document.removeEventListener("mousedown", handleClickOutside, true);
  }, [menuOpenIndex]);

  const handleMenuToggle = (i: number) => {
    setMenuOpenIndex(menuOpenIndex === i ? null : i);
  };

  const handleStartRename = (i: number, currentValue: string) => {
    setEditIndex(i);
    setEditValue(currentValue);
  };

  const handleRename = (i: number, recentSearches: string[], setRecentSearches: (fn: (prev: string[]) => string[]) => void) => {
    setRecentSearches(prev => prev.map((v, idx) => idx === i ? editValue : v));
    setEditIndex(null);
    setEditValue("");
  };

  const handleCancelRename = () => {
    setEditIndex(null);
    setEditValue("");
  };

  const handleDeleteRecent = (i: number, setRecentSearches: (fn: (prev: string[]) => string[]) => void) => {
    setRecentSearches(prev => prev.filter((_, idx) => idx !== i));
    setMenuOpenIndex(null);
  };

  return {
    editIndex,
    editValue,
    setEditValue,
    menuOpenIndex,
    menuRefs,
    handleMenuToggle,
    handleStartRename,
    handleRename,
    handleCancelRename,
    handleDeleteRecent
  };
};
