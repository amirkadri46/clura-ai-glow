
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

interface Props {
  experience: Experience[];
  addExperience: () => void;
  removeExperience: (id: string) => void;
  updateExperience: (id: string, field: keyof Experience, value: string) => void;
}

const ExperienceSection: React.FC<Props> = ({
  experience,
  addExperience,
  removeExperience,
  updateExperience,
}) => (
  <Card className="mb-6 bg-white border-gray-300 mx-0">
    <CardHeader>
      <CardTitle className="flex items-center justify-between text-black">
        Work Experience
        <Button
          onClick={addExperience}
          variant="outline"
          size="sm"
          className="border-gray-300 text-black bg-white hover:bg-gray-100"
        >
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
);

export default ExperienceSection;
