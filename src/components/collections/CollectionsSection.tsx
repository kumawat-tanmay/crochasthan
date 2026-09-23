import React from "react";
import { CollectionsGallery } from "./CollectionsGallery";

export function CollectionsSection() {
  return (
    <section
      id="collections"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border-subtle bg-canvas-warm/40 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Editorial Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="badge-craft mb-3">Curated Edits</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-medium tracking-tight">
            Signature Collections
          </h2>
          <p className="mt-3 text-text-muted text-sm sm:text-base max-w-2xl leading-relaxed">
            Every stitch is individually hand-knotted with pure desert cotton and warm desert dyes.
            Explore our curated gallery of everlasting bouquets, heirloom gajras, and plush companions.
          </p>
        </div>

        {/* Masonry Collections Leaf Gallery */}
        <CollectionsGallery />
      </div>
    </section>
  );
}
