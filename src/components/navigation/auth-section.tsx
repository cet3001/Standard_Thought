
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut, User, Settings } from "lucide-react";
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

  const handleAdminDashboard = () => {
    navigate("/admin-dashboard");
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
        className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg rounded-full px-4 lg:px-8 py-2 lg:py-3 border-0 text-xs lg:text-sm relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700]"
        aria-label="Join the wealth building movement - Sign up or login"
      >
        <span className="hidden sm:inline">Join Movement</span>
        <span className="sm:hidden">Join</span>
      </Button>
    );
  }

  return (
    <div className="flex items-center space-x-2 lg:space-x-4" role="group" aria-label="User account actions">
      {isAdmin && (
        <>
          <Button
            onClick={handleCreatePost}
            variant="outline"
            size="sm"
            className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg px-2 lg:px-4 py-1 lg:py-2 rounded-2xl border-0 text-xs lg:text-sm relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700]"
            aria-label="Create new story post"
          >
            <span className="hidden sm:inline">Create Story</span>
            <span className="sm:hidden">Create</span>
          </Button>
          <Button
            onClick={handleAdminDashboard}
            variant="outline"
            size="sm"
            className="bg-gradient-to-r from-[#FF6B6B] via-[#FF8E8E] to-[#FF5252] text-white font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg px-2 lg:px-4 py-1 lg:py-2 rounded-2xl border-0 text-xs lg:text-sm relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
            aria-label="Access admin dashboard"
          >
            <Settings className="h-3 w-3 lg:h-4 lg:w-4 lg:mr-1" />
            <span className="hidden sm:inline">Admin</span>
          </Button>
        </>
      )}
      <div className="hidden sm:flex items-center space-x-2" role="status" aria-label="Current user">
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
        className="hover:bg-red-100 text-red-600 hover:text-red-700 transition-all duration-300 disabled:opacity-50 p-1 lg:p-2"
        aria-label={isSigningOut ? "Signing out..." : "Sign out of your account"}
      >
        <LogOut className="h-4 w-4" aria-hidden="true" />
        {isSigningOut && <span className="ml-1 hidden sm:inline" aria-hidden="true">...</span>}
      </Button>
    </div>
  );
};

export default AuthSection;
