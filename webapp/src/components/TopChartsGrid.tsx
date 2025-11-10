import Image from "next/image";
import Link from "next/link";
import type { Anime } from "@/data/anime";

type TopChartsGridProps = {
  items: Anime[];
};

export function TopChartsGrid({ items }: TopChartsGridProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-zinc-900/80 p-6">
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-lg font-semibold text-white">Top Charts</h3>
        <span className="text-xs uppercase tracking-[0.3em] text-white/40">
          Highest Rated · Week 7
        </span>
      </div>
      <div className="grid gap-5 md:grid-cols-4">
        {items.map((anime) => (
          <Link
            key={anime.slug}
            href={`/anime/${anime.slug}`}
            className="group relative flex flex-col rounded-2xl border border-white/10 bg-black/40 p-3 shadow-[0_15px_40px_-22px] shadow-purple-500/40 transition hover:-translate-y-1 hover:border-purple-300/50"
          >
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={anime.poster}
                alt={anime.title}
                width={320}
                height={400}
                className="h-[220px] w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-purple-200">
                #{anime.chartRank}
              </span>
              <span className="absolute bottom-3 right-3 rounded-full border border-white/30 bg-black/60 px-2 py-1 text-[11px] font-medium text-white">
                ⭐ {anime.rating.toFixed(1)}
              </span>
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <h4 className="text-sm font-semibold text-white group-hover:text-purple-100">
                {anime.title}
              </h4>
              <p className="text-[11px] uppercase tracking-[0.26em] text-white/40">
                {anime.genres.slice(0, 3).join(" · ")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
