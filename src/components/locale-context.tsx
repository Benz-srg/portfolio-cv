"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Locale = "en" | "th";

interface LocaleCtx {
  locale: Locale;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleCtx>({
  locale: "en",
  toggleLocale: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  return (
    <LocaleContext.Provider
      value={{
        locale,
        toggleLocale: () => setLocale((l) => (l === "en" ? "th" : "en")),
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
