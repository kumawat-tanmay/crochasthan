import React from "react";

export function CollectionsHeaderArt() {
  return (
    <>
      {/* LEFT ARTWORK: Handcrafted Crochet Botanical Blossom & Thread */}
      <div
        className="hidden md:block absolute left-2 lg:left-6 xl:left-10 top-6 lg:top-8 w-36 lg:w-48 xl:w-56 pointer-events-none select-none -z-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-sm"
        >
          <defs>
            <linearGradient id="col-flower-grad" x1="40" y1="30" x2="160" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C85A32" />
              <stop offset="60%" stopColor="#A8431F" />
              <stop offset="100%" stopColor="#8A3214" />
            </linearGradient>

            <linearGradient id="col-ochre-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E3B778" />
              <stop offset="100%" stopColor="#C68B39" />
            </linearGradient>

            <linearGradient id="col-sage-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7E9A82" />
              <stop offset="100%" stopColor="#5B755E" />
            </linearGradient>
          </defs>

          {/* Background Concentric Stitch Rings */}
          <circle cx="95" cy="95" r="75" stroke="#E3B778" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.3" />
          <circle cx="95" cy="95" r="55" stroke="#C85A32" strokeWidth="1" strokeDasharray="3 5" opacity="0.2" />

          {/* Stem & Curved Leaf Paths */}
          <path
            d="M 95 100 Q 85 145 70 180"
            stroke="url(#col-sage-grad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Crochet Leaves with textured stitch veins */}
          <path
            d="M 88 130 C 60 120 50 145 75 155 C 85 148 88 138 88 130 Z"
            fill="url(#col-sage-grad)"
            opacity="0.85"
          />
          <path
            d="M 85 145 C 105 135 125 155 100 165 C 90 160 86 150 85 145 Z"
            fill="url(#col-sage-grad)"
            opacity="0.75"
          />

          {/* Main Crochet Sunflower / Dahlia Flower Center */}
          <circle cx="95" cy="90" r="18" fill="url(#col-ochre-grad)" />
          {/* Textured Seed Knot Stitches */}
          <circle cx="91" cy="86" r="2.5" fill="#8A3214" opacity="0.6" />
          <circle cx="99" cy="88" r="2.5" fill="#8A3214" opacity="0.6" />
          <circle cx="94" cy="95" r="2.5" fill="#8A3214" opacity="0.6" />

          {/* 8 Hand-knitted Crochet Petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <g key={i} transform={`rotate(${angle} 95 90)`}>
              <path
                d="M 95 68 C 88 52 102 52 95 68 Z"
                fill="url(#col-flower-grad)"
                stroke="#FAF7F2"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <circle cx="95" cy="58" r="1.5" fill="#FAF7F2" opacity="0.7" />
            </g>
          ))}

          {/* Looping Yarn Ribbon Swirling Down */}
          <path
            d="M 70 180 C 60 195 90 200 110 185 C 130 170 140 190 155 185"
            stroke="#C85A32"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="1 0"
          />
          <circle cx="110" cy="185" r="3" fill="#C68B39" />
          <circle cx="155" cy="185" r="2.5" fill="#C85A32" />
        </svg>
      </div>

      {/* RIGHT ARTWORK: Traditional Crochet Granny Square & Hook */}
      <div
        className="hidden md:block absolute right-2 lg:right-6 xl:right-10 top-6 lg:top-8 w-36 lg:w-48 xl:w-56 pointer-events-none select-none -z-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-sm"
        >
          <defs>
            <linearGradient id="col-hook-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C68B39" />
              <stop offset="100%" stopColor="#8A3214" />
            </linearGradient>
          </defs>

          {/* Background Concentric Stitch Rings */}
          <circle cx="105" cy="95" r="75" stroke="#C85A32" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.25" />

          {/* GRANNY SQUARE BASE (Rotated 45-degree diamond lace) */}
          <g transform="rotate(45 105 95)">
            {/* Outer Square */}
            <rect
              x="65"
              y="55"
              width="80"
              height="80"
              rx="12"
              fill="#FAF7F2"
              stroke="#C85A32"
              strokeWidth="2.5"
              strokeDasharray="4 3"
            />
            {/* Middle Square (Desert Sand) */}
            <rect
              x="77"
              y="67"
              width="56"
              height="56"
              rx="8"
              fill="#F3EFE6"
              stroke="#C68B39"
              strokeWidth="2"
            />
            {/* Inner Center Flower Eye */}
            <rect
              x="89"
              y="79"
              width="32"
              height="32"
              rx="6"
              fill="#C85A32"
              stroke="#8A3214"
              strokeWidth="1.5"
            />
            <circle cx="105" cy="95" r="5" fill="#FAF7F2" />
          </g>

          {/* CROCHET HOOK (Slanted ergonomic needle) */}
          <g transform="rotate(-30 115 85)">
            {/* Handle */}
            <rect x="110" y="65" width="9" height="70" rx="4.5" fill="#2D2926" />
            {/* Golden Shaft */}
            <rect x="112" y="15" width="5" height="52" rx="2.5" fill="url(#col-hook-grad)" />
            {/* Needle Throat & Hook Tip */}
            <path
              d="M 112 18 C 112 8, 118 7, 120 11 C 121 14, 117 16, 117 20"
              stroke="#C68B39"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* Flowing Yarn Tail */}
          <path
            d="M 105 155 C 120 175 145 155 160 175 C 170 185 185 170 190 180"
            stroke="#E3B778"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="160" cy="175" r="3" fill="#C85A32" />
          <circle cx="190" cy="180" r="2.5" fill="#C68B39" />
        </svg>
      </div>
    </>
  );
}
