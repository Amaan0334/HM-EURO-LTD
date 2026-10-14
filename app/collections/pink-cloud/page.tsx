import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getProductsByCollection } from '@/lib/products';
import { ProductCard } from '@/components/products/ProductCard';
import { Sparkles, Heart, ShieldCheck, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pink Cloud Collection | HM EURO LTD',
  description:
    'Discover the Pink Cloud Collection by Atralia. A strawberry-inspired fragrance story that is sweet, sparkling, and unforgettable.',
  openGraph: {
    title: 'Pink Cloud Collection | Atralia',
    description: 'A Strawberry-Inspired Fragrance Story. Meet Your Sweeter Side with Pink Cloud Eau de Parfum.',
    images: [{ url: '/images/pink-cloud/bottle-splash.jpg' }],
  },
};

export default function PinkCloudCollectionPage() {
  const pinkProducts = getProductsByCollection('pink-cloud');

  return (
    <main className="min-h-screen bg-white">
      {/* Campaign Hero Section */}
      <section className="relative bg-pink-bg overflow-hidden py-20 md:py-28 lg:py-32 border-b border-blush">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image
            src="/images/pink-cloud/bottle-splash.jpg"
            alt="Pink Cloud strawberry splash background"
            fill
            priority
            className="object-cover object-center filter blur-xs"
          />
        </div>

        <div className="container-luxury relative z-10 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 border border-blush rounded-xs text-xs uppercase tracking-widest text-strawberry font-body mb-4 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-strawberry" /> Signature Atralia Campaign
            </span>

            <h1 className="font-display text-display-md md:text-display-lg text-charcoal mb-4">
              Pink Cloud Collection
            </h1>

            <p className="font-display text-heading-md md:text-heading-lg text-berry italic mb-6">
              A Strawberry-Inspired Fragrance Story
            </p>

            <p className="text-body-md text-charcoal/80 max-w-xl mx-auto mb-8 font-body">
              Pink Cloud is your everyday escape into a world of sweetness. Light, joyful, and effortlessly elegant — crafted with ripe strawberries, delicate white florals, and a decadent caramel finish.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#collection-products"
                className="px-8 py-3.5 bg-charcoal text-white text-xs uppercase tracking-widest hover:bg-berry transition-colors duration-300 shadow-xs"
              >
                Explore The Fragrance
              </a>
              <Link
                href="/products/sugar-mallow-pink-cloud"
                className="px-8 py-3.5 bg-white text-charcoal border border-blush text-xs uppercase tracking-widest hover:border-gold hover:text-berry transition-colors duration-300"
              >
                View Perfume Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Products Showcase */}
      <section id="collection-products" className="container-luxury section-padding scroll-mt-12">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-gold font-body block mb-2">
            The Collection
          </span>
          <h2 className="font-display text-display-sm md:text-display-md text-charcoal mb-3">
            Sugar Mallow · Pink Cloud
          </h2>
          <p className="text-body-sm text-muted">
            Handcrafted with fine ingredients for an elevated and joyful sensory signature.
          </p>
        </div>

        {/* Centered product layout */}
        <div className="max-w-md mx-auto">
          {pinkProducts.map((product) => (
            <div key={product.id} className="shadow-xs rounded-xs overflow-hidden border border-blush/60">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Fragrance Notes / Olfactory Breakdown */}
      <section className="bg-ivory border-y border-blush/60 py-20">
        <div className="container-luxury mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-gold font-body block mb-2">
              Olfactory Architecture
            </span>
            <h2 className="font-display text-display-sm md:text-display-md text-charcoal mb-4">
              The Notes Behind The Cloud
            </h2>
            <p className="text-body-sm text-muted">
              A balanced interplay of crisp fruits, radiant blossoms, and warm gourmand undertones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            {/* Top Notes */}
            <div className="p-8 bg-white border border-blush/60 rounded-xs flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider text-strawberry font-body mb-2">
                01 · Top Notes
              </span>
              <h3 className="font-display text-heading-md text-charcoal mb-3">
                Juicy Fruity Opening
              </h3>
              <p className="text-body-sm text-muted mb-4">
                Opens with vibrant, succulent wild strawberries picked at peak freshness.
              </p>
              <span className="px-3 py-1 bg-pink-light text-strawberry text-xs rounded-full">
                Strawberry
              </span>
            </div>

            {/* Heart Notes */}
            <div className="p-8 bg-white border border-blush/60 rounded-xs flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider text-rose font-body mb-2">
                02 · Heart Notes
              </span>
              <h3 className="font-display text-heading-md text-charcoal mb-3">
                Luminous Florals
              </h3>
              <p className="text-body-sm text-muted mb-4">
                Crisp green pear and sweet melon seamlessly woven with velvety Egyptian jasmine petals.
              </p>
              <div className="flex flex-wrap gap-1.5 justify-center">
                <span className="px-3 py-1 bg-pink-light text-berry text-xs rounded-full">
                  Pear
                </span>
                <span className="px-3 py-1 bg-pink-light text-berry text-xs rounded-full">
                  Jasmine
                </span>
                <span className="px-3 py-1 bg-pink-light text-berry text-xs rounded-full">
                  Melon
                </span>
              </div>
            </div>

            {/* Base Notes */}
            <div className="p-8 bg-white border border-blush/60 rounded-xs flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider text-gold font-body mb-2">
                03 · Base Notes
              </span>
              <h3 className="font-display text-heading-md text-charcoal mb-3">
                Warm Gourmand Base
              </h3>
              <p className="text-body-sm text-muted mb-4">
                Rich spun caramel and smooth sheer musk that linger comfortably on the skin all day.
              </p>
              <div className="flex flex-wrap gap-1.5 justify-center">
                <span className="px-3 py-1 bg-ivory text-charcoal border border-blush text-xs rounded-full">
                  Caramel
                </span>
                <span className="px-3 py-1 bg-ivory text-charcoal border border-blush text-xs rounded-full">
                  Musk
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Imagery Story Grid */}
      <section className="container-luxury section-padding">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-gold font-body block mb-2">
            Visual Story
          </span>
          <h2 className="font-display text-display-sm md:text-display-md text-charcoal mb-3">
            A Pink Fruity Escape
          </h2>
          <p className="text-body-sm text-muted">
            Playful femininity captured through elevated fragrance design and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto mb-16">
          <div className="relative aspect-square overflow-hidden bg-ivory rounded-xs border border-blush/60">
            <Image
              src="/images/pink-cloud/bottle-hero-ingredients.jpg"
              alt="Sugar Mallow Pink Cloud surrounded by fresh ingredients"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6 md:p-8 space-y-5">
            <span className="text-xs uppercase tracking-widest text-strawberry font-body">
              Pure Indulgence
            </span>
            <h3 className="font-display text-display-sm text-charcoal">
              Sweet Sophistication & Playful Femininity
            </h3>
            <p className="text-body-sm text-muted leading-relaxed">
              Crafted in collaboration with renowned perfume artisans, Sugar Mallow Pink Cloud balances gourmand sweetness with refined floral grace. It does not overpower — instead, it leaves a trail of soft, sparkling charm.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blush/40">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-strawberry" />
                <span className="text-xs text-charcoal font-medium">Cruelty Free</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-berry" />
                <span className="text-xs text-charcoal font-medium">Long Lasting</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <span className="text-xs text-charcoal font-medium">Clean Formula</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-rose" />
                <span className="text-xs text-charcoal font-medium">100ml Eau de Parfum</span>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Lifestyle Banner */}
        <div className="relative rounded-xs overflow-hidden border border-blush max-w-5xl mx-auto">
          <div className="relative h-80 sm:h-96 w-full">
            <Image
              src="/images/pink-cloud/fruity-escape.jpg"
              alt="Pink Cloud lifestyle — A Pink Fruity Escape"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent flex flex-col justify-end p-8 sm:p-12 text-white">
              <span className="text-xs uppercase tracking-widest text-blush font-body mb-2">
                Everyday Escape
              </span>
              <h3 className="font-display text-display-sm sm:text-display-md mb-2">
                Meet Your Sweeter Side
              </h3>
              <p className="text-body-sm text-ivory/90 max-w-lg mb-6">
                Light, joyful, and effortlessly elegant — immerse yourself in the signature Pink Cloud universe.
              </p>
              <div>
                <Link
                  href="/products/sugar-mallow-pink-cloud"
                  className="inline-flex items-center px-6 py-3 bg-white text-charcoal text-xs uppercase tracking-widest hover:bg-ivory hover:text-berry transition-colors duration-300"
                >
                  Shop Sugar Mallow Pink Cloud · £34.45
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
