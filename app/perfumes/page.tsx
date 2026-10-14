import type { Metadata } from 'next';
import { getAllProducts } from '@/lib/products';
import { PerfumeShop } from '@/components/products/PerfumeShop';

export const metadata: Metadata = {
  title: 'Shop Perfumes | HM EURO LTD',
  description:
    'Explore our curated collection of premium fragrances. Discover signature scents from Atralia, Khadlaj, and Afnan crafted with luxury ingredients.',
};

export default function PerfumesPage() {
  const products = getAllProducts();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <header className="bg-ivory border-b border-blush/40 py-16 text-center">
        <div className="container-luxury max-w-4xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-gold font-body block mb-2">
            Curated UK Fragrance House
          </span>
          <h1 className="font-display text-display-md sm:text-display-lg text-charcoal mb-4">
            Shop Perfumes
          </h1>
          <p className="text-body-md text-muted max-w-xl mx-auto">
            Explore our curated collection of premium fragrances from Atralia, Khadlaj, and Afnan.
          </p>
        </div>
      </header>

      {/* Main Catalog Section */}
      <section className="container-luxury section-padding" aria-label="Perfumes Collection">
        <PerfumeShop initialProducts={products} />
      </section>
    </main>
  );
}
