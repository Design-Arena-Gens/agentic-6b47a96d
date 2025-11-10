import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/genres", label: "Genres" },
  { href: "/reviews", label: "Reviews" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm font-medium text-white md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-purple-500/80 ring-2 ring-purple-300/60 shadow-lg shadow-purple-500/30" />
          <span className="text-lg font-semibold tracking-wide">
            AetherView
          </span>
        </Link>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-purple-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 text-xs uppercase tracking-[0.16em] md:flex">
          <span className="rounded-full border border-white/20 px-3 py-1 text-purple-200/90">
            Season 2024
          </span>
          <span className="text-white/70">Community First</span>
        </div>
      </nav>
    </header>
  );
}
