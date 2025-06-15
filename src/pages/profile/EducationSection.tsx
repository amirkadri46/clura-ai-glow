import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { showSubmitToast } from "@/components/profile/submitToast";

interface Education {
  id: string;
  school: string;
  degree: string;
  major: string;
  startYear: string;
  endYear: string;
  gpa: string;
}

interface Props {
  education: Education[];
  addEducation: () => void;
  removeEducation: (id: string) => void;
  updateEducation: (id: string, field: keyof Education, value: string) => void;
}

const EducationSection: React.FC<Props> = ({
  education,
  addEducation,
  removeEducation,
  updateEducation,
}) => {
  const handleInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      showSubmitToast();
    }
  };

  return (
    <Card className="mb-6 bg-white border-gray-300 mx-0">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-black">
          Education
          <Button
            onClick={addEducation}
            variant="outline"
            size="sm"
            className="border-gray-300 text-black bg-white hover:bg-gray-100 hover:text-black"
          >
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
              className="absolute top-2 right-2 !text-black hover:bg-gray-100 active:!text-black focus:!text-black"
            >
              <X className="w-4 h-4" />
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1">School</label>
                <Input
                  value={edu.school}
                  onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                  onKeyPress={handleInputKeyPress}
                  placeholder="Enter school name"
                  className="border-gray-300 text-black bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">Degree</label>
                <Input
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                  onKeyPress={handleInputKeyPress}
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
                  onKeyPress={handleInputKeyPress}
                  placeholder="Enter major"
                  className="border-gray-300 text-black bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">Start Year</label>
                <Input
                  value={edu.startYear}
                  onChange={(e) => updateEducation(edu.id, "startYear", e.target.value)}
                  onKeyPress={handleInputKeyPress}
                  placeholder="Start year"
                  className="border-gray-300 text-black bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">End Year</label>
                <Input
                  value={edu.endYear}
                  onChange={(e) => updateEducation(edu.id, "endYear", e.target.value)}
                  onKeyPress={handleInputKeyPress}
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
                onKeyPress={handleInputKeyPress}
                placeholder="Enter GPA"
                className="w-32 border-gray-300 text-black bg-white"
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default EducationSection;
