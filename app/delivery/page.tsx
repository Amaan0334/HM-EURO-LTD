import type { Metadata } from 'next';
import Link from 'next/link';
import { Truck, Clock, ShieldCheck, Globe, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Delivery Information | HM EURO LTD',
  description: 'Learn about HM EURO LTD delivery options, UK standard and express shipping, tracking, and international policies.',
};

export default function DeliveryPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-ivory py-20 border-b border-blush/30 text-center">
        <div className="container-luxury max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gold font-medium mb-3">
            Shipping & Dispatch
          </p>
          <h1 className="font-display text-display-md text-charcoal mb-4">
            Delivery Information
          </h1>
          <p className="font-body text-body-lg text-muted">
            Carefully packaged and securely delivered to your door.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container-luxury max-w-3xl mx-auto space-y-12">
          {/* Status Alert Note */}
          <div className="p-5 bg-ivory border border-blush/60 rounded-sm flex items-start gap-4 text-charcoal">
            <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-body-sm leading-relaxed">
              Delivery information is being finalised. Please contact us for current delivery options and estimated timeframes.
            </p>
          </div>

          {/* Section: UK Standard Delivery */}
          <article className="space-y-3 pb-8 border-b border-blush/30">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-gold" aria-hidden="true" />
              <h2 className="font-display text-heading-md text-charcoal">
                UK Standard Delivery
              </h2>
            </div>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              Standard delivery across the mainland UK typically arrives within 3–5 working days following order dispatch. All parcels are securely packed with cushioned protective wrapping to ensure delicate glass bottles arrive safely. Free standard UK delivery is available on qualifying orders over a minimum spend threshold.
            </p>
          </article>

          {/* Section: UK Express Delivery */}
          <article className="space-y-3 pb-8 border-b border-blush/30">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gold" aria-hidden="true" />
              <h2 className="font-display text-heading-md text-charcoal">
                UK Express Delivery
              </h2>
            </div>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              Need your fragrance sooner? Our UK Express courier option delivers within 1–2 business days when orders are placed prior to 13:00 GMT Monday to Thursday. Express shipping rates are calculated at checkout.
            </p>
          </article>

          {/* Section: Order Processing */}
          <article className="space-y-3 pb-8 border-b border-blush/30">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-gold" aria-hidden="true" />
              <h2 className="font-display text-heading-md text-charcoal">
                Order Processing
              </h2>
            </div>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              Orders placed Monday through Friday are processed and dispatched within 24–48 business hours. Orders received on weekends or UK bank holidays are fulfilled on the following working day. You will receive an email confirmation as soon as your order has been packaged and handed to our courier.
            </p>
          </article>

          {/* Section: Tracking */}
          <article className="space-y-3 pb-8 border-b border-blush/30">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-gold" aria-hidden="true" />
              <h2 className="font-display text-heading-md text-charcoal">
                Tracking
              </h2>
            </div>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              Every dispatched order includes tracked delivery. A unique consignment tracking number and courier tracking link will be sent to the email address specified during checkout once your package has left our logistics facility.
            </p>
          </article>

          {/* Section: International Delivery */}
          <article className="space-y-3">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-gold" aria-hidden="true" />
              <h2 className="font-display text-heading-md text-charcoal">
                International Delivery
              </h2>
            </div>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              International shipping options and destinations are currently subject to perfume transport regulations and customs guidelines. For orders destined outside the United Kingdom, customs duties and import taxes may be levied by local authorities upon arrival. Please contact customer support for specific country eligibility.
            </p>
          </article>

          {/* Contact Support CTA */}
          <div className="pt-8 text-center">
            <p className="text-body-sm text-muted mb-4">
              Need assistance with an existing delivery or have special shipping requirements?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-charcoal text-white hover:bg-berry text-xs uppercase tracking-wider transition-colors"
            >
              Contact Customer Concierge
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
