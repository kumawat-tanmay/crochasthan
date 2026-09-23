import React from "react";
import { reviewsData } from "@/data/reviews";
import { ReviewsMarquee } from "./ReviewsMarquee";
import { Sparkles, MessageSquareHeart } from "lucide-react";

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 border-t border-border-subtle bg-canvas-warm/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="badge-craft mb-3">
            <MessageSquareHeart className="w-3.5 h-3.5 text-terracotta" />
            <span>{reviewsData.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-medium tracking-tight">
            {reviewsData.headline}
          </h2>

          <p className="mt-3 text-text-muted text-sm sm:text-base max-w-2xl leading-relaxed">
            {reviewsData.subheadline}
          </p>

          {/* Social Proof Stats Matrix */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl">
            {reviewsData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/90 border border-border-subtle/80 shadow-xs flex flex-col items-center text-center"
              >
                <p className="font-serif text-xl sm:text-2xl font-bold text-terracotta">
                  {stat.value}
                </p>
                <p className="text-[11px] sm:text-xs text-text-muted mt-0.5 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Continuous Marquee Testimonials Feed */}
      <ReviewsMarquee />

      {/* Community Callout Footer */}
      <div className="mt-10 sm:mt-12 text-center px-3 sm:px-4">
        <a
          href="https://www.instagram.com/crochasthan?stkn=NDViNnVmaXM4N3li"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10.5px] sm:text-xs font-semibold tracking-wide bg-white/95 text-charcoal border border-border-subtle/80 shadow-xs hover:border-terracotta/40 hover:text-terracotta hover:shadow-md transition-all cursor-pointer"
        >
          <InstagramIcon className="w-3.5 h-3.5 text-terracotta shrink-0" />
          <span className="whitespace-nowrap">Tag @crochasthan on Instagram to get featured</span>
        </a>
      </div>
    </section>
  );
}
