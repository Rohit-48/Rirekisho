import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Geist_Mono, Anton } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rohitmandavkar.vercel.app"),
  title: {
    default: "Rohit Mandavkar — Web Engineer",
    template: "%s — Rohit Mandavkar",
  },
  description:
    "Web engineer building tools, platforms, and infrastructure for the web. CS student at BITS Pilani WILP, currently focused on web engineering, DevOps, and AI/ML.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Rohit Mandavkar",
    title: "Rohit Mandavkar — Web Engineer",
    description:
      "Web engineer building tools, platforms, and infrastructure for the web.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Mandavkar — Web Engineer",
    description:
      "Web engineer building tools, platforms, and infrastructure for the web.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
