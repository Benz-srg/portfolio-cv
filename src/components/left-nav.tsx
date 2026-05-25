"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/locale-context";

const sectionIds = [
  { id: "top", abbr: "01", en: "Hero", th: "หน้าแรก" },
  { id: "paper-trade", abbr: "02", en: "Paper Trade", th: "Paper Trade" },
  { id: "hermes", abbr: "03", en: "Hermes AI", th: "Hermes AI" },
  { id: "workflow", abbr: "04", en: "td-bot", th: "td-bot" },
  { id: "experience", abbr: "05", en: "Experience", th: "ประสบการณ์" },
  { id: "stack", abbr: "06", en: "Stack", th: "Stack" },
  { id: "contact", abbr: "07", en: "Contact", th: "ติดต่อ" },
];

/** Returns the id of the section whose top edge is closest to 35% from viewport top */
function getActiveSection(): string {
  const trigger = window.scrollY + window.innerHeight * 0.35;
  let current = sectionIds[0].id;

  for (const { id } of sectionIds) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top + window.scrollY <= trigger) {
      current = id;
    }
  }
  return current;
}

export function LeftNav() {
  const { locale } = useLocale();
  const sections = sectionIds.map((s) => ({
    ...s,
    label: locale === "en" ? s.en : s.th,
  }));

  const [active, setActive] = useState("top");
  const [mobileVisible, setMobileVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Run once immediately to set initial active state
    setActive(getActiveSection());

    const handleScroll = () => {
      const y = window.scrollY;

      // Active section: find which section top is above the 35% viewport mark
      setActive(getActiveSection());

      // Mobile bottom nav: show on scroll-down, hide on scroll-up
      const delta = y - lastScrollY.current;
      if (Math.abs(delta) > 6) {
        setMobileVisible(delta > 0);
        lastScrollY.current = y;
      }
      if (y < 60) setMobileVisible(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Desktop left rail ──────────────────── */}
      <nav className="left-nav" aria-label="Page sections">
        <div className="left-nav__track" aria-hidden="true" />
        <ul>
          {sections.map(({ id, label, abbr }) => (
            <li key={id}>
              <button
                type="button"
                className={
                  active === id
                    ? "left-nav__item left-nav__item--active"
                    : "left-nav__item"
                }
                onClick={() => scrollTo(id)}
                aria-label={`Go to ${label}`}
              >
                <span className="left-nav__node" aria-hidden="true">
                  <span className="left-nav__dot" />
                  <span className="left-nav__ring" />
                </span>
                <span className="left-nav__meta">
                  <span className="left-nav__num">{abbr}</span>
                  <span className="left-nav__label">{label}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Mobile bottom nav ──────────────────── */}
      <nav
        className={mobileVisible ? "bottom-nav" : "bottom-nav bottom-nav--hidden"}
        aria-label="Page sections"
      >
        {sections.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={
              active === id
                ? "bottom-nav__item bottom-nav__item--active"
                : "bottom-nav__item"
            }
            onClick={() => scrollTo(id)}
            aria-label={`Go to ${label}`}
          >
            <span className="bottom-nav__dot" aria-hidden="true" />
            <span className="bottom-nav__label">{label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
