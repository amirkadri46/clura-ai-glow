import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Project {
  id: string;
  name: string;
  startYear: string;
  endYear: string;
  description: string;
}

interface Props {
  projects: Project[];
  addProject: () => void;
  removeProject: (id: string) => void;
  updateProject: (id: string, field: keyof Project, value: string) => void;
}

const ProjectsSection: React.FC<Props> = ({
  projects,
  addProject,
  removeProject,
  updateProject,
}) => (
  <Card className="mb-6 bg-white border-gray-300 mx-0">
    <CardHeader>
      <CardTitle className="flex items-center justify-between text-black">
        Projects
        <Button
          onClick={addProject}
          variant="outline"
          size="sm"
          className="border-gray-300 text-black bg-white hover:bg-gray-100 hover:text-black"
        >
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
            className="absolute top-2 right-2 !text-black hover:bg-gray-100 active:!text-black focus:!text-black"
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
);

export default ProjectsSection;
