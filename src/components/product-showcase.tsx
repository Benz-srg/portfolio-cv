"use client";

import Image from "next/image";
import { useState } from "react";
import { VideoModal } from "@/components/video-modal";
import { useLocale } from "@/components/locale-context";

const viewsContent = {
  en: [
    {
      key: "stats",
      label: "Stats",
      title: "Performance stats",
      copy: "Realized P&L, win rate, closed trades, open positions, equity curve, and trade history for BTC/USDT paper trading.",
      lightImage: "/paper-trade-stats-light.png",
      darkImage: "/paper-trade-stats-dark.png",
      alt: "Nexus AI BTC/USDT paper trade stats screen showing realized P&L, win rate, equity curve, and trade history",
    },
    {
      key: "orders",
      label: "Orders",
      title: "Live order workspace",
      copy: "Candlestick chart, market price card, order markers, timeframe controls, and a buy/long or sell/short order form.",
      lightImage: "/paper-trade-trade-light.png",
      darkImage: "/paper-trade-trade-dark.png",
      alt: "Nexus AI BTC/USDT trading screen showing chart, order markers, and place order form",
    },
    {
      key: "research",
      label: "Research",
      title: "AI research dashboard",
      copy: "Indicator accuracy, signal distribution, daily signal timeline, bot beliefs, and raw research records for BTC/USDT review.",
      lightImage: "/paper-trade-research-light.png",
      darkImage: "/paper-trade-research-dark.png",
      alt: "Nexus AI research screen showing indicator accuracy, signal distribution, signal timeline, and bot beliefs",
    },
  ],
  th: [
    {
      key: "stats",
      label: "สถิติ",
      title: "สถิติประสิทธิภาพ",
      copy: "P&L จริง, win rate, trades ที่ปิดแล้ว, positions ที่เปิดอยู่, equity curve และประวัติการเทรด BTC/USDT",
      lightImage: "/paper-trade-stats-light.png",
      darkImage: "/paper-trade-stats-dark.png",
      alt: "หน้า stats ของ Nexus AI แสดง P&L, win rate, equity curve และประวัติเทรด",
    },
    {
      key: "orders",
      label: "Orders",
      title: "หน้าสั่งซื้อขาย",
      copy: "กราฟแท่งเทียน, ราคาตลาด, จุด order บนกราฟ, ตัวเลือก timeframe และฟอร์ม BUY/SELL",
      lightImage: "/paper-trade-trade-light.png",
      darkImage: "/paper-trade-trade-dark.png",
      alt: "หน้าเทรด Nexus AI แสดงกราฟ, order markers และฟอร์มสั่งซื้อขาย",
    },
    {
      key: "research",
      label: "Research",
      title: "แดชบอร์ด Research ของ AI",
      copy: "ความแม่นยำ indicator, การกระจาย signal, timeline รายวัน, bot beliefs และ raw research records สำหรับรีวิว BTC/USDT",
      lightImage: "/paper-trade-research-light.png",
      darkImage: "/paper-trade-research-dark.png",
      alt: "หน้า research ของ Nexus AI แสดง indicator accuracy, signal distribution, timeline และ bot beliefs",
    },
  ],
};

export function ProductShowcase() {
  const { locale } = useLocale();
  const views = viewsContent[locale];
  const [activeKey, setActiveKey] = useState(views[0].key);
  const activeView = views.find((view) => view.key === activeKey) ?? views[0];

  return (
    <div className="product-showcase">
      <div className="product-showcase__controls" role="tablist">
        {views.map((view) => (
          <button
            key={view.key}
            aria-selected={activeView.key === view.key}
            className="product-showcase__tab"
            role="tab"
            type="button"
            onClick={() => setActiveKey(view.key)}
          >
            {view.label}
          </button>
        ))}
      </div>

      <div className="mobile-trade-widget">
        <div>
          <p>{activeView.title}</p>
          <strong>{activeView.label}</strong>
          <span>{activeView.copy}</span>
        </div>
        <div>
          <small>BTC/USDT</small>
          <b>{locale === "en" ? "Live" : "สด"}</b>
        </div>
      </div>

      <div className="product-showcase__frame">
        <div className="product-showcase__hud" aria-hidden="true">
          <span>{locale === "en" ? "Live product capture" : "ภาพจริงจากระบบ"}</span>
          <span>{activeView.label}</span>
        </div>
        <Image
          key={`${activeView.key}-light`}
          src={activeView.lightImage}
          alt={activeView.alt}
          width={2048}
          height={1152}
          className="product-showcase__image product-showcase__image--light"
          priority={activeView.key === "stats"}
        />
        <Image
          key={`${activeView.key}-dark`}
          src={activeView.darkImage}
          alt=""
          aria-hidden="true"
          width={2048}
          height={1152}
          className="product-showcase__image product-showcase__image--dark"
          priority={activeView.key === "stats"}
        />
        <div className="product-showcase__caption">
          <div>
            <p>{activeView.title}</p>
            <span>{activeView.copy}</span>
          </div>
          <VideoModal />
        </div>
      </div>
    </div>
  );
}
