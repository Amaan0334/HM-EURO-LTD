
import Link from 'next/link';
import { getFeaturedProducts } from '@/lib/products';
import { ProductCard } from '@/components/products/ProductCard';

export function FeaturedCollection() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section
      aria-label="Curated Collection"
      className="bg-ivory section-padding border-b border-blush/30"
    >
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-body font-semibold block mb-2">
            Curated Selection
          </span>

          <h2 className="font-display text-display-sm text-charcoal mb-3">
            Curated Collection
          </h2>

          <p className="text-muted text-body-md font-body">
            Discover our handpicked selection of premium fragrances
          </p>
        </div>

        {/* Afnan Lynked Freedom Featured Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product) => {
            const isAfnanLynkedFreedom =
              product.slug === 'afnan-lynked-freedom';

            return (
              <ProductCard
                key={product.id}
                product={product}
                className={
                  isAfnanLynkedFreedom
                    ? 'md:col-span-2 lg:col-span-2'
                    : 'col-span-1'
                }
              />
            );
          })}
        </div>

        {/* Full Catalog Navigation */}
        <div className="mt-12 md:mt-16 text-center">
          <Link
            href="/perfumes"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-gold transition-colors duration-200 border-b border-charcoal/30 hover:border-gold pb-1"
          >
            <span>Explore All Fragrances</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollection;
