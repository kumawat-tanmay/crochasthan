import React from "react";

export function ShopHeaderArt() {
  return (
    <>
      {/* LEFT ARTWORK: Natural Cotton Yarn Skein & Craft Ribbon */}
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
            <linearGradient id="shop-yarn-grad" x1="20" y1="40" x2="140" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C85A32" />
              <stop offset="60%" stopColor="#A8431F" />
              <stop offset="100%" stopColor="#8A3214" />
            </linearGradient>

            <linearGradient id="shop-tag-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FAF7F2" />
              <stop offset="100%" stopColor="#F3EFE6" />
            </linearGradient>
          </defs>

          {/* Background Concentric Stitch Rings */}
          <circle cx="90" cy="95" r="72" stroke="#E3B778" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.3" />
          <circle cx="90" cy="95" r="50" stroke="#C85A32" strokeWidth="1" strokeDasharray="3 5" opacity="0.2" />

          {/* YARN SKEIN */}
          <g transform="rotate(-15 90 95)">
            {/* Yarn Ellipse Body */}
            <ellipse cx="90" cy="95" rx="52" ry="44" fill="url(#shop-yarn-grad)" />

            {/* Yarn Wind Texture Lines */}
            <path
              d="M 50 85 C 65 60 115 65 130 95"
              stroke="#FAF7F2"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.45"
            />
            <path
              d="M 58 105 C 75 75 115 80 128 110"
              stroke="#FAF7F2"
              strokeWidth="2.2"
              strokeLinecap="round"
              opacity="0.35"
            />
            <path
              d="M 48 95 C 68 125 112 125 132 90"
              stroke="#FAF7F2"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.4"
            />
            <path
              d="M 70 65 C 95 85 105 115 110 135"
              stroke="#E3B778"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />

            {/* Artisan Craft Label Band */}
            <rect
              x="62"
              y="82"
              width="56"
              height="26"
              rx="4"
              fill="url(#shop-tag-grad)"
              stroke="#E3B778"
              strokeWidth="1"
            />
            <text
              x="90"
              y="95"
              textAnchor="middle"
              fontSize="7"
              fontWeight="bold"
              fill="#8A3214"
              letterSpacing="0.8"
              fontFamily="sans-serif"
            >
              100% COTTON
            </text>
            <text
              x="90"
              y="103"
              textAnchor="middle"
              fontSize="5.5"
              fontWeight="600"
              fill="#C68B39"
              letterSpacing="0.5"
              fontFamily="sans-serif"
            >
              JAIPUR CRAFT
            </text>
          </g>

          {/* Unraveling Thread Loop forming a Heart */}
          <path
            d="M 125 115 C 145 135 170 115 155 95 C 145 80 135 105 150 125 C 160 140 180 145 185 160"
            stroke="#C85A32"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="155" cy="95" r="3" fill="#E3B778" />
          <circle cx="185" cy="160" r="2.5" fill="#C85A32" />
        </svg>
      </div>

      {/* RIGHT ARTWORK: Handcrafted Keepsake Pouch & Flower Accents */}
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
            <linearGradient id="shop-pouch-grad" x1="60" y1="70" x2="140" y2="160" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FAF7F2" />
              <stop offset="100%" stopColor="#F3EFE6" />
            </linearGradient>

            <linearGradient id="shop-scissor-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C68B39" />
              <stop offset="100%" stopColor="#2D2926" />
            </linearGradient>
          </defs>

          {/* Background Concentric Stitch Rings */}
          <circle cx="105" cy="95" r="72" stroke="#C85A32" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.25" />

          {/* CROCHET GIFT POUCH / BASKET */}
          <g>
            {/* Pouch Main Bag */}
            <path
              d="M 75 90 C 75 75 135 75 135 90 L 140 145 C 140 160 70 160 70 145 Z"
              fill="url(#shop-pouch-grad)"
              stroke="#C85A32"
              strokeWidth="2.5"
            />
            {/* Knit Texture Grid Lines on Pouch */}
            <path
              d="M 80 105 Q 105 110 130 105"
              stroke="#E3B778"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <path
              d="M 76 122 Q 105 128 134 122"
              stroke="#E3B778"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <path
              d="M 74 138 Q 105 144 136 138"
              stroke="#E3B778"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />

            {/* Pouch Drawstring Ribbon & Bow */}
            <path
              d="M 68 85 Q 105 92 142 85"
              stroke="#C85A32"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Drawstring Bow */}
            <circle cx="105" cy="88" r="4" fill="#C85A32" />
            <path
              d="M 105 88 C 95 80 92 95 105 88 Z"
              fill="#C85A32"
            />
            <path
              d="M 105 88 C 115 80 118 95 105 88 Z"
              fill="#C85A32"
            />

            {/* Blooming Flower Peek out of Pouch */}
            <g transform="translate(105, 65)">
              <circle cx="0" cy="0" r="8" fill="#E3B778" />
              {/* Petals */}
              <circle cx="0" cy="-9" r="6" fill="#C85A32" />
              <circle cx="9" cy="-3" r="6" fill="#C85A32" />
              <circle cx="6" cy="8" r="6" fill="#C85A32" />
              <circle cx="-6" cy="8" r="6" fill="#C85A32" />
              <circle cx="-9" cy="-3" r="6" fill="#C85A32" />
            </g>
          </g>

          {/* VINTAGE EMBROIDERY SNIPS / SCISSORS (Artisan tool beside pouch) */}
          <g transform="rotate(35 150 140)">
            {/* Blade 1 */}
            <line x1="145" y1="120" x2="145" y2="155" stroke="url(#shop-scissor-grad)" strokeWidth="2.5" strokeLinecap="round" />
            {/* Blade 2 */}
            <line x1="141" y1="124" x2="149" y2="155" stroke="url(#shop-scissor-grad)" strokeWidth="2.5" strokeLinecap="round" />
            {/* Pivot screw */}
            <circle cx="145" cy="138" r="2.5" fill="#E3B778" />
            {/* Handles */}
            <circle cx="143" cy="162" r="5" stroke="#C68B39" strokeWidth="2" fill="none" />
            <circle cx="151" cy="162" r="5" stroke="#C68B39" strokeWidth="2" fill="none" />
          </g>
        </svg>
      </div>
    </>
  );
}
