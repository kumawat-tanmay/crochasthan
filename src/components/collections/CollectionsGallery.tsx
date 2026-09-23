"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  collectionCategories,
  collectionsData,
  type CollectionItem,
  type CollectionCategory,
} from "@/data/collections";
import { ChevronDown, Check, ArrowRight, Heart } from "lucide-react";

const INITIAL_DISPLAY_COUNT = 8;

export function CollectionsGallery() {
  const [selectedCategory, setSelectedCategory] = useState<CollectionCategory["id"]>("all");
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_DISPLAY_COUNT);

  // Filter items by category
  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") return collectionsData;
    return collectionsData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Sliced items according to visible count
  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const hasMore = visibleCount < filteredItems.length;

  const handleCategoryChange = (categoryId: CollectionCategory["id"]) => {
    setSelectedCategory(categoryId);
    // Reset visible count when switching category to keep page tidy
    setVisibleCount(INITIAL_DISPLAY_COUNT);
  };

  const handleViewAll = () => {
    // Reveal all remaining items in the active filter
    setVisibleCount(filteredItems.length);
  };

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {collectionCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`relative px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 shrink-0 cursor-pointer ${
                isActive
                  ? "skeuo-pill-active"
                  : "skeuo-pill text-charcoal/80"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Pinterest-Style Masonry Columns: 2 columns on mobile, 3 on tablet, 4 on desktop */}
      <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-6 [column-fill:_balance]">
        <AnimatePresence mode="popLayout">
          {displayedItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.35,
                delay: Math.min(idx * 0.04, 0.3),
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="break-inside-avoid mb-3 sm:mb-6 group cursor-pointer"
            >
              <div className="neu-card relative rounded-2xl sm:rounded-3xl overflow-hidden">
                {/* Image Container with native aspect ratio to prevent CLS */}
                <div className={`relative w-full ${item.aspectRatio} overflow-hidden bg-stone-100`}>
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading={idx < 4 ? "eager" : "lazy"}
                  />

                  {/* Top-Left: Handmade Tag with Heart Icon */}
                  <div className="absolute top-2 left-2 sm:top-3.5 sm:left-3.5 pointer-events-none z-10">
                    <span className="skeuo-badge inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide text-charcoal">
                      <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-terracotta text-terracotta" />
                      <span>Handmade</span>
                    </span>
                  </div>

                  {/* Subtle Gradient Shadow Vignette with Title Reveal on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-3 sm:p-5">
                    <p className="text-white font-serif text-xs sm:text-base font-medium leading-snug drop-shadow-sm">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Progressive "View All" / Completion State */}
      <div className="mt-12 text-center">
        {hasMore ? (
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={handleViewAll}
              className="skeuo-btn-primary group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold tracking-wide cursor-pointer"
            >
              <span>View All Creations</span>
              <span className="px-2 py-0.5 rounded-full text-xs bg-white/25 text-white">
                {filteredItems.length}
              </span>
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
            <p className="text-xs text-text-muted">
              Showing {visibleCount} of {filteredItems.length} handcrafted pieces
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="neu-card inline-flex flex-col items-center p-6 sm:p-8 rounded-3xl max-w-lg mx-auto"
          >
            <div className="w-10 h-10 rounded-full bg-sage-olive/15 text-sage-olive flex items-center justify-center mb-3">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-medium text-charcoal">
              Viewing All {filteredItems.length} Creations
            </h4>
            <p className="mt-1 text-xs text-text-muted max-w-sm text-center">
              Each piece is made to order by women artisans in Rajasthan. Need a custom colorway, bouquet composition, or bespoke size?
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=919587428751&text=Hi%20Crochasthan%2C%20I%20would%20like%20to%20request%20a%20custom%20crochet%20commission."
              target="_blank"
              rel="noopener noreferrer"
              className="skeuo-btn-primary mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase cursor-pointer"
            >
              <span>Request Custom Commission</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
}
