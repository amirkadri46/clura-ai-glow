
import React, { useState } from "react";
import Sidebar from "./profile/Sidebar";
import PersonalInfo from "./profile/PersonalInfo";
import EducationSection from "./profile/EducationSection";
import ExperienceSection from "./profile/ExperienceSection";
import ProjectsSection from "./profile/ProjectsSection";
import CertificationsSection from "./profile/CertificationsSection";
import SkillsSection from "./profile/SkillsSection";
import ProfilesSection from "./profile/ProfilesSection";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface Education {
  id: string;
  school: string;
  degree: string;
  major: string;
  startYear: string;
  endYear: string;
  gpa: string;
}
interface Experience {
  id: string;
  company: string;
  role: string;
  startYear: string;
  endYear: string;
  city: string;
  country: string;
  description: string;
}
interface Project {
  id: string;
  name: string;
  startYear: string;
  endYear: string;
  description: string;
}
interface ProfileType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  summary: string;
}

const Profile = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [newSkill, setNewSkill] = useState("");
  const [profile, setProfile] = useState<ProfileType>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    summary: ""
  });
  const [education, setEducation] = useState<Education[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [certifications, setCertifications] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [profiles, setProfiles] = useState<string[]>([]);

  const startNewSearch = () => {
    navigate("/search");
  };
  const goToProfile = () => {};

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      school: "",
      degree: "",
      major: "",
      startYear: "",
      endYear: "",
      gpa: ""
    };
    setEducation([...education, newEducation]);
  };
  const removeEducation = (id: string) => {
    setEducation(education.filter(edu => edu.id !== id));
  };
  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setEducation(education.map(edu =>
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: "",
      role: "",
      startYear: "",
      endYear: "",
      city: "",
      country: "",
      description: ""
    };
    setExperience([...experience, newExperience]);
  };
  const removeExperience = (id: string) => {
    setExperience(experience.filter(exp => exp.id !== id));
  };
  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setExperience(experience.map(exp =>
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: "",
      startYear: "",
      endYear: "",
      description: ""
    };
    setProjects([...projects, newProject]);
  };
  const removeProject = (id: string) => {
    setProjects(projects.filter(proj => proj.id !== id));
  };
  const updateProject = (id: string, field: keyof Project, value: string) => {
    setProjects(projects.map(proj =>
      proj.id === id ? { ...proj, [field]: value } : proj
    ));
  };

  const addCertification = () => {
    setCertifications([...certifications, ""]);
  };
  const removeCertification = (index: number) => {
    setCertifications(certifications.filter((_, i) => i !== index));
  };
  const updateCertification = (index: number, value: string) => {
    const newCertifications = [...certifications];
    newCertifications[index] = value;
    setCertifications(newCertifications);
  };

  const addSkill = () => {
    setSkills([...skills, ""]);
  };
  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };
  const updateSkill = (index: number, value: string) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const handleSkillKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const addProfile = () => {
    setProfiles([...profiles, ""]);
  };
  const removeProfile = (index: number) => {
    setProfiles(profiles.filter((_, i) => i !== index));
  };
  const updateProfile = (index: number, value: string) => {
    const newProfiles = [...profiles];
    newProfiles[index] = value;
    setProfiles(newProfiles);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      // Values are updated live by onChange
    }
  };

  return (
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
            {/* Header */}
            <div className="flex items-center mb-6 px-8 pt-8">
              <h1 className="text-3xl font-bold text-black">My Profile</h1>
            </div>
            {/* Resume Upload Section */}
            <Card className="mb-6 bg-white border-gray-300 mx-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-black">
                  My Resume
                  <Button variant="outline" className="flex items-center border-gray-300 text-black bg-white hover:bg-gray-100">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Resume
                  </Button>
                </CardTitle>
                <p className="text-sm text-black">This information will be shown to companies to help you find opportunities</p>
              </CardHeader>
            </Card>

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

            {/* Save Button */}
            <div className="flex justify-end px-8 pb-8">
              <Button className="border border-gray-300 text-black bg-white hover:bg-gray-100 px-8">
                Save Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
