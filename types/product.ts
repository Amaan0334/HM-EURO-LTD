export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CampaignSlide {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  image: ProductImage;
  overlayImages?: ProductImage[];
  theme?: 'light' | 'dark';
}

export interface FragranceNotes {
  top?: string[];
  heart?: string[];
  base?: string[];
}

export type Concentration = 'EDP' | 'Extrait' | 'EDT' | 'Parfum';
export type StockStatus = 'in-stock' | 'low-stock' | 'out-of-stock' | 'pre-order';
export type TargetAudience = 'men' | 'women' | 'unisex';
export type Brand =
  | 'Atralia'
  | 'Khadlaj'
  | 'Afnan'
  | 'Swiss Arabian';

export interface ProductVariant {
  id: string;
  name: string;
  size: string;
  priceGBP: number;
  stockStatus: StockStatus;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: Brand;
  collection?: 'pink-cloud' | 'swiss-arabian-incense-01';
  category: 'perfumes';
  subtitle?: string;
  tagline?: string;
  description: string;
  priceGBP: number;
  compareAtPriceGBP?: number;
  images: ProductImage[];
  concentration: Concentration;
  size: string;
  stockStatus: StockStatus;
  stockQuantity?: number;
  target: TargetAudience;
  fragranceFamily?: string;
  fragranceNotes?: FragranceNotes;
  features?: string[];
  campaignType?: 'pink-cloud' | 'swiss-arabian-incense-01' | null;
  campaignSlides?: CampaignSlide[];
  featured: boolean;
  metadata: {
    title: string;
    description: string;
  };
}

export interface ProductFilterOptions {
  brand?: Brand;
  target?: TargetAudience;
  minPrice?: number;
  maxPrice?: number;
  collection?: string;
  search?: string;
  sortBy?: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'newest';
}
