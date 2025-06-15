
import { toast } from "@/hooks/use-toast";

export function showSubmitToast() {
  toast({
    title: <span className="text-green-600 font-semibold">Your details are uploaded successfully</span>,
  });
}
