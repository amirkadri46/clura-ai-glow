
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { showSubmitToast } from "@/components/profile/submitToast";

interface Props {
  certifications: string[];
  addCertification: () => void;
  removeCertification: (index: number) => void;
  updateCertification: (index: number, value: string) => void;
  handleKeyPress: (e: React.KeyboardEvent) => void;
}

const CertificationsSection: React.FC<Props> = ({
  certifications,
  addCertification,
  removeCertification,
  updateCertification,
  handleKeyPress,
}) => {
  const handleInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      showSubmitToast();
      handleKeyPress(e);
    }
  };

  return (
    <Card className="mb-6 bg-white border-gray-300 mx-0">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-black">
          Certifications
          <Button
            onClick={addCertification}
            variant="outline"
            size="sm"
            className="border-gray-300 text-black bg-white hover:bg-gray-100 hover:text-black"
          >
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
              onKeyPress={handleInputKeyPress}
              placeholder="Enter certification name"
              className="flex-1 border-gray-300 text-black bg-white"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeCertification(index)}
              className="!text-black hover:bg-gray-100 active:!text-black focus:!text-black"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CertificationsSection;
