"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/locale-context";
import { Menu, X } from "lucide-react";

const sectionIds = [
  { id: "top", abbr: "01", en: "Hero", th: "หน้าแรก" },
  { id: "paper-trade", abbr: "02", en: "Paper Trade", th: "Paper Trade" },
  { id: "hermes", abbr: "03", en: "Hermes AI", th: "Hermes AI" },
  { id: "workflow", abbr: "04", en: "td-bot", th: "td-bot" },
  { id: "saju-me", abbr: "05", en: "Saju Me", th: "Saju Me" },
  { id: "experience", abbr: "06", en: "Experience", th: "ประสบการณ์" },
  { id: "stack", abbr: "07", en: "Stack", th: "Stack" },
  { id: "contact", abbr: "08", en: "Contact", th: "ติดต่อ" },
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
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setActive(getActiveSection());
    });

    const handleScroll = () => {
      const y = window.scrollY;
      setActive(getActiveSection());

      const delta = y - lastScrollY.current;
      if (Math.abs(delta) > 6) {
        setMobileVisible(delta > 0);
        lastScrollY.current = y;
      }
      if (y < 60) setMobileVisible(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when dialog open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  const contactSection = sections.find((s) => s.id === "contact")!;
  const activeSection = sections.find((s) => s.id === active);

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

      {/* ── Mobile bottom bar ──────────────────── */}
      <div
        className={
          menuOpen
            ? "bottom-bar bottom-bar--hidden"
            : mobileVisible
              ? "bottom-bar"
              : "bottom-bar bottom-bar--hidden"
        }
        role="navigation"
        aria-label="Mobile navigation"
      >
        {/* Menu button — 70% */}
        <button
          type="button"
          className="bottom-bar__menu"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={18} aria-hidden="true" />
          <span className="bottom-bar__menu-label">
            {activeSection?.label ?? "Menu"}
          </span>
          <span className="bottom-bar__active-dot" aria-hidden="true" />
        </button>

        {/* Contact shortcut — 30% */}
        <button
          type="button"
          className="bottom-bar__contact"
          onClick={() => scrollTo("contact")}
          aria-label={`Go to ${contactSection.label}`}
        >
          {contactSection.label}
        </button>
      </div>

      {/* ── Menu dialog ────────────────────────── */}
      {menuOpen && (
        <div className="nav-dialog" role="dialog" aria-modal="true" aria-label="Navigation menu">
          {/* Backdrop */}
          <div
            className="nav-dialog__backdrop"
            onClick={() => setMenuOpen(false)}
          />

          {/* Sheet */}
          <div className="nav-dialog__sheet">
            <div className="nav-dialog__header">
              <span className="nav-dialog__title">
                {locale === "en" ? "Navigation" : "เมนู"}
              </span>
              <button
                type="button"
                className="nav-dialog__close"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="nav-dialog__list">
              {sections.map(({ id, label, abbr }) => (
                <li key={id}>
                  <button
                    type="button"
                    className={
                      active === id
                        ? "nav-dialog__item nav-dialog__item--active"
                        : "nav-dialog__item"
                    }
                    onClick={() => scrollTo(id)}
                  >
                    <span className="nav-dialog__abbr">{abbr}</span>
                    <span className="nav-dialog__label">{label}</span>
                    {active === id && (
                      <span className="nav-dialog__active-bar" aria-hidden="true" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
