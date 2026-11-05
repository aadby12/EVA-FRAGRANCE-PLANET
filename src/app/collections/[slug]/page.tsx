import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { ProductCard } from "@/components/product-card";
import { getBrand, getBrands, productsByBrand } from "@/lib/products";

type Params = { slug: string };

export function generateStaticParams() {
  return getBrands().map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  return { title: brand ? brand.name : "Collection" };
}

export default async function CollectionPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();
  const items = productsByBrand(slug);

  return (
    <>
      <PageIntro eyebrow="Collection" title={brand.name}>
        <p>
          Fragrances by {brand.name} in this Eva Fragrance Planet selection. Each listing uses the bottle size and promo price from the business Instagram post. Confirm the current details on WhatsApp.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <Link href="/shop" className="btn mt-12">
          Explore all fragrances
        </Link>
      </div>
    </>
  );
}
