
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  size?: "default" | "sm";
}

const ThemeToggle = ({ size = "sm" }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={toggleTheme}
      className="hover:bg-[#247EFF]/10 text-[#247EFF] transition-all duration-300 hover:scale-110"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Currently in ${theme} mode, click to switch`}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
    </Button>
  );
};

export default ThemeToggle;
