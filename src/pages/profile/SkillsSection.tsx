
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Props {
  skills: string[];
  newSkill: string;
  setNewSkill: (v: string) => void;
  handleSkillKeyPress: (e: React.KeyboardEvent) => void;
  removeSkill: (index: number) => void;
}

const SkillsSection: React.FC<Props> = ({
  skills,
  newSkill,
  setNewSkill,
  handleSkillKeyPress,
  removeSkill,
}) => (
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
              className="h-4 w-4 p-0 !text-black hover:bg-gray-100 active:!text-black focus:!text-black"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default SkillsSection;
