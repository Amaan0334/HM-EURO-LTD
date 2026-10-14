import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import PinkCloudScrollExperience from '@/components/home/PinkCloudScrollExperience';
import { FeaturedCollection } from '@/components/home/FeaturedCollection';
import { BrandStory } from '@/components/home/BrandStory';
import { TrustSection } from '@/components/home/TrustSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';
import { getProductBySlug } from '@/lib/products';

export const metadata: Metadata = {
  title: 'HM EURO LTD | Luxury Fragrances & Signature Perfumes',
  description:
    'Discover curated luxury perfumes from prestigious fragrance houses including Atralia, Khadlaj, and Afnan. Explore our signature Sugar Mallow Pink Cloud Eau de Parfum.',
};

export default function HomePage() {
  const pinkCloud = getProductBySlug('sugar-mallow-pink-cloud');

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {pinkCloud?.campaignSlides && pinkCloud.campaignSlides.length > 0 && (
        <PinkCloudScrollExperience
          slides={pinkCloud.campaignSlides}
          productSlug={pinkCloud.slug}
          productPrice={pinkCloud.priceGBP}
        />
      )}

      <FeaturedCollection />
      <BrandStory />
      <TrustSection />
      <NewsletterSection />
    </div>
  );
}
