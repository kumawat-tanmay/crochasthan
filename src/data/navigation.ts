export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  ariaLabel: string;
}

export interface NavbarAction {
  label: string;
  href: string;
}

export interface NavbarData {
  brandName: string;
  brandHref: string;
  navItems: NavItem[];
  socialLink?: SocialLink;
  ctaAction: NavbarAction;
}

export const navbarData: NavbarData = {
  brandName: "Crochstan",
  brandHref: "/",
  navItems: [
    { id: "collections", label: "Collections", href: "#collections" },
    { id: "shop", label: "Shop", href: "#shop" },
    { id: "about", label: "About", href: "#about" },
    { id: "custom-orders", label: "Custom Orders", href: "#custom-orders" },
  ],
  socialLink: {
    platform: "Instagram",
    href: "https://instagram.com",
    ariaLabel: "Follow Crochstan on Instagram",
  },
  ctaAction: {
    label: "Shop Now",
    href: "#shop",
  },
};
