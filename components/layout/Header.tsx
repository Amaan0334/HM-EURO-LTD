
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import { useCart } from '@/components/cart/CartProvider';
import { MobileNavigation } from '@/components/layout/MobileNavigation';
import { cn } from '@/lib/utils';

export interface HeaderProps {
  /**
   * Text color when header is in transparent state (at top of page).
   * 'charcoal' (default) or 'white' (for dark hero backgrounds).
   */
  initialTextColor?: 'charcoal' | 'white';
}

const NAV_LINKS = [
  { href: '/perfumes', label: 'Shop Perfumes' },
  {
    href: '/products/swiss-arabian-incense-01',
    label: 'Swiss Arabian',
  },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header({ initialTextColor = 'charcoal' }: HeaderProps) {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasAnnouncement, setHasAnnouncement] = useState(true);
  const [announcementHeight, setAnnouncementHeight] = useState(32);

  useEffect(() => {
    const announcementEl = document.getElementById('announcement-bar');

    if (!announcementEl) {
      setHasAnnouncement(false);
      setAnnouncementHeight(0);
    } else {
      setAnnouncementHeight(announcementEl.offsetHeight || 32);
    }

    const handleDismiss = () => {
      setHasAnnouncement(false);
      setAnnouncementHeight(0);
    };

    window.addEventListener('hm-announcement-dismiss', handleDismiss);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('hm-announcement-dismiss', handleDismiss);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentTop =
    hasAnnouncement && !isScrolled
      ? `${Math.max(
          0,
          announcementHeight -
            (typeof window !== 'undefined' ? window.scrollY : 0)
        )}px`
      : '0px';

  const textColorClass = isScrolled
    ? 'text-charcoal'
    : initialTextColor === 'white'
      ? 'text-white'
      : 'text-charcoal';

  return (
    <>
      <header
        style={{ top: currentTop }}
        className={cn(
          'fixed left-0 right-0 z-50 transition-[background-color,border-color,box-shadow,top] duration-300 ease-smooth',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-charcoal/10 shadow-xs'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <div className="container-luxury">
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* Brand Logo */}
            <div className="flex items-center">
              <Link href="/" aria-label="HM EURO LTD Home">
                <Image
                  src="/logo.png"
                  alt="HM EURO LTD"
                  width={150}
                  height={100}
                  priority
                  className="h-12 w-auto object-contain sm:h-14"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden items-center space-x-8 md:flex lg:space-x-10"
              aria-label="Desktop primary navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative py-1 font-body text-sm font-medium uppercase tracking-wider transition-colors hover:text-gold',
                      isActive ? 'text-gold' : textColorClass
                    )}
                  >
                    {link.label}

                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 h-[1.5px] w-full bg-gold"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Search, Cart and Mobile Menu */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              <Link
                href="/perfumes"
                aria-label="Search fragrances"
                className={cn(
                  'rounded-sm p-2 transition-colors hover:text-gold focus-visible:outline-gold',
                  textColorClass
                )}
              >
                <Search className="h-5 w-5" aria-hidden="true" />
              </Link>

              <button
                type="button"
                onClick={openCart}
                aria-label={`Shopping cart with ${itemCount} items`}
                className={cn(
                  'relative rounded-sm p-2 transition-colors hover:text-gold focus-visible:outline-gold',
                  textColorClass
                )}
              >
                <ShoppingBag className="h-5 w-5" aria-hidden="true" />

                {itemCount > 0 && (
                  <span className="animate-in fade-in zoom-in duration-200 absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-berry px-1 text-[10px] font-semibold text-white">
                    {itemCount > 99 ? '99+' : itemCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                className={cn(
                  'rounded-sm p-2 transition-colors hover:text-gold focus-visible:outline-gold md:hidden',
                  textColorClass
                )}
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

export default Header;
