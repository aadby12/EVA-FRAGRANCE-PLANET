import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { ProductPurchase } from "@/components/product-purchase";
import { formatPrice, getProduct, getRelated, products } from "@/lib/products";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Fragrance" };
  return {
    title: `${product.name} by ${product.brand}`,
    description: product.summary,
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = getRelated(product.slug);

  return (
    <article className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <p className="text-xs tracking-[0.16em] text-ink-soft uppercase">
        <Link href="/shop">Shop</Link>
        <span aria-hidden> / </span>
        <Link href={`/collections/${product.brandSlug}`}>{product.brand}</Link>
      </p>
      <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative aspect-[4/5] overflow-hidden bg-beige">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="eyebrow">{product.brand}</p>
          <h1 className="display mt-3 text-5xl md:text-6xl">{product.name}</h1>
          <p className="mt-6 text-lg">{product.sizeMl}ml</p>
          <p className="mt-2 text-lg">{formatPrice(product.priceGhs)}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
            Promo price posted on Instagram on {product.pricePostedOn}. Confirm the current price, bottle size, and availability before ordering.
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">{product.summary}</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
            Contact Eva Fragrance Planet to confirm the available bottle size, current price, and product availability. Fragrance notes are not listed because they were not published with this post.
          </p>
          <ProductPurchase product={product} />
          <p className="mt-6 text-sm">
            <a href={product.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-champagne underline-offset-4">
              View the Instagram reel
            </a>
          </p>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-20 border-t border-line pt-12">
          <h2 className="display text-4xl md:text-5xl">More from the selection</h2>
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
