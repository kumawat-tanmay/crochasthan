import React from "react";
import { aboutData } from "@/data/about";
import { InstagramMockup } from "./InstagramMockup";
import { Heart, Sparkles, Flower2, ArrowRight } from "lucide-react";

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
        <linearGradient id="ig-btn-grad" x1="0%" y1="100%" x2="100%" y2="0%">
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
        stroke="url(#ig-btn-grad)"
        strokeWidth="2.2"
      />
      <circle
        cx="12"
        cy="12"
        r="4.2"
        stroke="url(#ig-btn-grad)"
        strokeWidth="2.2"
      />
      <circle cx="17.5" cy="6.5" r="1.4" fill="url(#ig-btn-grad)" />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border-subtle bg-canvas-warm/30 relative overflow-hidden"
    >
      {/* Decorative Warm Ambient Texture */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-desert-sand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story & Artisanal Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Location & Origin Badge */}
            <div className="inline-flex items-center gap-1.5 self-start px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-terracotta/10 text-terracotta border border-terracotta/20 mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{aboutData.badge}</span>
            </div>

            {/* Editorial Headline with Official Brand Motto */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-medium leading-[1.18] tracking-tight">
              &ldquo;{aboutData.mottoHindi}&rdquo;
            </h2>

            {/* Poetic English Contextualization */}
            <p className="mt-4 text-base sm:text-lg text-terracotta-deep font-serif italic max-w-2xl leading-relaxed">
              {aboutData.mottoEnglish}
            </p>

            {/* Narrative Story Paragraphs */}
            <div className="mt-6 space-y-4 text-sm sm:text-base text-text-muted leading-relaxed">
              {aboutData.storyParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Core Brand Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {aboutData.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="neu-card p-4 rounded-2xl transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center mb-2.5">
                    {pillar.iconName === "flower" && <Flower2 className="w-4 h-4" />}
                    {pillar.iconName === "heart" && <Heart className="w-4 h-4 fill-terracotta" />}
                    {pillar.iconName === "sparkles" && <Sparkles className="w-4 h-4" />}
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-charcoal leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="mt-1 text-xs text-text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Heritage Stats */}
            <div className="mt-8 pt-6 border-t border-border-subtle/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {aboutData.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="font-serif text-xl sm:text-2xl font-semibold text-charcoal">
                    {stat.value}
                  </p>
                  <p className="text-[11px] sm:text-xs text-text-muted mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Primary Action Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={aboutData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 xs:px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold skeuo-btn-secondary cursor-pointer shrink-0"
              >
                <InstagramGradientIcon className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Visit Our Instagram ({aboutData.instagramHandle})</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#custom-orders"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold skeuo-pill border border-stone-200/80 text-charcoal cursor-pointer"
              >
                <span>Request Custom Order</span>
              </a>
            </div>
          </div>

          {/* Right Column: Instagram Phone Mockup Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center mt-8 lg:mt-0">
            <InstagramMockup
              instagramUrl={aboutData.instagramUrl}
              instagramHandle={aboutData.instagramHandle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
