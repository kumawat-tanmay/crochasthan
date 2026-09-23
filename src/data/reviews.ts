export interface ReviewItem {
  id: string;
  name: string;
  city: string;
  purchasedItem: string;
  rating: number;
  date: string;
  reviewText: string;
  isHinglish?: boolean;
  avatarColor: string;
}

export interface ReviewsSectionData {
  badge: string;
  headline: string;
  subheadline: string;
  stats: {
    label: string;
    value: string;
  }[];
  rowOneReviews: ReviewItem[];
  rowTwoReviews: ReviewItem[];
}

export const reviewsData: ReviewsSectionData = {
  badge: "What People Say • Artisanal Love Notes",
  headline: "Cherished by Homes Across India",
  subheadline:
    "Real words from real customers who chose forever flowers and handcrafted crochet over disposable gifts.",
  stats: [
    { value: "4.9 / 5.0", label: "Average Artisan Rating" },
    { value: "1,500+", label: "Happy Gifting Moments" },
    { value: "100%", label: "Handmade by Women Artisans" },
    { value: "28+", label: "Cities Delivered Across India" },
  ],
  rowOneReviews: [
    {
      id: "rev-1",
      name: "Ananya Sharma",
      city: "Jaipur",
      purchasedItem: "Eternal Sunflower Bouquet",
      rating: 5,
      date: "2 days ago",
      isHinglish: true,
      reviewText:
        "Honestly didn't expect it to be THIS cute! The detailing is so neat, real flowers to murjha jate hain but ye bouquet hamesha mere room me rahega. Packaging bhi bohot aesthetic thi! ❤️",
      avatarColor: "bg-amber-100 text-amber-800",
    },
    {
      id: "rev-2",
      name: "Tanya Kapoor",
      city: "Mumbai",
      purchasedItem: "Bridal Hair Gajra",
      rating: 5,
      date: "1 week ago",
      isHinglish: true,
      reviewText:
        "Wore this for my cousin's mehendi and everyone was asking me kaha se liya! It looks 100% like fresh mogra blossoms and zero headache of petals falling off. Loved it!",
      avatarColor: "bg-rose-100 text-rose-800",
    },
    {
      id: "rev-3",
      name: "Rohan Malhotra",
      city: "Delhi",
      purchasedItem: "Custom Anniversary Bouquet",
      rating: 5,
      date: "3 days ago",
      reviewText:
        "Ordered as an anniversary surprise for my partner. She was literally in tears! She said it's the most thoughtful gift ever. Incredible stitch tension and safe packing.",
      avatarColor: "bg-blue-100 text-blue-800",
    },
    {
      id: "rev-4",
      name: "Pooja Verma",
      city: "Pune",
      purchasedItem: "Forest Bunny Amigurumi",
      rating: 5,
      date: "2 weeks ago",
      isHinglish: true,
      reviewText:
        "Yarn quality itni soft hai ki kya batau! My nephew won't sleep without it now. Purely handmade with love, dikhta hai craftsmanship me. 10/10 recommend!",
      avatarColor: "bg-emerald-100 text-emerald-800",
    },
    {
      id: "rev-5",
      name: "Sneha Iyer",
      city: "Bangalore",
      purchasedItem: "Daisy & Lavender Wrap",
      rating: 5,
      date: "5 days ago",
      isHinglish: true,
      reviewText:
        "Bangalore delivery arrived within 4 days! Zero damage, safely packed in eco-friendly wraps. Mere study room ka aesthetic hi change ho gaya. Thank you Crochasthan!",
      avatarColor: "bg-purple-100 text-purple-800",
    },
    {
      id: "rev-6",
      name: "Kritika Joshi",
      city: "Udaipur",
      purchasedItem: "Terracotta Tote Bag",
      rating: 5,
      date: "1 week ago",
      isHinglish: true,
      reviewText:
        "Bhai itna neat crochet maine sach me pehle kabhi nahi dekha. Stitching ekdum tight hai aur heavy everyday load bhi aaram se utha leta hai. Desi aesthetic at its best!",
      avatarColor: "bg-orange-100 text-orange-800",
    },
  ],
  rowTwoReviews: [
    {
      id: "rev-7",
      name: "Riddhi Patel",
      city: "Ahmedabad",
      purchasedItem: "Royal Marigold Garland",
      rating: 5,
      date: "4 days ago",
      isHinglish: true,
      reviewText:
        "Diwali aur pooja ke liye order kiya tha. Sabhi relatives ko bohot pasand aaya! Ab har festival pe fresh flowers khareedne aur murjhane ki tension khatam.",
      avatarColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: "rev-8",
      name: "Aarav Singhania",
      city: "Gurgaon",
      purchasedItem: "Custom Plush Fox",
      rating: 5,
      date: "6 days ago",
      isHinglish: true,
      reviewText:
        "The team was so polite on WhatsApp! Maine custom color combination manga tha and they knitted it EXACTLY how I visualized. Beautiful craft from Jaipur.",
      avatarColor: "bg-indigo-100 text-indigo-800",
    },
    {
      id: "rev-9",
      name: "Meenakshi Nair",
      city: "Kochi",
      purchasedItem: "Pastel Tulip Trio",
      rating: 5,
      date: "1 week ago",
      reviewText:
        "Everlasting flowers is such a poetic concept. The pastel dyes are soothing and gentle to touch. It feels so calming sitting on my work desk.",
      avatarColor: "bg-teal-100 text-teal-800",
    },
    {
      id: "rev-10",
      name: "Simran Kaur",
      city: "Chandigarh",
      purchasedItem: "Mogra Hair Gajra",
      rating: 5,
      date: "3 days ago",
      isHinglish: true,
      reviewText:
        "Mummy ke birthday pe gift kiya tha, unko itna pasand aaya ki unhone WhatsApp status pe photo laga li! Ekdum authentic handcrafted fragrance-free keepsake.",
      avatarColor: "bg-pink-100 text-pink-800",
    },
    {
      id: "rev-11",
      name: "Harshit Agarwal",
      city: "Indore",
      purchasedItem: "Single Rose Stem Wrap",
      rating: 5,
      date: "1 week ago",
      isHinglish: true,
      reviewText:
        "Finishing ekdum flawless hai. Zero loose threads! Loved supporting rural women artisans of Rajasthan. Proud to buy from this brand.",
      avatarColor: "bg-amber-100 text-amber-800",
    },
    {
      id: "rev-12",
      name: "Divya Menon",
      city: "Hyderabad",
      purchasedItem: "Macramé-Crochet Sling",
      rating: 5,
      date: "5 days ago",
      reviewText:
        "The texture, the yarn weight, the handcrafted feel—everything screams high-craft luxury. Highly recommend Crochasthan for conscious gifting!",
      avatarColor: "bg-cyan-100 text-cyan-800",
    },
  ],
};
