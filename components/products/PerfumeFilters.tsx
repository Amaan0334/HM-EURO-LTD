'use client';

import React from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';

export type SortValue = 'featured' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

interface PerfumeFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
  sortBy: SortValue;
  onSortChange: (sortBy: SortValue) => void;
  availableBrands: string[];
  totalResults: number;
  onResetFilters: () => void;
}

const SORT_OPTIONS: { label: string; value: SortValue }[] = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Name: A-Z', value: 'name-asc' },
  { label: 'Name: Z-A', value: 'name-desc' },
];

export function PerfumeFilters({
  searchQuery,
  onSearchChange,
  selectedBrand,
  onBrandChange,
  sortBy,
  onSortChange,
  availableBrands,
  totalResults,
  onResetFilters,
}: PerfumeFiltersProps) {
  const isFiltered = searchQuery.trim().length > 0 || selectedBrand !== 'All' || sortBy !== 'featured';

  return (
    <div className="w-full space-y-6 mb-10">
      {/* Search and Sort Row */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <label htmlFor="perfume-search" className="sr-only">
            Search fragrances
          </label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
            <Search className="w-4 h-4" aria-hidden="true" />
          </div>
          <input
            id="perfume-search"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name, note, or brand..."
            className="w-full pl-10 pr-9 py-2.5 text-sm bg-white border border-blush text-charcoal placeholder:text-muted rounded-xs focus:outline-none focus:border-gold transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted hover:text-charcoal transition-colors"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort and Result count */}
        <div className="flex items-center justify-between md:justify-end gap-4">
          <span className="text-xs text-muted tracking-wide">
            {totalResults} {totalResults === 1 ? 'fragrance' : 'fragrances'}
          </span>

          <div className="flex items-center gap-2">
            <label htmlFor="perfume-sort" className="text-xs uppercase tracking-wider text-muted font-body shrink-0 hidden sm:inline">
              Sort by:
            </label>
            <div className="relative">
              <select
                id="perfume-sort"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as SortValue)}
                className="appearance-none bg-white border border-blush py-2.5 pl-3.5 pr-8 text-xs uppercase tracking-wider text-charcoal rounded-xs focus:outline-none focus:border-gold transition-colors cursor-pointer"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-muted">
                <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Filters Row */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-blush/40">
        <span className="text-xs uppercase tracking-wider text-muted font-body mr-2">
          Brand:
        </span>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by brand">
          {availableBrands.map((brand) => {
            const isActive = selectedBrand === brand;
            return (
              <button
                key={brand}
                type="button"
                onClick={() => onBrandChange(brand)}
                aria-pressed={isActive}
                className={`px-4 py-1.5 text-xs uppercase tracking-widest transition-all duration-200 border rounded-xs ${
                  isActive
                    ? 'bg-charcoal text-white border-charcoal shadow-xs'
                    : 'bg-white text-charcoal border-blush/80 hover:border-gold hover:text-berry'
                }`}
              >
                {brand}
              </button>
            );
          })}
        </div>

        {isFiltered && (
          <button
            type="button"
            onClick={onResetFilters}
            className="ml-auto text-xs text-berry hover:text-strawberry underline underline-offset-4 tracking-wider transition-colors"
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
}
