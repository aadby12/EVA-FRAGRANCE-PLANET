import Link from "next/link";
import Image from "next/image";
import { ProductCard } from "@/components/product-card";
import { business } from "@/lib/business";
import { getBrands, products } from "@/lib/products";

const reasons = [
  {
    title: "Fragrance Discovery",
    copy: "Explore a range of perfumes and discover options that match your preferences.",
  },
  {
    title: "Direct Communication",
    copy: "Have questions about a fragrance? Contact Eva Fragrance Planet directly through WhatsApp.",
  },
  {
    title: "Clear Product Enquiries",
    copy: "Ask about product details, bottle sizes, pricing, and availability before ordering.",
  },
];

export default function HomePage() {
  const brands = getBrands();

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div className="rise">
          <p className="eyebrow">Accra · Authentic unboxed perfumes</p>
          <h1 className="display mt-5 text-6xl sm:text-7xl md:text-8xl">
            Your Scent.
            <span className="block">Your Signature.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            Explore a curated selection of authentic unboxed perfumes at Eva Fragrance Planet. Discover fragrances that speak to your style and enquire directly through WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop" className="bg-ink px-6 py-3 text-xs tracking-[0.18em] text-ivory uppercase">
              Explore the Collection
            </Link>
            <Link href="/unboxed" className="border border-ink px-6 py-3 text-xs tracking-[0.18em] uppercase">
              Discover Unboxed Perfumes
            </Link>
          </div>
        </div>
        <figure className="rise relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-beige">
            <Image
              src="/products/miss-dior-blooming-bouquet.jpg"
              alt="Miss Dior Blooming Bouquet filmed inside Eva Fragrance Planet’s shop in Accra"
              fill
              priority
              className="object-cover object-[center_20%]"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
          <figcaption className="mt-3 flex justify-between gap-4 text-xs tracking-[0.14em] text-ink-soft uppercase">
            <span>Photographed for Eva Fragrance Planet</span>
            <span>Accra</span>
          </figcaption>
        </figure>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow">01 — Brands</p>
          <h2 className="display mt-4 max-w-3xl text-5xl md:text-6xl">Explore the Fragrance Collection</h2>
          <p className="mt-5 max-w-xl text-ink-soft">
            Discover fragrances and find a scent that feels like you. These groups follow the brands in the selection below, taken from recent Instagram posts.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/collections/${brand.slug}`}
                className="group relative min-h-56 overflow-hidden bg-ink text-ivory"
              >
                <Image
                  src={brand.image}
                  alt=""
                  fill
                  className="object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="serif text-4xl">{brand.name}</p>
                  <p className="mt-2 text-xs tracking-[0.16em] uppercase text-ivory/75">
                    {brand.count} {brand.count === 1 ? "fragrance" : "fragrances"} in this selection
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow">02 — Selection</p>
          <h2 className="display mt-4 text-5xl md:text-6xl">Fragrance Favourites</h2>
          <p className="mt-5 max-w-2xl text-ink-soft">
            Explore selected fragrances from Eva Fragrance Planet. Each one below was shown on the business Instagram on 4 November 2026, with a bottle size and a promo price in the post. This is not the full catalogue, and it is not a stock list.
          </p>
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="relative aspect-[4/5] overflow-hidden bg-beige">
            <Image
              src="/products/alien.jpg"
              alt="Mugler Alien filmed among the shelves at Eva Fragrance Planet"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow">03 — Unboxed</p>
            <h2 className="display mt-4 text-5xl md:text-6xl">Luxury Fragrance, Without the Box.</h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              Explore the world of unboxed perfumes at Eva Fragrance Planet. Browse the available fragrances and contact us to learn more about the specific product you have in mind.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              The profile describes the offer as authentic unboxed perfumes. Packaging can differ from one fragrance to another, so the details of a particular bottle are confirmed on WhatsApp.
            </p>
            <Link href="/unboxed" className="mt-8 inline-block border border-ink px-6 py-3 text-xs tracking-[0.18em] uppercase">
              Learn About Unboxed Perfumes
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-xs tracking-[0.28em] text-champagne uppercase">04</p>
          <h2 className="display mt-4 max-w-3xl text-5xl md:text-6xl">Find a Fragrance That Feels Like You.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="border-t border-white/15 pt-5">
                <h3 className="serif text-3xl">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/75">{reason.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow">05 — Feedback</p>
          <h2 className="display mt-4 text-5xl md:text-6xl">Words from Our Customers</h2>
          <p className="mt-5 max-w-xl text-ink-soft">
            Have purchased from us? We would love to hear about your experience.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
            The Instagram profile has a Reviews highlight. Original review text has not been supplied for this website, so no customer names, quotes, or ratings are shown here.
          </p>
          <Link href="/contact" className="mt-8 inline-block bg-ink px-6 py-3 text-xs tracking-[0.18em] text-ivory uppercase">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="border-t border-line bg-ivory">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:py-24">
          <div>
            <p className="eyebrow">06 — Instagram</p>
            <h2 className="display mt-4 max-w-xl text-5xl md:text-6xl">Stay Connected with Eva Fragrance Planet</h2>
            <p className="mt-5 max-w-xl text-ink-soft">
              Follow us on Instagram for fragrance discoveries, updates, and more.
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              {business.instagramHandle} · {business.followersLabel}
            </p>
          </div>
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-ink px-6 py-3 text-xs tracking-[0.18em] uppercase"
          >
            Follow on Instagram
          </a>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
          <h2 className="display text-5xl md:text-7xl">Ready to Discover Your Next Scent?</h2>
          <p className="mx-auto mt-5 max-w-xl text-ink-soft">
            Explore the collection and contact us to confirm the fragrance you&apos;re interested in.
          </p>
          <Link href="/shop" className="mt-8 inline-block bg-ink px-6 py-3 text-xs tracking-[0.18em] text-ivory uppercase">
            Shop the Collection
          </Link>
        </div>
      </section>
    </>
  );
}
