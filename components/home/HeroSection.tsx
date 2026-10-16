
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section
      aria-label="Swiss Arabian Incense 1 — Discover the Art of Incense"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-charcoal px-4"
    >
      {/* Swiss Arabian product background */}
      <div className="absolute inset-0 select-none">
        <Image
          src="/images/swiss-arabian-incense-01/incense 1.jpg"
          alt="Swiss Arabian Incense 1 fragrance"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark luxury overlay for readable text */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/70" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-3xl py-24 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Brand label */}
          <motion.span
            variants={childVariants}
            className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold drop-shadow-xs sm:text-sm"
          >
            SWISS ARABIAN
          </motion.span>

          {/* Main heading */}
          <motion.h1
            variants={childVariants}
            className="mb-5 whitespace-pre-line font-display text-display-md font-normal leading-[1.08] tracking-tight text-white drop-shadow-md text-balance sm:text-display-lg md:text-display-xl"
          >
            Discover the{'\n'}Art of Incense
          </motion.h1>

          {/* Product subtitle */}
          <motion.p
            variants={childVariants}
            className="mx-auto mb-8 max-w-xl font-body text-base font-light tracking-wide text-white/90 drop-shadow-xs sm:text-lg md:text-xl"
          >
            Swiss Arabian Incense 1 — 50ml
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={childVariants}
            className="flex w-full max-w-md flex-col items-center justify-center gap-4 pt-2 sm:max-w-none sm:flex-row"
          >
            <Link
              href="#fragrance-scroll-experience"
              className="w-full rounded-xs bg-white px-8 py-3 text-center text-sm font-medium uppercase tracking-wider text-charcoal shadow-sm transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-md sm:w-auto"
            >
              Explore Incense 1
            </Link>

            <Link
              href="/perfumes"
              className="w-full rounded-xs border border-white px-8 py-3 text-center text-sm font-medium uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-white hover:text-charcoal sm:w-auto"
            >
              Shop Perfumes
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center"
      >
        <Link
          href="#fragrance-scroll-experience"
          aria-label="Scroll down to explore Swiss Arabian Incense 1"
          className="group flex flex-col items-center gap-1 text-white/80 transition-colors duration-200 hover:text-white"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/70 transition-colors duration-200 group-hover:text-gold">
            Scroll
          </span>

          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, 6, 0],
                  }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ChevronDown className="h-5 w-5 text-white/80 transition-colors duration-200 group-hover:text-gold" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}

export default HeroSection;
