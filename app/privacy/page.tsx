import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | HM EURO LTD',
  description: 'Privacy Policy and data protection practices for HM EURO LTD customers under UK GDPR.',
};

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-ivory py-20 border-b border-blush/30 text-center">
        <div className="container-luxury max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gold font-medium mb-3">
            Legal & Compliance
          </p>
          <h1 className="font-display text-display-md text-charcoal mb-4">
            Privacy Policy
          </h1>
          <p className="font-body text-body-lg text-muted">
            How we protect, process, and respect your personal data.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container-luxury max-w-3xl mx-auto space-y-12">
          {/* Legal Draft Disclaimer */}
          <div className="p-5 bg-amber-50 border border-amber-200 rounded-sm flex items-start gap-3 text-charcoal">
            <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-body-sm leading-relaxed text-amber-900">
              <strong>Notice:</strong> This privacy policy is a draft and requires legal review before publication.
            </p>
          </div>

          {/* Introduction */}
          <article className="space-y-4">
            <h2 className="font-display text-heading-md text-charcoal">
              1. Introduction
            </h2>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              HM EURO LTD (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting and respecting your privacy in compliance with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018. This policy sets out how we handle your personal data when you visit our website, purchase fragrances, or contact us.
            </p>
          </article>

          {/* Information We Collect */}
          <article className="space-y-4">
            <h2 className="font-display text-heading-md text-charcoal">
              2. Information We Collect
            </h2>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              We may collect, use, and store different kinds of personal data about you, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-body-md text-charcoal/80">
              <li><strong>Identity Data:</strong> Name, title, username.</li>
              <li><strong>Contact Data:</strong> Billing address, delivery address, email address, telephone numbers.</li>
              <li><strong>Financial & Transaction Data:</strong> Payment details (handled securely by payment processors), order history, items purchased.</li>
              <li><strong>Technical & Usage Data:</strong> IP address, browser type, operating system, pages visited, duration of visit.</li>
              <li><strong>Marketing & Communications Data:</strong> Your preferences in receiving marketing notifications and email newsletters.</li>
            </ul>
          </article>

          {/* How We Use Your Data */}
          <article className="space-y-4">
            <h2 className="font-display text-heading-md text-charcoal">
              3. How We Use Your Information
            </h2>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              We process your personal information strictly for legitimate business purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-body-md text-charcoal/80">
              <li>To process, fulfill, and deliver your orders of perfumes.</li>
              <li>To manage payments, fees, and fraud screening.</li>
              <li>To communicate with you regarding customer support inquiries or order status updates.</li>
              <li>To send you promotional newsletters and offers where you have explicitly opted in.</li>
              <li>To analyze site performance and improve user browsing experiences.</li>
            </ul>
          </article>

          {/* Legal Grounds */}
          <article className="space-y-4">
            <h2 className="font-display text-heading-md text-charcoal">
              4. Legal Basis for Processing
            </h2>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              Under UK GDPR, our lawful grounds for processing personal data include contractual necessity (fulfilling your order), legitimate interest (improving our services and detecting fraudulent activity), legal obligation (tax and financial auditing records), and explicit consent (email newsletter subscriptions).
            </p>
          </article>

          {/* Cookies */}
          <article className="space-y-4">
            <h2 className="font-display text-heading-md text-charcoal">
              5. Cookies and Tracking Technologies
            </h2>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              We use essential cookies to maintain cart functionality and session state, and analytical cookies to understand how visitors engage with our store. You can instruct your browser to refuse all or some browser cookies, though some parts of the site may become inaccessible.
            </p>
          </article>

          {/* Third Party Disclosure */}
          <article className="space-y-4">
            <h2 className="font-display text-heading-md text-charcoal">
              6. Data Sharing and Third Parties
            </h2>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              We do not sell, rent, or trade your personal data. We only share information with trusted third-party service providers required for business operations, including logistics partners (couriers), secure payment gateways, email delivery systems, and IT hosting infrastructure.
            </p>
          </article>

          {/* Your Rights */}
          <article className="space-y-4">
            <h2 className="font-display text-heading-md text-charcoal">
              7. Your Legal Rights Under UK GDPR
            </h2>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              You possess rights regarding your personal information, including the right to request access, rectification, erasure, restriction of processing, data portability, and the right to object or withdraw consent at any time.
            </p>
          </article>

          {/* Contact */}
          <article className="space-y-4 pt-4 border-t border-blush/30">
            <h2 className="font-display text-heading-md text-charcoal">
              8. Contacting Us About Privacy
            </h2>
            <p className="text-body-md text-charcoal/80 leading-relaxed">
              For any questions regarding this Privacy Policy or to exercise any of your data protection rights, please contact our Data Protection Concierge at:
            </p>
            <p className="text-body-md font-medium text-charcoal">
              Email: contact@hmeuro.co.uk
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="text-xs uppercase tracking-wider text-charcoal hover:text-berry font-medium transition-colors"
              >
                Go to Contact Form →
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
