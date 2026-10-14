import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | HM EURO LTD',
  description:
    'Learn about HM EURO LTD — a UK-based fragrance retailer curating exceptional perfumes from world-renowned houses including Atralia, Khadlaj, and Afnan.',
};

const brands = [
  {
    name: 'Atralia',
    description:
      'Known for their distinctive bottle designs and captivating scent profiles, Atralia brings a fresh perspective to modern perfumery.',
    origin: 'Contemporary Luxury',
  },
  {
    name: 'Khadlaj',
    description:
      'A heritage perfume house celebrated for luxurious extraits de parfum that blend Eastern tradition with contemporary elegance.',
    origin: 'Heritage Perfumery',
  },
  {
    name: 'Afnan',
    description:
      'Bold, statement-making fragrances that push boundaries and leave lasting impressions.',
    origin: 'Modern Statement',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-ivory py-20 border-b border-blush/30 text-center">
        <div className="container-luxury max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gold font-medium mb-3">
            Our Heritage & Vision
          </p>
          <h1 className="font-display text-display-md text-charcoal mb-4">
            About HM EURO
          </h1>
          <p className="font-body text-body-lg text-muted">
            Premium fragrances, curated with care
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="container-luxury max-w-3xl mx-auto space-y-16">
          {/* Our Story */}
          <article className="space-y-4">
            <h2 className="font-display text-heading-lg text-charcoal">
              Our Story
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-6" aria-hidden="true" />
            <p className="font-body text-body-md text-charcoal/80 leading-relaxed">
              HM EURO LTD is a UK-based fragrance retailer dedicated to bringing exceptional perfumes to discerning customers. We curate our collection from world-renowned perfume houses including Atralia, Khadlaj, and Afnan, ensuring every fragrance meets our standards of quality, longevity, and distinction.
            </p>
          </article>

          {/* Our Mission */}
          <article className="space-y-4">
            <h2 className="font-display text-heading-lg text-charcoal">
              Our Mission
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-6" aria-hidden="true" />
            <p className="font-body text-body-md text-charcoal/80 leading-relaxed">
              We believe that finding your signature scent should be an experience, not a chore. Our carefully selected collection spans fruity florals, oriental vanillas, fresh aromatics, and bold ouds — ensuring there&apos;s a perfect fragrance for every personality and occasion.
            </p>
          </article>

          {/* Our Brands */}
          <article className="space-y-8">
            <div>
              <h2 className="font-display text-heading-lg text-charcoal">
                Our Brands
              </h2>
              <div className="w-12 h-0.5 bg-gold mt-4 mb-6" aria-hidden="true" />
              <p className="font-body text-body-md text-muted">
                Each fragrance house in our portfolio has been selected for its unique artistry, uncompromised craftsmanship, and commitment to olfactory excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="bg-ivory p-8 rounded-sm border border-blush/30 hover:border-gold/50 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gold font-medium block mb-2">
                      {brand.origin}
                    </span>
                    <h3 className="font-display text-heading-md text-charcoal mb-3">
                      {brand.name}
                    </h3>
                    <p className="font-body text-body-sm text-muted leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-blush/20">
                    <Link
                      href={`/perfumes?brand=${encodeURIComponent(brand.name)}`}
                      className="text-xs uppercase tracking-wider text-charcoal hover:text-berry font-medium transition-colors inline-flex items-center gap-1"
                    >
                      Explore {brand.name} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Quality & Authenticity Commitment */}
          <article className="bg-ivory/60 p-8 md:p-10 border border-blush/40 rounded-sm text-center space-y-4">
            <h3 className="font-display text-heading-md text-charcoal">
              Authenticity Guaranteed
            </h3>
            <p className="font-body text-body-sm text-muted max-w-xl mx-auto">
              All fragrances offered by HM EURO LTD are 100% genuine and sourced directly from verified brand partners and authorized distributors.
            </p>
            <div className="pt-2">
              <Link
                href="/perfumes"
                className="inline-flex items-center px-6 py-3 bg-charcoal text-white hover:bg-berry text-xs uppercase tracking-wider transition-colors"
              >
                Browse Collection
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
