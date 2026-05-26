import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-cv.vercel.app"
  ),
  title: {
    default: "Ekkasit Songrungruang | Fullstack Developer Portfolio",
    template: "%s | Ekkasit Songrungruang",
  },
  description:
    "Portfolio of Ekkasit Songrungruang, a fullstack developer building crypto trading systems, AI agent workflows, backend APIs, and polished Next.js applications.",
  applicationName: "Ekkasit Songrungruang Portfolio",
  authors: [{ name: "Ekkasit Songrungruang" }],
  creator: "Ekkasit Songrungruang",
  keywords: [
    "Ekkasit Songrungruang",
    "Fullstack Developer",
    "Next.js Developer",
    "Crypto Trading Systems",
    "AI Tooling",
    "Paper Trade",
    "Hermes AI",
  ],
  icons: {
    icon: [
      { url: "/srg-favicon.png", type: "image/png", sizes: "1254x1254" },
    ],
    shortcut: "/srg-favicon.png",
    apple: "/srg-favicon.png",
  },
  openGraph: {
    title: "Ekkasit Songrungruang | Fullstack Developer Portfolio",
    description:
      "Fullstack portfolio covering crypto trading systems, AI agent workflows, backend APIs, and modern Next.js products.",
    type: "website",
    locale: "en_US",
    siteName: "Ekkasit Songrungruang Portfolio",
    images: [
      {
        url: "/srg-meta.png",
        width: 1536,
        height: 1024,
        alt: "SRG developer portfolio brand image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekkasit Songrungruang | Fullstack Developer Portfolio",
    description:
      "Fullstack developer building crypto trading systems, AI agent workflows, backend APIs, and polished Next.js applications.",
    images: ["/srg-meta.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
