'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '@/components/cart/CartProvider';
import { formatPrice } from '@/lib/currency';

export function CartPageContent() {
  const { state, updateQuantity, removeItem, itemCount, subtotal } = useCart();
  const { items } = state;

  if (items.length === 0) {
    return (
      <main className="min-h-[70vh] bg-ivory flex items-center justify-center py-20">
        <div className="container-luxury text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white flex items-center justify-center shadow-xs">
            <ShoppingBag className="w-10 h-10 text-muted" aria-hidden="true" />
          </div>
          <h1 className="font-display text-display-sm text-charcoal mb-3">
            Your Bag is Empty
          </h1>
          <p className="text-body-md text-muted mb-8">
            Discover our curated collection of signature perfumes and find your next unforgettable fragrance.
          </p>
          <Link
            href="/perfumes"
            className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-white hover:bg-berry text-sm uppercase tracking-wider transition-colors duration-200"
          >
            Continue Shopping
            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white py-12 md:py-20">
      <div className="container-luxury">
        <header className="mb-10 pb-6 border-b border-blush/40">
          <h1 className="font-display text-display-md text-charcoal">
            Shopping Bag
          </h1>
          <p className="text-body-sm text-muted mt-1">
            {itemCount} {itemCount === 1 ? 'item' : 'items'} in your bag
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Cart Line Items */}
          <section
            aria-label="Shopping bag items"
            className="lg:col-span-8 divide-y divide-blush/30"
          >
            {items.map(({ product, quantity }) => {
              const mainImage = product.images?.[0];
              const lineTotal = product.priceGBP * quantity;

              return (
                <article
                  key={product.id}
                  className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-6 items-start"
                >
                  {/* Thumbnail */}
                  <Link
                    href={`/perfumes/${product.slug}`}
                    className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-ivory rounded overflow-hidden group block"
                  >
                    {mainImage ? (
                      <Image
                        src={mainImage.src}
                        alt={mainImage.alt || product.name}
                        fill
                        sizes="(max-width: 640px) 96px, 112px"
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-ivory text-muted text-xs">
                        No image
                      </div>
                    )}
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gold font-medium">
                          {product.brand}
                        </p>
                        <h2 className="font-display text-heading-md text-charcoal mt-0.5">
                          <Link
                            href={`/perfumes/${product.slug}`}
                            className="hover:text-berry transition-colors"
                          >
                            {product.name}
                          </Link>
                        </h2>
                        <p className="text-xs text-muted mt-1">
                          {product.concentration} · {product.size}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        className="text-muted hover:text-strawberry p-1 transition-colors"
                        aria-label={`Remove ${product.name} from bag`}
                      >
                        <Trash2 className="w-5 h-5" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="mt-6 flex flex-wrap justify-between items-center gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-blush/60 rounded bg-white">
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="p-2 text-charcoal hover:bg-blush/20 transition-colors disabled:opacity-30"
                          aria-label={`Decrease quantity of ${product.name}`}
                          disabled={quantity <= 1}
                        >
                          <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                        <span
                          className="px-4 text-sm font-medium text-charcoal min-w-[2.5rem] text-center"
                          aria-label={`Current quantity ${quantity}`}
                        >
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="p-2 text-charcoal hover:bg-blush/20 transition-colors"
                          aria-label={`Increase quantity of ${product.name}`}
                        >
                          <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>

                      {/* Line total */}
                      <div className="text-right">
                        <p className="text-heading-sm font-semibold text-charcoal">
                          {formatPrice(lineTotal)}
                        </p>
                        {quantity > 1 && (
                          <p className="text-xs text-muted">
                           {formatPrice(Math.round(product.priceGBP * 100))}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          {/* Order Summary Sidebar */}
          <aside className="lg:col-span-4" aria-label="Order summary">
            <div className="bg-ivory p-6 sm:p-8 rounded border border-blush/30 sticky top-28">
              <h2 className="font-display text-heading-md text-charcoal pb-4 border-b border-blush/30">
                Order Summary
              </h2>

              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between text-charcoal">
                  <dt className="text-muted">Subtotal</dt>
                  <dd className="font-medium">{formatPrice(subtotal)}</dd>
                </div>
                <div className="flex justify-between text-charcoal">
                  <dt className="text-muted">Delivery</dt>
                  <dd className="text-xs text-muted italic">
                    Calculated at checkout
                  </dd>
                </div>
              </dl>

              <div className="my-6 border-t border-blush/40" />

              <div className="flex justify-between text-charcoal mb-6">
                <span className="font-display text-heading-sm">Total</span>
                <span className="font-display text-heading-md font-semibold">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-charcoal text-white hover:bg-berry text-sm uppercase tracking-wider font-medium transition-colors"
                onClick={() => {
                  alert('Checkout is not yet configured.');
                }}
              >
                Proceed to Checkout
              </button>

              <p className="text-xs text-muted text-center mt-3">
                Checkout is not yet configured.
              </p>

              <div className="mt-6 pt-6 border-t border-blush/30 text-center">
                <Link
                  href="/perfumes"
                  className="text-xs uppercase tracking-widest text-charcoal hover:text-berry font-medium transition-colors inline-flex items-center gap-1"
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
