"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import type { HeroData } from "@/data/hero";

export interface HeroProps {
  data: HeroData;
}

export function Hero({ data }: HeroProps) {
  // ponytail: 4 continuous GPU-accelerated ticker layers running off-main-thread with force3D
  // Zero blur filters, zero layout thrashing for buttery 120 FPS performance
  const band1Ref = useRef<HTMLDivElement>(null);
  const band2Ref = useRef<HTMLDivElement>(null);
  const band3Ref = useRef<HTMLDivElement>(null);
  const band4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Layer 1: Continuous smooth drift Left
      if (band1Ref.current) {
        gsap.to(band1Ref.current, {
          xPercent: -50,
          repeat: -1,
          duration: 36,
          ease: "none",
          force3D: true,
        });
      }

      // Layer 2: Continuous smooth drift Right
      if (band2Ref.current) {
        gsap.fromTo(
          band2Ref.current,
          { xPercent: -50 },
          {
            xPercent: 0,
            repeat: -1,
            duration: 44,
            ease: "none",
            force3D: true,
          }
        );
      }

      // Layer 3: Continuous smooth drift Left
      if (band3Ref.current) {
        gsap.to(band3Ref.current, {
          xPercent: -50,
          repeat: -1,
          duration: 32,
          ease: "none",
          force3D: true,
        });
      }

      // Layer 4: Continuous smooth drift Right
      if (band4Ref.current) {
        gsap.fromTo(
          band4Ref.current,
          { xPercent: -50 },
          {
            xPercent: 0,
            repeat: -1,
            duration: 40,
            ease: "none",
            force3D: true,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-canvas-ecru py-12 md:py-20 select-none">
      {/* =========================================================================
          4 Continuous Moving Image Layers (100% Full Opacity & Direct Visibility)
          ========================================================================= */}
      <div className="absolute inset-0 flex flex-col justify-around py-4 opacity-100 pointer-events-none -rotate-1 scale-105 will-change-transform">
        {/* Layer 1: Left */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div ref={band1Ref} className="inline-flex gap-4 sm:gap-6 w-max will-change-transform">
            {[...data.imageBands[0], ...data.imageBands[0], ...data.imageBands[0]].map((src, idx) => (
              <div
                key={`l1-${idx}`}
                className="relative w-44 h-28 sm:w-60 sm:h-36 md:w-72 md:h-44 rounded-2xl overflow-hidden shadow-sm border border-white/60 bg-canvas-warm flex-shrink-0"
              >
                <Image
                  src={src}
                  alt="Handmade crochet creations"
                  fill
                  sizes="(max-width: 768px) 240px, 300px"
                  className="object-cover"
                  loading={idx < 6 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Layer 2: Right */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div ref={band2Ref} className="inline-flex gap-4 sm:gap-6 w-max will-change-transform">
            {[...data.imageBands[1], ...data.imageBands[1], ...data.imageBands[1]].map((src, idx) => (
              <div
                key={`l2-${idx}`}
                className="relative w-44 h-28 sm:w-60 sm:h-36 md:w-72 md:h-44 rounded-2xl overflow-hidden shadow-sm border border-white/60 bg-canvas-warm flex-shrink-0"
              >
                <Image
                  src={src}
                  alt="Handmade crochet flowers and bouquets"
                  fill
                  sizes="(max-width: 768px) 240px, 300px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Layer 3: Left */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div ref={band3Ref} className="inline-flex gap-4 sm:gap-6 w-max will-change-transform">
            {[...data.imageBands[2], ...data.imageBands[2], ...data.imageBands[2]].map((src, idx) => (
              <div
                key={`l3-${idx}`}
                className="relative w-44 h-28 sm:w-60 sm:h-36 md:w-72 md:h-44 rounded-2xl overflow-hidden shadow-sm border border-white/60 bg-canvas-warm flex-shrink-0"
              >
                <Image
                  src={src}
                  alt="Artisanal crochet accessories"
                  fill
                  sizes="(max-width: 768px) 240px, 300px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Layer 4: Right */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div ref={band4Ref} className="inline-flex gap-4 sm:gap-6 w-max will-change-transform">
            {[...data.imageBands[3], ...data.imageBands[3], ...data.imageBands[3]].map((src, idx) => (
              <div
                key={`l4-${idx}`}
                className="relative w-44 h-28 sm:w-60 sm:h-36 md:w-72 md:h-44 rounded-2xl overflow-hidden shadow-sm border border-white/60 bg-canvas-warm flex-shrink-0"
              >
                <Image
                  src={src}
                  alt="Custom handmade crochet plushies"
                  fill
                  sizes="(max-width: 768px) 240px, 300px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          Centerpiece Typography (Clean Text Directly on Moving Images - Zero BG)
          ========================================================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center pointer-events-auto">
        {/* Highlighted Sentence Badge: "Handmade with love" */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-terracotta font-roboto font-bold text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-terracotta animate-pulse" />
          {data.badge}
        </div>

        {/* Big Bold Headline in Roboto */}
        <h1 className="font-roboto font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-charcoal leading-[1.08] max-w-4xl">
          Handmade Crochet Gifts <br />
          <span className="text-terracotta">That Last Forever</span>
        </h1>

        {/* Descriptive Copy in Roboto */}
        <p className="font-roboto font-semibold text-base sm:text-xl md:text-2xl text-charcoal max-w-3xl mt-6 sm:mt-8 leading-relaxed">
          {data.description}
        </p>
      </div>
    </section>
  );
}
