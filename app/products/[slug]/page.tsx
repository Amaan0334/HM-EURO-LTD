import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProducts, getProductBySlug, getRelatedProducts } from '@/lib/products';
import { formatPrice } from '@/lib/currency';
import { ProductGallery } from '@/components/products/ProductGallery';
import { AddToCartButton } from '@/components/products/AddToCartButton';
import { ProductAccordion } from '@/components/products/ProductAccordion';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ChevronRight, Sparkles } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Fragrance Not Found | HM EURO LTD',
      description: 'The requested fragrance could not be located.',
    };
  }

  const primaryImage = product.images[0]?.src;

  return {
    title: product.metadata?.title ?? `${product.name} | HM EURO LTD`,
    description: product.metadata?.description ?? product.description,
    openGraph: {
      title: `${product.name} — ${product.brand}`,
      description: product.description,
      images: primaryImage ? [{ url: primaryImage }] : [],
    },
  };
}

function formatConcentration(concentration: string): string {
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

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, 3);
  const concentrationLabel = formatConcentration(product.concentration);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map((img) => img.src),
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      price: (product.priceGBP / 100).toFixed(2),
      priceCurrency: 'GBP',
      availability:
        product.stockStatus === 'in-stock'
          ? 'https://schema.org/InStock'
          : product.stockStatus === 'low-stock'
          ? 'https://schema.org/LimitedAvailability'
          : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: `https://hmeuroltd.co.uk/products/${product.slug}`,
    },
  };

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-luxury pt-8 pb-12">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center flex-wrap gap-2 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-gold transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-muted/60">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link href="/perfumes" className="hover:text-gold transition-colors">
                Perfumes
              </Link>
            </li>
            <li aria-hidden="true" className="text-muted/60">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="text-charcoal font-medium truncate max-w-xs sm:max-w-md" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Two-Column Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          {/* Left Column (55%): Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right Column (45%): Product Info */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Campaign Badge if applicable */}
            {product.campaignType === 'pink-cloud' && (
              <div className="mb-2">
                <Link
                  href="/collections/pink-cloud"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium tracking-wide bg-pink-light text-rose border border-blush rounded-xs hover:border-gold transition-colors"
                >
                  <Sparkles className="w-3 h-3 text-rose" /> Pink Cloud Campaign
                </Link>
              </div>
            )}

            {/* Brand */}
            <span className="text-xs uppercase tracking-widest text-muted font-body">
              {product.brand}
            </span>

            {/* Name */}
            <h1 className="font-display text-display-sm sm:text-display-md text-charcoal mt-1">
              {product.name}
            </h1>

            {/* Subtitle / Concentration & Size */}
            <p className="text-sm text-muted mt-1 font-body">
              {product.subtitle || `${concentrationLabel} · ${product.size}`}
            </p>

            {/* Price & Stock Status Badge */}
            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="text-heading-lg font-medium text-charcoal font-body">
                {formatPrice(product.priceGBP)}
              </span>

              {/* Stock Status Badge */}
              {product.stockStatus === 'in-stock' ? (
                <span className="inline-flex items-center px-2.5 py-1 rounded-xs text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                  In Stock · Ready to Dispatch
                </span>
              ) : product.stockStatus === 'low-stock' ? (
                <span className="inline-flex items-center px-2.5 py-1 rounded-xs text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                  Low Stock
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-1 rounded-xs text-xs font-medium bg-rose-50 text-rose-800 border border-rose-200">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-blush my-6" />

            {/* Fragrance Notes Breakdown */}
            {product.fragranceNotes && (
              <div className="mb-6 bg-ivory/60 border border-blush/60 p-4 rounded-xs">
                <h2 className="font-display text-heading-sm text-charcoal mb-3">
                  Fragrance Notes
                </h2>
                <div className="space-y-2 text-xs font-body">
                  {product.fragranceNotes.top && product.fragranceNotes.top.length > 0 && (
                    <div className="flex gap-2">
                      <span className="w-14 uppercase tracking-wider text-muted shrink-0 font-medium">
                        Top:
                      </span>
                      <span className="text-charcoal">
                        {product.fragranceNotes.top.join(', ')}
                      </span>
                    </div>
                  )}
                  {product.fragranceNotes.heart && product.fragranceNotes.heart.length > 0 && (
                    <div className="flex gap-2">
                      <span className="w-14 uppercase tracking-wider text-muted shrink-0 font-medium">
                        Heart:
                      </span>
                      <span className="text-charcoal">
                        {product.fragranceNotes.heart.join(', ')}
                      </span>
                    </div>
                  )}
                  {product.fragranceNotes.base && product.fragranceNotes.base.length > 0 && (
                    <div className="flex gap-2">
                      <span className="w-14 uppercase tracking-wider text-muted shrink-0 font-medium">
                        Base:
                      </span>
                      <span className="text-charcoal">
                        {product.fragranceNotes.base.join(', ')}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Features Badges */}
            {product.features && product.features.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6" aria-label="Product features">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2.5 py-1 bg-ivory text-charcoal border border-blush text-xs tracking-wider font-body rounded-xs"
                  >
                    ✦ {feature}
                  </span>
                ))}
              </div>
            )}

            {/* Quantity Selector & Add to Bag CTA */}
            <div className="mb-2">
              <AddToCartButton product={product} />
            </div>

            {/* Accordion Sections: Description, Delivery, Returns */}
            <ProductAccordion product={product} />
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-16 border-t border-blush/60" aria-label="Related fragrances">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest text-gold font-body block mb-2">
                Curated Recommendations
              </span>
              <h2 className="font-display text-display-sm text-charcoal">
                You May Also Like
              </h2>
            </div>
            <ProductGrid products={relatedProducts} />
          </section>
        )}
      </div>
    </main>
  );
}
