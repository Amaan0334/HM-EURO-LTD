import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | HM EURO LTD',
  description:
    'Get in touch with the HM EURO LTD concierge team for fragrance advice, order enquiries, and brand partnerships.',
};

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-ivory py-20 border-b border-blush/30 text-center">
        <div className="container-luxury max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gold font-medium mb-3">
            Client Concierge
          </p>
          <h1 className="font-display text-display-md text-charcoal mb-4">
            Get in Touch
          </h1>
          <p className="font-body text-body-lg text-muted">
            Have a question about a fragrance or need assistance with your order? We are here to help.
          </p>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="py-16 md:py-24">
        <div className="container-luxury max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <h2 className="font-display text-heading-lg text-charcoal">
                  Send Us a Message
                </h2>
                <p className="text-body-sm text-muted mt-1">
                  Fill in the form below and our team will respond within 24 business hours.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Right Column: Contact Details */}
            <aside className="lg:col-span-5 space-y-8" aria-label="Contact information">
              <div className="bg-ivory p-8 border border-blush/40 rounded-sm space-y-6">
                <h2 className="font-display text-heading-lg text-charcoal pb-4 border-b border-blush/30">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-full text-gold flex-shrink-0 shadow-2xs">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-muted font-medium">
                        Email
                      </h3>
                      <a
                        href="mailto:contact@hmeuro.co.uk"
                        className="text-body-md font-medium text-charcoal hover:text-berry transition-colors block mt-0.5"
                      >
                        contact@hmeuro.co.uk
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-full text-gold flex-shrink-0 shadow-2xs">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-muted font-medium">
                        Telephone
                      </h3>
                      <p className="text-body-md font-medium text-charcoal mt-0.5">
                        +44 (0) 20 0000 0000
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-full text-gold flex-shrink-0 shadow-2xs">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-muted font-medium">
                        Registered Office
                      </h3>
                      <address className="not-italic text-body-md text-charcoal mt-0.5 leading-relaxed">
                        HM EURO LTD<br />
                        London, United Kingdom
                      </address>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-full text-gold flex-shrink-0 shadow-2xs">
                      <Clock className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-muted font-medium">
                        Business Hours
                      </h3>
                      <p className="text-body-md text-charcoal mt-0.5">
                        Monday - Friday, 9:00 - 17:00 GMT
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        Closed weekends and UK bank holidays
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fragrance Consultation Callout */}
              <div className="p-6 border border-blush/40 bg-white rounded-sm space-y-2">
                <h3 className="font-display text-heading-sm text-charcoal">
                  Looking for Scent Advice?
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  Our fragrance experts can help match you with the ideal notes based on your preferences. Mention your favorite notes in your message!
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
