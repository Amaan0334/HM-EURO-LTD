'use client';

import React, { useState, useMemo } from 'react';
import type { Product } from '@/types/product';
import { PerfumeFilters, type SortValue } from '@/components/products/PerfumeFilters';
import { ProductGrid } from '@/components/products/ProductGrid';

interface PerfumeShopProps {
  initialProducts: Product[];
}

export function PerfumeShop({ initialProducts }: PerfumeShopProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortBy, setSortBy] = useState<SortValue>('featured');

  const availableBrands = useMemo(() => {
    const brandsSet = new Set(initialProducts.map((p) => p.brand));
    return ['All', ...Array.from(brandsSet)];
  }, [initialProducts]);

  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    // Filter by Brand
    if (selectedBrand !== 'All') {
      result = result.filter((p) => p.brand.toLowerCase() === selectedBrand.toLowerCase());
    }

    // Filter by Search
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      result = result.filter((p) => {
        const nameMatch = p.name.toLowerCase().includes(query);
        const brandMatch = p.brand.toLowerCase().includes(query);
        const descMatch = p.description.toLowerCase().includes(query);
        const subtitleMatch = p.subtitle ? p.subtitle.toLowerCase().includes(query) : false;
        const familyMatch = p.fragranceFamily ? p.fragranceFamily.toLowerCase().includes(query) : false;

        const notes = p.fragranceNotes
          ? [
              ...(p.fragranceNotes.top ?? []),
              ...(p.fragranceNotes.heart ?? []),
              ...(p.fragranceNotes.base ?? []),
            ].join(' ').toLowerCase()
          : '';
        const notesMatch = notes.includes(query);

        return nameMatch || brandMatch || descMatch || subtitleMatch || familyMatch || notesMatch;
      });
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.priceGBP - b.priceGBP);
        break;
      case 'price-desc':
        result.sort((a, b) => b.priceGBP - a.priceGBP);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'featured':
      default:
        // Featured products first, preserving stable original order
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [initialProducts, selectedBrand, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedBrand('All');
    setSortBy('featured');
  };

  return (
    <div>
      <PerfumeFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedBrand={selectedBrand}
        onBrandChange={setSelectedBrand}
        sortBy={sortBy}
        onSortChange={setSortBy}
        availableBrands={availableBrands}
        totalResults={filteredProducts.length}
        onResetFilters={handleResetFilters}
      />

      <ProductGrid
        products={filteredProducts}
        emptyMessage="No perfumes found matching your selection"
      />
    </div>
  );
}

export default PerfumeShop;
