'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { ProductImage } from '@/types/product';

interface ProductGalleryProps {
  images: ProductImage[];
  productName?: string;
}

export function ProductGallery({ images, productName = 'Fragrance' }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-square w-full bg-ivory flex items-center justify-center text-muted border border-blush/40">
        <span className="text-sm">No image available</span>
      </div>
    );
  }

  const activeImage = images[selectedIndex] || images[0];

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square w-full bg-ivory overflow-hidden border border-blush/40 rounded-xs">
        <Image
          src={activeImage.src}
          alt={activeImage.alt || `${productName} image ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-contain object-center transition-all duration-300"
        />
      </div>

      {/* Thumbnails (only if more than 1 image) */}
      {images.length > 1 && (
        <div
          className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 scrollbar-thin focus-visible:outline-none"
          role="region"
          aria-label="Fragrance images carousel thumbnails"
        >
          {images.map((img, index) => {
            const isSelected = selectedIndex === index;
            return (
              <button
                key={img.src + index}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Select fragrance view ${index + 1} of ${images.length}`}
                aria-pressed={isSelected}
                className={`relative shrink-0 w-20 h-20 aspect-square overflow-hidden bg-ivory rounded-xs transition-all duration-200 border-2 ${
                  isSelected
                    ? 'border-gold shadow-xs ring-1 ring-gold/40'
                    : 'border-transparent opacity-70 hover:opacity-100 hover:border-blush'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt || `Thumbnail ${index + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover object-center"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
