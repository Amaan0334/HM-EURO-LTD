import { Truck, RotateCcw, ShieldCheck, Award } from 'lucide-react';

interface TrustItem {
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;
  title: string;
  description: string;
}

const trustItems: TrustItem[] = [
  {
    icon: Truck,
    title: 'UK Delivery',
    description:
      'Standard and express delivery across the United Kingdom',
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    description:
      'Hassle-free returns within the return period',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payment',
    description: 'Safe and encrypted payment processing',
  },
  {
    icon: Award,
    title: '100% Authentic',
    description: 'Genuine products from authorised distributors',
  },
];

export function TrustSection() {
  return (
    <section
      aria-label="Our Guarantees and Services"
      className="bg-ivory border-y border-blush section-padding"
    >
      <div className="container-luxury">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center px-2"
              >
                <div className="text-gold mb-4 p-3 rounded-full bg-white/70 border border-blush/40 shadow-xs">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-heading-sm text-charcoal mb-2 font-medium">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-muted font-body leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
