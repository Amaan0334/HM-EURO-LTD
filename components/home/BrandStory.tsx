import Link from 'next/link';
import Image from 'next/image';

export function BrandStory() {
  return (
    <section aria-label="Brand Story" className="bg-white section-padding">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Side: Story Copy (~60% width on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-body font-semibold block mb-3">
              OUR STORY
            </span>

            <h2 className="font-display text-display-sm text-charcoal mb-6 leading-tight">
              A Passion for Fragrance
            </h2>

            <div className="space-y-5 text-muted text-body-md font-body leading-relaxed mb-8">
              <p>
                At HM EURO, we believe that fragrance is more than a scent — it&apos;s
                an expression of identity. We curate premium perfumes from
                world-renowned houses, bringing exceptional quality to discerning
                customers across the United Kingdom.
              </p>
              <p>
                From the sweet sophistication of Atralia to the refined artistry
                of Khadlaj and the bold character of Afnan, every fragrance in our
                collection is chosen for its craftsmanship, longevity, and distinctive
                character.
              </p>
            </div>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-gold hover:text-berry transition-colors duration-200 uppercase"
              >
                <span>Learn More</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Right Side: Campaign Visual (~40% width on desktop) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden shadow-lg border border-blush/40 bg-charcoal/5">
              <Image
                src="/images/elixir/elixir-campaign.jpg"
                alt="Atralia Elixir campaign visual showcasing crafted luxury fragrance bottle"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandStory;
