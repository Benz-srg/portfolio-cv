"use client";

import { useEffect } from "react";

const revealSelector = [
  ".site-section",
  ".motion-card",
  ".dashboard-showcase",
  ".telegram-showcase",
  ".product-showcase__frame",
  ".research-row",
  ".research-stat",
  ".workflow-card",
  ".workflow-cron",
  ".not-found-panel",
  ".reveal-left",
  ".reveal-right",
  ".reveal-scale",
  ".reveal-pop",
].join(",");

export function ScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-reveal-ready");

    const elements = Array.from(document.querySelectorAll(revealSelector));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.16,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("scroll-reveal-ready");
    };
  }, []);

  return null;
}
