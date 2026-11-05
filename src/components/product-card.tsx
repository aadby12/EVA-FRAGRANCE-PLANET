import Link from "next/link";
import Image from "next/image";
import { formatPrice, type Product } from "@/lib/products";
import { WhatsAppEnquiry } from "@/components/whatsapp-enquiry";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col">
      <Link href={`/shop/${product.slug}`} className="relative block overflow-hidden bg-beige">
        <div className="relative aspect-[4/5]">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-[center_30%] transition duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 border-b border-line py-5">
        <div>
          <p className="eyebrow">{product.brand}</p>
          <h3 className="serif mt-2 text-3xl leading-none">
            <Link href={`/shop/${product.slug}`}>{product.name}</Link>
          </h3>
        </div>
        <p className="text-sm text-ink-soft">{product.sizeMl}ml</p>
        <p className="text-sm">
          <span className="font-medium">{formatPrice(product.priceGhs)}</span>
          <span className="mt-1 block text-xs leading-relaxed text-ink-soft">
            Promo price posted on Instagram, {product.pricePostedOn}. Confirm the current price before ordering.
          </span>
        </p>
        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          <Link
            href={`/shop/${product.slug}`}
            className="border border-ink px-4 py-2 text-xs tracking-[0.16em] uppercase transition hover:bg-ink hover:text-ivory"
          >
            View details
          </Link>
          <WhatsAppEnquiry
            product={product}
            className="border border-champagne px-4 py-2 text-xs tracking-[0.16em] uppercase text-bronze transition hover:bg-champagne hover:text-ink"
          />
        </div>
      </div>
    </article>
  );
}
