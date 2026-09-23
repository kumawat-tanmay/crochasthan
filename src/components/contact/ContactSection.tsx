import React from "react";
import { ContactSvgIllustration } from "./ContactSvgIllustration";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border-subtle bg-canvas-warm/40 relative overflow-hidden scroll-mt-20"
    >
      {/* Anchor for backward compatibility with custom orders */}
      <span id="custom-orders" className="sr-only" aria-hidden="true" />

      {/* Decorative Warm Ambient Texture */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-desert-sand/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="badge-craft mb-3">Get in Touch • Bespoke Creations</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-medium tracking-tight">
            Let&apos;s Weave Your Vision
          </h2>
          <p className="mt-3 text-text-muted text-sm sm:text-base max-w-2xl leading-relaxed">
            Have a custom flower bouquet in mind, a bridal hair gajra request, or a bulk gifting query?
            Reach out to our Jaipur studio and let&apos;s craft something everlasting.
          </p>
        </div>

        {/* 2-Column Layout: Left SVG Artwork & Studio Badges, Right Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Crochet Contact SVG & Artisan Studio Details */}
          <div className="lg:col-span-5 w-full">
            <ContactSvgIllustration />
          </div>

          {/* Right Column: Contact & Custom Order Form */}
          <div className="lg:col-span-7 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
