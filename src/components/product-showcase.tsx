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
      image: "/paper-trade-stats.png",
      alt: "Nexus AI BTC/USDT paper trade stats screen showing realized P&L, win rate, equity curve, and trade history",
    },
    {
      key: "orders",
      label: "Orders",
      title: "Live order workspace",
      copy: "Candlestick chart, market price card, order markers, timeframe controls, and a buy/long or sell/short order form.",
      image: "/paper-trade-orders.png",
      alt: "Nexus AI BTC/USDT trading screen showing chart, order markers, and place order form",
    },
    {
      key: "backtest",
      label: "Backtest",
      title: "Strategy backtest results",
      copy: "Detected strategies from paper trades, combined P&L, win rate, strategy cards, and expandable trade history.",
      image: "/paper-trade-backtest.png",
      alt: "Nexus AI backtest results screen showing strategies, win rate, combined P&L, and trade history sections",
    },
  ],
  th: [
    {
      key: "stats",
      label: "สถิติ",
      title: "สถิติประสิทธิภาพ",
      copy: "P&L จริง, win rate, trades ที่ปิดแล้ว, positions ที่เปิดอยู่, equity curve และประวัติการเทรด BTC/USDT",
      image: "/paper-trade-stats.png",
      alt: "หน้า stats ของ Nexus AI แสดง P&L, win rate, equity curve และประวัติเทรด",
    },
    {
      key: "orders",
      label: "Orders",
      title: "หน้าสั่งซื้อขาย",
      copy: "กราฟแท่งเทียน, ราคาตลาด, จุด order บนกราฟ, ตัวเลือก timeframe และฟอร์ม BUY/SELL",
      image: "/paper-trade-orders.png",
      alt: "หน้าเทรด Nexus AI แสดงกราฟ, order markers และฟอร์มสั่งซื้อขาย",
    },
    {
      key: "backtest",
      label: "Backtest",
      title: "ผล Backtest กลยุทธ์",
      copy: "กลยุทธ์ที่ตรวจพบจาก paper trades, P&L รวม, win rate, การ์ดกลยุทธ์ และประวัติเทรดแบบ expandable",
      image: "/paper-trade-backtest.png",
      alt: "หน้า backtest ของ Nexus AI แสดงกลยุทธ์, win rate, P&L รวม และประวัติเทรด",
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
          key={activeView.image}
          src={activeView.image}
          alt={activeView.alt}
          width={2048}
          height={1152}
          className="product-showcase__image"
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
