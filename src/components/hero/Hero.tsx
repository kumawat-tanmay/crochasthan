"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { HeroData } from "@/data/hero";

export interface HeroProps {
  data: HeroData;
}

export function Hero({ data }: HeroProps) {
  // Exactly 2 identical sets per row for mathematical 50% infinite continuous seamless looping
  const row1 = [...data.imageBands[0], ...data.imageBands[0]];
  const row2 = [...data.imageBands[1], ...data.imageBands[1]];
  const row3 = [...data.imageBands[2], ...data.imageBands[2]];

  return (
    <section className="relative w-full h-[calc(100dvh-3.5rem)] sm:h-[calc(100dvh-4rem)] min-h-[580px] max-h-[960px] 2xl:max-h-[1200px] flex items-center justify-center overflow-hidden bg-canvas-ecru select-none">
      {/* =========================================================================
          3 Continuous Infinite Moving Rows (Symmetrical Top & Bottom Spacing, 4-Side Rounded)
          ========================================================================= */}
      <div className="absolute inset-0 flex flex-col justify-evenly py-4 sm:py-8 lg:py-10 pointer-events-none opacity-100">
        {/* Row 1: Continuous Infinite Drift Left */}
        <div className="w-full overflow-hidden">
          <div className="animate-marquee-left-fast py-1">
            {row1.map((src, idx) => (
              <div
                key={`r1-${idx}`}
                className="rounded-2xl sm:rounded-3xl overflow-hidden mx-2.5 sm:mx-3.5 md:mx-4 shadow-md border border-white/80 bg-canvas-warm flex-shrink-0"
              >
                <Image
                  src={src}
                  alt="Handmade crochet creation"
                  width={320}
                  height={200}
                  loading="eager"
                  className="w-52 h-34 sm:w-52 sm:h-32 md:w-60 md:h-36 lg:w-72 lg:h-42 2xl:w-80 2xl:h-48 object-cover rounded-2xl sm:rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Continuous Infinite Drift Right */}
        <div className="w-full overflow-hidden">
          <div className="animate-marquee-right-smooth py-1">
            {row2.map((src, idx) => (
              <div
                key={`r2-${idx}`}
                className="rounded-2xl sm:rounded-3xl overflow-hidden mx-2.5 sm:mx-3.5 md:mx-4 shadow-md border border-white/80 bg-canvas-warm flex-shrink-0"
              >
                <Image
                  src={src}
                  alt="Handmade crochet flowers and bouquets"
                  width={320}
                  height={200}
                  loading="eager"
                  className="w-52 h-34 sm:w-52 sm:h-32 md:w-60 md:h-36 lg:w-72 lg:h-42 2xl:w-80 2xl:h-48 object-cover rounded-2xl sm:rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Continuous Infinite Drift Left */}
        <div className="w-full overflow-hidden">
          <div className="animate-marquee-left-slow py-1">
            {row3.map((src, idx) => (
              <div
                key={`r3-${idx}`}
                className="rounded-2xl sm:rounded-3xl overflow-hidden mx-2.5 sm:mx-3.5 md:mx-4 shadow-md border border-white/80 bg-canvas-warm flex-shrink-0"
              >
                <Image
                  src={src}
                  alt="Artisanal crochet accessories"
                  width={320}
                  height={200}
                  loading="eager"
                  className="w-52 h-34 sm:w-52 sm:h-32 md:w-60 md:h-36 lg:w-72 lg:h-42 2xl:w-80 2xl:h-48 object-cover rounded-2xl sm:rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          Light Black Dimmer Layer
          ========================================================================= */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none z-[1]" />

      {/* =========================================================================
          Centerpiece Typography (Pumping Heart, Luxury Serif, Full Viewport Fit)
          ========================================================================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center pointer-events-auto">
        {/* HANDMADE WITH LOVE + Pumping Heart (Shop Now Button Color #C24153) */}
        <div className="inline-flex items-center gap-3 sm:gap-4 text-[#C24153] font-sans font-extrabold text-sm sm:text-xl md:text-2xl lg:text-3xl tracking-[0.22em] sm:tracking-[0.26em] uppercase mb-4 sm:mb-6 lg:mb-7 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
          <span>HANDMADE WITH LOVE</span>
          <motion.span
            animate={{
              scale: [1, 1.35, 1, 1.35, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: "easeInOut",
            }}
            className="inline-flex items-center justify-center origin-center"
          >
            <svg
              className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 fill-[#C24153] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.span>
        </div>

        {/* Headline: Luxury Serif (Playfair Display) */}
        <h1 className="font-serif font-bold md:font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] tracking-tight text-[#FAF7F2] leading-[1.08] max-w-5xl drop-shadow-[0_6px_28px_rgba(0,0,0,0.92)]">
          Handmade Crochet <br />
          Gifts That Last Forever
        </h1>

        {/* Subtitle Copy */}
        <p className="font-sans font-medium text-base sm:text-xl md:text-2xl text-[#F3EFE6] max-w-3xl mt-4 sm:mt-6 lg:mt-8 leading-relaxed drop-shadow-[0_3px_16px_rgba(0,0,0,0.92)]">
          Bouquets, gajras, plushies, accessories and custom handmade creations crafted with love.
        </p>
      </div>
    </section>
  );
}
