'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { contactFormSchema, type ContactFormData } from '@/lib/validation';

const SUBJECT_OPTIONS = [
  'General Enquiry',
  'Product Question',
  'Order Support',
  'Returns',
  'Other',
] as const;

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: 'General Enquiry',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    setErrorMessage(null);

    try {
      // Simulate submission with a 1.5s delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Contact form submitted data:', data);

      // Optionally call our local API route to ensure integration
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } catch (fetchErr) {
        // Fallback for simulation if network or test environment
        console.warn('API route call note:', fetchErr);
      }

      setSubmitStatus('success');
      reset();
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage(
        'There was an unexpected error sending your message. Please try again or email us directly.'
      );
      setSubmitStatus('error');
    }
  };

  return (
    <div className="bg-ivory/50 p-6 sm:p-8 md:p-10 border border-blush/40 rounded-sm">
      {submitStatus === 'success' ? (
        <div className="py-8 text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" aria-hidden="true" />
          <h3 className="font-display text-heading-md text-charcoal">
            Message Sent
          </h3>
          <p className="text-body-sm text-muted max-w-md mx-auto">
            Thank you for your message. We&apos;ll be in touch soon. [PLACEHOLDER — form submission not connected]
          </p>
          <button
            type="button"
            onClick={() => setSubmitStatus('idle')}
            className="mt-4 px-6 py-3 bg-charcoal text-white hover:bg-berry text-xs uppercase tracking-wider transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 border border-strawberry/30 rounded flex items-center gap-3 text-strawberry text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <span>{errorMessage || 'Failed to submit the form.'}</span>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
              Full Name <span className="text-strawberry">*</span>
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="e.g. Eleanor Vance"
              disabled={isSubmitting}
              {...register('name')}
              className="w-full border border-blush/50 bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none transition rounded-none"
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-strawberry mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
              Email Address <span className="text-strawberry">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="e.g. eleanor@example.co.uk"
              disabled={isSubmitting}
              {...register('email')}
              className="w-full border border-blush/50 bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none transition rounded-none"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-strawberry mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
              Subject <span className="text-strawberry">*</span>
            </label>
            <div className="relative">
              <select
                id="subject"
                disabled={isSubmitting}
                {...register('subject')}
                className="w-full border border-blush/50 bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none transition rounded-none appearance-none cursor-pointer"
                aria-invalid={errors.subject ? 'true' : 'false'}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              >
                {SUBJECT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted">
                ▼
              </div>
            </div>
            {errors.subject && (
              <p id="subject-error" className="text-xs text-strawberry mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
              Message <span className="text-strawberry">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="How can we assist you with our fragrance collection?"
              disabled={isSubmitting}
              {...register('message')}
              className="w-full border border-blush/50 bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none transition rounded-none resize-y"
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-strawberry mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-charcoal text-white hover:bg-berry w-full py-4 text-sm uppercase tracking-wider disabled:opacity-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                <span>Sending Message...</span>
              </>
            ) : (
              <span>Send Message</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
