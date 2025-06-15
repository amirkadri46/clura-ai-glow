
import React, { useState } from "react";
import Sidebar from "./profile/Sidebar";
import PersonalInfo from "./profile/PersonalInfo";
import EducationSection from "./profile/EducationSection";
import ExperienceSection from "./profile/ExperienceSection";
import ProjectsSection from "./profile/ProjectsSection";
import CertificationsSection from "./profile/CertificationsSection";
import SkillsSection from "./profile/SkillsSection";
import ProfilesSection from "./profile/ProfilesSection";
import ResumeUploadCard from "@/components/profile/ResumeUploadCard";
import SaveProfileButton from "@/components/profile/SaveProfileButton";
import ProfileView from "@/components/profile/ProfileView";
import { useNavigate } from "react-router-dom";
import { useProfileData } from "@/hooks/useProfileData";
import { useToast } from "@/hooks/use-toast";
import { SidebarProvider } from "@/components/ui/sidebar"; // <-- Add this import

// Main Profile page refactored to support view and edit modes.
const Profile = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [newSkill, setNewSkill] = useState("");
  const [mode, setMode] = useState<"edit" | "view">("edit");
  const { toast } = useToast();

  const {
    profile,
    setProfile,
    education,
    addEducation,
    removeEducation,
    updateEducation,
    experience,
    addExperience,
    removeExperience,
    updateExperience,
    projects,
    addProject,
    removeProject,
    updateProject,
    certifications,
    addCertification,
    removeCertification,
    updateCertification,
    skills,
    addSkill,
    removeSkill,
    updateSkill,
    profiles,
    addProfile,
    removeProfile,
    updateProfile
  } = useProfileData();

  const startNewSearch = () => {
    navigate("/search");
  };

  const goToProfile = () => {};

  const handleSkillKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      // Values are updated live by onChange
    }
  };

  const setSkills = (skillsArr: string[]) => {
    // Helper function to update skills array
    skillsArr.forEach((skill, index) => {
      if (index < skills.length) {
        updateSkill(index, skill);
      } else {
        addSkill();
        updateSkill(index, skill);
      }
    });
  };

  // When "Save Profile" is clicked: show toast, switch to view mode
  const handleSaveProfile = () => {
    toast({
      title: "Profile Saved",
      description: "Your profile has been saved successfully!",
    });
    setMode("view");
  };

  // When Edit in profile view is clicked: switch to edit mode
  const handleEditProfile = () => {
    setMode("edit");
  };

  // When Delete is clicked: reset all profile state and switch to edit mode
  const handleDeleteProfile = () => {
    setProfile({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      summary: ""
    });
    education.length && education.forEach(e => removeEducation(e.id));
    experience.length && experience.forEach(e => removeExperience(e.id));
    projects.length && projects.forEach(p => removeProject(p.id));
    certifications.length && certifications.forEach((_, i) => removeCertification(0));
    skills.length && skills.forEach((_, i) => removeSkill(0));
    profiles.length && profiles.forEach((_, i) => removeProfile(0));
    toast({
      title: "Profile Deleted",
      description: "Your profile has been deleted.",
      variant: "destructive"
    });
    setMode("edit");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen h-screen bg-white flex flex-col">
        <div className="flex flex-1 h-0 w-full">
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            startNewSearch={startNewSearch}
            goToProfile={goToProfile}
          />
          <div className="flex-1 h-full w-full bg-white p-0 overflow-y-auto">
            <div className="w-full">
              <div className="flex items-center mb-6 px-8 pt-8">
                <h1 className="text-3xl font-bold text-black">My Profile</h1>
              </div>
              <ResumeUploadCard />
              {mode === "edit" ? (
                <>
                  <PersonalInfo
                    profile={profile}
                    setProfile={setProfile}
                    handleKeyPress={handleKeyPress}
                  />

                  <EducationSection
                    education={education}
                    addEducation={addEducation}
                    removeEducation={removeEducation}
                    updateEducation={updateEducation}
                  />

                  <ExperienceSection
                    experience={experience}
                    addExperience={addExperience}
                    removeExperience={removeExperience}
                    updateExperience={updateExperience}
                  />

                  <ProjectsSection
                    projects={projects}
                    addProject={addProject}
                    removeProject={removeProject}
                    updateProject={updateProject}
                  />

                  <CertificationsSection
                    certifications={certifications}
                    addCertification={addCertification}
                    removeCertification={removeCertification}
                    updateCertification={updateCertification}
                    handleKeyPress={handleKeyPress}
                  />

                  <SkillsSection
                    skills={skills}
                    newSkill={newSkill}
                    setNewSkill={setNewSkill}
                    handleSkillKeyPress={handleSkillKeyPress}
                    removeSkill={removeSkill}
                  />

                  <ProfilesSection
                    profiles={profiles}
                    addProfile={addProfile}
                    removeProfile={removeProfile}
                    updateProfile={updateProfile}
                    handleKeyPress={handleKeyPress}
                  />

                  <SaveProfileButton
                    profile={profile}
                    education={education}
                    experience={experience}
                    projects={projects}
                    certifications={certifications}
                    skills={skills}
                    profiles={profiles}
                    onSave={handleSaveProfile}
                  />
                </>
              ) : (
                <ProfileView
                  profile={profile}
                  education={education}
                  experience={experience}
                  projects={projects}
                  certifications={certifications}
                  skills={skills}
                  profiles={profiles}
                  onEdit={handleEditProfile}
                  onDelete={handleDeleteProfile}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Profile;

