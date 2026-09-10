"use client";

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useMounted } from "../hooks/use-mounted";

export function ThemeSwitcher() {
  const mounted = useMounted();
  const { resolvedTheme, setTheme, theme } = useTheme();

  if (!mounted) {
    return (
      <div className="inline-flex items-center rounded-full border border-border p-0.5">
        <span className="h-7 w-14" />
      </div>
    );
  }

  const activeTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <div
      className="inline-flex items-center rounded-full border border-border p-0.5"
      role="group"
      aria-label="Theme"
    >
      <Button
        size="sm"
        variant={activeTheme === "light" ? "primary" : "ghost"}
        onPress={() => setTheme("light")}
        aria-pressed={activeTheme === "light"}
        className="min-w-0 rounded-full px-3 py-1 text-xs"
      >
        Light
      </Button>
      <Button
        size="sm"
        variant={activeTheme === "dark" ? "primary" : "ghost"}
        onPress={() => setTheme("dark")}
        aria-pressed={activeTheme === "dark"}
        className="min-w-0 rounded-full px-3 py-1 text-xs"
      >
        Dark
      </Button>
    </div>
  );
}
