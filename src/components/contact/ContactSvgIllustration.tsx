import React from "react";
import { MapPin, Clock, Sparkles, Heart } from "lucide-react";

export function ContactSvgIllustration() {
  return (
    <div className="flex flex-col h-full justify-between">
      {/* Visual Crochet & Message Illustration Card */}
      <div className="neu-card relative rounded-3xl bg-gradient-to-br from-canvas-warm/90 via-canvas-ecru to-desert-sand/20 p-6 sm:p-8 overflow-hidden">
        {/* Soft Ambient Radial Blur Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-desert-sand/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header Tag */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-terracotta/10 text-terracotta border border-terracotta/20">
            <Sparkles className="w-3 h-3" />
            <span>Direct Artisan Dialogue</span>
          </span>
          <span className="text-[11px] font-mono tracking-widest text-text-muted uppercase">
            Jaipur • India
          </span>
        </div>

        {/* Artistic SVG: Crochet Yarn Skein Weaving Into Message Envelope */}
        <div className="w-full max-w-[320px] sm:max-w-[360px] mx-auto my-2 relative">
          <svg
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto drop-shadow-md select-none"
            aria-label="Handcrafted crochet thread weaving into a letter and chat bubble"
          >
            <defs>
              {/* Gradients */}
              <linearGradient id="yarn-grad" x1="40" y1="80" x2="160" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C85A32" />
                <stop offset="50%" stopColor="#A8431F" />
                <stop offset="100%" stopColor="#8A3214" />
              </linearGradient>

              <linearGradient id="envelope-grad" x1="220" y1="90" x2="360" y2="230" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FAF7F2" />
                <stop offset="100%" stopColor="#F3EFE6" />
              </linearGradient>

              <linearGradient id="hook-metal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E3B778" />
                <stop offset="100%" stopColor="#C68B39" />
              </linearGradient>

              <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#C85A32" floodOpacity="0.12" />
              </filter>
            </defs>

            {/* Background Crochet Stitch Rings (Decorative Loom Lines) */}
            <circle cx="200" cy="150" r="125" stroke="#E3B778" strokeWidth="1.5" strokeDasharray="4 8" opacity="0.35" />
            <circle cx="200" cy="150" r="95" stroke="#C85A32" strokeWidth="1" strokeDasharray="3 6" opacity="0.25" />

            {/* YARN SKEIN / BALL (Left) */}
            <g filter="url(#soft-shadow)">
              {/* Main Yarn Body */}
              <ellipse cx="110" cy="170" rx="65" ry="60" fill="url(#yarn-grad)" />

              {/* Textured Yarn Strands */}
              <path
                d="M 60 160 C 80 125, 140 135, 165 170"
                stroke="#FAF7F2"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.45"
              />
              <path
                d="M 70 185 C 95 150, 145 155, 160 195"
                stroke="#FAF7F2"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.35"
              />
              <path
                d="M 55 175 C 80 215, 140 210, 165 165"
                stroke="#FAF7F2"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.4"
              />
              <path
                d="M 85 130 C 115 155, 130 195, 135 225"
                stroke="#E3B778"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.6"
              />
              <path
                d="M 95 120 C 130 145, 150 185, 150 210"
                stroke="#FAF7F2"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.5"
              />

              {/* Yarn Label Band Around Skein */}
              <path
                d="M 75 145 C 95 135, 130 135, 145 150 L 140 185 C 120 175, 90 175, 70 190 Z"
                fill="#FAF7F2"
                opacity="0.9"
              />
              <text
                x="107"
                y="167"
                textAnchor="middle"
                fontSize="9"
                fontWeight="700"
                fill="#8A3214"
                letterSpacing="1.2"
                fontFamily="sans-serif"
              >
                100% YARN
              </text>
            </g>

            {/* CROCHET HOOK (Slanted Elegant Needle) */}
            <g transform="rotate(-35 150 90)">
              {/* Hook Handle */}
              <rect x="135" y="70" width="12" height="75" rx="6" fill="#2D2926" />
              {/* Hook Metallic Shaft */}
              <rect x="138" y="15" width="6" height="58" rx="3" fill="url(#hook-metal)" />
              {/* Hook Tip & Throat */}
              <path
                d="M 138 18 C 138 8, 146 6, 148 11 C 149 14, 144 16, 144 20"
                stroke="#C68B39"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </g>

            {/* DYNAMIC FLOWING YARN THREAD Weaving into Envelope */}
            <path
              d="M 160 150 C 190 120, 195 210, 230 180 C 255 160, 240 100, 280 90 C 310 80, 340 110, 310 140"
              stroke="#C85A32"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Thread Stitch Loop Knots */}
            <circle cx="190" cy="145" r="4.5" fill="#C85A32" />
            <circle cx="230" cy="180" r="4" fill="#C68B39" />
            <circle cx="270" cy="98" r="4.5" fill="#C85A32" />

            {/* MESSAGE ENVELOPE / CHAT BUBBLE (Right) */}
            <g filter="url(#soft-shadow)">
              {/* Envelope Body */}
              <rect
                x="240"
                y="120"
                width="125"
                height="85"
                rx="14"
                fill="url(#envelope-grad)"
                stroke="#C85A32"
                strokeWidth="2.5"
              />

              {/* Envelope Flap Lines */}
              <path
                d="M 242 124 L 302 165 C 304 166, 307 166, 309 165 L 363 124"
                stroke="#C85A32"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />

              {/* Terracotta Wax Heart Seal */}
              <circle cx="305.5" cy="165" r="11" fill="#C85A32" />
              <path
                d="M 305.5 168 C 305.5 168, 301 165, 301 162.5 C 301 160.8, 302.5 159.5, 304 160.5 C 305 161.2, 305.5 162, 305.5 162 C 305.5 162, 306 161.2, 307 160.5 C 308.5 159.5, 310 160.8, 310 162.5 C 310 165, 305.5 168, 305.5 168 Z"
                fill="#FAF7F2"
              />

              {/* Letter Interior Lines */}
              <line x1="260" y1="185" x2="285" y2="185" stroke="#C68B39" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="325" y1="185" x2="350" y2="185" stroke="#C68B39" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* PETAL BLOSSOMS SPROUTING FROM THREAD (Crochet Flower Accents) */}
            <g transform="translate(205, 95)">
              <circle cx="0" cy="0" r="5" fill="#E3B778" />
              <circle cx="0" cy="-9" r="4.5" fill="#C85A32" />
              <circle cx="8" cy="-3" r="4.5" fill="#C85A32" />
              <circle cx="5" cy="7" r="4.5" fill="#C85A32" />
              <circle cx="-5" cy="7" r="4.5" fill="#C85A32" />
              <circle cx="-8" cy="-3" r="4.5" fill="#C85A32" />
            </g>

            <g transform="translate(355, 80) scale(0.75)">
              <circle cx="0" cy="0" r="5" fill="#E3B778" />
              <circle cx="0" cy="-9" r="4.5" fill="#A8431F" />
              <circle cx="8" cy="-3" r="4.5" fill="#A8431F" />
              <circle cx="5" cy="7" r="4.5" fill="#A8431F" />
              <circle cx="-5" cy="7" r="4.5" fill="#A8431F" />
              <circle cx="-8" cy="-3" r="4.5" fill="#A8431F" />
            </g>

            {/* Delicate Stitched Hearts floating */}
            <path
              d="M 180 70 C 180 70, 176 67, 176 64.5 C 176 62.8, 177.5 61.5, 179 62.5 C 180 63.2, 180.5 64, 180.5 64 C 180.5 64, 181 63.2, 182 62.5 C 183.5 61.5, 185 62.8, 185 64.5 C 185 67, 180 70, 180 70 Z"
              fill="#C85A32"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Narrative Caption */}
        <div className="mt-3 text-center sm:text-left relative z-10">
          <p className="font-serif text-charcoal font-medium text-base sm:text-lg">
            Every stitch begins with a simple conversation.
          </p>
          <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
            Tell us about your dream bouquet, hair gajra, or custom gift. Our women artisans in Jaipur will weave it into a forever keepsake.
          </p>
        </div>
      </div>

      {/* Studio Trust & Touchpoints Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {/* Location Badge */}
        <div className="neu-card p-3.5 rounded-2xl flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-charcoal">Jaipur Workshop</p>
            <p className="text-[11px] text-text-muted font-medium">Rajasthan, India 📍</p>
          </div>
        </div>

        {/* Response Time Badge */}
        <div className="neu-card p-3.5 rounded-2xl flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-sage-olive/15 text-sage-olive flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-charcoal">Quick Response</p>
            <p className="text-[11px] text-text-muted font-medium">Within 2 hours</p>
          </div>
        </div>

        {/* 100% Handcrafted Badge */}
        <div className="neu-card p-3.5 rounded-2xl flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
            <Heart className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-charcoal">100% Handcrafted</p>
            <p className="text-[11px] text-text-muted font-medium">No factory molds</p>
          </div>
        </div>

        {/* Instagram Direct */}
        <a
          href="https://www.instagram.com/crochasthan?stkn=NDViNnVmaXM4N3li"
          target="_blank"
          rel="noopener noreferrer"
          className="neu-card p-3.5 rounded-2xl flex items-center gap-3 cursor-pointer group hover:border-rose-300"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FA7E1E] via-[#D62976] to-[#962FBF] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-charcoal flex items-center gap-1">
              Chat on Instagram
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
            </p>
            <p className="text-[11px] text-terracotta font-medium">@crochasthan</p>
          </div>
        </a>
      </div>
    </div>
  );
}
