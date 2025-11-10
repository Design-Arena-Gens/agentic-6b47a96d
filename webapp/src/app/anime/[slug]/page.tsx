import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  animeList,
  getAnimeBySlug,
  trendingNow,
} from "@/data/anime";

type AnimePageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return animeList.map((anime) => ({ slug: anime.slug }));
}

export async function generateMetadata({
  params,
}: AnimePageProps): Promise<Metadata> {
  const { slug } = params;
  const anime = getAnimeBySlug(slug);
  if (!anime) {
    return {
      title: "Series Not Found • AetherView",
    };
  }
  return {
    title: `${anime.title} Review • AetherView`,
    description: anime.shortSummary,
  };
}

export default async function AnimePage(props: AnimePageProps) {
  const { slug } = props.params;
  const anime = getAnimeBySlug(slug);

  if (!anime) {
    notFound();
  }

  const related = animeList
    .filter(
      (item) =>
        item.slug !== anime.slug &&
        item.genres.some((genre) => anime.genres.includes(genre))
    )
    .slice(0, 3);

  const trendingPeers = trendingNow
    .filter((item) => item.slug !== anime.slug)
    .slice(0, 5);

  return (
    <div className="space-y-12">
      <section className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/30 via-zinc-950 to-black/95 p-6 lg:grid-cols-[320px_1fr] lg:p-10">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <Image
            src={anime.poster}
            alt={anime.title}
            width={640}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
          <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.28em] text-purple-200">
            Seasonal Rank #{anime.seasonalRank}
          </span>
          <span className="absolute bottom-4 right-4 rounded-full border border-purple-300/50 bg-black/70 px-3 py-1 text-sm font-semibold text-white">
            ⭐ {anime.rating.toFixed(1)}
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/50">
              <span>
                {anime.releaseSeason} {anime.releaseYear}
              </span>
              <span>{anime.studio}</span>
              <span>{anime.episodes} Episodes</span>
              <span>{Math.round(anime.viewCount / 1000)}K Views</span>
            </div>
            <h1 className="text-3xl font-semibold text-white md:text-4xl">
              {anime.title}
            </h1>
            <p className="text-sm text-purple-50/80">{anime.shortSummary}</p>
            <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.28em] text-white/40">
              {anime.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full border border-white/15 px-4 py-1"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-200/80">
              Long Summary
            </h2>
            <p className="text-base leading-relaxed text-white/75">
              {anime.longSummary}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-purple-900/20 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-100">
                Community Pros
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {anime.communityPros.map((pro) => (
                  <li key={pro} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-300" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-100">
                Community Cons
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {anime.communityCons.map((con) => (
                  <li key={con} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/40">
            <span className="rounded-full border border-white/10 px-4 py-2">
              Trending Rank #{anime.trendingRank}
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Chart Rank #{anime.chartRank}
            </span>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="space-y-5 rounded-3xl border border-white/10 bg-black/40 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              Related Series
            </h2>
            <span className="text-xs uppercase tracking-[0.28em] text-white/40">
              Shared DNA
            </span>
          </div>
          {related.length === 0 && (
            <p className="text-sm text-white/60">
              This series is in a class of its own this season. Check out the
              trending picks for more recommendations.
            </p>
          )}
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/anime/${item.slug}`}
                className="group rounded-2xl border border-white/10 bg-zinc-900/70 p-4 transition hover:border-purple-200/50 hover:bg-purple-900/20"
              >
                <h3 className="text-sm font-semibold text-white group-hover:text-purple-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-white/40">
                  {item.genres.slice(0, 3).join(" · ")}
                </p>
                <p className="mt-3 text-sm text-white/70">
                  {item.shortSummary}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-purple-900/30 via-zinc-950 to-black/90 p-6">
          <h2 className="text-lg font-semibold text-white">Season Hit List</h2>
          <p className="mt-2 text-sm text-white/60">
            The shows fellow viewers of {anime.title} can&apos;t stop streaming.
          </p>
          <ul className="mt-4 space-y-3">
            {trendingPeers.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/anime/${item.slug}`}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white transition hover:border-purple-200/60 hover:bg-purple-900/20"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                      ⭐ {item.rating.toFixed(1)} · {item.genres[0]}
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-purple-200/70">
                    #{item.trendingRank}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-purple-900/25 px-6 py-5">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-purple-50/70">
            Ready For More?
          </p>
          <h3 className="text-lg font-semibold text-white">
            Discover next picks curated by mood-friendly genres.
          </h3>
        </div>
        <Link
          href="/genres"
          className="rounded-full border border-purple-100/50 px-5 py-2 text-xs uppercase tracking-[0.28em] text-purple-50 transition hover:bg-purple-500/40 hover:text-white"
        >
          Explore Genres
        </Link>
      </div>
    </div>
  );
}
