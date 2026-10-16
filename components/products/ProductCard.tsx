import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types/product';
import { formatPrice } from '@/lib/currency';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
  isLarge?: boolean;
}

function formatConcentration(concentration: Product['concentration']): string {
  switch (concentration) {
    case 'EDP':
      return 'Eau de Parfum';
    case 'Extrait':
      return 'Extrait de Parfum';
    case 'EDT':
      return 'Eau de Toilette';
    case 'Parfum':
      return 'Parfum';
    default:
      return concentration;
  }
}

export function ProductCard({ product, className }: ProductCardProps) {
  const primaryImage = product.images[0];
  const concentrationLabel = formatConcentration(product.concentration);

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        'group block h-full border border-transparent hover:border-blush transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
        className
      )}
    >
      <article className="flex flex-col h-full bg-white p-3 sm:p-4">
        {/* Image container with aspect-square, overflow-hidden, bg-ivory */}
        <div className="relative aspect-square overflow-hidden bg-ivory">
          {primaryImage ? (
            <Image
              src={primaryImage.src}
              alt={primaryImage.alt || product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-muted text-xs">
              No image available
            </div>
          )}

          {/* Badge if campaignType === 'pink-cloud' */}
          {product.campaignType === 'pink-cloud' && (
            <span className="absolute top-2.5 left-2.5 inline-flex items-center px-2 py-0.5 text-xs font-medium text-rose bg-white/90 backdrop-blur-xs border border-blush/60 shadow-xs tracking-wide">
              ✦ Pink Cloud
            </span>
          )}
        </div>

        {/* Below image details */}
        <div className="mt-4 flex flex-col flex-grow">
          {/* Brand */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs uppercase tracking-wider text-muted font-body">
              {product.brand}
            </span>
            {product.campaignType === 'pink-cloud' && (
              <span className="text-xs text-rose font-medium tracking-wide sm:hidden">
                ✦ Pink Cloud
              </span>
            )}
          </div>

          {/* Name */}
          <h3 className="font-display text-heading-sm mt-1 text-charcoal line-clamp-1 group-hover:text-berry transition-colors">
            {product.name}
          </h3>

          {/* Concentration + Size */}
          <p className="text-xs text-muted mt-0.5">
            {concentrationLabel} · {product.size}
          </p>

          {/* Price */}
          <div className="mt-2 pt-2 border-t border-blush/30 flex items-center justify-between">
            <span className="text-body-md font-medium text-charcoal">
            {formatPrice(
  Math.round(product.priceGBP > 100
    ? product.priceGBP
    : product.priceGBP * 100)
)}
            </span>
            {product.stockStatus === 'out-of-stock' && (
              <span className="text-caption text-strawberry uppercase tracking-wider font-medium">
                Sold Out
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;
