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
      <section className="relative min-h-[88svh] overflow-hidden bg-black">
        <Image
          src="/products/miss-dior-blooming-bouquet.jpg"
          alt="Miss Dior Blooming Bouquet filmed inside Eva Fragrance Planet’s shop in Accra"
          fill
          priority
          className="object-cover object-[center_18%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(228,211,164,0.28),transparent_42%)]" />
        <div className="relative z-10 flex min-h-[88svh] flex-col justify-end px-5 pt-24 pb-14 md:px-12 md:pb-20">
          <p className="eyebrow">Accra · Authentic unboxed perfumes</p>
          <h1 className="display mt-4 max-w-3xl text-6xl text-ivory sm:text-7xl md:text-8xl">
            Your Scent.
            <span className="block">Your Signature.</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ivory/80 md:text-base">
            Explore a curated selection of authentic unboxed perfumes at Eva Fragrance Planet. Discover fragrances that speak to your style and enquire directly through WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop" className="btn">
              Explore the Collection
            </Link>
            <Link href="/unboxed" className="btn-line">
              Discover Unboxed Perfumes
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="gold-title text-center text-4xl md:text-5xl">Explore the fragrance collection</h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-ink-soft">
            Discover fragrances and find a scent that feels like you. These groups follow the brands in the selection below, taken from recent Instagram posts.
          </p>
          <div className="mt-10 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-5">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/collections/${brand.slug}`}
                className="flex w-[78%] shrink-0 flex-col rounded-[1.6rem] border border-champagne/80 p-3 md:w-auto"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.2rem] bg-beige">
                  <Image
                    src={brand.image}
                    alt=""
                    fill
                    className="object-cover object-[center_25%]"
                    sizes="(max-width: 768px) 78vw, 20vw"
                  />
                </div>
                <h3 className="serif mt-4 text-center text-3xl text-ivory">{brand.name}</h3>
                <p className="mt-1 text-center text-[0.68rem] tracking-[0.14em] text-champagne uppercase">
                  {brand.count} {brand.count === 1 ? "fragrance" : "fragrances"}
                </p>
                <span className="btn mt-4 w-full">Explore collection</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-black py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="gold-title text-center text-4xl md:text-5xl">Fragrance favourites</h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-ink-soft">
            Explore selected fragrances from Eva Fragrance Planet. Each one below was shown on the business Instagram on 4 November 2026, with a bottle size and a promo price in the post. This is not the full catalogue, and it is not a stock list.
          </p>
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-champagne/70">
            <Image
              src="/products/alien.jpg"
              alt="Mugler Alien filmed among the shelves at Eva Fragrance Planet"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="gold-title text-4xl md:text-5xl">Luxury fragrance, without the box.</h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Explore the world of unboxed perfumes at Eva Fragrance Planet. Browse the available fragrances and contact us to learn more about the specific product you have in mind.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              The profile describes the offer as authentic unboxed perfumes. Packaging can differ from one fragrance to another, so the details of a particular bottle are confirmed on WhatsApp.
            </p>
            <Link href="/unboxed" className="btn mt-8">
              Learn About Unboxed Perfumes
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-black">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="gold-title max-w-3xl text-4xl md:text-5xl">Find a fragrance that feels like you.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="border-t border-champagne/40 pt-5">
                <h3 className="serif text-3xl text-ivory">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{reason.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="gold-title text-4xl md:text-5xl">Words from our customers</h2>
          <p className="mt-5 max-w-xl text-ink-soft">
            Have purchased from us? We would love to hear about your experience.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
            The Instagram profile has a Reviews highlight. Original review text has not been supplied for this website, so no customer names, quotes, or ratings are shown here.
          </p>
          <Link href="/contact" className="btn mt-8">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:py-24">
          <div>
            <h2 className="gold-title max-w-xl text-4xl md:text-5xl">Stay connected with Eva Fragrance Planet</h2>
            <p className="mt-5 max-w-xl text-ink-soft">
              Follow us on Instagram for fragrance discoveries, updates, and more.
            </p>
            <p className="mt-3 text-sm text-champagne">
              {business.instagramHandle} · {business.followersLabel}
            </p>
          </div>
          <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="btn">
            Follow on Instagram
          </a>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
          <h2 className="gold-title text-4xl md:text-6xl">Ready to discover your next scent?</h2>
          <p className="mx-auto mt-5 max-w-xl text-ink-soft">
            Explore the collection and contact us to confirm the fragrance you&apos;re interested in.
          </p>
          <Link href="/shop" className="btn mt-8">
            Shop the Collection
          </Link>
        </div>
      </section>
    </>
  );
}
