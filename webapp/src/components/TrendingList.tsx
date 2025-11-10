import Link from "next/link";
import type { Anime } from "@/data/anime";

type TrendingListProps = {
  items: Anime[];
};

export function TrendingList({ items }: TrendingListProps) {
  return (
    <aside className="flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-purple-900/20 via-zinc-950 to-black/90 p-6">
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-lg font-semibold text-white">Trending Now</h3>
        <span className="text-xs uppercase tracking-[0.3em] text-purple-200/70">
          Views 2024
        </span>
      </div>
      <ol className="flex flex-1 flex-col gap-3">
        {items.map((anime) => (
          <li key={anime.slug}>
            <Link
              href={`/anime/${anime.slug}`}
              className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-3 py-2 text-sm text-white transition hover:border-purple-200/60 hover:bg-purple-900/30"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xs font-semibold text-purple-200">
                {anime.trendingRank.toString().padStart(2, "0")}
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{anime.title}</span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                  ⭐ {anime.rating.toFixed(1)} · {Math.round(anime.viewCount / 1000)}K views
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  );
}
