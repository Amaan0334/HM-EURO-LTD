'use client';

import React, { useState, useEffect } from 'react';
import type { Product } from '@/types/product';
import { useCart } from '@/components/cart/CartProvider';
import { Minus, Plus, Check, ShoppingBag } from 'lucide-react';

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const isOutOfStock = product.stockStatus === 'out-of-stock';

  useEffect(() => {
    if (!isAdded) return;
    const timer = setTimeout(() => {
      setIsAdded(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isAdded]);

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(10, prev + 1));
  };

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    addItem(product, quantity);
    setIsAdded(true);
  };

  return (
    <div className="w-full space-y-4">
      {/* Quantity & Selector Row */}
      <div className="flex items-center gap-4">
        <label htmlFor="quantity-selector" className="text-xs uppercase tracking-wider text-muted font-body">
          Quantity
        </label>
        <div
          id="quantity-selector"
          className="inline-flex items-center border border-blush bg-white rounded-xs"
          role="group"
          aria-label="Select quantity"
        >
          <button
            type="button"
            onClick={handleDecrement}
            disabled={quantity <= 1 || isOutOfStock}
            aria-label="Decrease quantity"
            className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-ivory disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>

          <span
            className="w-12 text-center text-sm font-medium text-charcoal select-none"
            aria-live="polite"
          >
            {quantity}
          </span>

          <button
            type="button"
            onClick={handleIncrement}
            disabled={quantity >= 10 || isOutOfStock}
            aria-label="Increase quantity"
            className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-ivory disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Add to Bag Button */}
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={isOutOfStock}
        aria-live="polite"
        className={`w-full py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center gap-2.5 rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
          isOutOfStock
            ? 'bg-muted/30 text-muted cursor-not-allowed'
            : isAdded
            ? 'bg-emerald-700 text-white shadow-xs'
            : 'bg-charcoal text-white hover:bg-berry active:scale-[0.99] shadow-xs'
        }`}
      >
        {isOutOfStock ? (
          <span>Sold Out</span>
        ) : isAdded ? (
          <>
            <Check className="w-4 h-4 animate-in fade-in" aria-hidden="true" />
            <span>Added to Bag</span>
          </>
        ) : (
          <>
            <ShoppingBag className="w-4 h-4" aria-hidden="true" />
            <span>Add to Bag</span>
          </>
        )}
      </button>
    </div>
  );
}
