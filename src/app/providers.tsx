"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { ScrollReveal } from "@/components/scroll-reveal";
import { LocaleProvider } from "@/components/locale-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LocaleProvider>
        <ScrollReveal />
        {children}
      </LocaleProvider>
    </ThemeProvider>
  );
}
