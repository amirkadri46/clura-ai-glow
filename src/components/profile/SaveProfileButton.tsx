
import React from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Education, Experience, Project, ProfileType } from "@/types/profile";

interface SaveProfileButtonProps {
  profile: ProfileType;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  certifications: string[];
  skills: string[];
  profiles: string[];
  onSave?: () => void; // Make onSave optional for backward compatibility
}

const SaveProfileButton: React.FC<SaveProfileButtonProps> = ({
  profile,
  education,
  experience,
  projects,
  certifications,
  skills,
  profiles,
  onSave
}) => {
  const { toast } = useToast();

  const handleSaveProfile = () => {
    console.log("Saving profile data:", {
      profile,
      education,
      experience,
      projects,
      certifications,
      skills,
      profiles
    });

    toast({
      title: "Profile Saved",
      description: "Your profile has been saved successfully!",
    });
    if (onSave) {
      onSave();
    }
  };

  return (
    <div className="flex justify-end px-8 pb-8">
      <Button 
        onClick={handleSaveProfile}
        className="border border-gray-300 text-black bg-white hover:bg-gray-100 px-8"
      >
        Save Profile
      </Button>
    </div>
  );
};

export default SaveProfileButton;
