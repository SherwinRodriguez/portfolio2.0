"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Mode = "developer" | "athlete";

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<Mode>("developer");

  const toggleMode = () => {
    setMode((prev) => (prev === "developer" ? "athlete" : "developer"));
  };

  // Apply CSS variables for theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (mode === "athlete") {
      root.style.setProperty("--accent-primary", "34, 197, 94"); // green-500
      root.style.setProperty("--accent-secondary", "168, 85, 247"); // purple-500
    } else {
      root.style.setProperty("--accent-primary", "168, 85, 247"); // purple-500
      root.style.setProperty("--accent-secondary", "59, 130, 246"); // blue-500
    }
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used within ModeProvider");
  }
  return context;
};
