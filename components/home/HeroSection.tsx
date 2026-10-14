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
      aria-label="Hero — Meet Your Sweeter Side"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-charcoal"
    >
      {/* Background Image with priority loading */}
      <div className="absolute inset-0 select-none">
        <Image
          src="/images/pink-cloud/bottle-splash.jpg"
          alt="Sugar Mallow Pink Cloud Eau de Parfum bottle splashing in strawberry mist"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Blush & charcoal gradient overlay for readability and luxury tone */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-berry/40" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content (Centered, max-w-3xl) */}
      <div className="relative z-10 w-full max-w-3xl mx-auto py-24 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Small Brand Label */}
          <motion.span
            variants={childVariants}
            className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold font-body font-semibold mb-4 drop-shadow-xs"
          >
            ATRALIA
          </motion.span>

          {/* Main Headline */}
          <motion.h1
            variants={childVariants}
            className="font-display text-display-md sm:text-display-lg md:text-display-xl text-white font-normal leading-[1.08] tracking-tight mb-5 whitespace-pre-line drop-shadow-md text-balance"
          >
            Meet Your{'\n'}Sweeter Side
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={childVariants}
            className="font-body text-base sm:text-lg md:text-xl text-white/90 font-light tracking-wide mb-8 max-w-xl mx-auto drop-shadow-xs"
          >
            Sugar Mallow — Pink Cloud Eau de Parfum
          </motion.p>

          {/* Two CTA Buttons */}
          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none pt-2"
          >
            <Link
              href="#pink-cloud-experience"
              className="w-full sm:w-auto px-8 py-3 text-sm uppercase tracking-wider font-medium text-center bg-white text-charcoal hover:bg-gold hover:text-white transition-all duration-300 rounded-xs shadow-sm hover:shadow-md"
            >
              Explore Pink Cloud
            </Link>
            <Link
              href="/perfumes"
              className="w-full sm:w-auto px-8 py-3 text-sm uppercase tracking-wider font-medium text-center border border-white text-white hover:bg-white hover:text-charcoal transition-all duration-300 rounded-xs shadow-sm"
            >
              Shop Perfumes
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <Link
          href="#pink-cloud-experience"
          aria-label="Scroll down to explore Pink Cloud experience"
          className="flex flex-col items-center gap-1 group text-white/80 hover:text-white transition-colors duration-200"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/70 group-hover:text-gold transition-colors duration-200">
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
            <ChevronDown className="w-5 h-5 text-white/80 group-hover:text-gold transition-colors duration-200" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}

export default HeroSection;
