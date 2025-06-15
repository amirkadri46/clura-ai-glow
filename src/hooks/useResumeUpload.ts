
import { useRef } from "react";

export const useResumeUpload = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      console.log("Selected resume file:", file);
    }
  };

  return {
    fileInputRef,
    handleUploadClick,
    handleFileChange
  };
};
