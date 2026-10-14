import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | HM EURO LTD',
  description: 'Terms and Conditions of sale and website usage for HM EURO LTD luxury fragrance retailer.',
};

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-ivory py-20 border-b border-blush/30 text-center">
        <div className="container-luxury max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gold font-medium mb-3">
            Terms of Service
          </p>
          <h1 className="font-display text-display-md text-charcoal mb-4">
            Terms & Conditions
          </h1>
          <p className="font-body text-body-lg text-muted">
            The legal terms governing the purchase of fragrances and use of our website.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container-luxury max-w-3xl mx-auto space-y-12">
          {/* Draft Notice */}
          <div className="p-5 bg-amber-50 border border-amber-200 rounded-sm flex items-start gap-3 text-charcoal">
            <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-body-sm leading-relaxed text-amber-900">
              <strong>Notice:</strong> These terms and conditions are draft terms and require formal legal review before live deployment.
            </p>
          </div>

          {/* Section 1 */}
          <article className="space-y-4">
            <h2 className="font-display text-heading-md text-charcoal">
              1. Company Information & Acceptance
            </h2>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              This website is operated by HM EURO LTD, registered in the United Kingdom. By browsing our website, placing an order, or accessing any services provided by HM EURO LTD, you agree to be bound by these Terms and Conditions together with our Privacy Policy and Returns Policy.
            </p>
          </article>

          {/* Section 2 */}
          <article className="space-y-4">
            <h2 className="font-display text-heading-md text-charcoal">
              2. Products, Description & Pricing
            </h2>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              We make every effort to display the colors, bottle packaging, and fragrance profiles of our items as accurately as possible. However, actual packaging designs or batch characteristics may vary slightly from manufacturer photographs. All prices are listed in Great British Pounds (GBP) inclusive of applicable taxes unless stated otherwise. We reserve the right to correct any typographical pricing errors.
            </p>
          </article>

          {/* Section 3 */}
          <article className="space-y-4">
            <h2 className="font-display text-heading-md text-charcoal">
              3. Order Acceptance and Formation of Contract
            </h2>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              When you place an order with us, you will receive an automated order confirmation acknowledging receipt of your purchase. This does not constitute formal acceptance of your order. A legally binding contract is established only once your order has been dispatched from our distribution center and a shipping confirmation email has been issued.
            </p>
          </article>

          {/* Section 4 */}
          <article className="space-y-4">
            <h2 className="font-display text-heading-md text-charcoal">
              4. Payment & Billing
            </h2>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              Payment must be made at the time of placing your order using accepted debit, credit cards, or approved third-party payment providers. Your order will only be processed once payment authorization has been validated.
            </p>
          </article>

          {/* Section 5 */}
          <article className="space-y-4">
            <h2 className="font-display text-heading-md text-charcoal">
              5. Delivery & Risk of Loss
            </h2>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              Estimated delivery times are provided as guidelines only and are not guaranteed delivery dates. Risk of loss and damage to products passes to you upon delivery of the goods to the delivery address provided during the ordering process.
            </p>
          </article>

          {/* Section 6 */}
          <article className="space-y-4">
            <h2 className="font-display text-heading-md text-charcoal">
              6. Cancellation & Returns
            </h2>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              Your rights to return items and receive refunds are governed by our Returns Policy and statutory UK Consumer Rights legislation. Unopened and unused items in original packaging may be returned within 14 days of receipt in accordance with our returns process.
            </p>
          </article>

          {/* Section 7 */}
          <article className="space-y-4">
            <h2 className="font-display text-heading-md text-charcoal">
              7. Intellectual Property
            </h2>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              All content on this site, including brand logos, bottle imagery, text, graphics, and page layout, is the property of HM EURO LTD or its respective brand licensors (Atralia, Khadlaj, Afnan) and is protected by copyright and intellectual property laws. Unauthorized reproduction is strictly prohibited.
            </p>
          </article>

          {/* Section 8 */}
          <article className="space-y-4">
            <h2 className="font-display text-heading-md text-charcoal">
              8. Limitation of Liability
            </h2>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              To the fullest extent permitted by law, HM EURO LTD shall not be liable for any indirect, incidental, or consequential losses arising out of or related to the use of our website or products purchased through it. Nothing in these terms excludes liability for death, personal injury caused by negligence, or fraudulent misrepresentation.
            </p>
          </article>

          {/* Section 9 */}
          <article className="space-y-4 pt-4 border-t border-blush/30">
            <h2 className="font-display text-heading-md text-charcoal">
              9. Governing Law
            </h2>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              These terms and conditions and any disputes arising under or in connection with them shall be governed by and construed in accordance with the laws of England and Wales. Both parties submit to the exclusive jurisdiction of the English courts.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="text-xs uppercase tracking-wider text-charcoal hover:text-berry font-medium transition-colors"
              >
                Questions? Contact Us →
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
