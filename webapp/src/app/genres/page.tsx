import Link from "next/link";
import { genreMap } from "@/data/anime";

const genreDescriptions: Record<string, string> = {
  "sci-fi":
    "Tech-dense adventures from cosmic odysseys to AI greenhouses, curated for futurists.",
  action:
    "High-energy battles, tactical gambits, and choreography that keeps your heart racing.",
  adventure:
    "Road-trip epics filled with discovery, found families, and world-expanding quests.",
  mystery:
    "Narratives laced with enigmas, layered clues, and reveals that reward close watching.",
  fantasy:
    "Magic-touched worlds with rich lore, alchemy blueprints, and ethereal soundscapes.",
  drama:
    "Character-driven arcs that spotlight emotional stakes, social tension, and catharsis.",
  "slice of life":
    "Comfort anime brewed for cozy nights with heartfelt vignettes and warm aesthetics.",
  romance:
    "Slow-burn connections and heartfelt confessions wrapped in gorgeous backdrops.",
  music:
    "Performance showcases that blend animation with unforgettable soundtracks.",
  thriller:
    "Unreliable narrators, psychological feints, and cliffhangers built to binge.",
  psychological:
    "Mind-bending journeys exploring identity, agency, and moral dilemmas head-on.",
  supernatural:
    "Spirit-bound battles, cosmic rituals, and otherworldly stakes with a beating heart.",
};

export default function GenresPage() {
  const entries = Object.entries(genreMap).sort(([a], [b]) =>
    a.localeCompare(b)
  );

  return (
    <div className="space-y-10">
      <header className="space-y-4 rounded-3xl border border-white/10 bg-black/50 p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-purple-100/70">
          Browse By Mood
        </p>
        <h1 className="text-3xl font-semibold text-white">
          Genre Intelligence Hub
        </h1>
        <p className="max-w-3xl text-sm text-white/70">
          Tap into mood-based recommendations. Each genre capsule includes
          handpicked highlights, sentiment cues, and quick paths to full review
          breakdowns.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {entries.map(([genre, shows]) => (
          <section
            key={genre}
            className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-[0_22px_60px_-45px] shadow-purple-500/40"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                {genre.replace(/\b\w/g, (char) => char.toUpperCase())}
              </h2>
              <span className="text-xs uppercase tracking-[0.28em] text-white/40">
                {shows.length} picks
              </span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              {genreDescriptions[genre] ??
                "Curated picks aligned with the community response this season."}
            </p>
            <div className="mt-4 grid gap-4">
              {shows.map((anime) => (
                <Link
                  key={anime.slug}
                  href={`/anime/${anime.slug}`}
                  className="group rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-purple-200/60 hover:bg-purple-900/20"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.28em] text-white/40">
                    <span>{anime.studio}</span>
                    <span>⭐ {anime.rating.toFixed(1)}</span>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-white group-hover:text-purple-100">
                    {anime.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    {anime.shortSummary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.28em] text-white/40">
                    <span className="rounded-full border border-white/10 px-3 py-1">
                      Seasonal #{anime.seasonalRank}
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1">
                      Trending #{anime.trendingRank}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
