"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { NavbarData } from "@/data/navigation";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export interface NavbarProps {
  data: NavbarData;
}

export function Navbar({ data }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-canvas-ecru/90 backdrop-blur-md border-b border-border-subtle shadow-xs"
          : "bg-canvas-ecru/80 backdrop-blur-xs border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Wordmark (Left) */}
        <div className="flex items-center">
          <Link
            href={data.brandHref}
            className="font-serif text-2xl lg:text-[1.75rem] font-medium tracking-normal text-charcoal hover:text-terracotta transition-colors duration-200"
          >
            {data.brandName}
          </Link>
        </div>

        {/* Desktop Navigation Links (Center) */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10"
          aria-label="Main Navigation"
        >
          {data.navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-[0.9375rem] text-charcoal/75 hover:text-charcoal font-normal transition-colors duration-200 relative group py-1"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta rounded-full transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Section: Social Icon & CTA Button */}
        <div className="hidden md:flex items-center gap-6">
          {data.socialLink && (
            <a
              href={data.socialLink.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={data.socialLink.ariaLabel}
              className="text-charcoal/80 hover:text-terracotta transition-colors duration-200 p-2 rounded-full hover:bg-canvas-warm/70"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          )}

          <Link
            href={data.ctaAction.href}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium bg-terracotta text-canvas-ecru hover:bg-terracotta-hover transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
          >
            {data.ctaAction.label}
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center gap-3">
          {data.socialLink && (
            <a
              href={data.socialLink.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={data.socialLink.ariaLabel}
              className="text-charcoal/80 hover:text-terracotta p-2"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          )}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            className="p-2.5 text-charcoal hover:bg-canvas-warm rounded-full transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Responsive Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden border-b border-border-subtle bg-canvas-ecru/95 backdrop-blur-xl px-6 pt-3 pb-8 overflow-hidden shadow-lg"
          >
            <nav className="flex flex-col space-y-4">
              {data.navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-base font-normal text-charcoal/90 hover:text-terracotta transition-colors min-h-[44px] flex items-center"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-border-subtle flex flex-col gap-3">
                <Link
                  href={data.ctaAction.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center py-3 px-6 rounded-full text-sm font-medium bg-terracotta text-canvas-ecru hover:bg-terracotta-hover transition-colors min-h-[44px] shadow-sm"
                >
                  {data.ctaAction.label}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
