
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Props {
  profiles: string[];
  addProfile: () => void;
  removeProfile: (index: number) => void;
  updateProfile: (index: number, value: string) => void;
  handleKeyPress: (e: React.KeyboardEvent) => void;
}

const ProfilesSection: React.FC<Props> = ({
  profiles,
  addProfile,
  removeProfile,
  updateProfile,
  handleKeyPress,
}) => (
  <Card className="mb-6 bg-white border-gray-300 mx-0">
    <CardHeader>
      <CardTitle className="flex items-center justify-between text-black">
        Profiles
        <Button
          onClick={addProfile}
          variant="outline"
          size="sm"
          className="border-gray-300 text-black bg-white hover:bg-gray-100"
        >
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
);

export default ProfilesSection;
