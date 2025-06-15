
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/search")}
            className="mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Search
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        </div>

        {/* Resume Upload Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              My Resume
              <Button variant="outline" className="flex items-center">
                <Upload className="w-4 h-4 mr-2" />
                Upload Resume
              </Button>
            </CardTitle>
            <p className="text-sm text-gray-600">This information will be shown to companies to help you find opportunities</p>
          </CardHeader>
        </Card>

        {/* Personal Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <Input
                  value={profile.firstName}
                  onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <Input
                  value={profile.lastName}
                  onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                  placeholder="Enter last name"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <Input
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <Input
                  value={profile.city}
                  onChange={(e) => setProfile({...profile, city: e.target.value})}
                  placeholder="Enter city"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <Input
                  value={profile.country}
                  onChange={(e) => setProfile({...profile, country: e.target.value})}
                  placeholder="Enter country"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Summary</label>
              <Textarea
                value={profile.summary}
                onChange={(e) => setProfile({...profile, summary: e.target.value})}
                placeholder="Profile Summary"
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Education
              <Button onClick={addEducation} variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Education
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="border rounded-lg p-4 relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeEducation(edu.id)}
                  className="absolute top-2 right-2"
                >
                  <X className="w-4 h-4" />
                </Button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">School</label>
                    <Input
                      value={edu.school}
                      onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                      placeholder="Enter school name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                    <Input
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                      placeholder="Enter degree"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Major</label>
                    <Input
                      value={edu.major}
                      onChange={(e) => updateEducation(edu.id, "major", e.target.value)}
                      placeholder="Enter major"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Year</label>
                    <Input
                      value={edu.startYear}
                      onChange={(e) => updateEducation(edu.id, "startYear", e.target.value)}
                      placeholder="Start year"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Year</label>
                    <Input
                      value={edu.endYear}
                      onChange={(e) => updateEducation(edu.id, "endYear", e.target.value)}
                      placeholder="End year"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
                  <Input
                    value={edu.gpa}
                    onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                    placeholder="Enter GPA"
                    className="w-32"
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Work Experience Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Work Experience
              <Button onClick={addExperience} variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Experience
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="border rounded-lg p-4 relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeExperience(exp.id)}
                  className="absolute top-2 right-2"
                >
                  <X className="w-4 h-4" />
                </Button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <Input
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <Input
                      value={exp.role}
                      onChange={(e) => updateExperience(exp.id, "role", e.target.value)}
                      placeholder="Enter role"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Year</label>
                    <Input
                      value={exp.startYear}
                      onChange={(e) => updateExperience(exp.id, "startYear", e.target.value)}
                      placeholder="Start year"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Year</label>
                    <Input
                      value={exp.endYear}
                      onChange={(e) => updateExperience(exp.id, "endYear", e.target.value)}
                      placeholder="End year"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <Input
                      value={exp.city}
                      onChange={(e) => updateExperience(exp.id, "city", e.target.value)}
                      placeholder="Enter city"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <Input
                      value={exp.country}
                      onChange={(e) => updateExperience(exp.id, "country", e.target.value)}
                      placeholder="Enter country"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <Textarea
                    value={exp.description}
                    onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                    placeholder="Describe your role and achievements"
                    rows={3}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Projects
              <Button onClick={addProject} variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="border rounded-lg p-4 relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeProject(project.id)}
                  className="absolute top-2 right-2"
                >
                  <X className="w-4 h-4" />
                </Button>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                    <Input
                      value={project.name}
                      onChange={(e) => updateProject(project.id, "name", e.target.value)}
                      placeholder="Enter project name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Year</label>
                    <Input
                      value={project.startYear}
                      onChange={(e) => updateProject(project.id, "startYear", e.target.value)}
                      placeholder="Start year"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Year</label>
                    <Input
                      value={project.endYear}
                      onChange={(e) => updateProject(project.id, "endYear", e.target.value)}
                      placeholder="End year"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <Textarea
                    value={project.description}
                    onChange={(e) => updateProject(project.id, "description", e.target.value)}
                    placeholder="Describe your project"
                    rows={3}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Certifications Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Certifications
              <Button onClick={addCertification} variant="outline" size="sm">
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
                  placeholder="Enter certification name"
                  className="flex-1"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeCertification(index)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Skills
              <Button onClick={addSkill} variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Skill
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  <Input
                    value={skill}
                    onChange={(e) => updateSkill(index, e.target.value)}
                    placeholder="Skill"
                    className="border-none bg-transparent p-0 h-auto text-sm w-20"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSkill(index)}
                    className="h-4 w-4 p-0"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Profiles Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Profiles
              <Button onClick={addProfile} variant="outline" size="sm">
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
                  placeholder="Enter profile URL or username"
                  className="flex-1"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeProfile(index)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            Save Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
