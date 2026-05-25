"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { useLocale } from "@/components/locale-context";

const labels = {
  en: { light: "Light", dark: "Dark", switchTo: (m: string) => `Switch to ${m} theme` },
  th: { light: "สว่าง", dark: "มืด", switchTo: (m: string) => `เปลี่ยนเป็น ${m}` },
};

const emptySubscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export function ThemeToggle() {
  const { locale } = useLocale();
  const t = labels[locale];
  const mounted = useSyncExternalStore(emptySubscribe, clientSnapshot, serverSnapshot);
  const { resolvedTheme, setTheme } = useTheme();
  const isLight = mounted && resolvedTheme === "light";

  return (
    <button
      aria-label={t.switchTo(isLight ? t.dark : t.light)}
      className="theme-switch"
      type="button"
      suppressHydrationWarning
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      <span className="theme-switch__track">
        <span className="theme-switch__thumb" data-light={isLight} suppressHydrationWarning>
          {isLight ? <Sun size={15} /> : <Moon size={15} />}
        </span>
      </span>
      <span className="theme-switch__label" suppressHydrationWarning>
        {isLight ? t.light : t.dark}
      </span>
    </button>
  );
}
