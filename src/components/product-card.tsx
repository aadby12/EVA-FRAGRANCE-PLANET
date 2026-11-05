import Link from "next/link";
import Image from "next/image";
import { formatPrice, type Product } from "@/lib/products";
import { WhatsAppEnquiry } from "@/components/whatsapp-enquiry";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col">
      <Link href={`/shop/${product.slug}`} className="relative block overflow-hidden rounded-[1.4rem] border border-champagne/50 bg-beige">
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
      <div className="flex flex-1 flex-col gap-3 py-5 text-center">
        <div>
          <p className="eyebrow">{product.brand}</p>
          <h3 className="serif mt-2 text-3xl leading-none text-ivory">
            <Link href={`/shop/${product.slug}`}>{product.name}</Link>
          </h3>
        </div>
        <p className="text-sm text-champagne">{product.sizeMl}ml</p>
        <p className="text-sm">
          <span className="font-medium text-ivory">{formatPrice(product.priceGhs)}</span>
          <span className="mt-1 block text-xs leading-relaxed text-ink-soft">
            Promo price posted on Instagram, {product.pricePostedOn}. Confirm the current price before ordering.
          </span>
        </p>
        <div className="mt-auto flex flex-wrap justify-center gap-3 pt-2">
          <Link href={`/shop/${product.slug}`} className="btn">
            View details
          </Link>
          <WhatsAppEnquiry product={product} className="btn-line" />
        </div>
      </div>
    </article>
  );
}
