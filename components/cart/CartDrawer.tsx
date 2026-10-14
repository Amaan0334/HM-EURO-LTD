'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ShoppingBag, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '@/components/cart/CartProvider';
import { formatPrice } from '@/lib/currency';

export function CartDrawer() {
  const { state, closeCart, updateQuantity, removeItem, itemCount, subtotal } = useCart();
  const { isOpen, items } = state;

  // Handle escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCart();
      }
    },
    [closeCart]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Shopping Bag Drawer"
        >
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/30 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative z-10 w-full max-w-md h-full bg-white shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-blush/40 bg-ivory">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-charcoal" aria-hidden="true" />
                <h2 className="font-display text-heading-md text-charcoal">
                  Shopping Bag ({itemCount})
                </h2>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="p-2 text-charcoal hover:text-berry rounded-full hover:bg-blush/20 transition-colors"
                aria-label="Close shopping bag drawer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-ivory flex items-center justify-center mb-4">
                    <ShoppingBag className="w-8 h-8 text-muted" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-heading-md text-charcoal mb-2">
                    Your bag is empty
                  </h3>
                  <p className="text-body-sm text-muted max-w-xs mb-6">
                    Explore our collection of fine perfumes and discover your signature scent.
                  </p>
                  <Link
                    href="/perfumes"
                    onClick={closeCart}
                    className="inline-flex items-center justify-center px-6 py-3 bg-charcoal text-white hover:bg-berry text-xs uppercase tracking-wider font-medium transition-colors"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-blush/30">
                  {items.map(({ product, quantity }) => {
                    const mainImage = product.images?.[0];
                    const lineTotal = product.priceGBP * quantity;

                    return (
                      <article
                        key={product.id}
                        className="py-4 first:pt-0 last:pb-0 flex gap-4 items-center"
                      >
                        {/* Thumbnail */}
                        <div className="relative w-20 h-20 flex-shrink-0 bg-ivory rounded overflow-hidden">
                          {mainImage ? (
                            <Image
                              src={mainImage.src}
                              alt={mainImage.alt || product.name}
                              fill
                              sizes="80px"
                              className="object-contain p-1"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted text-xs">
                              No image
                            </div>
                          )}
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-gold font-medium">
                                {product.brand}
                              </p>
                              <h4 className="font-display text-heading-sm text-charcoal truncate">
                                {product.name}
                              </h4>
                              <p className="text-xs text-muted">
                                {product.concentration} · {product.size}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(product.id)}
                              className="text-muted hover:text-strawberry p-1 transition-colors"
                              aria-label={`Remove ${product.name}`}
                            >
                              <Trash2 className="w-4 h-4" aria-hidden="true" />
                            </button>
                          </div>

                          <div className="mt-3 flex items-center justify-between">
                            {/* Quantity controls */}
                            <div className="flex items-center border border-blush/60 rounded bg-white">
                              <button
                                type="button"
                                onClick={() => updateQuantity(product.id, quantity - 1)}
                                className="p-1 px-2 text-charcoal hover:bg-blush/20 transition-colors disabled:opacity-30"
                                aria-label={`Decrease quantity of ${product.name}`}
                                disabled={quantity <= 1}
                              >
                                <Minus className="w-3 h-3" aria-hidden="true" />
                              </button>
                              <span
                                className="px-2 text-xs font-medium text-charcoal min-w-[1.5rem] text-center"
                                aria-label={`Quantity: ${quantity}`}
                              >
                                {quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(product.id, quantity + 1)}
                                className="p-1 px-2 text-charcoal hover:bg-blush/20 transition-colors"
                                aria-label={`Increase quantity of ${product.name}`}
                              >
                                <Plus className="w-3 h-3" aria-hidden="true" />
                              </button>
                            </div>

                            <span className="text-sm font-semibold text-charcoal">
                              {formatPrice(lineTotal)}
                            </span>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-blush/40 bg-ivory space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-charcoal">
                    <span className="text-sm text-muted">Subtotal</span>
                    <span className="font-display text-heading-sm font-semibold">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>

                <div className="space-y-2">
                  <Link
                    href="/cart"
                    onClick={closeCart}
                    className="w-full block py-3 text-center border border-charcoal text-charcoal hover:bg-charcoal hover:text-white text-xs uppercase tracking-wider font-medium transition-colors"
                  >
                    View Bag
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      alert('Checkout is not yet configured.');
                    }}
                    className="w-full py-3.5 bg-charcoal text-white hover:bg-berry text-xs uppercase tracking-wider font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Checkout</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
