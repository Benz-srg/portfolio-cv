"use client";

import { useLocale } from "@/components/locale-context";

export function NavLangToggle() {
  const { locale, toggleLocale } = useLocale();
  const isEN = locale === "en";

  return (
    <button
      type="button"
      className="theme-switch"
      onClick={toggleLocale}
      aria-label="Toggle language"
    >
      <span
        className="theme-switch__track"
        aria-hidden="true"
        style={{ position: "relative" }}
      >
        <span
          className="theme-switch__thumb"
          data-light={!isEN}
          style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.06em" }}
        >
          {isEN ? "EN" : "TH"}
        </span>
      </span>
      <span className="theme-switch__label" style={{ letterSpacing: "0.1em" }}>
        {isEN ? "EN / TH" : "TH / EN"}
      </span>
    </button>
  );
}
