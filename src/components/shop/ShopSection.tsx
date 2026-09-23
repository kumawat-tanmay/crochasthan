import React from "react";
import { ShopCatalog } from "./ShopCatalog";
import { ShopHeaderArt } from "./ShopHeaderArt";

export function ShopSection() {
  return (
    <section
      id="shop"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border-subtle bg-canvas-ecru relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Flanking Artisanal Art */}
        <div className="relative flex flex-col items-center text-center mb-12 sm:mb-16">
          <ShopHeaderArt />

          <div className="badge-craft mb-3 relative z-10">Order Catalog</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-medium tracking-tight relative z-10">
            Handcrafted Shop
          </h2>
          <p className="mt-3 text-text-muted text-sm sm:text-base max-w-2xl leading-relaxed relative z-10">
            Order directly made-to-order crochet pieces with instant WhatsApp delivery coordination.
            Zero mass manufacturing — purely crafted with passion by rural Indian artisans.
          </p>
        </div>

        {/* Shop Catalog Grid */}
        <ShopCatalog />
      </div>
    </section>
  );
}
