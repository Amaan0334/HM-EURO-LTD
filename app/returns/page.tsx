import type { Metadata } from 'next';
import Link from 'next/link';
import { RotateCcw, PackageCheck, CreditCard, AlertTriangle, MessageCircle, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Returns Policy | HM EURO LTD',
  description: 'Understand the returns and refunds policy for HM EURO LTD luxury fragrances.',
};

export default function ReturnsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-ivory py-20 border-b border-blush/30 text-center">
        <div className="container-luxury max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gold font-medium mb-3">
            Customer Guarantee
          </p>
          <h1 className="font-display text-display-md text-charcoal mb-4">
            Returns Policy
          </h1>
          <p className="font-body text-body-lg text-muted">
            Our commitment to customer satisfaction and product integrity.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container-luxury max-w-3xl mx-auto space-y-12">
          {/* Notice Banner */}
          <div className="p-5 bg-ivory border border-blush/60 rounded-sm flex items-start gap-4 text-charcoal">
            <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-body-sm leading-relaxed">
              Returns and cancellation terms are outlined below. Please contact our concierge team before initiating any product returns.
            </p>
          </div>

          {/* Returns Policy */}
          <article className="space-y-3 pb-8 border-b border-blush/30">
            <div className="flex items-center gap-3">
              <RotateCcw className="w-5 h-5 text-gold" aria-hidden="true" />
              <h2 className="font-display text-heading-md text-charcoal">
                Returns Policy
              </h2>
            </div>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              Due to hygiene and cosmetic safety standards, perfume products can only be returned within 14 days of receipt if they remain unopened, in their original cellophane packaging, unused, and in pristine resaleable condition. Any product that has been unsealed, sprayed, or tampered with is ineligible for return or refund.
            </p>
          </article>

          {/* How to Return */}
          <article className="space-y-3 pb-8 border-b border-blush/30">
            <div className="flex items-center gap-3">
              <PackageCheck className="w-5 h-5 text-gold" aria-hidden="true" />
              <h2 className="font-display text-heading-md text-charcoal">
                How to Return
              </h2>
            </div>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              To request a return authorization, email our concierge at contact@hmeuro.co.uk with your order number, receipt date, and reason for return. Once authorized, our team will provide return mailing instructions and an authorization code. Customers are responsible for return postage unless the item received was incorrect or defective. We recommend using a tracked, insured postal service.
            </p>
          </article>

          {/* Refund Process */}
          <article className="space-y-3 pb-8 border-b border-blush/30">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-gold" aria-hidden="true" />
              <h2 className="font-display text-heading-md text-charcoal">
                Refund Process
              </h2>
            </div>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              Once your returned package is received and inspected by our warehouse quality control team, we will send an email confirmation of approval or rejection. Approved refunds will be credited back to your original payment method within 5–10 business days, depending on your card issuer or banking provider. Original delivery fees are non-refundable.
            </p>
          </article>

          {/* Damaged Items */}
          <article className="space-y-3 pb-8 border-b border-blush/30">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-gold" aria-hidden="true" />
              <h2 className="font-display text-heading-md text-charcoal">
                Damaged Items
              </h2>
            </div>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              In the unlikely event that your perfume bottle or package arrives damaged during transit, please notify us within 48 hours of delivery. Please include photographic evidence of the transit box, interior packaging, and the damaged item. We will arrange an immediate replacement or full reimbursement upon verification.
            </p>
          </article>

          {/* Contact */}
          <article className="space-y-3">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-gold" aria-hidden="true" />
              <h2 className="font-display text-heading-md text-charcoal">
                Contact
              </h2>
            </div>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              If you have any questions regarding our returns policy, exchanges, or the status of an ongoing return, please reach out to our customer care team via our contact page.
            </p>
          </article>

          {/* CTA */}
          <div className="pt-6 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-charcoal text-white hover:bg-berry text-xs uppercase tracking-wider transition-colors"
            >
              Contact Returns Concierge
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
