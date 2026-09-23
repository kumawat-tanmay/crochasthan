<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 🧶 Crochasthan — Agent Rules & Frontend Skills Directive

> **Project**: Crochasthan — Luxury Handcrafted Crochet & Indian Artisanal Heritage Platform  
> **Framework**: Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript  
> **Motion Stack**: GSAP + ScrollTrigger, Lenis Smooth Scroll, Framer Motion  
> **Status**: Active Development  

---

## 1. PROJECT IDENTITY & ARTISANAL AESTHETIC

Crochasthan brings traditional Indian textile artisanship into a modern, cinematic web experience. Never build generic templates or flat MVP layouts. Every screen must feel tactile, organic, and luxurious — evoking raw cotton, warm desert hues, and hand-spun yarn craftsmanship.

---

## 2. FRONTEND UI/UX & DESIGN SKILLS (MANDATORY IN VOCABULARY)

### Skill: `frontend-design`
**When to Use**: When conceptualizing layouts, crafting brand anchors, and establishing distinct aesthetic identities.
**Rules**:
- **Design Feasibility & Impact Index (DFII)**: Maintain DFII ≥ 10. Avoid generic AI-generated templates.
- **Aesthetic Direction**: "Handcrafted Heritage meets Modern Luxury Minimal" (Raw cotton, terracotta accents, tactile warmth).
- **Differentiation Anchor**: Woven yarn textures, asymmetric organic curves, and high-craft macro stitch visualizers.
- **Restraint**: Every flourish, stitch graphic, or micro-interaction must serve the artisanal thesis.

### Skill: `ui-ux-pro-max`
**When to Use**: When designing UI components, forms, touch targets, accessibility states, and color palettes.
**Rules**:
- **Touch & Interaction**: Minimum 44x44px touch targets on mobile. All interactive elements must have `cursor-pointer`.
- **Contrast & Hierarchy**: WCAG AA compliant contrast (minimum 4.5:1 ratio).
- **Iconography**: Only use feather-light SVG icons (`lucide-react`) with consistent stroke widths (1.5px / 1.75px). Emojis as UI icons are strictly prohibited.
- **Stable Hover States**: Hover transitions must only modify color, border, shadow, or GPU transforms — never shift container dimensions or trigger layout recalculations.

### Skill: `web-design-guidelines`
**When to Use**: When configuring spacing rhythms, typography scale, and layout grids.
**Rules**:
- **Spacing Scale**: Strict mathematical scale: `4px → 8px → 12px → 16px → 24px → 32px → 48px → 64px`.
- **Typography Rhythms**: Line height of `1.6` for body copy; `1.2–1.3` for editorial headlines.
- **Heading Hierarchy**: Strict single `<h1>` per page, descending logically through `<h2>` to `<h6>`.
- **Component Padding**: Cards `p-6`, Sections `p-8` to `p-16`, Form inputs `px-4 py-3`.
- **Max Widths**: Consistent container widths (`max-w-6xl` or `max-w-7xl`).

### Skill: `high-end-visual-design` & `design-taste-frontend`
**When to Use**: When polishing hero sections, product showcase cards, craft detail modals, and editorial pull-quotes.
**Rules**:
- **Editorial Typography**: Combine luxury Serif (*Playfair Display*, *Cormorant Garamond*) for titles with crisp geometric Sans (*Plus Jakarta Sans*, *Outfit*) for interface and pricing.
- **Tactile Elevation**: Soft organic drop shadows with warm ambient tints (`rgba(168, 67, 31, 0.06)`), layered translucency, and frosted glass cards (`backdrop-blur-md bg-stone-50/80 border border-stone-200/50`).
- **Craft Badges**: Uppercase tracked monospace craft tags (`tracking-widest text-xs font-semibold`) for stitch types (e.g. `DOUBLE CROCHET`, `AMIGURUMI`, `GRANNY SQUARE`).

---

## 3. CINEMATIC MOTION & ANIMATION SKILLS

### Skill: `lenis` + `gsap-core` + `gsap-scrolltrigger` + `gsap-timeline`
**When to Use**: When orchestrating page-level smooth scrolling, pinned parallax showcases, and scroll-driven stitch reveals.
**Rules**:
- **Ticker Synchronization**: Always bind Lenis to GSAP's `Ticker` so scroll transitions and pinned timelines update on the exact monitor refresh rate without jitter:
  ```typescript
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  ```
- **Stitch Path Drawing**: Animate SVG crochet paths using `strokeDasharray` and `strokeDashoffset` linked to scroll distance.
- **Cleanup Guarantee**: Every GSAP timeline and ScrollTrigger instance must be killed in `useEffect` / `useLayoutEffect` cleanup return functions.

### Skill: `ui-motion` & `review-animations`
**When to Use**: For micro-interactions, modal transitions, magnetic buttons, and product card reveals.
**Rules**:
- **Physics**: Use Framer Motion spring physics (`stiffness: 100, damping: 20`) for natural, organic tactile feedback.
- **Duration**: Keep micro-interactions between 150ms and 300ms with cubic-bezier easing `(0.4, 0, 0.2, 1)`.
- **Hardware Acceleration**: Animate ONLY GPU-accelerated properties (`transform`, `opacity`). Never animate `width`, `height`, `top`, or `left`.
- **Reduced Motion**: Respect `@media (prefers-reduced-motion: reduce)`. Gracefully fallback to immediate or clean opacity fades.

---

## 4. NEXT.JS 16 & REACT 19 ARCHITECTURE SKILLS

### Skill: `vercel-composition-patterns` + `vercel-react-best-practices`
**When to Use**: When structuring page components, layouts, state management, and Server/Client boundaries.
**Rules**:
- **RSC by Default**: Keep all layouts, editorial content, product catalogs, and data fetching as React Server Components (zero client JS payload).
- **Leaf-Only Client Islands**: Restrict `'use client'` strictly to interactive leaves:
  - `SmoothScrollProvider.tsx` (Lenis/GSAP context)
  - `AnimatedProductCard.tsx` (Hover physics & 3D tilt)
  - `CartDrawer.tsx` & `CommissionCustomizer.tsx`
  - `MobileNavbar.tsx` (Drawer toggle)
- **React 19 & Compiler Ready**: Avoid anti-pattern manual memoization (`useMemo`/`useCallback`) unless profiling proves necessity; write idiomatic reactive code for the React Compiler.
- **Zero CLS**: Reserve layout space for images, skeletons, and dynamic content to achieve CLS = 0.

### Skill: `tailwind-design-system`
**When to Use**: When styling elements, utilizing CSS custom properties, and configuring theme tokens.
**Rules**:
- Rely on defined brand CSS variables in `globals.css` instead of arbitrary inline hex codes.
- Use `cn()` helper (`clsx` + `tailwind-merge`) for clean conditional class compositions.

### Skill: `zod-validation-expert`
**When to Use**: When handling custom crochet order inquiries, newsletter signups, and customer feedback.
**Rules**:
- Every interactive form must be validated against a typed **Zod** schema.
- Validate on both client side (immediate inline feedback) and server side (in Server Actions).

---

## 5. PERFORMANCE, QUALITY & AUDITING SKILLS

### Skill: `performance-optimizer`
**When to Use**: When auditing Core Web Vitals, asset loading, and bundle size.
**Rules**:
- **Next.js `<Image>`**: Always provide explicit width, height, and responsive `sizes` attribute. Use `priority` for above-the-fold hero visuals.
- **Dynamic Imports**: Code-split heavy interactive libraries (3D canvas, heavy animation components) via `next/dynamic` with fallback skeletons.
- **Sub-Second LCP**: Ensure critical fonts and hero assets are preloaded.

### Skill: `diagnosing-bugs`
**When to Use**: When troubleshooting hydration mismatches, layout shifts, or animation loop memory leaks.
**Rules**:
- Check for SSR/client HTML divergence (e.g. browser-only APIs in initial render).
- Ensure GSAP contexts are scoped (`gsap.context()`) to target DOM elements.

### Skill: `codebase-audit-pre-push`
**When to Use**: Before finalizing tasks or presenting deliverables.
**Rules**:
- Zero `console.log` statements in production code.
- Zero `any` types in TypeScript.
- No `// TODO` or placeholder code.
- Verify `npm run lint` passes with 0 errors.

---

## 6. LOCKED DESIGN TOKENS (CROCHASTHAN PALETTE)

```css
:root {
  --canvas-ecru: #FAF7F2;
  --canvas-warm: #F3EFE6;
  --terracotta-primary: #C85A32;
  --terracotta-deep: #A8431F;
  --desert-sand: #E3B778;
  --mustard-ochre: #C68B39;
  --royal-indigo: #1B2A4A;
  --sage-olive: #5B755E;
  --charcoal-wool: #1E1C1A;
  --bark-deep: #2D2926;
}
```

---

## 7. AGENT PLANNING PROTOCOL

Whenever creating an `implementation_plan.md` or any architectural design for Crochasthan, you **MUST** explicitly state which specific agent skills (e.g. `frontend-design`, `ui-ux-pro-max`, `gsap-scrolltrigger`, `lenis`, `ui-motion`, `vercel-composition-patterns`) you will be deploying for that task.
