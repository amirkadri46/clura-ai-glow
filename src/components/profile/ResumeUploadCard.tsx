
import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useResumeUpload } from "@/hooks/useResumeUpload";

const ResumeUploadCard = () => {
  const { fileInputRef, handleUploadClick, handleFileChange } = useResumeUpload();

  return (
    <Card className="mb-6 bg-white border-gray-300 mx-0">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-black">
          My Resume
          <Button 
            variant="outline"
            className="flex items-center border-gray-300 text-black bg-white hover:bg-gray-100 hover:text-black"
            onClick={handleUploadClick}
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload Resume
          </Button>
        </CardTitle>
        <p className="text-sm text-black">
          This information will be shown to companies to help you find opportunities
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </CardHeader>
    </Card>
  );
};

export default ResumeUploadCard;
