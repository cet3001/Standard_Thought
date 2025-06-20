import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { useState } from "react";

interface AuthSectionProps {
  onAction?: () => void;
}

const AuthSection = ({ onAction }: AuthSectionProps) => {
  const { user, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    if (isSigningOut) return;
    
    setIsSigningOut(true);
    console.log('AuthSection: Starting sign out...');
    
    try {
      await signOut();
      console.log('AuthSection: Sign out completed, navigating to home...');
      navigate("/");
      onAction?.();
    } catch (error) {
      console.error('AuthSection: Sign out error:', error);
    } finally {
      setIsSigningOut(false);
    }
  };

  const handleCreatePost = () => {
    navigate("/create-post");
    onAction?.();
  };

  const handleJoinMovement = () => {
    navigate("/auth");
    onAction?.();
  };

  if (!user) {
    return (
      <Button 
        onClick={handleJoinMovement}
        className="bg-gradient-to-r from-[#247EFF] to-[#0057FF] hover:from-[#0057FF] hover:to-[#003ACC] hover:shadow-lg hover:shadow-[#247EFF]/40 text-white font-bold rounded-full px-8 py-3 transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none border-2 border-transparent hover:border-white/20"
        aria-label="Join the wealth building movement - Sign up or login"
      >
        🚀 Join Movement
      </Button>
    );
  }

  return (
    <div className="flex items-center space-x-4" role="group" aria-label="User account actions">
      {isAdmin && (
        <Button
          onClick={handleCreatePost}
          variant="outline"
          size="sm"
          className="border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white transition-all duration-300"
          aria-label="Create new story post"
        >
          Create Story
        </Button>
      )}
      <div className="flex items-center space-x-2" role="status" aria-label="Current user">
        <User className="h-4 w-4 text-[#247EFF]" aria-hidden="true" />
        <span className="text-sm text-[#0A0A0A] dark:text-brand-cream">
          {user.email?.split('@')[0]}
        </span>
      </div>
      <Button
        onClick={handleSignOut}
        disabled={isSigningOut}
        variant="ghost"
        size="sm"
        className="hover:bg-red-100 text-red-600 hover:text-red-700 transition-all duration-300 disabled:opacity-50"
        aria-label={isSigningOut ? "Signing out..." : "Sign out of your account"}
      >
        <LogOut className="h-4 w-4" aria-hidden="true" />
        {isSigningOut && <span className="ml-1" aria-hidden="true">...</span>}
      </Button>
    </div>
  );
};

export default AuthSection;
