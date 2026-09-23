export interface ShopProduct {
  id: string;
  title: string;
  category: "all" | "bouquets" | "gajras" | "plushies" | "accessories";
  categoryLabel: string;
  price: number;
  formattedPrice: string;
  imageSrc: string;
  badge?: string;
  artisan: string;
  leadTime: string;
  materials: string;
  description: string;
}

export const shopProducts: ShopProduct[] = [
  {
    id: "shop-1",
    title: "Eternal Sunflower & Rose Bouquet",
    category: "bouquets",
    categoryLabel: "Bouquets",
    price: 1499,
    formattedPrice: "₹1,499",
    imageSrc: "/images/optimized/crochet_1.webp",
    badge: "Bestseller",
    artisan: "Radha Devi",
    leadTime: "3–5 days",
    materials: "100% Mercerized Cotton & Wired Stems",
    description: "Vibrant yellow sunburst blossoms intertwined with velvety crimson roses and eucalyptus leaves that never wilt.",
  },
  {
    id: "shop-2",
    title: "Mogra Fragrance-Inspired Gajra",
    category: "gajras",
    categoryLabel: "Gajras",
    price: 799,
    formattedPrice: "₹799",
    imageSrc: "/images/optimized/crochet_2.webp",
    badge: "Heritage Craft",
    artisan: "Suman Bai",
    leadTime: "2–3 days",
    materials: "Pure Organic Milk Cotton Yarn",
    description: "Traditional jasmine hair garland crafted with fine mercerized cotton for weddings, pujas, and festivities.",
  },
  {
    id: "shop-3",
    title: "Forest Bunny Amigurumi",
    category: "plushies",
    categoryLabel: "Plushies",
    price: 1199,
    formattedPrice: "₹1,199",
    imageSrc: "/images/optimized/crochet_3.webp",
    artisan: "Meera Joshi",
    leadTime: "3–4 days",
    materials: "Hypoallergenic Baby Cotton Yarn",
    description: "Soft organic cotton plush companion with hand-embroidered safety eyes and a delicate crochet scarf.",
  },
  {
    id: "shop-4",
    title: "Vintage Terracotta Tote Bag",
    category: "accessories",
    categoryLabel: "Accessories",
    price: 1899,
    formattedPrice: "₹1,899",
    imageSrc: "/images/optimized/crochet_4.webp",
    badge: "New Edition",
    artisan: "Radha Devi",
    leadTime: "5–7 days",
    materials: "Heavyweight Double-Ply Desert Cotton",
    description: "Structured bohemian shoulder tote crafted with dense granny-square weaves, canvas lining, and inner pocket.",
  },
  {
    id: "shop-5",
    title: "Royal Marigold Festive Garland",
    category: "gajras",
    categoryLabel: "Gajras",
    price: 899,
    formattedPrice: "₹899",
    imageSrc: "/images/optimized/crochet_6.webp",
    badge: "Festive Favorite",
    artisan: "Suman Bai",
    leadTime: "2–4 days",
    materials: "Vibrant Dyed Rajasthan Cotton",
    description: "Deep saffron and golden yellow blossoms celebrating traditional Rajasthani wedding and temple decor.",
  },
  {
    id: "shop-6",
    title: "Desert Lily & Daisy Floral Wrap",
    category: "bouquets",
    categoryLabel: "Bouquets",
    price: 1699,
    formattedPrice: "₹1,699",
    imageSrc: "/images/optimized/crochet_9.webp",
    artisan: "Radha Devi",
    leadTime: "3–5 days",
    materials: "Eco-friendly Jute Wrap & Cotton Stems",
    description: "Sculptural floral piece wrapped in raw textured paper with twine ribbon, ready for celebratory gifting.",
  },
  {
    id: "shop-7",
    title: "Bridal Gulab Hair Chignon Gajra",
    category: "gajras",
    categoryLabel: "Gajras",
    price: 949,
    formattedPrice: "₹949",
    imageSrc: "/images/optimized/crochet_14.webp",
    badge: "Bridal Heirloom",
    artisan: "Suman Bai",
    leadTime: "3–4 days",
    materials: "Cotton Thread & Faux Seed Pearls",
    description: "Handcrafted miniature roses set on an elasticated cotton band for effortless bridal hair styling.",
  },
  {
    id: "shop-8",
    title: "Grand Royal Heritage Bouquet",
    category: "bouquets",
    categoryLabel: "Bouquets",
    price: 2499,
    formattedPrice: "₹2,499",
    imageSrc: "/images/optimized/crochet_17.webp",
    badge: "Masterpiece",
    artisan: "Radha Devi & Suman Bai",
    leadTime: "5–7 days",
    materials: "24 Individual Handcrafted Blooms",
    description: "Our signature multi-flower centerpiece featuring roses, daisies, lavender, and baby's breath.",
  },
];
