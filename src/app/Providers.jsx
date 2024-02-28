"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider ThemeProvider="system" attribute="class">
      <div className="text-gray-700 dark:text-gray-200 dark:gray-700 min-h-screen selec-none transition-colors duration-700 ">
        {children}
      </div>
    </ThemeProvider>
  );
}
