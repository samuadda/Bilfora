"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  /** Show the Arabic label next to the icon (e.g. in an expanded sidebar). */
  showLabel?: boolean;
}

/**
 * Light/dark theme switch. Guards against hydration mismatch by rendering a
 * stable icon until mounted, then reflecting the resolved theme.
 */
export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const label = isDark ? "الوضع الفاتح" : "الوضع الداكن";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex items-center gap-2 rounded-full text-muted-foreground",
        "hover:bg-brand-soft hover:text-brand transition-colors focus-visible:outline-none focus-visible:shadow-focus",
        showLabel ? "w-full px-4 py-2.5 text-sm font-medium" : "h-9 w-9 justify-center",
        className
      )}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
      {showLabel && <span>{label}</span>}
    </button>
  );
}

export default ThemeToggle;
