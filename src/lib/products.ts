export type Product = {
  slug: string;
  brand: string;
  brandSlug: string;
  name: string;
  sizeMl: number;
  /** Promo price in Ghana cedis, as posted with the bottle on Instagram. */
  priceGhs: number;
  pricePostedOn: string;
  image: string;
  imageAlt: string;
  instagramUrl: string;
  summary: string;
};

/**
 * Fragrances read from Eva Fragrance Planet Instagram reels posted 4 November 2026.
 * Each caption was a promo price. Bottle size is the size written on that reel.
 * Fragrance notes, concentration, and stock are not stated on those posts.
 */
export const products: Product[] = [
  {
    slug: "miss-dior-blooming-bouquet",
    brand: "Dior",
    brandSlug: "dior",
    name: "Miss Dior Blooming Bouquet",
    sizeMl: 150,
    priceGhs: 700,
    pricePostedOn: "4 November 2026",
    image: "/products/miss-dior-blooming-bouquet.jpg",
    imageAlt:
      "Miss Dior Blooming Bouquet bottle held in Eva Fragrance Planet’s shop, with 150ml written on the film",
    instagramUrl: "https://www.instagram.com/reel/DfWSFChMezw/",
    summary:
      "Miss Dior Blooming Bouquet by Dior, filmed by Eva Fragrance Planet as a 150ml bottle. The caption posted with this reel was a promo price of GH₵700.",
  },
  {
    slug: "my-way",
    brand: "Giorgio Armani",
    brandSlug: "giorgio-armani",
    name: "My Way",
    sizeMl: 90,
    priceGhs: 600,
    pricePostedOn: "4 November 2026",
    image: "/products/my-way.jpg",
    imageAlt:
      "Giorgio Armani My Way bottle held in Eva Fragrance Planet’s shop, with 90ml written on the film",
    instagramUrl: "https://www.instagram.com/reel/DfWR7UBsnps/",
    summary:
      "My Way by Giorgio Armani, filmed by Eva Fragrance Planet as a 90ml bottle. The caption posted with this reel was a promo price of GH₵600.",
  },
  {
    slug: "q-by-dolce-and-gabbana",
    brand: "Dolce & Gabbana",
    brandSlug: "dolce-gabbana",
    name: "Q",
    sizeMl: 100,
    priceGhs: 550,
    pricePostedOn: "4 November 2026",
    image: "/products/q-dolce-gabbana.jpg",
    imageAlt:
      "Dolce & Gabbana Q bottle held in Eva Fragrance Planet’s shop, with 100ml written on the film",
    instagramUrl: "https://www.instagram.com/reel/DfWR1POswV3/",
    summary:
      "Q by Dolce & Gabbana, filmed by Eva Fragrance Planet as a 100ml bottle. The caption posted with this reel was a promo price of GH₵550.",
  },
  {
    slug: "alien",
    brand: "Mugler",
    brandSlug: "mugler",
    name: "Alien",
    sizeMl: 100,
    priceGhs: 500,
    pricePostedOn: "4 November 2026",
    image: "/products/alien.jpg",
    imageAlt:
      "Mugler Alien bottle held in Eva Fragrance Planet’s shop, with 100ml written on the film",
    instagramUrl: "https://www.instagram.com/reel/DfWSAzMsY56/",
    summary:
      "Alien by Mugler, filmed by Eva Fragrance Planet as a 100ml bottle. The caption posted with this reel was a promo price of GH₵500.",
  },
  {
    slug: "tutti-twilly-dhermes",
    brand: "Hermès",
    brandSlug: "hermes",
    name: "Tutti Twilly d'Hermès",
    sizeMl: 85,
    priceGhs: 580,
    pricePostedOn: "4 November 2026",
    image: "/products/tutti-twilly.jpg",
    imageAlt:
      "Tutti Twilly d'Hermès bottle held in Eva Fragrance Planet’s shop, with 85ml written on the film",
    instagramUrl: "https://www.instagram.com/reel/DfWR-Sisnp8/",
    summary:
      "Tutti Twilly d'Hermès by Hermès, filmed by Eva Fragrance Planet as an 85ml bottle. The caption posted with this reel was a promo price of GH₵580.",
  },
  {
    slug: "bleu-turquoise",
    brand: "Giorgio Armani",
    brandSlug: "giorgio-armani",
    name: "Armani Privé Bleu Turquoise",
    sizeMl: 100,
    priceGhs: 800,
    pricePostedOn: "4 November 2026",
    image: "/products/armani-prive-bleu-turquoise.jpg",
    imageAlt:
      "Turquoise Armani Privé bottle held in Eva Fragrance Planet’s shop, with 100ml written on the film",
    instagramUrl: "https://www.instagram.com/reel/DfWR3s3MXyU/",
    summary:
      "Armani Privé Bleu Turquoise by Giorgio Armani, filmed by Eva Fragrance Planet as a 100ml bottle. The caption posted with this reel was a promo price of GH₵800.",
  },
];

export function formatPrice(amount: number) {
  return `GH₵${amount.toLocaleString("en-GH")}`;
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelated(slug: string, limit = 3) {
  const current = getProduct(slug);
  if (!current) return products.slice(0, limit);
  const sameBrand = products.filter(
    (product) => product.slug !== slug && product.brandSlug === current.brandSlug,
  );
  const others = products.filter(
    (product) => product.slug !== slug && product.brandSlug !== current.brandSlug,
  );
  return [...sameBrand, ...others].slice(0, limit);
}

export function getBrands() {
  const brands: { slug: string; name: string; image: string; count: number }[] = [];
  for (const product of products) {
    const existing = brands.find((brand) => brand.slug === product.brandSlug);
    if (existing) {
      existing.count += 1;
    } else {
      brands.push({
        slug: product.brandSlug,
        name: product.brand,
        image: product.image,
        count: 1,
      });
    }
  }
  return brands;
}

export function getBrand(slug: string) {
  return getBrands().find((brand) => brand.slug === slug);
}

export function productsByBrand(slug: string) {
  return products.filter((product) => product.brandSlug === slug);
}

export function enquiryLine(product: Product, quantity = 1) {
  return `${product.name} by ${product.brand} — ${product.sizeMl}ml — Quantity: ${quantity} — Price posted on Instagram: ${formatPrice(product.priceGhs)}`;
}
