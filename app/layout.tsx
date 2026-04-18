import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OneThing — Swipe-based ADHD decision engine",
  description:
    "Stop drowning in tabs, apps, and to-do lists. OneThing scores every task, email, and event with AI, then hands you one card at a time. Swipe right to do, left for later, down for done.",
  openGraph: {
    title: "OneThing — Swipe-based ADHD decision engine",
    description:
      "One card at a time. AI picks your priority, you just swipe.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
