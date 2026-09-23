"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

function InstagramGradientIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ig-mockup-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F09433" />
          <stop offset="25%" stopColor="#E6683C" />
          <stop offset="50%" stopColor="#DC2743" />
          <stop offset="75%" stopColor="#CC2366" />
          <stop offset="100%" stopColor="#BC1888" />
        </linearGradient>
      </defs>
      <rect
        width="20"
        height="20"
        x="2"
        y="2"
        rx="5.5"
        ry="5.5"
        stroke="url(#ig-mockup-grad)"
        strokeWidth="2.2"
      />
      <circle
        cx="12"
        cy="12"
        r="4.2"
        stroke="url(#ig-mockup-grad)"
        strokeWidth="2.2"
      />
      <circle cx="17.5" cy="6.5" r="1.4" fill="url(#ig-mockup-grad)" />
    </svg>
  );
}

interface InstagramMockupProps {
  instagramUrl: string;
  instagramHandle: string;
}

export function InstagramMockup({ instagramUrl, instagramHandle }: InstagramMockupProps) {
  return (
    <div className="relative mx-auto max-w-[340px] sm:max-w-[380px] w-full">
      {/* Soft Ambient Terracotta Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-terracotta/25 via-desert-sand/20 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

      {/* Floating Instagram Profile Frame Link */}
      <motion.a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open Crochasthan on Instagram (${instagramHandle})`}
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="block group relative cursor-pointer"
      >
        {/* Phone Outer Shell */}
        <div className="relative rounded-[2.5rem] bg-stone-900 border-4 border-stone-800 p-2 sm:p-2.5 shadow-2xl transition-all duration-300 group-hover:border-terracotta/40 group-hover:shadow-[0_20px_50px_rgba(200,90,50,0.18)]">

          {/* Screen Content Container with exact smartphone aspect ratio */}
          <div className="relative aspect-[9/18.5] w-full rounded-[2rem] overflow-hidden bg-stone-950">
            <Image
              src="/images/insta/crochasthan_instagram.jpeg"
              alt="Official Crochasthan Instagram Profile @crochasthan"
              fill
              sizes="(max-width: 640px) 340px, 380px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              priority={false}
            />

            {/* Subtle On-Hover Glassmorphic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 z-20">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white/95 text-charcoal backdrop-blur-md shadow-lg border border-white/80 group-hover:scale-105 transition-transform duration-200">
                <InstagramGradientIcon className="w-4 h-4" />
                <span>Open @crochasthan on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
              </span>
            </div>
          </div>
        </div>

        {/* Floating Social Proof Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-stone-200/70 flex items-center gap-3 z-30"
        >
          <div className="w-9 h-9 rounded-full bg-canvas-warm flex items-center justify-center shrink-0">
            <InstagramGradientIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-xs font-bold text-charcoal">{instagramHandle}</p>
              <Sparkles className="w-3 h-3 text-terracotta" />
            </div>
            <p className="text-[10px] text-text-muted font-medium">900+ followers • Jaipur, Rajasthan</p>
          </div>
        </motion.div>
      </motion.a>
    </div>
  );
}
