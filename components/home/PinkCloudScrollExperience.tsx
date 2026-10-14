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

  // Detect mobile and reduced motion
  useEffect(() => {
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionMq.matches);
    const motionHandler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionMq.addEventListener('change', motionHandler);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      motionMq.removeEventListener('change', motionHandler);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // GSAP ScrollTrigger — desktop only
  useEffect(() => {
    if (prefersReducedMotion || isMobile || !containerRef.current) return;

    let ctx: { revert: () => void } | null = null;

    const initGSAP = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
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
        setGsapReady(true); // Show content anyway
      }
    };

    initGSAP();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [prefersReducedMotion, isMobile, slides.length]);

  // ─── MOBILE / REDUCED MOTION: Sequential layout ───
  if (isMobile || prefersReducedMotion) {
    return (
      <section
        id="pink-cloud-experience"
        className="bg-pink-light"
        aria-label="Pink Cloud fragrance story"
      >
        <div className="py-12">
          {/* Section intro */}
          <div className="container-luxury text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-rose font-body mb-3 block">
              The Pink Cloud Story
            </span>
            <h2 className="font-display text-display-sm text-charcoal">
              Discover the Journey
            </h2>
          </div>

          {/* Slides as sequential cards */}
          <div className="space-y-8">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={cn(
                  'py-10',
                  index % 2 === 0 ? 'bg-white' : 'bg-pink-light'
                )}
              >
                <div className="container-luxury max-w-4xl">
                  <div className="grid grid-cols-1 gap-6 items-center">
                    {/* Image */}
                    <div className="relative aspect-square max-w-xs mx-auto overflow-hidden">
                      <Image
                        src={slide.image.src}
                        alt={slide.image.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 80vw, 40vw"
                      />
                    </div>

                    {/* Text */}
                    <div className="text-center px-4">
                      <span className="text-xs uppercase tracking-[0.3em] text-rose/50 font-body mb-2 block">
                        {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-display-sm text-charcoal mb-2">
                        {slide.title}
                      </h3>
                      {slide.subtitle && (
                        <p className="text-muted text-body-md">{slide.subtitle}</p>
                      )}
                      {slide.description && (
                        <p className="text-muted/70 text-body-sm mt-2">{slide.description}</p>
                      )}

                      {/* CTA on last slide */}
                      {index === slides.length - 1 && (
                        <div className="mt-6 flex flex-col gap-3">
                          <Link
                            href={`/products/${productSlug}`}
                            className="inline-block bg-charcoal text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-berry transition-colors"
                          >
                            Add to Bag — {formatPrice(productPrice)}
                          </Link>
                          <Link
                            href="/collections/pink-cloud"
                            className="inline-block border border-charcoal text-charcoal px-8 py-3 text-sm uppercase tracking-wider hover:bg-charcoal hover:text-white transition-colors"
                          >
                            View Collection
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

  // ─── DESKTOP: Pinned scroll experience ───
  return (
    <section
      id="pink-cloud-experience"
      ref={containerRef}
      className="relative"
      aria-label="Pink Cloud fragrance story — scroll to explore"
    >
      {/* Pinned viewport */}
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-pink-light via-pink-bg to-white">

        {/* All slides — absolutely positioned, only active one visible */}
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          const isLastSlide = index === slides.length - 1;
          const isEven = index % 2 === 0;

          return (
            <div
              key={slide.id}
              className={cn(
                'absolute inset-0 flex items-center justify-center',
                'transition-opacity duration-500 ease-in-out',
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              )}
              aria-hidden={!isActive}
            >
              <div className="container-luxury w-full max-w-6xl">
                <div className="grid grid-cols-2 gap-16 items-center">

                  {/* Image column */}
                  <div className={cn(isEven ? 'order-1' : 'order-2')}>
                    <div className="relative mx-auto" style={{ maxWidth: '420px' }}>
                      <div className="relative aspect-[3/4]">
                        <Image
                          src={slide.image.src}
                          alt={slide.image.alt}
                          fill
                          className={cn(
                            'object-contain drop-shadow-2xl',
                            'transition-transform duration-700',
                            isActive ? 'scale-100' : 'scale-95'
                          )}
                          sizes="40vw"
                          priority={index < 2}
                        />
                      </div>

                      {/* Cap overlay for slide 2 */}
                      {slide.overlayImages && index === 1 && (
                        <div
                          className={cn(
                            'absolute top-0 left-1/2 w-[35%] transition-all duration-700',
                            isActive
                              ? '-translate-x-1/2 -translate-y-8 opacity-100'
                              : '-translate-x-1/2 translate-y-0 opacity-0'
                          )}
                        >
                          <Image
                            src={slide.overlayImages[0].src}
                            alt={slide.overlayImages[0].alt}
                            width={slide.overlayImages[0].width}
                            height={slide.overlayImages[0].height}
                            className="drop-shadow-lg"
                          />
                        </div>
                      )}

                      {/* Strawberry overlay for slide 4 */}
                      {slide.overlayImages && index === 3 && (
                        <div
                          className={cn(
                            'absolute -right-12 -top-12 w-[55%] transition-all duration-700',
                            isActive
                              ? 'translate-y-0 rotate-0 opacity-80'
                              : 'translate-y-6 rotate-12 opacity-0'
                          )}
                        >
                          <Image
                            src={slide.overlayImages[0].src}
                            alt={slide.overlayImages[0].alt}
                            width={slide.overlayImages[0].width}
                            height={slide.overlayImages[0].height}
                            className="drop-shadow-xl"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Text column */}
                  <div className={cn(
                    isEven ? 'order-2' : 'order-1',
                    'flex flex-col'
                  )}>
                    {/* Slide counter */}
                    <span className="text-xs uppercase tracking-[0.3em] text-rose/50 font-body mb-6 block">
                      {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                    </span>

                    <h3
                      className={cn(
                        'font-display text-display-md text-charcoal mb-4 text-balance',
                        'transition-all duration-600 delay-100',
                        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                      )}
                    >
                      {slide.title}
                    </h3>

                    {slide.subtitle && (
                      <p
                        className={cn(
                          'text-body-lg text-muted mb-4 max-w-md',
                          'transition-all duration-600 delay-200',
                          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        )}
                      >
                        {slide.subtitle}
                      </p>
                    )}

                    {slide.description && (
                      <p
                        className={cn(
                          'text-body-md text-muted/70 max-w-sm',
                          'transition-all duration-600 delay-300',
                          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        )}
                      >
                        {slide.description}
                      </p>
                    )}

                    {/* CTA on last slide */}
                    {isLastSlide && (
                      <div
                        className={cn(
                          'mt-8 flex gap-4',
                          'transition-all duration-600 delay-300',
                          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        )}
                      >
                        <Link
                          href={`/products/${productSlug}`}
                          className="inline-block bg-charcoal text-white px-8 py-3.5 text-sm uppercase tracking-wider hover:bg-berry transition-colors duration-300"
                        >
                          Add to Bag — {formatPrice(productPrice)}
                        </Link>
                        <Link
                          href="/collections/pink-cloud"
                          className="inline-block border border-charcoal text-charcoal px-8 py-3.5 text-sm uppercase tracking-wider hover:bg-charcoal hover:text-white transition-colors duration-300"
                        >
                          View Collection
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Progress dots — right side */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
          <div className="flex flex-col items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  'w-2 rounded-full transition-all duration-500',
                  i === activeSlide
                    ? 'h-8 bg-rose'
                    : 'h-2 bg-rose/30 hover:bg-rose/50'
                )}
              />
            ))}
          </div>
        </div>

        {/* Scroll hint — bottom (only on first slide) */}
        {activeSlide === 0 && !gsapReady && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted/60">
            <span className="text-xs uppercase tracking-wider">Loading experience…</span>
          </div>
        )}
        {activeSlide === 0 && gsapReady && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted/60 animate-bounce">
            <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-rose">
              <path d="M7.29 23.71a1 1 0 001.42 0l6.36-6.37a1 1 0 00-1.42-1.41L8 21.59l-5.66-5.66a1 1 0 00-1.41 1.41l6.36 6.37zM7 0v23h2V0H7z" fill="currentColor"/>
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}
