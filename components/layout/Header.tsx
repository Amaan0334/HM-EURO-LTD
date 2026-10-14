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
  { href: '/collections/pink-cloud', label: 'Pink Cloud' },
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

  // Monitor scroll position and announcement bar visibility
  useEffect(() => {
    // Check if announcement bar exists in DOM
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
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('hm-announcement-dismiss', handleDismiss);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Compute dynamic top offset based on AnnouncementBar height and scroll
  const currentTop =
    hasAnnouncement && !isScrolled
      ? `${Math.max(0, announcementHeight - (typeof window !== 'undefined' ? window.scrollY : 0))}px`
      : '0px';

  // Determine text color based on scrolled state and initialTextColor prop
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
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Left: Brand Wordmark */}
            
{/* Left: Brand Logo */}
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


            {/* Center: Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-8 lg:space-x-10"
              aria-label="Desktop primary navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-sm uppercase tracking-wider font-body font-medium transition-colors hover:text-gold relative py-1',
                      isActive ? 'text-gold' : textColorClass
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions (Search, Cart, Mobile Menu trigger) */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Search */}
              <Link
                href="/perfumes"
                aria-label="Search fragrances"
                className={cn(
                  'p-2 rounded-sm transition-colors hover:text-gold focus-visible:outline-gold',
                  textColorClass
                )}
              >
                <Search className="w-5 h-5" aria-hidden="true" />
              </Link>

              {/* Cart Button */}
              <button
                type="button"
                onClick={openCart}
                aria-label={`Shopping cart with ${itemCount} items`}
                className={cn(
                  'relative p-2 rounded-sm transition-colors hover:text-gold focus-visible:outline-gold',
                  textColorClass
                )}
              >
                <ShoppingBag className="w-5 h-5" aria-hidden="true" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-berry px-1 text-[10px] font-semibold text-white animate-in fade-in zoom-in duration-200">
                    {itemCount > 99 ? '99+' : itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger Menu Toggle (below md) */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                className={cn(
                  'md:hidden p-2 rounded-sm transition-colors hover:text-gold focus-visible:outline-gold',
                  textColorClass
                )}
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
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
