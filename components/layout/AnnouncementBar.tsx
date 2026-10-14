'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const MESSAGES = [
  { text: 'Premium Fragrances · UK Delivery · Authentic Products' },
  { text: 'Free Standard Delivery on Orders Over £50' },
  { text: 'Shop the Pink Cloud Collection', href: '/collections/pink-cloud' },
];

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Rotate messages every 5 seconds (unless dismissed, paused, or user prefers reduced motion)
  useEffect(() => {
    if (isDismissed || prefersReducedMotion || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % MESSAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isDismissed, prefersReducedMotion, isPaused]);

  const handleDismiss = useCallback(() => {
    setIsDismissed(true);
    // Dispatch custom event to notify parent/header of bar dismissal
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('hm-announcement-dismiss'));
    }
  }, []);

  if (isDismissed) {
    return null;
  }

  const currentMessage = MESSAGES[currentIndex];

  return (
    <aside
      id="announcement-bar"
      role="region"
      aria-label="Announcements"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="relative z-50 h-8 bg-charcoal text-white text-xs tracking-wider uppercase flex items-center border-b border-white/10 select-none"
    >
      <div className="container-luxury h-full flex items-center justify-between">
        {/* Spacer to balance the dismiss button and keep text strictly centered */}
        <div className="w-7 flex-shrink-0" aria-hidden="true" />

        {/* Message Content */}
        <div className="flex-1 flex items-center justify-center overflow-hidden px-2 text-center">
          {prefersReducedMotion ? (
            <div className="truncate text-[11px] sm:text-xs text-white/90 font-medium">
              {MESSAGES[0].text}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="truncate text-[11px] sm:text-xs text-white/90 font-medium"
              >
                {currentMessage.href ? (
                  <Link
                    href={currentMessage.href}
                    className="inline-flex items-center gap-1 hover:text-gold transition-colors underline-offset-4 hover:underline"
                  >
                    <span>{currentMessage.text}</span>
                    <span aria-hidden="true" className="text-[10px]">→</span>
                  </Link>
                ) : (
                  <span>{currentMessage.text}</span>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Dismiss Button */}
        <div className="w-7 flex-shrink-0 flex items-center justify-end">
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss announcement"
            className="p-1 text-white/60 hover:text-white transition-colors rounded-sm focus-visible:outline-gold"
          >
            <X className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default AnnouncementBar;
