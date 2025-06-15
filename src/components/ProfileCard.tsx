
import React, { useState } from "react";
import { MessageCircle, Heart, Linkedin } from "lucide-react";
import { DummyProfile } from "./dummyProfiles";
import { toast } from "sonner";

interface ProfileCardProps {
  profile: DummyProfile;
  initiallyLiked?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, initiallyLiked = false }) => {
  const [liked, setLiked] = useState(initiallyLiked);

  const handleLike = () => {
    setLiked((prev) => !prev);
    toast(liked ? `Removed from Liked` : `Added to Liked`);
  };

  const handleMessage = () => {
    toast("Messaging coming soon!");
  };

  const handleLinkedIn = () => {
    toast("LinkedIn redirect coming soon!");
  };

  // Badge color gradient for relevance (1–10, green→yellow→red)
  const getScoreColor = () => {
    if (profile.relevance <= 3) return "bg-green-500";
    if (profile.relevance <= 7) return "bg-yellow-400";
    return "bg-red-500";
  };

  return (
    <div className="relative bg-[#1a1a1a] text-white rounded-xl shadow-lg p-6 flex flex-col transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl animate-fade-in" style={{ minHeight: 380 }}>
      {/* Header */}
      <div className="flex items-center mb-5">
        <img
          src={profile.image}
          alt={profile.fullName}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-700 mr-5"
        />
        <div className="flex-1">
          <div className="font-bold text-xl">{profile.fullName}</div>
          <div className="text-sm font-light opacity-90">{profile.role}</div>
          <div className="text-xs text-gray-400 mt-0.5">{profile.company}</div>
        </div>
        <div
          className={`ml-2 flex items-center px-3 py-1 rounded-full font-medium text-sm shadow-md ${getScoreColor()}`}
        >
          <span>{profile.relevance}</span>
        </div>
      </div>
      {/* Description & Info */}
      <div className="mb-5">
        <div className="font-normal mb-2 leading-snug text-base">{profile.description}</div>
        <div className="text-xs text-gray-400 flex items-center gap-2 mb-1">
          <span>{profile.location}</span>
        </div>
      </div>
      {/* Background bullets */}
      <div className="mb-5">
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
          {profile.background.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Action Buttons */}
      <div className="mt-auto flex gap-3">
        <button
          onClick={handleMessage}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#232428] hover:bg-[#272729] transition text-white font-medium text-sm shadow hover:shadow-md"
          tabIndex={0}
        >
          <MessageCircle className="w-5 h-5" />
          Message
        </button>
        <button
          onClick={handleLike}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition text-white font-medium text-sm shadow hover:shadow-md ${liked ? "bg-red-500 hover:bg-red-600" : "bg-[#232428] hover:bg-red-500"}`}
          aria-pressed={liked}
          tabIndex={0}
        >
          <Heart className="w-5 h-5" fill={liked ? "#fff" : "none"} />
          {liked ? "Liked" : "Like"}
        </button>
        <button
          onClick={handleLinkedIn}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#232428] hover:bg-blue-600 transition text-white font-medium text-sm shadow hover:shadow-md"
          tabIndex={0}
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
