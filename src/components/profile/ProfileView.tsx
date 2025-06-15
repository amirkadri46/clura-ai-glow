
import React from "react";
import { Button } from "@/components/ui/button";
import { Education, Experience, Project, ProfileType } from "@/types/profile";
import { Pencil } from "lucide-react";

interface ProfileViewProps {
  profile: ProfileType;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  certifications: string[];
  skills: string[];
  profiles: string[];
  onEdit: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({
  profile,
  education,
  experience,
  projects,
  certifications,
  skills,
  profiles,
  onEdit,
}) => (
  <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow border border-gray-300">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-bold text-black">My Profile</h2>
      <Button onClick={onEdit} className="flex gap-2" variant="outline">
        <Pencil className="w-4 h-4" /> Edit
      </Button>
    </div>
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-1">
        {profile.firstName} {profile.lastName}
      </h3>
      <div className="text-gray-600 mb-1">{profile.email} &bull; {profile.phone}</div>
      <div className="text-gray-600 mb-1">{profile.city}, {profile.country}</div>
      <div className="text-gray-800 italic mb-2">{profile.summary}</div>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold text-gray-700 mb-2">Education</h4>
      {education.length === 0 && <div className="text-gray-400">None listed</div>}
      <ul className="space-y-2">
        {education.map(edu => (
          <li key={edu.id} className="p-2 rounded border border-gray-100">
            <div className="font-medium">{edu.school} - {edu.degree} in {edu.major}</div>
            <div className="text-sm text-gray-500">{edu.startYear} - {edu.endYear} | GPA: {edu.gpa}</div>
          </li>
        ))}
      </ul>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold text-gray-700 mb-2">Work Experience</h4>
      {experience.length === 0 && <div className="text-gray-400">None listed</div>}
      <ul className="space-y-2">
        {experience.map(exp => (
          <li key={exp.id} className="p-2 rounded border border-gray-100">
            <div className="font-medium">{exp.company} - {exp.role}</div>
            <div className="text-sm text-gray-500">{exp.startYear} - {exp.endYear} | {exp.city}, {exp.country}</div>
            <div className="text-sm text-gray-600 mt-1">{exp.description}</div>
          </li>
        ))}
      </ul>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold text-gray-700 mb-2">Projects</h4>
      {projects.length === 0 && <div className="text-gray-400">None listed</div>}
      <ul className="space-y-2">
        {projects.map(proj => (
          <li key={proj.id} className="p-2 rounded border border-gray-100">
            <div className="font-medium">{proj.name} ({proj.startYear} - {proj.endYear})</div>
            <div className="text-sm text-gray-600">{proj.description}</div>
          </li>
        ))}
      </ul>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold text-gray-700 mb-2">Certifications</h4>
      {certifications.length === 0 && <div className="text-gray-400">None listed</div>}
      <ul className="flex flex-wrap gap-2">
        {certifications.map((cert, i) => (
          <li key={i} className="bg-gray-100 text-gray-700 rounded px-3 py-1 text-sm">{cert}</li>
        ))}
      </ul>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold text-gray-700 mb-2">Skills</h4>
      {skills.length === 0 && <div className="text-gray-400">None listed</div>}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="bg-blue-100 text-blue-800 rounded px-3 py-1 text-sm">{skill}</span>
        ))}
      </div>
    </div>

    <div>
      <h4 className="font-semibold text-gray-700 mb-2">Profiles</h4>
      {profiles.length === 0 && <div className="text-gray-400">None listed</div>}
      <ul className="flex flex-wrap gap-3">
        {profiles.map((profileUrl, i) => (
          <li key={i}>
            <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm break-all">{profileUrl}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProfileView;
