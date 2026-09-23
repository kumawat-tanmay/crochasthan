import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

// Official Instagram SVG icon with gradient
function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="footer-ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FA7E1E" />
          <stop offset="50%" stopColor="#D62976" />
          <stop offset="100%" stopColor="#962FBF" />
        </linearGradient>
      </defs>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="url(#footer-ig-grad)" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="4.2" stroke="url(#footer-ig-grad)" strokeWidth="2.2" />
      <circle cx="17.5" cy="6.5" r="1.4" fill="url(#footer-ig-grad)" />
    </svg>
  );
}

function FooterCrochetArt() {
  return (
    <svg
      viewBox="0 0 280 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto drop-shadow-xs"
    >
      <defs>
        <linearGradient id="footer-yarn-grad" x1="20" y1="30" x2="130" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C85A32" />
          <stop offset="60%" stopColor="#A8431F" />
          <stop offset="100%" stopColor="#8A3214" />
        </linearGradient>

        <linearGradient id="footer-hook-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E3B778" />
          <stop offset="100%" stopColor="#C68B39" />
        </linearGradient>
      </defs>

      {/* Loom stitch rings */}
      <circle cx="140" cy="80" r="70" stroke="#E3B778" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />
      <circle cx="140" cy="80" r="50" stroke="#C85A32" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.2" />

      {/* YARN SKEIN */}
      <g transform="translate(25, 20)">
        <ellipse cx="60" cy="60" rx="42" ry="34" fill="url(#footer-yarn-grad)" />
        <path d="M 30 52 C 42 32 82 35 94 60" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <path d="M 35 68 C 50 42 85 46 92 72" stroke="#FAF7F2" strokeWidth="1.8" strokeLinecap="round" opacity="0.3" />
        <path d="M 28 60 C 44 85 78 85 95 56" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" opacity="0.35" />

        {/* Belly Band */}
        <rect x="42" y="50" width="36" height="20" rx="3" fill="#FAF7F2" opacity="0.9" />
        <text x="60" y="63" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#8A3214" letterSpacing="0.8" fontFamily="sans-serif">
          HANDMADE
        </text>
      </g>

      {/* CROCHET HOOK (Angled) */}
      <g transform="rotate(-32 110 50)">
        <rect x="106" y="35" width="7" height="55" rx="3.5" fill="#2D2926" />
        <rect x="108" y="-5" width="3.5" height="42" rx="1.75" fill="url(#footer-hook-grad)" />
        <path d="M 108 -3 C 108 -10, 113 -9, 114 -5 C 115 -3, 112 -1, 112 2" stroke="#C68B39" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>

      {/* FLOWING YARN THREAD Weaving into Flowers */}
      <path
        d="M 125 80 C 150 55, 160 115, 185 85 C 205 60, 225 100, 245 75"
        stroke="#C85A32"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="150" cy="72" r="3" fill="#E3B778" />
      <circle cx="185" cy="85" r="3.5" fill="#C85A32" />
      <circle cx="215" cy="80" r="2.5" fill="#E3B778" />

      {/* CROCHET FLOWER BLOSSOM 1 (Terracotta & Gold) */}
      <g transform="translate(195, 55)">
        <circle cx="0" cy="0" r="6" fill="#E3B778" />
        <circle cx="0" cy="-8" r="4.5" fill="#C85A32" />
        <circle cx="7" cy="-2.5" r="4.5" fill="#C85A32" />
        <circle cx="4.5" cy="6.5" r="4.5" fill="#C85A32" />
        <circle cx="-4.5" cy="6.5" r="4.5" fill="#C85A32" />
        <circle cx="-7" cy="-2.5" r="4.5" fill="#C85A32" />
      </g>

      {/* CROCHET FLOWER BLOSSOM 2 (Desert Sand Mini) */}
      <g transform="translate(245, 75) scale(0.75)">
        <circle cx="0" cy="0" r="5" fill="#FAF7F2" />
        <circle cx="0" cy="-7" r="4" fill="#C68B39" />
        <circle cx="6" cy="-2" r="4" fill="#C68B39" />
        <circle cx="4" cy="5.5" r="4" fill="#C68B39" />
        <circle cx="-4" cy="5.5" r="4" fill="#C68B39" />
        <circle cx="-6" cy="-2" r="4" fill="#C68B39" />
      </g>

      {/* Stitched Little Heart */}
      <path
        d="M 168 115 C 168 115, 164 112, 164 109.5 C 164 107.8, 165.5 106.5, 167 107.5 C 168 108.2, 168.5 109, 168.5 109 C 168.5 109, 169 108.2, 170 107.5 C 171.5 106.5, 173 107.8, 173 109.5 C 173 112, 168 115, 168 115 Z"
        fill="#C85A32"
        opacity="0.8"
      />
    </svg>
  );
}

export function Footer() {
  const links = [
    { label: "Collections", href: "#collections" },
    { label: "Shop", href: "#shop" },
    { label: "About", href: "#about" },
    { label: "Custom Orders", href: "#custom-orders" },
  ];

  return (
    <footer className="border-t border-border-subtle bg-canvas-warm text-charcoal">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left Side: Brand & Description */}
          <div className="max-w-md">
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal tracking-tight">
              Crochasthan
            </h2>
            <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed font-sans">
              Handmade crochet creations crafted with love, warmth, and patience.
            </p>
          </div>

          {/* Center: Artisanal Crochet Vector Illustration */}
          <div
            className="hidden lg:flex items-center justify-center max-w-[260px] xl:max-w-[300px] w-full pointer-events-none select-none opacity-85 self-center"
            aria-hidden="true"
          >
            <FooterCrochetArt />
          </div>

          {/* Right Side: Links on Y-Axis & Social Icons Below */}
          <div className="flex flex-col items-start md:items-end gap-5">
            {/* Navigation Links stacked on Y-Axis */}
            <nav className="flex flex-col items-start md:items-end gap-2.5" aria-label="Footer Navigation">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm sm:text-base font-normal text-charcoal/85 hover:text-charcoal hover:underline hover:decoration-terracotta hover:underline-offset-4 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Social Icons Below Navigation Links */}
            <div className="flex items-center gap-3 pt-1">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/crochasthan?stkn=NDViNnVmaXM4N3li"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Crochasthan on Instagram"
                className="w-11 h-11 rounded-full neu-card flex items-center justify-center text-charcoal hover:border-terracotta hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/910000000000?text=Hi%20Crochasthan!%20I%20would%20like%20to%20know%20more%20about%20your%20crochet%20creations."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Crochasthan on WhatsApp"
                className="w-11 h-11 rounded-full neu-card flex items-center justify-center text-emerald-600 hover:border-emerald-500 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer Separator Line */}
      <div className="border-t border-border-subtle" />

      {/* Bottom Bar: Left-Right Combo */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-text-muted text-center sm:text-left font-sans">
          <p>
            Handmade with <span className="inline-block text-terracotta" aria-label="love">🤎</span> by Crochasthan
          </p>
          <p>© 2026 Crochasthan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
