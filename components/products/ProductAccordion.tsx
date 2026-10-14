'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Product } from '@/types/product';

interface ProductAccordionProps {
  product: Product;
}

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export function ProductAccordion({ product }: ProductAccordionProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    description: true, // open by default
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const items: AccordionItem[] = [
    {
      id: 'description',
      title: 'Description',
      content: (
        <div className="space-y-3 text-body-sm text-charcoal/80 leading-relaxed font-body">
          <p>{product.description}</p>
          {product.fragranceFamily && (
            <p className="text-xs text-muted">
              <strong className="text-charcoal font-medium">Fragrance Family:</strong>{' '}
              {product.fragranceFamily}
            </p>
          )}
          {product.tagline && (
            <p className="italic text-berry text-xs">
              &ldquo;{product.tagline}&rdquo;
            </p>
          )}
        </div>
      ),
    },
    {
      id: 'delivery',
      title: 'Delivery & Shipping',
      content: (
        <div className="space-y-2 text-body-sm text-charcoal/80 leading-relaxed font-body">
          <p>Standard UK Delivery: 2-4 working days.</p>
          <p>Next Day UK Delivery available on orders placed before 2pm.</p>
          <p>Complimentary UK shipping on orders over £50.</p>
        </div>
      ),
    },
    {
      id: 'returns',
      title: 'Returns & Guarantee',
      content: (
        <div className="space-y-2 text-body-sm text-charcoal/80 leading-relaxed font-body">
          <p>14-day hassle-free returns for unopened bottles in original cellophane packaging.</p>
          <p>For hygiene reasons, opened fragrances cannot be returned unless defective.</p>
          <p>Contact customer care at support@hmeuroltd.co.uk for return authorization.</p>
        </div>
      ),
    },
    {
      id: 'usage',
      title: 'Application & Longevity',
      content: (
        <div className="space-y-2 text-body-sm text-charcoal/80 leading-relaxed font-body">
          <p>
            Spray onto pulse points where the body radiates natural warmth — wrists, behind the ears, and base of the throat.
          </p>
          <p className="text-xs text-muted">
            For maximum longevity, apply immediately after bathing onto moisturized skin. Do not rub wrists together after application.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="divide-y divide-blush/60 border-y border-blush/60 mt-8">
      {items.map((item) => {
        const isOpen = !!openSections[item.id];
        return (
          <div key={item.id} className="py-4">
            <button
              type="button"
              onClick={() => toggleSection(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              className="flex w-full items-center justify-between text-left text-xs uppercase tracking-widest text-charcoal font-body hover:text-berry transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            >
              <span>{item.title}</span>
              <ChevronDown
                className={`w-4 h-4 text-muted transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-charcoal' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div
                id={`accordion-panel-${item.id}`}
                role="region"
                aria-labelledby={`accordion-header-${item.id}`}
                className="mt-3 pt-1"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
