"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale } from "@/components/locale-context";

const tabContent = {
  en: [
    {
      key: "tickets",
      label: "Tickets",
      src: "/hermes-tickets.png",
      caption: "Hermes AI clarifies scope, defines DoD, then creates the ticket in Paperclip AI.",
    },
    {
      key: "projects",
      label: "Projects",
      src: "/hermes-projects.png",
      caption: "Query and manage all active projects and epics through the Projects channel.",
    },
    {
      key: "reports",
      label: "Reports",
      src: "/hermes-reports.png",
      caption: "QA results, e2e test runs, and phase completion reports posted to the Reports channel.",
    },
  ],
  th: [
    {
      key: "tickets",
      label: "Tickets",
      src: "/hermes-tickets.png",
      caption: "Hermes AI ชวนยืนยัน scope และ DoD ก่อนสร้าง ticket ใน Paperclip AI",
    },
    {
      key: "projects",
      label: "Projects",
      src: "/hermes-projects.png",
      caption: "ดูและจัดการโปรเจกต์และ epics ทั้งหมดผ่าน Projects channel",
    },
    {
      key: "reports",
      label: "Reports",
      src: "/hermes-reports.png",
      caption: "ผล QA, e2e test runs และรายงานการ complete phase ถูกโพสต์ใน Reports channel",
    },
  ],
};

export function HermesShowcase() {
  const { locale } = useLocale();
  const tabs = tabContent[locale];
  const [active, setActive] = useState("tickets");
  const current = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <div className="product-showcase">
      <div className="product-showcase__controls">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className="product-showcase__tab"
            aria-selected={active === tab.key}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="product-showcase__frame hermes-frame">
        <div className="product-showcase__hud">
          <span>Hermes TES · Telegram</span>
          <span>Benz &amp; Hermes TES</span>
        </div>
        <Image
          key={current.key}
          src={current.src}
          alt={current.caption}
          width={1080}
          height={720}
          className="product-showcase__image"
          priority
        />
        <div className="product-showcase__caption">
          <div>
            <p>{current.label}</p>
            <span>{current.caption}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
