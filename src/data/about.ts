export interface BrandPillar {
  title: string;
  description: string;
  iconName: "flower" | "heart" | "sparkles";
}

export interface AboutData {
  badge: string;
  mottoHindi: string;
  mottoEnglish: string;
  storyParagraphs: string[];
  pillars: BrandPillar[];
  instagramHandle: string;
  instagramUrl: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export const aboutData: AboutData = {
  badge: "Our Heritage • Jaipur, Rajasthan 📍",
  mottoHindi: "Real flowers murjha jate h, but here's forever flowers.",
  mottoEnglish: "Fresh flowers fade away, but our handcrafted crochet blooms hold your cherished memories for lifetimes.",
  storyParagraphs: [
    "Founded in the royal pink city of Jaipur, Crochasthan began with a gentle intention: to create tokens of affection that never wilt or fade. What started with a single crochet hook and vibrant desert yarns has blossomed into a cherished artisanal studio.",
    "Every petal, delicate gajra blossom, and whimsical amigurumi plush is knotted by hand by passionate women artisans. We celebrate slow, patient craftsmanship—blending age-old crochet techniques with contemporary aesthetic gifts that speak the language of lasting love.",
  ],
  pillars: [
    {
      title: "Forever Keepsakes",
      description: "Everlasting flowers and gifts that remain as vibrant and tender on year ten as they are on day one.",
      iconName: "flower",
    },
    {
      title: "Jaipur Artisan Craft",
      description: "Empowering rural and local women artisans with dignified work, flexible livelihoods, and creative joy.",
      iconName: "heart",
    },
    {
      title: "Bespoke Custom Orders",
      description: "Tailor your bouquets, anniversary arrangements, and festival hair gajras with custom colorways.",
      iconName: "sparkles",
    },
  ],
  instagramHandle: "@crochasthan",
  instagramUrl: "https://www.instagram.com/crochasthan?stkn=NDViNnVmaXM4N3li",
  stats: [
    { label: "Handmade Posts", value: "214+" },
    { label: "Community Members", value: "900+" },
    { label: "Pure Cotton Yarn", value: "100%" },
    { label: "Heritage Origin", value: "Jaipur" },
  ],
};
