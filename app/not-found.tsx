import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[75vh] bg-ivory flex items-center justify-center py-20 px-6">
      <div className="container-luxury max-w-lg text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white flex items-center justify-center shadow-xs">
          <Compass className="w-10 h-10 text-gold" aria-hidden="true" />
        </div>

        <p className="text-xs uppercase tracking-widest text-gold font-medium mb-2">
          Error 404
        </p>

        <h1 className="font-display text-display-md text-charcoal mb-4">
          Page Not Found
        </h1>

        <p className="text-body-md text-muted mb-8 leading-relaxed">
          The fragrance or page you are seeking could not be found or may have been moved. Let us guide you back to our curated collections.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-charcoal text-white hover:bg-berry text-xs uppercase tracking-wider font-medium transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/perfumes"
            className="w-full sm:w-auto px-8 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white text-xs uppercase tracking-wider font-medium transition-colors inline-flex items-center justify-center gap-2"
          >
            <span>Explore Fragrances</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
