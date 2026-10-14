'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { newsletterSchema, type NewsletterFormData } from '@/lib/validation';

export function NewsletterSection() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
      consent: false as unknown as true,
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      setFormError(null);
      // Log to console that this is a simulated placeholder submission
      console.log('[Newsletter PLACEHOLDER] Form submitted with data:', data);

      // Simulate network request delay of 1.5 seconds
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);
      reset();
    } catch {
      setFormError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <section
      aria-label="Newsletter Subscription"
      className="bg-charcoal text-white section-padding"
    >
      <div className="container-luxury">
        <div className="max-w-xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-display text-display-sm text-white mb-3 leading-tight">
            Stay in the Know
          </h2>

          {/* Subtitle */}
          <p className="text-white/70 font-body text-body-md mb-8 leading-relaxed">
            Be the first to discover new fragrances, exclusive offers, and
            curated scent stories.
          </p>

          {isSuccess ? (
            <div
              role="status"
              aria-live="polite"
              className="bg-white/5 border border-gold/40 rounded-sm p-6 text-center animate-fade-in"
            >
              <CheckCircle2
                className="w-10 h-10 text-gold mx-auto mb-3"
                aria-hidden="true"
              />
              <p className="font-display text-heading-md text-white mb-2">
                Thank you for subscribing!
              </p>
              <p className="text-xs text-white/60 font-body">
                [PLACEHOLDER — not connected to email service]
              </p>
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="mt-5 text-xs uppercase tracking-wider text-gold hover:text-white underline transition-colors duration-200 cursor-pointer"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-5 text-left"
            >
              {/* Email Input Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email Address
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      id="newsletter-email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter your email address"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'newsletter-email-error' : undefined}
                      {...register('email')}
                      className="w-full bg-transparent border-b border-white/30 focus:border-gold text-white placeholder:text-white/40 py-3 px-1 transition-colors duration-200 focus:outline-none font-body text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 text-sm uppercase tracking-wider font-medium bg-gold text-white hover:bg-gold/80 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer rounded-xs shrink-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <span>Subscribe</span>
                    )}
                  </button>
                </div>
                {errors.email?.message && (
                  <p
                    id="newsletter-email-error"
                    className="text-strawberry text-xs mt-1"
                    role="alert"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Consent Checkbox */}
              <div className="flex flex-col gap-1 pt-1">
                <div className="flex items-start gap-3">
                  <input
                    id="newsletter-consent"
                    type="checkbox"
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={
                      errors.consent ? 'newsletter-consent-error' : undefined
                    }
                    {...register('consent')}
                    className="mt-1 h-4 w-4 rounded-xs border-white/30 bg-white/10 accent-[#C5A15D] cursor-pointer"
                  />
                  <label
                    htmlFor="newsletter-consent"
                    className="text-xs text-white/70 select-none cursor-pointer leading-relaxed font-body"
                  >
                    I agree to receive marketing emails from HM EURO LTD. You
                    can unsubscribe at any time.
                  </label>
                </div>
                {errors.consent?.message && (
                  <p
                    id="newsletter-consent-error"
                    className="text-strawberry text-xs mt-0.5 pl-7"
                    role="alert"
                  >
                    {errors.consent.message}
                  </p>
                )}
              </div>

              {/* Server / Generic Error Message */}
              {formError && (
                <p className="text-strawberry text-sm text-center" role="alert">
                  {formError}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
