import { useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  return [theme, toggleTheme];
};

export default useDarkMode;
