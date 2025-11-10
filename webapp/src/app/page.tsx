import Link from "next/link";
import {
  animeList,
  seasonalTop,
  topCharts,
  trendingNow,
} from "@/data/anime";
import { SeasonCarousel } from "@/components/SeasonCarousel";
import { TopChartsGrid } from "@/components/TopChartsGrid";
import { TrendingList } from "@/components/TrendingList";

export default function Home() {
  return (
    <div className="space-y-12 pb-20">
      <SeasonCarousel items={seasonalTop} />
      <div className="grid gap-6 lg:grid-cols-[3fr_1.3fr]">
        <TopChartsGrid items={topCharts} />
        <TrendingList items={trendingNow} />
      </div>
      <section className="grid gap-8 rounded-3xl border border-white/10 bg-black/40 p-8 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-purple-200/70">
            Why It Matters
          </p>
          <h3 className="text-lg font-semibold text-white">
            Dual-Layer Summaries
          </h3>
          <p className="text-sm text-white/70">
            Every series comes with a spoiler-safe short synopsis and an
            expanded long-form breakdown curated with genre pacing in mind.{" "}
            <span className="text-white">
              Decide in seconds or savor the detail.
            </span>
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-purple-200/70">
            Community Pulse
          </p>
          <h3 className="text-lg font-semibold text-white">
            Pros & Cons That Matter
          </h3>
          <p className="text-sm text-white/70">
            Bullet-point opinions distilled from thousands of watch parties,
            podcast recaps, and reviewer notes let you scan the consensus at a
            glance.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-purple-200/70">
            Curated By Season
          </p>
          <h3 className="text-lg font-semibold text-white">
            Real-Time Momentum
          </h3>
          <p className="text-sm text-white/70">
            We blend seasonal rank, weekly view velocity, and sentiment scores to
            surface the shows buzzing now—not just classics.
          </p>
        </div>
      </section>
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Latest Deep Dives</h2>
          <Link
            href="/reviews"
            className="text-xs uppercase tracking-[0.28em] text-purple-200 hover:text-purple-100"
          >
            Browse All Reviews
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {animeList.slice(0, 4).map((anime) => (
            <article
              key={anime.slug}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-[0_18px_55px_-35px] shadow-purple-400/70"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/50">
                <span>
                  {anime.releaseSeason} {anime.releaseYear}
                </span>
                <span>⭐ {anime.rating.toFixed(1)}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{anime.title}</h3>
              <p className="text-sm text-white/70">{anime.shortSummary}</p>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-[0.2em] text-purple-200/80">
                  Long Take
                </h4>
                <p className="text-sm text-white/60">
                  {anime.longSummary}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.28em] text-white/40">
                {anime.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full border border-white/10 px-3 py-1"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <div className="grid gap-2 text-sm text-white/75">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-purple-200/70">
                    Community Pros
                  </p>
                  <ul className="list-disc space-y-1 pl-4 text-sm text-white/70">
                    {anime.communityPros.slice(0, 2).map((pro) => (
                      <li key={pro}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-purple-200/70">
                    Community Cons
                  </p>
                  <ul className="list-disc space-y-1 pl-4 text-sm text-white/70">
                    {anime.communityCons.slice(0, 2).map((con) => (
                      <li key={con}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Link
                  href={`/anime/${anime.slug}`}
                  className="rounded-full border border-purple-300/50 px-4 py-2 text-xs uppercase tracking-[0.28em] text-purple-100 transition hover:bg-purple-500/40 hover:text-white"
                >
                  Read full review
                </Link>
                <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                  {anime.viewCount.toLocaleString()} views
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
