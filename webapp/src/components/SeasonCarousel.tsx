"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Anime } from "@/data/anime";

type SeasonCarouselProps = {
  items: Anime[];
};

const SLIDE_INTERVAL = 7000;

export function SeasonCarousel({ items }: SeasonCarouselProps) {
  const slides = useMemo(
    () => items.slice(0, 10),
    [items]
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) {
    return null;
  }

  const activeSlide = slides[activeIndex];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-zinc-900 via-zinc-900/40 to-zinc-950">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-zinc-950/80 via-zinc-950/40 to-transparent lg:block" />
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="relative flex aspect-[3/1] items-center justify-center overflow-hidden rounded-3xl lg:aspect-[21/9]">
          <Image
            src={activeSlide.poster}
            alt={activeSlide.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="object-cover brightness-[0.92] saturate-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />
          <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 md:p-14">
            <Link
              href={`/anime/${activeSlide.slug}`}
              className="w-max rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-purple-200 transition hover:border-purple-200/70 hover:text-white"
            >
              Seasonal Rank #{activeSlide.seasonalRank}
            </Link>
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl font-semibold text-white md:text-5xl">
                {activeSlide.title}
              </h2>
              <p className="text-sm text-purple-100/90 md:text-base">
                {activeSlide.shortSummary}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/80">
                <span className="rounded-full border border-white/20 px-3 py-1">
                  {activeSlide.releaseSeason} {activeSlide.releaseYear}
                </span>
                <span className="rounded-full border border-white/20 px-3 py-1">
                  {activeSlide.studio}
                </span>
                <span className="rounded-full border border-purple-300/40 px-3 py-1 text-purple-200">
                  ⭐ {activeSlide.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <aside className="relative hidden flex-col gap-4 border-l border-white/5 bg-black/40 p-6 lg:flex">
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">
            Up Next
          </h3>
          <div className="flex flex-col gap-2">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={slide.slug}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-2 text-left transition ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/55 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="text-xs font-semibold text-purple-200">
                    #{slide.seasonalRank.toString().padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{slide.title}</p>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                      {slide.genres.slice(0, 2).join(" • ")}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/60">
                    {slide.rating.toFixed(1)}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
}
