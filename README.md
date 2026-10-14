# HM EURO LTD — Premium UK Perfume E-Commerce

A production-oriented, multi-page perfume e-commerce website targeting customers in the United Kingdom. Built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and GSAP.

## Signature Feature

**Pink Cloud Scroll Experience** — An immersive, scroll-driven product storytelling sequence for the Sugar Mallow Pink Cloud Eau de Parfum by Atralia. Uses GSAP ScrollTrigger for pinned animations on desktop, with responsive alternatives for tablet and mobile.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP + ScrollTrigger (campaign), Framer Motion (UI)
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Fonts:** Cormorant Garamond + Manrope (via next/font)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type check
npm run typecheck

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Product Catalogue

| Product | Brand | Price | Size |
|---------|-------|-------|------|
| Sugar Mallow Pink Cloud EDP | Atralia | £34.45 | 100ml |
| Elixir EDP | Atralia | £21.30 | 100ml |
| Sawaar Vanille Blanc Extrait | Khadlaj | £33.99 | 100ml |
| Panache Angel Dust Extrait | Khadlaj | £31.90 | 100ml |
| Island Extrait | Khadlaj | £29.96 | 100ml |
| 9 PM Night Out Extrait | Afnan | £38.34 | 100ml |
| Supremacy Not Only Intense Extrait | Afnan | £41.50 | 100ml |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, Pink Cloud scroll experience, featured collection |
| `/perfumes` | All perfumes with search, sort, and filter |
| `/collections/pink-cloud` | Pink Cloud campaign collection |
| `/products/[slug]` | Individual product detail pages |
| `/about` | About the business |
| `/contact` | Contact form |
| `/cart` | Shopping bag |
| `/delivery` | Delivery information |
| `/returns` | Returns policy |
| `/privacy` | Privacy policy |
| `/terms` | Terms & conditions |

## Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and fill in values as needed:

- **Stripe:** `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — for checkout
- **Email:** SMTP settings — for contact form and newsletter
- **Supabase:** Connection details — for database-backed catalogue

### Placeholder Content

Items marked `[PLACEHOLDER]` in the codebase require verified business information:

- Delivery costs and timeframes
- Returns policy details
- Business registered address and company number
- Contact email and phone
- Social media profiles
- Privacy policy and Terms & Conditions (requires legal review)

Search for `[PLACEHOLDER]` across the codebase to find all items.

## Adding New Products

Edit `lib/products.ts` and add a new `Product` object to the `products` array. The product will automatically appear in:

- The All Perfumes page (`/perfumes`)
- Its own product detail page (`/products/[your-slug]`)
- Search and filter results
- The sitemap

Place product images in `public/images/[product-folder]/`.

## Deployment

Optimised for [Vercel](https://vercel.com):

```bash
npx vercel
```

## License

Proprietary — © HM EURO LTD. All rights reserved.
