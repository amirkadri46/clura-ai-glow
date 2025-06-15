
import { toast } from "@/hooks/use-toast";

export function showSubmitToast() {
  console.log("[DEBUG] showSubmitToast called");
  toast({
    title: "Success",
    description: (
      <span className="text-green-600 font-semibold">
        Your details are uploaded successfully
      </span>
    ),
  });
}
