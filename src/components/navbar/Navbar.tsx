"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { NavbarData } from "@/data/navigation";

function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  const uniqueId = React.useId().replace(/[^a-zA-Z0-9]/g, "");
  const gradId = `ig-grad-${uniqueId}`;

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F09433" />
          <stop offset="25%" stopColor="#E6683C" />
          <stop offset="50%" stopColor="#DC2743" />
          <stop offset="75%" stopColor="#CC2366" />
          <stop offset="100%" stopColor="#BC1888" />
        </linearGradient>
      </defs>
      <rect
        width="20"
        height="20"
        x="2"
        y="2"
        rx="5.5"
        ry="5.5"
        stroke={`url(#${gradId})`}
        strokeWidth="2.2"
      />
      <circle
        cx="12"
        cy="12"
        r="4.2"
        stroke={`url(#${gradId})`}
        strokeWidth="2.2"
      />
      <circle cx="17.5" cy="6.5" r="1.4" fill={`url(#${gradId})`} />
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
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-canvas-ecru/90 backdrop-blur-md border-b border-border-subtle shadow-xs"
          : "bg-canvas-ecru/80 backdrop-blur-xs border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand Wordmark (Left) */}
        <div className="flex items-center">
          <Link
            href={data.brandHref}
            className="font-serif text-lg sm:text-2xl lg:text-[1.65rem] font-medium tracking-normal text-charcoal hover:text-terracotta transition-colors duration-200"
          >
            {data.brandName}
          </Link>
        </div>

        {/* Desktop Navigation Links (Center) */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-9"
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
        <div className="hidden md:flex items-center gap-5">
          {data.socialLink && (
            <a
              href={data.socialLink.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={data.socialLink.ariaLabel}
              className="hover:scale-110 transition-transform duration-200 p-1.5 rounded-full hover:bg-canvas-warm/70 inline-flex items-center justify-center"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
          )}

          <Link
            href={data.ctaAction.href}
            className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-medium bg-terracotta text-canvas-ecru hover:bg-terracotta-hover transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
          >
            {data.ctaAction.label}
          </Link>
        </div>

        {/* Mobile Right: Guaranteed Instagram Icon & Hamburger Button */}
        <div className="flex md:hidden items-center gap-1">
          <a
            href={data.socialLink?.href || "https://www.instagram.com/crochasthan?stkn=NDViNnVmaXM4N3li"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Crochasthan on Instagram"
            className="w-11 h-11 inline-flex items-center justify-center shrink-0 rounded-full hover:bg-canvas-warm/70 active:scale-95 transition-all cursor-pointer"
          >
            <InstagramIcon className="w-6 h-6 shrink-0" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="w-11 h-11 inline-flex items-center justify-center shrink-0 text-charcoal hover:bg-canvas-warm rounded-full transition-colors cursor-pointer"
          >
            <Menu className="w-6 h-6" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </header>

    {/* Off-Canvas Left-Side Sliding Drawer (Mounted Outside Header, 100% Solid White) */}
    <AnimatePresence>
      {mobileMenuOpen && (
        <>
          {/* Dark Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[998] md:hidden"
          />

          {/* 100% Solid Opaque White Sliding Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            style={{ backgroundColor: "#FFFFFF" }}
            className="fixed inset-y-0 left-0 w-[275px] sm:w-[310px] max-w-[85vw] h-full bg-white text-[#0A0A0A] shadow-2xl z-[999] md:hidden flex flex-col justify-between p-6 border-r border-stone-200"
          >
            {/* Drawer Header & Links */}
            <div>
              {/* Brand Wordmark & Close Button */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <Link
                  href={data.brandHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl font-semibold text-[#0A0A0A]"
                >
                  {data.brandName}
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="p-1.5 text-stone-600 hover:text-black hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>

              {/* Navigation Modules with Clean Divider Lines */}
              <nav className="mt-3 flex flex-col">
                {data.navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3.5 text-[0.9375rem] font-medium text-[#1A1A1A] hover:text-[#C24153] border-b border-stone-100 transition-colors flex items-center justify-between group"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-stone-400 group-hover:text-[#C24153] transition-colors">
                      →
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Drawer Footer: CTA Button & Instagram Link */}
            <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
              <Link
                href={data.ctaAction.href}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-2.5 px-5 rounded-full text-sm font-semibold bg-[#C24153] text-white hover:bg-[#A82D3E] transition-colors shadow-sm"
              >
                {data.ctaAction.label}
              </Link>

              {data.socialLink && (
                <a
                  href={data.socialLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 py-2 px-4 rounded-full border border-stone-300 text-stone-800 text-xs font-medium hover:bg-stone-50 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Follow on Instagram</span>
                </a>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </>
);
}
