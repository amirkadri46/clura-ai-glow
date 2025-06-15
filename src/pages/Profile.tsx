import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, Plus, X, ToggleLeft, ToggleRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SIDEBAR_WIDTH = 260;
const SIDEBAR_COLLAPSED_WIDTH = 48;

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

interface Profile {
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
  
  const [profile, setProfile] = useState<Profile>({
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
    console.log("Starting new search session...");
    navigate("/search");
  };

  const goToProfile = () => {
    console.log("Already on profile page");
  };

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
    if (e.key === 'Enter') {
      console.log("Data saved automatically");
    }
  };

  return (
    <div className="min-h-screen h-screen bg-white flex flex-col">
      <div className="flex flex-1 h-0 w-full">
        {/* Sidebar */}
        <div
          className="transition-all duration-300 relative flex flex-col border-r border-black"
          style={{
            width: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
            minWidth: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
            maxWidth: SIDEBAR_WIDTH,
            background: "#f3f4f6",
            height: "100%",
            overflow: "hidden",
            paddingTop: 8,
            paddingBottom: 20,
          }}
        >
          {/* Logo & Brand */}
          <div
            className={`flex items-center transition-all duration-200 w-full px-4 pt-2 ${
              sidebarOpen ? "opacity-100 h-16" : "opacity-0 h-0 overflow-hidden"
            }`}
            style={{
              transitionProperty: "opacity,height",
              marginBottom: sidebarOpen ? 10 : 0,
              minHeight: 48,
              justifyContent: "flex-start",
            }}
          >
            <img
              src="/lovable-uploads/78ab56d9-6ccc-48d5-8802-a52814ec56ee.png"
              alt="Clura.ai Icon"
              className="w-8 h-8"
              style={{ transition: "opacity 0.2s" }}
            />
            <img
              src="/lovable-uploads/b44114ab-67b3-40dd-9c6f-fb15199406d2.png"
              alt="Clura"
              className="h-6 ml-2"
              style={{ transition: "opacity 0.2s" }}
            />
          </div>

          {/* Start New Search button */}
          {sidebarOpen && (
            <div className="w-full flex justify-center" style={{ marginBottom: "10px" }}>
              <button
                onClick={startNewSearch}
                className="text-white text-sm font-medium cursor-pointer hover:scale-110 transition-transform duration-200"
                style={{
                  background: "#374151",
                  borderRadius: "24px",
                  width: "200px",
                  height: "36px",
                  border: "none",
                  outline: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                new search
              </button>
            </div>
          )}

          {/* Profile Section */}
          {sidebarOpen && (
            <div className="w-full flex justify-center" style={{ marginBottom: "10px" }}>
              <button
                onClick={goToProfile}
                className="flex items-center justify-center text-gray-800 text-sm font-medium cursor-pointer hover:scale-110 transition-transform duration-200 bg-transparent"
                style={{
                  borderRadius: "24px",
                  width: "200px",
                  height: "36px",
                  border: "1px solid #374151",
                  outline: "none",
                }}
              >
                <User className="w-4 h-4 mr-2" />
                Profile
              </button>
            </div>
          )}

          {/* Toggle Button */}
          <button
            className="absolute top-3 right-3 z-20 border border-gray-200 rounded-full shadow p-2 transition flex items-center justify-center"
            style={{
              width: 40,
              height: 40,
              background: "#23272f",
              color: "#fff",
            }}
            aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            onClick={() => setSidebarOpen((v) => !v)}
            tabIndex={0}
          >
            {sidebarOpen ? (
              <ToggleLeft size={24} />
            ) : (
              <ToggleRight size={24} />
            )}
          </button>
        </div>

        {/* Main content */}
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

            {/* Personal Information */}
            <Card className="mb-6 bg-white border-gray-300 mx-0">
              <CardHeader>
                <CardTitle className="text-black">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">First Name</label>
                    <Input
                      value={profile.firstName}
                      onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter first name"
                      className="border-gray-300 text-black bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">Last Name</label>
                    <Input
                      value={profile.lastName}
                      onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter last name"
                      className="border-gray-300 text-black bg-white"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">Email</label>
                    <Input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter email"
                      className="border-gray-300 text-black bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">Phone</label>
                    <Input
                      value={profile.phone}
                      onChange={(e) => setProfile({...profile, phone: e.target.value})}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter phone number"
                      className="border-gray-300 text-black bg-white"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">City</label>
                    <Input
                      value={profile.city}
                      onChange={(e) => setProfile({...profile, city: e.target.value})}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter city"
                      className="border-gray-300 text-black bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">Country</label>
                    <Input
                      value={profile.country}
                      onChange={(e) => setProfile({...profile, country: e.target.value})}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter country"
                      className="border-gray-300 text-black bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Summary</label>
                  <Textarea
                    value={profile.summary}
                    onChange={(e) => setProfile({...profile, summary: e.target.value})}
                    onKeyPress={handleKeyPress}
                    placeholder="Profile Summary"
                    rows={4}
                    className="border-gray-300 text-black bg-white"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Education Section */}
            <Card className="mb-6 bg-white border-gray-300 mx-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-black">
                  Education
                  <Button onClick={addEducation} variant="outline" size="sm" className="border-gray-300 text-black bg-white hover:bg-gray-100">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Education
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="border border-gray-300 rounded-lg p-4 relative bg-white">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeEducation(edu.id)}
                      className="absolute top-2 right-2 text-black hover:bg-gray-100"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">School</label>
                        <Input
                          value={edu.school}
                          onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                          placeholder="Enter school name"
                          className="border-gray-300 text-black bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">Degree</label>
                        <Input
                          value={edu.degree}
                          onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                          placeholder="Enter degree"
                          className="border-gray-300 text-black bg-white"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">Major</label>
                        <Input
                          value={edu.major}
                          onChange={(e) => updateEducation(edu.id, "major", e.target.value)}
                          placeholder="Enter major"
                          className="border-gray-300 text-black bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">Start Year</label>
                        <Input
                          value={edu.startYear}
                          onChange={(e) => updateEducation(edu.id, "startYear", e.target.value)}
                          placeholder="Start year"
                          className="border-gray-300 text-black bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">End Year</label>
                        <Input
                          value={edu.endYear}
                          onChange={(e) => updateEducation(edu.id, "endYear", e.target.value)}
                          placeholder="End year"
                          className="border-gray-300 text-black bg-white"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-black mb-1">GPA</label>
                      <Input
                        value={edu.gpa}
                        onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                        placeholder="Enter GPA"
                        className="w-32 border-gray-300 text-black bg-white"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Work Experience Section */}
            <Card className="mb-6 bg-white border-gray-300 mx-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-black">
                  Work Experience
                  <Button onClick={addExperience} variant="outline" size="sm" className="border-gray-300 text-black bg-white hover:bg-gray-100">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Experience
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="border border-gray-300 rounded-lg p-4 relative bg-white">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeExperience(exp.id)}
                      className="absolute top-2 right-2 text-black hover:bg-gray-100"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">Company</label>
                        <Input
                          value={exp.company}
                          onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                          placeholder="Enter company name"
                          className="border-gray-300 text-black bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">Role</label>
                        <Input
                          value={exp.role}
                          onChange={(e) => updateExperience(exp.id, "role", e.target.value)}
                          placeholder="Enter role"
                          className="border-gray-300 text-black bg-white"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">Start Year</label>
                        <Input
                          value={exp.startYear}
                          onChange={(e) => updateExperience(exp.id, "startYear", e.target.value)}
                          placeholder="Start year"
                          className="border-gray-300 text-black bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">End Year</label>
                        <Input
                          value={exp.endYear}
                          onChange={(e) => updateExperience(exp.id, "endYear", e.target.value)}
                          placeholder="End year"
                          className="border-gray-300 text-black bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">City</label>
                        <Input
                          value={exp.city}
                          onChange={(e) => updateExperience(exp.id, "city", e.target.value)}
                          placeholder="Enter city"
                          className="border-gray-300 text-black bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">Country</label>
                        <Input
                          value={exp.country}
                          onChange={(e) => updateExperience(exp.id, "country", e.target.value)}
                          placeholder="Enter country"
                          className="border-gray-300 text-black bg-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Description</label>
                      <Textarea
                        value={exp.description}
                        onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                        placeholder="Describe your role and achievements"
                        rows={3}
                        className="border-gray-300 text-black bg-white"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Projects Section */}
            <Card className="mb-6 bg-white border-gray-300 mx-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-black">
                  Projects
                  <Button onClick={addProject} variant="outline" size="sm" className="border-gray-300 text-black bg-white hover:bg-gray-100">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Project
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {projects.map((project) => (
                  <div key={project.id} className="border border-gray-300 rounded-lg p-4 relative bg-white">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeProject(project.id)}
                      className="absolute top-2 right-2 text-black hover:bg-gray-100"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">Project Name</label>
                        <Input
                          value={project.name}
                          onChange={(e) => updateProject(project.id, "name", e.target.value)}
                          placeholder="Enter project name"
                          className="border-gray-300 text-black bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">Start Year</label>
                        <Input
                          value={project.startYear}
                          onChange={(e) => updateProject(project.id, "startYear", e.target.value)}
                          placeholder="Start year"
                          className="border-gray-300 text-black bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">End Year</label>
                        <Input
                          value={project.endYear}
                          onChange={(e) => updateProject(project.id, "endYear", e.target.value)}
                          placeholder="End year"
                          className="border-gray-300 text-black bg-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Description</label>
                      <Textarea
                        value={project.description}
                        onChange={(e) => updateProject(project.id, "description", e.target.value)}
                        placeholder="Describe your project"
                        rows={3}
                        className="border-gray-300 text-black bg-white"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications Section */}
            <Card className="mb-6 bg-white border-gray-300 mx-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-black">
                  Certifications
                  <Button onClick={addCertification} variant="outline" size="sm" className="border-gray-300 text-black bg-white hover:bg-gray-100">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Certification
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={cert}
                      onChange={(e) => updateCertification(index, e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter certification name"
                      className="flex-1 border-gray-300 text-black bg-white"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeCertification(index)}
                      className="text-black hover:bg-gray-100"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card className="mb-6 bg-white border-gray-300 mx-0">
              <CardHeader>
                <CardTitle className="text-black">Skills</CardTitle>
                <p className="text-sm text-black">Type a skill and press Enter to add it</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={handleSkillKeyPress}
                    placeholder="Type a skill and press Enter"
                    className="border-gray-300 text-black bg-white"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-1 bg-white border border-gray-300 text-black px-3 py-1 rounded-full">
                      <span className="text-sm">{skill}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeSkill(index)}
                        className="h-4 w-4 p-0 text-black hover:bg-gray-100"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Profiles Section */}
            <Card className="mb-6 bg-white border-gray-300 mx-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-black">
                  Profiles
                  <Button onClick={addProfile} variant="outline" size="sm" className="border-gray-300 text-black bg-white hover:bg-gray-100">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Profile
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profiles.map((profileUrl, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={profileUrl}
                      onChange={(e) => updateProfile(index, e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter profile URL or username"
                      className="flex-1 border-gray-300 text-black bg-white"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeProfile(index)}
                      className="text-black hover:bg-gray-100"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

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
