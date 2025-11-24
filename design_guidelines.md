# SMT Hardware & Construction Materials - Design Guidelines

## Design Approach
Reference-based combining **Stripe's B2B minimalism** + **Shopify's product-focused layouts**. Professional industrial aesthetic with bold brand identity through strategic yellow accent usage.

## Typography System
- **Primary Font**: Inter (Google Fonts) - clean, professional sans-serif
- **Hierarchy**:
  - H1: 3xl/4xl/5xl (48-60px desktop), Bold (800)
  - H2: 2xl/3xl/4xl (32-48px), SemiBold (600)
  - H3: xl/2xl (24-32px), SemiBold (600)
  - Body: base/lg (16-18px), Regular (400)
  - Small: sm/base (14-16px), Medium (500)

## Layout & Spacing System
**Tailwind Units**: Stick to 4, 6, 8, 12, 16, 20, 24 for consistency
- Section padding: py-16 (mobile) / py-24 (desktop)
- Component spacing: gap-6 to gap-8
- Container: max-w-7xl with px-4/px-6 gutters
- Grid gaps: gap-6 (mobile) / gap-8 (desktop)

## Component Library

### Navigation
Top navigation bar with black background, subtle border-b in dark gray. Logo left, menu center, WhatsApp CTA right (yellow background). Sticky on scroll. Mobile: hamburger menu with slide-in drawer.

### Hero Section
**Full-width image-based hero** (70vh desktop, 60vh mobile) featuring industrial/construction imagery with dark overlay (50% black). Centered content with:
- Large headline in white
- Subheadline in light gray
- Dual CTAs: Primary yellow button "Browse Products" + Secondary outlined button "Contact Sales"
- Buttons use backdrop-blur-md with semi-transparent backgrounds

### Product Catalogue Section
Grid layout: 1 column (mobile) / 2 columns (tablet) / 3-4 columns (desktop)
**Product Cards**:
- White border (1px) on black background
- Product image with subtle hover scale (1.02)
- Product name in white (font-semibold)
- Short description in gray-400
- Price in yellow (font-bold, larger)
- WhatsApp button: Yellow background, black text, icon + "Inquire via WhatsApp"

### Brand Carousel
Horizontal auto-scrolling conveyor belt showcasing partner brands. Infinite loop animation, pause on hover. Dark gray background section with white/grayscale brand logos (6-8 visible at once). Seamless continuous scroll using CSS animation.

### Category Navigation
Horizontal pill buttons below hero: Yellow for active category, outlined white for inactive. Smooth transition on selection.

### Footer
Multi-column layout (stacks on mobile):
- Company info + logo (Column 1)
- Quick Links (Column 2)
- Product Categories (Column 3)
- Contact info with WhatsApp, email, phone (Column 4, yellow icons)
Dark gray background (lighter than main black), white text

## Images Section

**Hero Image**: Industrial construction site or hardware warehouse (high-quality, professional photography). Wide-angle shot showing scale and professionalism. Placement: Full-width background spanning 70vh.

**Product Images**: Clean white-background product photos (square aspect ratio, 1:1). Each product card requires sharp, well-lit product photography against pure white.

**Brand Logos**: Grayscale/white versions of partner manufacturer logos for carousel section (transparent backgrounds, SVG preferred).

## Visual Treatment

**Black Background Strategy**:
- Primary: #000000 (pure black for main areas)
- Secondary: #1a1a1a (slightly lighter for cards/sections)
- Borders: #333333 (subtle separation)

**Yellow Accent Usage** (Strategic, not overwhelming):
- Primary CTAs and buttons
- Active states and highlights
- Price displays
- Icon accents
- Hover states on interactive elements

**Text Colors**:
- Headings: #FFFFFF
- Body: #E5E5E5
- Secondary: #A3A3A3

## Accessibility & Performance
- Minimum 4.5:1 contrast ratio (white on black exceeds this)
- Focus indicators: Yellow outline (2px)
- WhatsApp buttons include ARIA labels
- Image lazy loading for product catalogue
- Optimized brand carousel animation (GPU-accelerated)

## Animations
Minimal, purposeful only:
- Carousel: Smooth continuous scroll
- Product cards: Subtle hover lift (translateY -2px)
- Buttons: Smooth background transitions
- Category pills: Fast color/border transitions (150ms)