import React, { useState, createContext } from "react";
import Content from "./Content";
import "../../App.css";

const HookUseContext = createContext();

function ThemeContext({ children }) {
  const [theme, setTheme] = useState("dark");
  const changeStatus = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const value = {
    theme,
    changeStatus,
  };
  return (
    <HookUseContext.Provider value={value}>{children}</HookUseContext.Provider>
  );
}

export { ThemeContext, HookUseContext };
