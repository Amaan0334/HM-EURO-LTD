'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useCart } from '@/components/cart/CartProvider';

export interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}


const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/perfumes', label: 'Shop Perfumes' },
  {
    href: '/products/swiss-arabian-incense-01',
    label: 'Swiss Arabian',
  },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];


export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();
  const prefersReducedMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Focus close button on open
      const timeoutId = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
        clearTimeout(timeoutId);
        previousFocusRef.current?.focus();
      };
    }
  }, [isOpen]);

  // Close on Escape & trap focus inside overlay
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === 'Tab' && containerRef.current) {
        const focusableElements = containerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
        );
        const focusable = Array.from(focusableElements);
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Framer Motion variants
  const slideVariants = {
    closed: {
      x: prefersReducedMotion ? 0 : '100%',
      opacity: prefersReducedMotion ? 0 : 1,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween' as const,
        duration: prefersReducedMotion ? 0.01 : 0.35,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
    exit: {
      x: prefersReducedMotion ? 0 : '100%',
      opacity: prefersReducedMotion ? 0 : 1,
      transition: {
        type: 'tween' as const,
        duration: prefersReducedMotion ? 0.01 : 0.28,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const listVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.07,
        delayChildren: prefersReducedMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: prefersReducedMotion ? 0 : 25,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.35,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const handleCartClick = () => {
    onClose();
    openCart();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] overflow-hidden">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 bg-charcoal/50 backdrop-blur-xs"
          />

          {/* Slide-in drawer container */}
          <motion.div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            variants={slideVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white text-charcoal shadow-2xl flex flex-col justify-between"
          >
            {/* Top Bar with Brand and Close Button */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal/10">
              <Link
                href="/"
                onClick={onClose}
                className="font-display text-xl tracking-widest uppercase text-charcoal hover:text-gold transition-colors"
              >
                HM EURO
              </Link>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="p-2 -mr-2 text-charcoal/70 hover:text-charcoal transition-colors rounded-sm focus-visible:outline-gold"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav
              className="flex-1 overflow-y-auto px-6 py-8"
              aria-label="Mobile primary navigation"
            >
              <motion.ul
                variants={listVariants}
                initial="closed"
                animate="open"
                className="space-y-6"
              >
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <motion.li key={link.href} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={`group flex items-center justify-between font-display text-2xl tracking-wide transition-colors ${
                          isActive
                            ? 'text-gold'
                            : 'text-charcoal hover:text-gold'
                        }`}
                      >
                        <span className="relative">
                          {link.label}
                          {isActive && (
                            <span
                              className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-gold"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                        <ArrowRight
                          className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold"
                          aria-hidden="true"
                        />
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </nav>

            {/* Bottom Section: Cart & Brand Info */}
            <div className="border-t border-charcoal/10 bg-ivory/50 p-6 space-y-4">
              <button
                type="button"
                onClick={handleCartClick}
                className="w-full flex items-center justify-between p-4 bg-white border border-charcoal/10 hover:border-gold transition-colors rounded-xs shadow-xs text-charcoal"
                aria-label={`Shopping Cart, ${itemCount} items`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <ShoppingBag className="w-5 h-5 text-charcoal" aria-hidden="true" />
                    {itemCount > 0 && (
                      <span className="absolute -top-1.5 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-berry px-1 text-[10px] font-semibold text-white">
                        {itemCount}
                      </span>
                    )}
                  </div>
                  <span className="font-body text-sm font-medium uppercase tracking-wider">
                    Shopping Bag
                  </span>
                </div>

                <span className="font-body text-xs text-muted">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'}
                </span>
              </button>

              <div className="text-center pt-2">
                <p className="font-body text-xs text-muted tracking-wider uppercase">
                  HM EURO LTD · Premium UK Fragrances
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default MobileNavigation;
