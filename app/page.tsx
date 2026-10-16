
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import PinkCloudScrollExperience from '@/components/home/PinkCloudScrollExperience';
import { FeaturedCollection } from '@/components/home/FeaturedCollection';
import { BrandStory } from '@/components/home/BrandStory';
import { TrustSection } from '@/components/home/TrustSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';
import { getProductBySlug } from '@/lib/products';

export const metadata: Metadata = {
  title: 'HM EURO LTD | Swiss Arabian Incense 01 & Luxury Fragrances',
  description:
    'Discover Swiss Arabian Incense 01 and a curated selection of luxury fragrances at HM EURO LTD.',
};

export default function HomePage() {
  const incense01 = getProductBySlug('swiss-arabian-incense-01');

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {incense01?.campaignSlides &&
        incense01.campaignSlides.length > 0 && (
          <PinkCloudScrollExperience
            slides={incense01.campaignSlides}
            productSlug={incense01.slug}
            productPrice={incense01.priceGBP}
          />
        )}

      <FeaturedCollection />
      <BrandStory />
      <TrustSection />
      <NewsletterSection />
    </div>
  );
}
