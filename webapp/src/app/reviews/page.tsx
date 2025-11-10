import Link from "next/link";
import { animeList } from "@/data/anime";

export default function ReviewsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4 rounded-3xl border border-white/10 bg-black/50 p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-purple-100/70">
          Community Intel
        </p>
        <h1 className="text-3xl font-semibold text-white">
          In-Depth Anime Reviews
        </h1>
        <p className="max-w-3xl text-sm text-white/70">
          Browse the definitive dual-summary reviews curated for the current
          season. Every feature spotlights why the community adores or debates a
          show, so you can jump in with the right expectations.
        </p>
      </header>
      <div className="space-y-8">
        {animeList.map((anime) => (
          <article
            key={anime.slug}
            className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-[0_20px_60px_-40px] shadow-purple-500/50"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/40">
              <span>
                {anime.releaseSeason} {anime.releaseYear}
              </span>
              <span>{anime.studio}</span>
              <span>{anime.episodes} Episodes</span>
              <span>⭐ {anime.rating.toFixed(1)}</span>
              <span>{anime.viewCount.toLocaleString()} Views</span>
            </div>
            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-3 md:max-w-3xl">
                <h2 className="text-2xl font-semibold text-white">
                  {anime.title}
                </h2>
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-[0.28em] text-purple-200/80">
                    Short Summary
                  </h3>
                  <p className="text-sm text-white/70">{anime.shortSummary}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-[0.28em] text-purple-200/80">
                    Long Summary
                  </h3>
                  <p className="text-sm text-white/70">{anime.longSummary}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.28em] text-purple-100/80">
                      Community Pros
                    </h4>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-white/75">
                      {anime.communityPros.map((pro) => (
                        <li key={pro}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.28em] text-purple-100/80">
                      Community Cons
                    </h4>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-white/75">
                      {anime.communityCons.map((con) => (
                        <li key={con}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/40 p-4 text-xs uppercase tracking-[0.28em] text-white/40">
                {anime.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full border border-white/10 px-3 py-2 text-center text-white/70"
                  >
                    {genre}
                  </span>
                ))}
                <Link
                  href={`/anime/${anime.slug}`}
                  className="mt-auto rounded-full border border-purple-200/60 px-4 py-2 text-center text-[11px] uppercase tracking-[0.3em] text-purple-100 transition hover:bg-purple-600/40 hover:text-white"
                >
                  Open Review Hub
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
