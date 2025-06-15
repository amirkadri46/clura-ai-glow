
import React, { createContext, useContext, useState, useCallback } from "react";
import { DummyProfile } from "@/components/dummyProfiles";

// Context type
interface LikedCardsContextValue {
  likedIds: (string | number)[];
  isLiked: (id: string | number) => boolean;
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

export const LikedCardsProvider: React.FC<{
  profiles: DummyProfile[];
  children: React.ReactNode;
}> = ({ profiles, children }) => {
  const [likedIds, setLikedIds] = useState<(string | number)[]>([]);
  const [allProfiles, setAllProfiles] = useState<DummyProfile[]>(profiles);

  // Sync profiles when updated
  const syncProfiles = useCallback((ps: DummyProfile[]) => setAllProfiles(ps), []);

  const isLiked = (id: string | number) => likedIds.includes(id);

  const toggleLike = (profile: DummyProfile) => {
    setLikedIds((prev) => {
      if (prev.includes(profile.id)) return prev.filter((x) => x !== profile.id);
      return [profile.id, ...prev];
    });
  };

  // Find the actual profiles by ID
  const likedProfiles = allProfiles.filter((p) => likedIds.includes(p.id));

  return (
    <LikedCardsContext.Provider
      value={{ likedIds, isLiked, toggleLike, likedProfiles, syncProfiles }}
    >
      {children}
    </LikedCardsContext.Provider>
  );
};
