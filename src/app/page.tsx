import { Navbar } from "@/components/navbar/Navbar";
import { navbarData } from "@/data/navigation";
import { Hero } from "@/components/hero/Hero";
import { heroData } from "@/data/hero";
import { CollectionsSection } from "@/components/collections/CollectionsSection";
import { ShopSection } from "@/components/shop/ShopSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas-ecru text-charcoal flex flex-col">
      {/* Sticky Header with Decoupled Data Props */}
      <Navbar data={navbarData} />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* Continuous Animated Hero Section with Roboto Typography */}
        <Hero data={heroData} />

        {/* Pinterest-Style Masonry Signature Collections */}
        <CollectionsSection />

        {/* Ready-to-Order Catalog Shop with Direct WhatsApp Purchase */}
        <ShopSection />

        {/* Artisan Story & Brand Heritage with Live Instagram Showcase */}
        <AboutSection />

        {/* What People Say • Indian & Hinglish Marquee Testimonials */}
        <ReviewsSection />

        {/* Bespoke Custom Commissions & Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
