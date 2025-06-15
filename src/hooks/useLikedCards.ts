import React, { createContext, useContext, useState, useCallback } from "react";
import { DummyProfile } from "@/components/dummyProfiles";

// Context type
interface LikedCardsContextValue {
  likedIds: string[];
  isLiked: (id: string) => boolean;
  toggleLike: (profile: DummyProfile) => void;
  likedProfiles: DummyProfile[];
  syncProfiles: (profiles: DummyProfile[]) => void;
}

const LikedCardsContext = createContext<LikedCardsContextValue | undefined>(undefined);

export const useLikedCards = () => {
  const ctx = useContext(LikedCardsContext);
  if (!ctx) throw new Error("useLikedCards must be used within LikedCardsProvider");
  return ctx;
};

export const LikedCardsProvider: React.FC<{ profiles: DummyProfile[], children: React.ReactNode }> = ({ profiles, children }) => {
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [allProfiles, setAllProfiles] = useState<DummyProfile[]>(profiles);

  // Keep profiles in sync if dummyProfiles update
  const syncProfiles = useCallback((ps: DummyProfile[]) => setAllProfiles(ps), []);

  const isLiked = (id: string) => likedIds.includes(id);

  const toggleLike = (profile: DummyProfile) => {
    setLikedIds((prev) => {
      if (prev.includes(profile.id)) return prev.filter((x) => x !== profile.id);
      else return [profile.id, ...prev];
    });
    // allProfiles will be already set from Search or passed as prop
  };

  // Find the actual profiles by ID
  const likedProfiles = allProfiles.filter((p) => likedIds.includes(p.id));

  return (
    <LikedCardsContext.Provider value={{ likedIds, isLiked, toggleLike, likedProfiles, syncProfiles }}>
      {children}
    </LikedCardsContext.Provider>
  );
};
