import React from "react";
import { useTheme } from "../logic/hooks/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="btn border-0"
      title={`Basculer le thème (${theme === "dark" ? "clair" : "sombre"})`}
      aria-label="Basculer le thème"
    >
      {theme === "dark" ? <FiSun size={21} /> : <FiMoon size={21} />}
    </button>
  );
};
