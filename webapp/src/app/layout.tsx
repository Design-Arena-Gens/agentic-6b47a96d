import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AetherView • Anime Intelligence Hub",
  description:
    "AetherView delivers dual-layer anime summaries, community pros and cons, and real-time seasonal rankings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-950 text-white antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.35),_transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,_rgba(15,23,42,0.85),_rgba(9,9,11,0.95))]" />
          <div className="relative z-10 flex min-h-screen flex-col">
            <NavBar />
            <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10 md:px-8">
              {children}
            </main>
            <footer className="border-t border-white/10 bg-black/60 py-6">
              <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs uppercase tracking-[0.24em] text-white/40 md:flex-row md:items-center md:justify-between">
                <span>© {new Date().getFullYear()} AetherView Collective</span>
                <span>Built for community-first anime discovery</span>
                <span className="text-purple-200/80">
                  Dual summaries · Pros & Cons · Seasonal intelligence
                </span>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
