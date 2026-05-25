"use client";

import { Play, X } from "lucide-react";
import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useLocale } from "@/components/locale-context";

const copy = {
  en: {
    launch: "Watch Paper Trade demo",
    panelLabel: "Paper Trade Demo",
    panelTitle: "Nexus AI trading dashboard walkthrough",
    close: "Close video",
  },
  th: {
    launch: "ดู Paper Trade demo",
    panelLabel: "Paper Trade Demo",
    panelTitle: "การใช้งาน Nexus AI trading dashboard",
    close: "ปิดวิดีโอ",
  },
};

const emptySubscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export function VideoModal() {
  const { locale } = useLocale();
  const t = copy[locale];
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(emptySubscribe, clientSnapshot, serverSnapshot);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button className="video-launch" type="button" onClick={() => setOpen(true)}>
        <span>
          <Play size={18} fill="currentColor" />
        </span>
        {t.launch}
      </button>

      {open && mounted
        ? createPortal(
            <div aria-labelledby={titleId} aria-modal="true" className="video-modal" role="dialog">
              <button
                aria-label={t.close}
                className="video-modal__backdrop"
                type="button"
                onClick={() => setOpen(false)}
              />
              <div className="video-modal__panel">
                <div className="video-modal__header">
                  <div>
                    <p>{t.panelLabel}</p>
                    <h2 id={titleId}>{t.panelTitle}</h2>
                  </div>
                  <button
                    aria-label={t.close}
                    className="video-modal__close"
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    <X size={18} />
                  </button>
                </div>
                <video
                  className="video-modal__video"
                  controls
                  playsInline
                  preload="metadata"
                  src="/paper-trade-demo.mov"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
