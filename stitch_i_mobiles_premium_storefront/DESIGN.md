---
name: Flagship Electro-Luxe
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393f'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3036'
  outline: '#8b90a0'
  outline-variant: '#414754'
  surface-tint: '#aec6ff'
  primary: '#aec6ff'
  on-primary: '#002e6b'
  primary-container: '#0070f3'
  on-primary-container: '#ffffff'
  inverse-primary: '#0059c5'
  secondary: '#ffb95f'
  on-secondary: '#472a00'
  secondary-container: '#ee9800'
  on-secondary-container: '#5b3800'
  tertiary: '#3de273'
  on-tertiary: '#003915'
  tertiary-container: '#00883c'
  on-tertiary-container: '#fdfff9'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#aec6ff'
  on-primary-fixed: '#001a43'
  on-primary-fixed-variant: '#004397'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#66ff8e'
  tertiary-fixed-dim: '#3de273'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005322'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.005em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-performance, flagship consumer electronics shopping environment. The visual atmosphere balances precision engineering with retail luxury: deep obsidian and charcoal stages allow flagship devices, camera glass, and polished metallic finishes to gleam naturally under electric neon accents.

The design movement combines **Minimalism** with structural **Glassmorphism**:
- **Atmosphere:** Deep, cinematic charcoal voids illuminated by ambient neon blue backdrops and selective amber highlights for premium tiers.
- **Tone:** Confident, frictionless, sophisticated, and technologically authoritative.
- **Visual Discipline:** Razor-thin glass borders (`rgba(255, 255, 255, 0.08)`), high optical contrast, disciplined typographic rhythm, and restrained ambient glows. Skeuomorphic clutter is eliminated in favor of clean hardware-inspired glass planes.

## Colors

The palette is engineered around dark-mode-first contrast ratios, utilizing specialized color tiers to direct shopping decisions:

- **Background Foundations:**
  - `canvas-default`: `#0A0B10` — The foundational dark canvas.
  - `surface-base`: `#12141C` — Structural sections and sheet backings.
  - `surface-elevated`: `#181A26` — Elevated module layers and modals.
- **Glass Overlays:**
  - `glass-surface`: `rgba(255, 255, 255, 0.04)` over dark foundations with a crisp border in `rgba(255, 255, 255, 0.08)`.
  - `glass-surface-hover`: `rgba(255, 255, 255, 0.07)` with border `rgba(255, 255, 255, 0.16)`.
- **Accents:**
  - **Electric Neon Blue (`#0070F3`, hover `#38BDF8`):** System primary used for checkout CTAs, product specs, active filters, and primary interaction vectors.
  - **Radiant Gold/Amber (`#F59E0B`, secondary `#FBBF24`):** Exclusive flagships, VIP trade-ins, warranties, and limited-run inventory badges.
  - **Commerce Green (`#25D366`, hover `#22C55E`):** Reserved exclusively for instant WhatsApp retail consultations, live concierge reservations, and fast stock inquiries.
- **Text & Foreground:**
  - `text-primary`: `#F8FAFC` (High contrast, pure clarity).
  - `text-secondary`: `#94A3B8` (Specifications, metadata, secondary labels).
  - `text-muted`: `#64748B` (Disclaimers, inactive states).

## Typography

The typographic hierarchy relies on pure geometric discipline using Inter. 

- **Optical Tracking:** Large headlines feature negative tracking (`-0.03em` to `-0.015em`) to evoke precision product manufacturing, while micro-labels and technical spec headers use expanded tracking (`0.08em`) in full uppercase.
- **Hardware Contrast:** Technical values (RAM, storage configurations, processor benchmarks) use semibold weights paired with secondary text color tokens to produce immediate legibility at a glance without competing with device hero titles.

## Layout & Spacing

A strictly proportional 12-column fluid grid system governs the layout, anchoring product catalogs, split hero showcases, and accessory cross-sell matrices:

- **Desktop (1200px+):** 12 columns, `gutter-lg` (2rem), `margin-desktop` (3rem) with a max content envelope of `1440px`.
- **Tablet (768px - 1199px):** 8 columns, `gutter` (1.5rem), `margin` (1.5rem).
- **Mobile (320px - 767px):** 4 columns, `gutter-sm` (1rem), `margin-mobile` (1rem).

Internal cards apply `space-lg` padding to let product renders breathe. Spec grids, badge rows, and action clusters utilize tight, atomic grouping using `space-xs` and `space-sm`.

## Elevation & Depth

Visual hierarchy is constructed through luminous optical planes rather than heavy drop shadows:

- **Level 0 (Base Canvas):** `#0A0B10` with subtle, deep radial gradient beacons (e.g., `radial-gradient(circle at 50% 0%, rgba(0, 112, 243, 0.12), transparent 70%)`).
- **Level 1 (Glass Cards):** Background `rgba(255, 255, 255, 0.04)`, backdrop blur of `16px` to `24px`, and a 1px inner hairline stroke of `rgba(255, 255, 255, 0.08)`.
- **Level 2 (Active/Hover Cards & Popovers):** Background `rgba(255, 255, 255, 0.07)`, 1px border `rgba(0, 112, 243, 0.35)`, ambient shadow: `0 12px 36px -8px rgba(0, 0, 0, 0.65), 0 0 20px 0 rgba(0, 112, 243, 0.15)`.
- **Level 3 (Sticky Action Bars & Modals):** Background `#12141C` at `85%` opacity with `backdrop-filter: blur(20px)`, top border `rgba(255, 255, 255, 0.1)`.

## Shapes

The design system follows a `roundedness: 2` scale, matching modern rounded smartphone chassis corners:

- **Interactive Core:** Buttons, text inputs, and chips use baseline `0.5rem` (8px).
- **Cards & Displays (`rounded-lg`):** Product tiles, feature pods, and specs containers standardize on `1rem` (16px).
- **Hero Containers & Modals (`rounded-xl`):** Feature banners and bottom sheets scale up to `1.5rem` (24px) for expansive curvature that cradles hardware mockups seamlessly.

## Components

### Buttons
- **Primary Action (Purchase/Pre-Order):** Solid electric neon `#0070F3` background with white text, `label-lg`, 0.5rem radius. Subtle glow: `box-shadow: 0 0 20px rgba(0, 112, 243, 0.4)`. Hover transitions to `#38BDF8`.
- **WhatsApp Concierge CTA:** Distinct high-priority CTA with `#25D366` surface or border, white text, embedded official icon, and subtle pulsing radial glow `0 0 16px rgba(37, 211, 102, 0.25)`.
- **Secondary (Specifications/Explore):** Glass fill `rgba(255, 255, 255, 0.06)`, border `rgba(255, 255, 255, 0.12)`, text `#F8FAFC`.

### Product Cards
- Translucent dark slate `rgba(255, 255, 255, 0.04)` with `16px` backdrop filter, 1px border `rgba(255, 255, 255, 0.08)`.
- Features an image viewport staged against an ultra-subtle radial blue bloom, storage and color variant swatches, clear bold pricing, and split direct actions (Cart & Direct WhatsApp Inquiry).

### Badges & Chips
- **Status/Edition Tags:** Pill or compact 4px-radius badges. Amber tag (`#F59E0B` at 10% opacity, `#FBBF24` border and text) denotes Pro, Flagship, or Limited Stock. Blue tag indicates Next-Day Delivery or Trade-in Eligible.
- **Specification Chips:** Storage options (`128GB`, `256GB`, `1TB`) use glass chips with hover borders that light up in neon blue when active.

### Inputs & Selectors
- Background `rgba(18, 20, 28, 0.7)` with `rgba(255, 255, 255, 0.1)` outline. On focus: border shifts to `#0070F3` with a focused field ring: `0 0 0 3px rgba(0, 112, 243, 0.25)`.
- Checkboxes and radios display glowing neon blue fill states with high-contrast interior white indicators.

### Device Color Pickers
- Circular concentric rings: 24px outer glass ring that illuminates with an active stroke when selected, containing a 16px solid hardware-matched color pip (e.g., Titanium Black, Natural Titanium, Midnight, Deep Purple).