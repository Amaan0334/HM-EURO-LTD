import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = 2024;

  return (
    <footer className="bg-charcoal text-white border-t border-white/10 mt-auto">
      {/* Main Footer Content */}
      <div className="container-luxury py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block font-display text-2xl font-medium tracking-widest uppercase text-white hover:text-gold transition-colors"
            >
              HM EURO
            </Link>
            <p className="font-body text-sm text-white/70 leading-relaxed max-w-xs">
              Premium fragrances, curated for you. Bringing authentic luxury perfumes and distinctive scent stories to the UK.
            </p>
            {/* Social Media Links */}
            <div className="pt-2">
              <span className="sr-only">Follow us on social media</span>
              <div className="flex items-center space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow HM EURO on Instagram (opens in new tab)"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-gold hover:bg-gold/10 transition-colors"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow HM EURO on Facebook (opens in new tab)"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-gold hover:bg-gold/10 transition-colors"
                >
                  <Facebook className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 — Shop */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-semibold tracking-wider uppercase text-gold">
              Shop Fragrances
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/perfumes"
                  className="text-sm text-white/70 hover:text-white transition-colors block"
                >
                  All Perfumes
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/pink-cloud"
                  className="text-sm text-white/70 hover:text-white transition-colors block"
                >
                  Pink Cloud Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/perfumes?target=women"
                  className="text-sm text-white/70 hover:text-white transition-colors block"
                >
                  Women&apos;s Perfumes
                </Link>
              </li>
              <li>
                <Link
                  href="/perfumes?target=men"
                  className="text-sm text-white/70 hover:text-white transition-colors block"
                >
                  Men&apos;s Fragrances
                </Link>
              </li>
              <li>
                <Link
                  href="/perfumes?target=unisex"
                  className="text-sm text-white/70 hover:text-white transition-colors block"
                >
                  Unisex Scent Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Information */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-semibold tracking-wider uppercase text-gold">
              Information
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/70 hover:text-white transition-colors block"
                >
                  About HM EURO
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 hover:text-white transition-colors block"
                >
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className="text-sm text-white/70 hover:text-white transition-colors block"
                >
                  Delivery & Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-sm text-white/70 hover:text-white transition-colors block"
                >
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Legal */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-semibold tracking-wider uppercase text-gold">
              Legal & Privacy
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white/70 hover:text-white transition-colors block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-white/70 hover:text-white transition-colors block"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="text-left text-sm text-white/70 hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0"
                >
                  Cookie Preferences
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {currentYear} HM EURO LTD. All rights reserved.</p>

          {/* Payment icons placeholder */}
          <div
            className="flex flex-wrap items-center gap-2"
            aria-label="Supported payment methods"
          >
            <span className="px-2.5 py-1 rounded-xs bg-white/5 border border-white/10 text-[11px] font-medium tracking-wider uppercase text-white/80">
              Visa
            </span>
            <span className="px-2.5 py-1 rounded-xs bg-white/5 border border-white/10 text-[11px] font-medium tracking-wider uppercase text-white/80">
              Mastercard
            </span>
            <span className="px-2.5 py-1 rounded-xs bg-white/5 border border-white/10 text-[11px] font-medium tracking-wider uppercase text-white/80">
              Amex
            </span>
            <span className="px-2.5 py-1 rounded-xs bg-white/5 border border-white/10 text-[11px] font-medium tracking-wider uppercase text-white/80">
              Apple Pay
            </span>
            <span className="px-2.5 py-1 rounded-xs bg-white/5 border border-white/10 text-[11px] font-medium tracking-wider uppercase text-white/80">
              Google Pay
            </span>
            <span className="px-2.5 py-1 rounded-xs bg-white/5 border border-white/10 text-[11px] font-medium tracking-wider uppercase text-white/80">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
