"use client"
import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { BiSun } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8 px-0"
      onClick={handleThemeChange}
    >
      {theme === "light" ? (
        <>
          <BiSun size={20} className="rotate-0 scale-100" />
        </>
      ) : (
        <>
          <BsFillMoonFill size={20} />
        </>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
