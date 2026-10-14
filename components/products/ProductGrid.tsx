import Link from 'next/link';
import type { Product } from '@/types/product';
import { ProductCard } from '@/components/products/ProductCard';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export function ProductGrid({
  products,
  emptyMessage = 'No perfumes found',
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-ivory/50 border border-blush/40 rounded-sm my-8">
        <span className="text-gold text-2xl mb-3" aria-hidden="true">✦</span>
        <h3 className="font-display text-heading-lg text-charcoal mb-2">
          {emptyMessage}
        </h3>
        <p className="text-body-sm text-muted max-w-md mb-6">
          We could not find any fragrances matching your criteria. Explore our full curated collection to discover your new signature scent.
        </p>
        <Link
          href="/perfumes"
          className="inline-flex items-center justify-center px-6 py-3 bg-charcoal text-white text-xs uppercase tracking-widest hover:bg-berry transition-colors duration-300"
        >
          View All Fragrances
        </Link>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      role="region"
      aria-label="Fragrances grid"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
