export interface HeroData {
  badge: string;
  headline: string;
  subheadline: string;
  description: string;
  imageBands: string[][];
}

export const heroData: HeroData = {
  badge: "Handmade with love",
  headline: "Handmade Crochet Gifts That Last Forever",
  subheadline: "Crafted with passion, cherished for lifetimes.",
  description:
    "Bouquets, gajras, plushies, accessories and custom handmade creations crafted with love.",
  imageBands: [
    // Layer 1
    [
      "/images/optimized/crochet_1.webp",
      "/images/optimized/crochet_2.webp",
      "/images/optimized/crochet_3.webp",
      "/images/optimized/crochet_4.webp",
      "/images/optimized/crochet_5.webp",
    ],
    // Layer 2
    [
      "/images/optimized/crochet_6.webp",
      "/images/optimized/crochet_7.webp",
      "/images/optimized/crochet_8.webp",
      "/images/optimized/crochet_9.webp",
    ],
    // Layer 3
    [
      "/images/optimized/crochet_10.webp",
      "/images/optimized/crochet_11.webp",
      "/images/optimized/crochet_12.webp",
      "/images/optimized/crochet_13.webp",
    ],
    // Layer 4
    [
      "/images/optimized/crochet_14.webp",
      "/images/optimized/crochet_15.webp",
      "/images/optimized/crochet_16.webp",
      "/images/optimized/crochet_17.webp",
      "/images/optimized/crochet_1.webp",
    ],
  ],
};
