"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { shopProducts, type ShopProduct } from "@/data/shop";
import { MessageCircle, Clock, Sparkles, Check, ChevronRight } from "lucide-react";

const categories = [
  { id: "all", label: "All Items" },
  { id: "bouquets", label: "Bouquets" },
  { id: "gajras", label: "Gajras" },
  { id: "plushies", label: "Plushies" },
  { id: "accessories", label: "Accessories" },
] as const;

export function ShopCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<ShopProduct | null>(null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return shopProducts;
    return shopProducts.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const getWhatsAppLink = (product: ShopProduct) => {
    const text = `Hi Crochasthan, I would like to order the handcrafted "${product.title}" (${product.formattedPrice}). Please share payment details and estimated dispatch timeline.`;
    return `https://api.whatsapp.com/send?phone=919587428751&text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full">
      {/* Category Navigation Pills */}
      <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
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

      {/* Product Cards Grid: 2 Columns on Mobile, 3 on Tablet/Laptop, 4 on Desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="neu-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col group"
            >
              {/* Pinterest-Style Portrait Image Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
                <Image
                  src={product.imageSrc}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Badge Overlay */}
                {product.badge && (
                  <div className="absolute top-2 left-2 sm:top-3.5 sm:left-3.5 z-10">
                    <span className="skeuo-badge inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-terracotta">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span className="hidden xs:inline sm:inline">{product.badge}</span>
                    </span>
                  </div>
                )}

                {/* Price Tag on Image */}
                <div className="absolute top-2 right-2 sm:top-3.5 sm:right-3.5 z-10">
                  <span className="skeuo-badge inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold font-sans tracking-wide text-charcoal">
                    {product.formattedPrice}
                  </span>
                </div>

                {/* Bottom Dark Vignette on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Desktop: Order Button Appearing on Hover */}
                <div className="hidden sm:block absolute inset-x-3.5 bottom-3.5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <a
                    href={getWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skeuo-btn-primary w-full py-3 px-4 rounded-full text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order Now</span>
                  </a>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xs sm:text-base font-medium text-charcoal leading-snug group-hover:text-terracotta transition-colors line-clamp-2">
                    {product.title}
                  </h3>

                  {/* Desktop Only Description (Removed on Mobile) */}
                  <p className="mt-2 text-xs text-text-muted line-clamp-2 leading-relaxed hidden sm:block">
                    {product.description}
                  </p>
                </div>

                {/* Mobile Only: Order Now Button Added Directly Here */}
                <div className="mt-2.5 sm:hidden">
                  <a
                    href={getWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skeuo-btn-primary w-full py-2 px-3 rounded-full text-[11px] font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order Now</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Trust & Craftsmanship Notes */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl neu-card grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        <div className="flex items-center sm:items-start gap-3 flex-col sm:flex-row">
          <div className="w-9 h-9 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal">
              100% Handcrafted
            </h4>
            <p className="text-xs text-text-muted mt-0.5">
              Each piece is individually crocheted by rural women artisans in Rajasthan.
            </p>
          </div>
        </div>

        <div className="flex items-center sm:items-start gap-3 flex-col sm:flex-row">
          <div className="w-9 h-9 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal">
              Made Fresh to Order
            </h4>
            <p className="text-xs text-text-muted mt-0.5">
              Crafted right after your confirmation to guarantee pristine yarn tension and longevity.
            </p>
          </div>
        </div>

        <div className="flex items-center sm:items-start gap-3 flex-col sm:flex-row">
          <div className="w-9 h-9 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">
            <MessageCircle className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal">
              Personalized Support
            </h4>
            <p className="text-xs text-text-muted mt-0.5">
              Chat directly with our design coordinator via WhatsApp for color adjustments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
