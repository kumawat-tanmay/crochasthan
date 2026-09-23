import { Navbar } from "@/components/navbar/Navbar";
import { navbarData } from "@/data/navigation";
import { Hero } from "@/components/hero/Hero";
import { heroData } from "@/data/hero";
import { CollectionsSection } from "@/components/collections/CollectionsSection";
import { ShopSection } from "@/components/shop/ShopSection";
import { CustomOrderSection } from "@/components/orders/CustomOrderSection";

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

        {/* Artisan Story & Brand Heritage */}
        <section
          id="about"
          className="py-24 px-6 lg:px-12 border-t border-border-subtle bg-canvas-warm/40"
        >
          <div className="max-w-7xl mx-auto">
            <div className="badge-craft mb-4">Our Heritage</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
              The Artisan Story
            </h2>
            <p className="mt-3 text-text-muted max-w-xl">
              Reviving age-old Indian crochet craftsmanship, empowering rural women artisans.
            </p>
          </div>
        </section>

        {/* Bespoke Custom Commissions & Orders */}
        <CustomOrderSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border-subtle py-12 px-6 lg:px-12 bg-canvas-warm/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p className="font-serif text-lg text-charcoal">Crochasthan</p>
          <p>© 2026 Crochasthan. Handcrafted in Rajasthan, India.</p>
        </div>
      </footer>
    </div>
  );
}
