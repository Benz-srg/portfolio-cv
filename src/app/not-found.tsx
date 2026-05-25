import Link from "next/link";
import { ArrowLeft, Radar, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-page min-h-screen overflow-hidden bg-[var(--site-bg)] text-[var(--site-fg)]">
      <div className="pointer-events-none fixed inset-0 bg-[var(--site-grid)] bg-[length:auto,auto,44px_44px,44px_44px]" />
      <div className="not-found-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <section className="not-found-panel">
        <div className="not-found-code">
          <Terminal size={20} />
          route_scan.failed
        </div>
        <h1>404</h1>
        <p className="not-found-eyebrow">
          Signal lost in the trading terminal
        </p>
        <h2>This route is outside the active market.</h2>
        <p className="not-found-copy">
          The page you requested is not available, but the portfolio dashboard
          is still online and ready.
        </p>
        <div className="not-found-actions">
          <Link href="/">
            <ArrowLeft size={17} /> Return home
          </Link>
          <span>
            <Radar size={17} /> Recalibrating signal
          </span>
        </div>
      </section>
    </main>
  );
}
