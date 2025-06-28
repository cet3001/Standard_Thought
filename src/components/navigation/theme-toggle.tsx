
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  size?: "default" | "sm";
}

const ThemeToggle = ({ size = "sm" }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    // Get the actual applied theme (resolve system preference)
    const root = window.document.documentElement;
    const currentTheme = root.classList.contains('dark') ? 'dark' : 'light';
    
    // Toggle to the opposite of current applied theme
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  // Determine which icon to show based on actual applied theme
  const isDark = theme === "dark" || 
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={toggleTheme}
      className="hover:bg-[#247EFF]/10 text-[#247EFF] transition-all duration-300 hover:scale-110"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Currently in ${isDark ? "dark" : "light"} mode, click to switch`}
    >
      {isDark ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
    </Button>
  );
};

export default ThemeToggle;
