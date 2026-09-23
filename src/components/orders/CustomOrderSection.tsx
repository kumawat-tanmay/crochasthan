import React from "react";
import { CustomOrderForm } from "./CustomOrderForm";

export function CustomOrderSection() {
  return (
    <section
      id="custom-orders"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border-subtle bg-canvas-warm/50 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="badge-craft mb-3">Bespoke Commissions</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-medium tracking-tight">
            Order Custom Creations
          </h2>
          <p className="mt-3 text-text-muted text-sm sm:text-base max-w-2xl leading-relaxed">
            Dreaming of a personalized bouquet for an anniversary, a custom bridal gajra, or a plushie lookalike?
            Fill out your requirements below and our artisans will bring your vision to life.
          </p>
        </div>

        {/* Custom Order Interactive Form */}
        <CustomOrderForm />
      </div>
    </section>
  );
}
