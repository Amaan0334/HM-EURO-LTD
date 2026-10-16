
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/currency';
import type { CampaignSlide } from '@/types/product';

interface PinkCloudScrollExperienceProps {
  slides: CampaignSlide[];
  productSlug: string;
  productPrice: number;
}

export default function PinkCloudScrollExperience({
  slides,
  productSlug,
  productPrice,
}: PinkCloudScrollExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [gsapReady, setGsapReady] = useState(false);

  // Detect mobile and reduced motion preferences
  useEffect(() => {
    const motionMq = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    setPrefersReducedMotion(motionMq.matches);

    const motionHandler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    motionMq.addEventListener('change', motionHandler);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      motionMq.removeEventListener('change', motionHandler);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // GSAP ScrollTrigger — desktop only
  useEffect(() => {
    if (
      prefersReducedMotion ||
      isMobile ||
      !containerRef.current ||
      slides.length === 0
    ) {
      return;
    }

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    const initGSAP = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');

        if (cancelled) return;

        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        if (!container) return;

        const totalSlides = slides.length;
        const scrollDistance = window.innerHeight * 4;

        ctx = gsap.context(() => {
          ScrollTrigger.create({
            trigger: container,
            start: 'top top',
            end: `+=${scrollDistance}`,
            pin: true,
            pinSpacing: true,
            scrub: 0.3,
            onUpdate: (self) => {
              const progress = self.progress;

              const slideIndex = Math.min(
                Math.floor(progress * totalSlides),
                totalSlides - 1
              );

              setActiveSlide(slideIndex);
            },
          });
        }, container);

        setGsapReady(true);
      } catch (error) {
        console.warn('GSAP failed to load:', error);
        setGsapReady(true);
      }
    };

    initGSAP();

    return () => {
      cancelled = true;
      if (ctx) ctx.revert();
    };
  }, [prefersReducedMotion, isMobile, slides.length]);

  // MOBILE / REDUCED MOTION — sequential layout
  if (isMobile || prefersReducedMotion) {
    return (
      <section
        id="fragrance-scroll-experience"
        className="bg-stone-50"
        aria-label="Swiss Arabian fragrance story"
      >
        <div className="py-12">
          <div className="container-luxury mb-12 text-center">
            <span className="mb-3 block font-body text-xs uppercase tracking-[0.3em] text-amber-700">
              The Swiss Arabian Story
            </span>

            <h2 className="font-display text-display-sm text-charcoal">
              Discover the Journey
            </h2>
          </div>

          <div className="space-y-8">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={cn(
                  'py-10',
                  index % 2 === 0 ? 'bg-white' : 'bg-stone-50'
                )}
              >
                <div className="container-luxury mx-auto max-w-4xl">
                  <div className="grid grid-cols-1 items-center gap-6">
                    <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden">
                      <Image
                        src={slide.image.src}
                        alt={slide.image.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 80vw, 40vw"
                      />
                    </div>

                    <div className="px-4 text-center">
                      <span className="mb-2 block font-body text-xs uppercase tracking-[0.3em] text-amber-700/60">
                        {String(index + 1).padStart(2, '0')} /{' '}
                        {String(slides.length).padStart(2, '0')}
                      </span>

                      <h3 className="mb-2 font-display text-display-sm text-charcoal">
                        {slide.title}
                      </h3>

                      {slide.subtitle && (
                        <p className="text-body-md text-muted">
                          {slide.subtitle}
                        </p>
                      )}

                      {slide.description && (
                        <p className="mt-2 text-body-sm text-muted/70">
                          {slide.description}
                        </p>
                      )}

                      {index === slides.length - 1 && (
                        <div className="mt-6 flex flex-col gap-3">
                          <Link
                            href={`/products/${productSlug}`}
                            className="inline-block bg-charcoal px-8 py-3 text-sm uppercase tracking-wider text-white transition-colors hover:bg-berry"
                          >
                            Explore Product — {formatPrice(Math.round(productPrice * 100))}
                          </Link>

                          <Link
                            href={`/products/${productSlug}`}
                            className="inline-block border border-charcoal px-8 py-3 text-sm uppercase tracking-wider text-charcoal transition-colors hover:bg-charcoal hover:text-white"
                          >
                            Discover More
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // DESKTOP — pinned scroll experience
  return (
    <section
      id="fragrance-scroll-experience"
      ref={containerRef}
      className="relative"
      aria-label="Swiss Arabian fragrance story — scroll to explore"
    >
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-white">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          const isLastSlide = index === slides.length - 1;
          const isEven = index % 2 === 0;

          return (
            <div
              key={slide.id}
              className={cn(
                'absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out',
                isActive
                  ? 'z-10 opacity-100'
                  : 'pointer-events-none z-0 opacity-0'
              )}
              aria-hidden={!isActive}
            >
              <div className="container-luxury mx-auto w-full max-w-6xl">
                <div className="grid grid-cols-2 items-center gap-16">
                  {/* Product image */}
                  <div className={cn(isEven ? 'order-1' : 'order-2')}>
                    <div
                      className="relative mx-auto w-full"
                      style={{ maxWidth: '420px' }}
                    >
                      <div className="relative aspect-[3/4]">
                        <Image
                          src={slide.image.src}
                          alt={slide.image.alt}
                          fill
                          className={cn(
                            'object-contain drop-shadow-2xl transition-transform duration-700',
                            isActive ? 'scale-100' : 'scale-95'
                          )}
                          sizes="40vw"
                          priority={index < 2}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product story */}
                  <div
                    className={cn(
                      isEven ? 'order-2' : 'order-1',
                      'flex flex-col'
                    )}
                  >
                    <span className="mb-6 block font-body text-xs uppercase tracking-[0.3em] text-amber-700/60">
                      {String(index + 1).padStart(2, '0')} /{' '}
                      {String(slides.length).padStart(2, '0')}
                    </span>

                    <h3
                      className={cn(
                        'mb-4 font-display text-display-md text-charcoal text-balance',
                        'transition-all duration-600 delay-100',
                        isActive
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-6 opacity-0'
                      )}
                    >
                      {slide.title}
                    </h3>

                    {slide.subtitle && (
                      <p
                        className={cn(
                          'mb-4 max-w-md text-body-lg text-muted',
                          'transition-all duration-600 delay-200',
                          isActive
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-4 opacity-0'
                        )}
                      >
                        {slide.subtitle}
                      </p>
                    )}

                    {slide.description && (
                      <p
                        className={cn(
                          'max-w-sm text-body-md text-muted/70',
                          'transition-all duration-600 delay-300',
                          isActive
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-4 opacity-0'
                        )}
                      >
                        {slide.description}
                      </p>
                    )}

                    {isLastSlide && (
                      <div
                        className={cn(
                          'mt-8 flex flex-wrap gap-4',
                          'transition-all duration-600 delay-300',
                          isActive
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-4 opacity-0'
                        )}
                      >
                        <Link
                          href={`/products/${productSlug}`}
                          className="inline-block bg-charcoal px-8 py-3.5 text-sm uppercase tracking-wider text-white transition-colors duration-300 hover:bg-berry"
                        >
                          Explore Product — {formatPrice(Math.round(productPrice * 100))}
                        </Link>

                        <Link
                          href={`/products/${productSlug}`}
                          className="inline-block border border-charcoal px-8 py-3.5 text-sm uppercase tracking-wider text-charcoal transition-colors duration-300 hover:bg-charcoal hover:text-white"
                        >
                          Discover More
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Progress dots */}
        <div className="absolute right-8 top-1/2 z-20 -translate-y-1/2">
          <div className="flex flex-col items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={cn(
                  'w-2 rounded-full transition-all duration-500',
                  index === activeSlide
                    ? 'h-8 bg-amber-700'
                    : 'h-2 bg-amber-700/30 hover:bg-amber-700/50'
                )}
              />
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        {activeSlide === 0 && !gsapReady && (
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-muted/60">
            <span className="text-xs uppercase tracking-wider">
              Loading experience…
            </span>
          </div>
        )}

        {activeSlide === 0 && gsapReady && (
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 animate-bounce flex-col items-center gap-2 text-muted/60">
            <span className="text-xs uppercase tracking-wider">
              Scroll to explore
            </span>

            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="text-amber-700"
              aria-hidden="true"
            >
              <path
                d="M7.29 23.71a1 1 0 001.42 0l6.36-6.37a1 1 0 00-1.42-1.41L8 21.59l-5.66-5.66a1 1 0 00-1.41 1.41l6.36 6.37zM7 0v23h2V0H7z"
                fill="currentColor"
              />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}
