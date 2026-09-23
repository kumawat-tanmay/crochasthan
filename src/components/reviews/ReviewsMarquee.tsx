"use client";

import React from "react";
import { reviewsData, type ReviewItem } from "@/data/reviews";
import { Star, CheckCircle, Heart, Sparkles, MessageCircle } from "lucide-react";

function ReviewCard({ review }: { review: ReviewItem }) {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="neu-card w-[230px] sm:w-[380px] p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between shrink-0 select-none mx-1.5 sm:mx-3">
      {/* Top Bar: User Identity & Verified Badge */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div
              className={`w-7 h-7 sm:w-10 sm:h-10 rounded-full font-serif font-bold text-[10px] sm:text-sm flex items-center justify-center shrink-0 ${review.avatarColor}`}
            >
              {initials}
            </div>
            <div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <h4 className="text-[11px] sm:text-sm font-bold text-charcoal leading-none">
                  {review.name}
                </h4>
                <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-sage-olive shrink-0" />
              </div>
              <p className="text-[9px] sm:text-[11px] text-text-muted mt-0.5 font-medium">
                Location: {review.city} 📍
              </p>
            </div>
          </div>

          {/* 5-Star Rating */}
          <div className="flex items-center gap-0.5 text-amber-500">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        {/* Review Body */}
        <p className="font-serif text-[11px] sm:text-sm text-charcoal/90 leading-snug sm:leading-relaxed italic">
          &ldquo;{review.reviewText}&rdquo;
        </p>
      </div>

      {/* Bottom Metadata: Purchased Item & Relative Timestamp */}
      <div className="mt-3 pt-2 sm:mt-4 sm:pt-3 border-t border-border-subtle/50 flex items-center justify-between text-[9px] sm:text-[11px] text-text-muted">
        <span className="inline-flex items-center gap-1 font-mono text-terracotta-deep/90 truncate max-w-[140px] sm:max-w-[200px]">
          <Heart className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-terracotta text-terracotta shrink-0" />
          <span className="truncate">{review.purchasedItem}</span>
        </span>
        <span className="shrink-0">{review.date}</span>
      </div>
    </div>
  );
}

export function ReviewsMarquee() {
  const rowOne = [...reviewsData.rowOneReviews, ...reviewsData.rowOneReviews];
  const rowTwo = [...reviewsData.rowTwoReviews, ...reviewsData.rowTwoReviews];

  return (
    <div className="w-full relative overflow-hidden py-2 sm:py-4">
      {/* Side Horizontal Gradient Fade Vignettes for Infinite Illusion */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-canvas-warm/90 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-canvas-warm/90 to-transparent z-20" />

      {/* Row 1: Drifting Left Slowly with Pause on Hover (Generous py to prevent hover border clipping) */}
      <div className="group flex overflow-hidden py-3 sm:py-4 mb-2 sm:mb-4">
        <div className="animate-reviews-left group-hover:[animation-play-state:paused] flex shrink-0">
          {rowOne.map((review, idx) => (
            <ReviewCard key={`r1-${review.id}-${idx}`} review={review} />
          ))}
        </div>
      </div>

      {/* Row 2: Drifting Right Slowly with Pause on Hover (Generous py to prevent hover border clipping) */}
      <div className="group flex overflow-hidden py-3 sm:py-4">
        <div className="animate-reviews-right group-hover:[animation-play-state:paused] flex shrink-0">
          {rowTwo.map((review, idx) => (
            <ReviewCard key={`r2-${review.id}-${idx}`} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
