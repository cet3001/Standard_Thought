
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { manualSendPlaybook } from "@/lib/manual-email-utils";

export const ManualSendPlaybook = () => {
  const [email, setEmail] = useState("idalmcclure@gmail.com");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }

    setIsLoading(true);
    
    try {
      await manualSendPlaybook(email);
      toast.success(`Playbook sent successfully to ${email}!`);
      setEmail("");
    } catch (error: any) {
      console.error("Manual send error:", error);
      toast.error(error.message || "Failed to send playbook");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
        Manual Playbook Send (Admin Only)
      </h3>
      <form onSubmit={handleSend} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          disabled={isLoading}
        />
        <Button 
          type="submit" 
          disabled={isLoading}
          className="bg-red-600 hover:bg-red-700"
        >
          {isLoading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Sending...
            </div>
          ) : (
            <div className="flex items-center">
              <Send className="w-4 h-4 mr-2" />
              Send Playbook
            </div>
          )}
        </Button>
      </form>
      <p className="text-sm text-red-600 dark:text-red-400 mt-2">
        This will send the welcome email with playbook to the specified email address.
      </p>
    </div>
  );
};
