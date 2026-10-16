
import type { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'pink-cloud-100ml',
    slug: 'sugar-mallow-pink-cloud',
    name: 'Sugar Mallow Pink Cloud',
    brand: 'Atralia',
    collection: 'pink-cloud',
    category: 'perfumes',
    subtitle: 'Eau de Parfum for Women',
    tagline: 'Meet Your Sweeter Side',
    description:
      'Pink Cloud is your everyday escape into a world of sweetness. Light, joyful, and effortlessly elegant — a strawberry-inspired fragrance story that is sweet, sparkling, and unforgettable.',
    priceGBP: 3445,
    images: [
      { src: '/images/pink-cloud/bottle-cutout.jpg', alt: 'Sugar Mallow Pink Cloud Eau de Parfum bottle', width: 800, height: 1000 },
      { src: '/images/pink-cloud/bottle-hero-ingredients.jpg', alt: 'Pink Cloud bottle surrounded by lime, pear, caramel, and jasmine', width: 1024, height: 1024 },
      { src: '/images/pink-cloud/bottle-splash.jpg', alt: 'Pink Cloud bottle with strawberry liquid splash', width: 1024, height: 1024 },
      { src: '/images/pink-cloud/playful-femininity.jpg', alt: 'Pink Cloud lifestyle campaign — Playful Femininity', width: 1024, height: 1024 },
      { src: '/images/pink-cloud/fruity-escape.jpg', alt: 'Pink Cloud lifestyle — A Pink Fruity Escape', width: 1024, height: 1024 },
      { src: '/images/pink-cloud/fragrance-wheel.jpg', alt: 'Pink Cloud fruity and floral fragrance wheel', width: 1024, height: 1024 },
    ],
    concentration: 'EDP',
    size: '100ml',
    stockStatus: 'in-stock',
    target: 'women',
    fragranceFamily: 'Fruity Floral',
    fragranceNotes: {
      top: ['Strawberry'],
      heart: ['Pear', 'Jasmine', 'Melon'],
      base: ['Caramel', 'Musk'],
    },
    features: ['Cruelty Free', 'Long Lasting', 'Clean Beauty', 'Premium Ingredients'],
    campaignType: 'pink-cloud',
    campaignSlides: [
      {
        id: 1,
        title: 'Meet Your Sweeter Side',
        subtitle: 'Sugar Mallow — Pink Cloud',
        description: 'Eau de Parfum',
        image: { src: '/images/pink-cloud/bottle-closeup-cap.png', alt: 'Pink Cloud bottle close-up', width: 800, height: 1200 },
        theme: 'light',
      },
      {
        id: 2,
        title: 'Elegance Unveiled',
        subtitle: 'Crafted to Perfection',
        image: { src: '/images/pink-cloud/bottle-closeup-cap.png', alt: 'Pink Cloud bottle with cap', width: 800, height: 1200 },
        overlayImages: [
          { src: '/images/pink-cloud/cap-detail.png', alt: 'Pink textured cap with gold bands', width: 600, height: 500 },
          { src: '/images/pink-cloud/bottle-atomizer.png', alt: 'Pink Cloud bottle with atomizer revealed', width: 800, height: 1200 },
        ],
        theme: 'light',
      },
      {
        id: 3,
        title: 'Sweet Sophistication',
        subtitle: 'Soft, Sweet, Irresistible',
        image: { src: '/images/pink-cloud/bottle-hero-ingredients.jpg', alt: 'Pink Cloud bottle with ingredients', width: 1024, height: 1024 },
        theme: 'light',
      },
      {
        id: 4,
        title: 'Juicy Fruity Opening',
        subtitle: 'Opens with a vibrant combination of strawberry',
        image: { src: '/images/pink-cloud/bottle-splash.jpg', alt: 'Pink Cloud strawberry splash', width: 1024, height: 1024 },
        overlayImages: [
          { src: '/images/pink-cloud/strawberry-splash.png', alt: 'Strawberry splash element', width: 800, height: 800 },
        ],
        theme: 'light',
      },
      {
        id: 5,
        title: 'A Pink Fruity Escape',
        subtitle: 'Sweet, sparkling and unforgettable',
        image: { src: '/images/pink-cloud/strawberry-splash.png', alt: 'Floating strawberries with liquid drops', width: 800, height: 800 },
        theme: 'light',
      },
      {
        id: 6,
        title: 'Fruity & Floral',
        subtitle: 'Crafted with Care',
        image: { src: '/images/pink-cloud/fragrance-wheel.jpg', alt: 'Fragrance ingredient wheel', width: 1024, height: 1024 },
        theme: 'light',
      },
      {
        id: 7,
        title: 'Playful Femininity',
        subtitle: 'Light, joyful, effortlessly elegant',
        description: 'Pink Cloud is your everyday escape into world of sweetness.',
        image: { src: '/images/pink-cloud/playful-femininity.jpg', alt: 'Lifestyle campaign with strawberries', width: 1024, height: 1024 },
        theme: 'light',
      },
      {
        id: 8,
        title: 'Cruelty Free',
        subtitle: 'Premium Ingredients · Clean Beauty',
        image: { src: '/images/pink-cloud/playful-femininity.jpg', alt: 'Product features showcase', width: 1024, height: 1024 },
        theme: 'light',
      },
      {
        id: 9,
        title: 'A Pink Fruity Escape',
        subtitle: 'Sweet, sparkling and unforgettable',
        image: { src: '/images/pink-cloud/fruity-escape.jpg', alt: 'Lifestyle — A Pink Fruity Escape', width: 1024, height: 1024 },
        theme: 'light',
      },
      {
        id: 10,
        title: 'Long Lasting',
        subtitle: 'An all-day fragrance experience',
        image: { src: '/images/pink-cloud/bottle-cutout.jpg', alt: 'Pink Cloud bottle product shot', width: 800, height: 1000 },
        theme: 'light',
      },
      {
        id: 11,
        title: 'Shop Pink Cloud',
        subtitle: '£34.45 · 100ml Eau de Parfum',
        description: 'Discover the full Pink Cloud experience',
        image: { src: '/images/pink-cloud/bottle-closeup-cap.png', alt: 'Pink Cloud — Shop Now', width: 800, height: 1200 },
        theme: 'light',
      },
    ],
    featured: false,
    metadata: {
      title: 'Sugar Mallow Pink Cloud Eau de Parfum 100ml | Atralia',
      description:
        'Shop Sugar Mallow Pink Cloud Eau de Parfum by Atralia. A fruity floral fragrance with strawberry, pear, jasmine, and caramel notes. Cruelty free, long lasting. £34.45.',
    },
  },
  {
    id: 'elixir-100ml',
    slug: 'atralia-elixir',
    name: 'Elixir',
    brand: 'Atralia',
    category: 'perfumes',
    subtitle: 'Eau de Parfum 100ml',
    tagline: 'An Intense and Long Lasting Seductive Fragrance',
    description:
      'For the man who embraces his untamed spirit. Elixir is a fresh aromatic amber fragrance that opens with invigorating mint and transitions into a warm, seductive dry-down.',
    priceGBP: 2130,
    images: [
      { src: '/images/elixir/elixir-box.jpg', alt: 'Atralia Elixir Eau de Parfum bottle with box', width: 1024, height: 1024 },
      { src: '/images/elixir/elixir-campaign.jpg', alt: 'Elixir campaign — An intense seductive fragrance', width: 1024, height: 1024 },
    ],
    concentration: 'EDP',
    size: '100ml',
    stockStatus: 'in-stock',
    target: 'men',
    fragranceFamily: 'Fresh Aromatic Amber',
    fragranceNotes: {
      top: ['Mint', 'Lavender', 'Pineapple'],
      heart: ['Tonka Bean'],
      base: ['Vanilla', 'Musk'],
    },
    featured: true,
    metadata: {
      title: 'Atralia Elixir Eau de Parfum 100ml | Fresh Aromatic Amber',
      description:
        'Shop Atralia Elixir Eau de Parfum 100ml. A fresh aromatic amber fragrance with mint, lavender, pineapple, tonka bean, vanilla, and musk. £21.30.',
    },
  },
  {
    id: 'sawaar-vanille-blanc-100ml',
    slug: 'khadlaj-sawaar-vanille-blanc',
    name: 'Sawaar Vanille Blanc',
    brand: 'Khadlaj',
    category: 'perfumes',
    subtitle: 'Extrait de Parfum 100ml',
    tagline: 'Velvet Sweetness, Pure Elegance',
    description:
      'A long-lasting vanilla, sweet, and woody extrait de parfum for everyone. Sawaar Vanille Blanc is a refined scent that leaves an impression — soft and creamy with a warm amber glow.',
    priceGBP: 3399,
    images: [
      { src: '/images/sawaar/sawaar-vanille-blanc.jpg', alt: 'Khadlaj Sawaar Vanille Blanc campaign with fragrance notes', width: 1024, height: 1024 },
    ],
    concentration: 'Extrait',
    size: '100ml',
    stockStatus: 'in-stock',
    target: 'unisex',
    fragranceFamily: 'Oriental Vanilla',
    fragranceNotes: {
      top: ['Vanilla', 'Powdered Sugar', 'Apple'],
      heart: ['Cashmere Wood', 'Amber', 'White Blossom'],
      base: ['Vanilla', 'Sandalwood', 'Benzoin'],
    },
    features: ['Soft & Creamy', 'Warm Amber Glow', 'Long Lasting', 'Elegant Signature'],
    featured: true,
    metadata: {
      title: 'Khadlaj Sawaar Vanille Blanc Extrait de Parfum 100ml',
      description:
        'Shop Khadlaj Sawaar Vanille Blanc Extrait de Parfum 100ml. A vanilla, sweet, and woody long-lasting fragrance for everyone. £33.99.',
    },
  },
  {
    id: 'panache-angel-dust-100ml',
    slug: 'khadlaj-panache-angel-dust',
    name: 'Panache Angel Dust',
    brand: 'Khadlaj',
    category: 'perfumes',
    subtitle: 'Extrait de Parfum Spray 100ml',
    tagline: 'Sweet Vanilla Fruity Gourmand',
    description:
      'A sweet vanilla fruity gourmand extrait de parfum spray. Panache Angel Dust is a captivating fragrance that combines indulgent sweetness with elegant sophistication.',
    priceGBP: 3190,
    images: [
      { src: '/images/panache/panache-angel-dust.jpg', alt: 'Khadlaj Panache Angel Dust bottle with box', width: 1024, height: 1024 },
    ],
    concentration: 'Extrait',
    size: '100ml',
    stockStatus: 'in-stock',
    target: 'women',
    fragranceFamily: 'Gourmand',
    featured: false,
    metadata: {
      title: 'Khadlaj Panache Angel Dust Extrait de Parfum 100ml',
      description:
        'Shop Khadlaj Panache Angel Dust 100ml Perfume for Women. Sweet vanilla fruity gourmand extrait de parfum spray. £31.90.',
    },
  },
  {
    id: 'island-100ml',
    slug: 'khadlaj-island',
    name: 'Island',
    brand: 'Khadlaj',
    category: 'perfumes',
    subtitle: 'Extrait de Parfum Spray 100ml',
    tagline: 'Unisex Tropical Fragrance',
    description:
      'A unisex tropical fragrance with bergamot, coconut, pineapple, and amber notes. Island is the perfect scent for men and women who crave an exotic, sun-drenched escape.',
    priceGBP: 2996,
    images: [
      { src: '/images/island/island-hero.jpg', alt: 'Khadlaj Island bottle with coconut and tropical flowers', width: 1024, height: 1024 },
    ],
    concentration: 'Extrait',
    size: '100ml',
    stockStatus: 'in-stock',
    target: 'unisex',
    fragranceFamily: 'Tropical Aromatic',
    fragranceNotes: {
      top: ['Bergamot', 'Pineapple'],
      heart: ['Coconut'],
      base: ['Amber'],
    },
    featured: false,
    metadata: {
      title: 'Khadlaj Island Extrait de Parfum 100ml | Tropical Unisex Fragrance',
      description:
        'Shop Khadlaj Island Extrait de Parfum 100ml. A unisex tropical fragrance with bergamot, coconut, pineapple, and amber. £29.96.',
    },
  },
  {
    id: '9pm-night-out-100ml',
    slug: 'afnan-9pm-night-out',
    name: '9 PM Night Out',
    brand: 'Afnan',
    category: 'perfumes',
    subtitle: 'Unisex Extrait de Parfum 100ml',
    tagline: 'For the Night That Never Ends',
    description:
      'A bold, statement-making unisex extrait de parfum. 9 PM Night Out captures the energy and allure of an unforgettable evening out.',
    priceGBP: 3834,
    images: [
      { src: '/images/9pm-night-out/9pm-night-out.jpg', alt: 'Afnan 9 PM Night Out bottle with box', width: 1024, height: 1024 },
    ],
    concentration: 'Extrait',
    size: '100ml',
    stockStatus: 'in-stock',
    target: 'unisex',
    featured: false,
    metadata: {
      title: 'Afnan 9 PM Night Out Extrait de Parfum 100ml',
      description:
        'Shop Afnan 9 PM Night Out Unisex Extrait de Parfum 100ml (3.4 fl oz). A bold evening fragrance. £38.34.',
    },
  },
  {
    id: 'supremacy-not-only-intense-100ml',
    slug: 'afnan-supremacy-not-only-intense',
    name: 'Supremacy Not Only Intense',
    brand: 'Afnan',
    category: 'perfumes',
    subtitle: 'Extrait de Parfum Spray for Men 100ml',
    tagline: 'Commanding Presence',
    description:
      'An extrait de parfum spray for men that commands attention. Supremacy Not Only Intense is a powerful, refined fragrance designed for the man who leads with confidence.',
    priceGBP: 4150,
    images: [
      { src: '/images/supremacy/supremacy-hero.jpg', alt: 'Afnan Supremacy Not Only Intense bottle with botanical styling', width: 1024, height: 1024 },
    ],
    concentration: 'Extrait',
    size: '100ml',
    stockStatus: 'in-stock',
    target: 'men',
    featured: false,
    metadata: {
      title: 'Afnan Supremacy Not Only Intense Extrait de Parfum 100ml',
      description:
        'Shop Afnan Supremacy Not Only Intense Extrait De Parfum Spray for Men, 100ml. A powerful, refined masculine fragrance. £41.50.',
    },
  },
  {
    id: 'afnan-lynked-freedom-100ml',
    slug: 'afnan-lynked-freedom',
    name: 'Lynked Freedom',
    brand: 'Afnan',
    category: 'perfumes',
    subtitle: 'Eau de Parfum 100ml',
    tagline: 'Discover Your Freedom',
    description:
      'Discover Afnan Lynked Freedom, a distinctive fragrance presented in an elegant bottle. Explore this contemporary scent at HM EURO LTD.',
    priceGBP: 46.91,
    images: [
      {
        src: '/images/afnan lynked freedom/AFNAN LYNKED FREEDOM.jpg',
        alt: 'Afnan Lynked Freedom perfume bottle',
        width: 1024,
        height: 1024,
      },
    ],
    concentration: 'EDP',
    size: '100ml',
    stockStatus: 'in-stock',
    target: 'unisex',
    featured: true,
    metadata: {
      title: 'Afnan Lynked Freedom Eau de Parfum 100ml',
      description:
        'Discover Afnan Lynked Freedom Eau de Parfum 100ml at HM EURO LTD. £46.91.',
    },
  },
  {
    id: 'swiss-arabian-incense-01-50ml',
    slug: 'swiss-arabian-incense-01',
    name: 'Incense 1',
    brand: 'Swiss Arabian',
    collection: 'swiss-arabian-incense-01',
    category: 'perfumes',
    subtitle: 'Swiss Arabian Incense 1 · 50ml',
    tagline: 'A Distinctive Fragrance Experience',
    description:
      'Discover Swiss Arabian Incense 01, presented in a 50ml bottle. Explore the fragrance through our curated product imagery.',
    priceGBP: 59.49,
    images: [
      {
        src: '/images/swiss-arabian-incense-01/incense 1.jpg',
        alt: 'Swiss Arabian Incense 1 fragrance bottle',
        width: 1024,
        height: 1024,
      },
      {
        src: '/images/swiss-arabian-incense-01/incense 2.jpg',
        alt: 'Swiss Arabian Incense 1 product view',
        width: 1024,
        height: 1024,
      },
      {
        src: '/images/swiss-arabian-incense-01/incense 3.jpg',
        alt: 'Swiss Arabian Incense 1 fragrance detail',
        width: 1024,
        height: 1024,
      },
      {
        src: '/images/swiss-arabian-incense-01/incense 4.jpg',
        alt: 'Swiss Arabian Incense 1 additional product view',
        width: 1024,
        height: 1024,
      },
      {
        src: '/images/swiss-arabian-incense-01/incense 5.jpg',
        alt: 'Swiss Arabian Incense 1 presentation',
        width: 1024,
        height: 1024,
      },
      {
        src: '/images/swiss-arabian-incense-01/incense 6.jpg',
        alt: 'Swiss Arabian Incense 1 final product view',
        width: 1024,
        height: 1024,
      },
    ],
    concentration: 'EDP',
    size: '50ml',
    stockStatus: 'in-stock',
    target: 'unisex',
    campaignType: 'swiss-arabian-incense-01',
    campaignSlides: [
      {
        id: 1,
        title: 'Discover Incense 1',
        subtitle: 'Swiss Arabian · 50ml',
        description: 'A distinctive fragrance experience',
        image: {
          src: '/images/swiss-arabian-incense-01/incense 1.jpg',
          alt: 'Swiss Arabian Incense 1 hero product image',
          width: 1024,
          height: 1024,
        },
        theme: 'dark',
      },
      {
        id: 2,
        title: 'The Fragrance, Up Close',
        subtitle: 'Explore the Details',
        description: 'Discover the presentation of Swiss Arabian Incense 1.',
        image: {
          src: '/images/swiss-arabian-incense-01/incense 3.jpg',
          alt: 'Close-up view of Swiss Arabian Incense 1',
          width: 1024,
          height: 1024,
        },
        theme: 'dark',
      },
      {
        id: 3,
        title: 'Explore Incense 1',
        subtitle: 'Swiss Arabian · 50ml',
        description: 'Discover the product and explore the collection.',
        image: {
          src: '/images/swiss-arabian-incense-01/incense 6.jpg',
          alt: 'Swiss Arabian Incense 1 product presentation',
          width: 1024,
          height: 1024,
        },
        theme: 'dark',
      },
    ],
    featured: true,
    metadata: {
      title: 'Swiss Arabian Incense 1 50ml',
      description:
        'Discover Swiss Arabian Incense 1 50ml at HM EURO LTD.',
    },
  },
];

// --- Query functions ---

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(collection: string): Product[] {
  return products.filter((p) => p.collection === collection);
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter((p) => p.brand === brand);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(currentSlug: string, limit = 4): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return products.slice(0, limit);

  return products
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize same brand, then same target audience
      const aScore =
        (a.brand === current.brand ? 2 : 0) +
        (a.target === current.target ? 1 : 0);
      const bScore =
        (b.brand === current.brand ? 2 : 0) +
        (b.target === current.target ? 1 : 0);

      return bScore - aScore;
    })
    .slice(0, limit);
}

export function filterProducts(
  options: import('@/types/product').ProductFilterOptions
): Product[] {
  let filtered = [...products];

  if (options.brand) {
    filtered = filtered.filter((p) => p.brand === options.brand);
  }

  if (options.target) {
    filtered = filtered.filter((p) => p.target === options.target);
  }

  if (options.minPrice !== undefined) {
    filtered = filtered.filter((p) => p.priceGBP >= options.minPrice!);
  }

  if (options.maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.priceGBP <= options.maxPrice!);
  }

  if (options.collection) {
    filtered = filtered.filter((p) => p.collection === options.collection);
  }

  if (options.search) {
    const q = options.search.toLowerCase();

    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.fragranceFamily?.toLowerCase().includes(q) ?? false)
    );
  }

  switch (options.sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.priceGBP - b.priceGBP);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.priceGBP - a.priceGBP);
      break;
    case 'name-asc':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }

  return filtered;
}

export function getAllBrands(): string[] {
  return [...new Set(products.map((p) => p.brand))];
}

export function getPriceRange(): { min: number; max: number } {
  const prices = products.map((p) => p.priceGBP);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}
