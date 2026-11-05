"use client";

import Image from "next/image";
import Link from "next/link";
import { useBag } from "@/components/bag-context";
import { formatPrice, getProduct } from "@/lib/products";
import { bagEnquiryMessage, whatsappWithText } from "@/lib/whatsapp";

export function BagView() {
  const { items, setQuantity, remove } = useBag();
  const lines = items
    .map((item) => {
      const product = getProduct(item.slug);
      return product ? { product, quantity: item.quantity } : null;
    })
    .filter((line): line is { product: NonNullable<ReturnType<typeof getProduct>>; quantity: number } =>
      Boolean(line),
    );

  const href = whatsappWithText(bagEnquiryMessage(lines));

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-8 pb-24">
        <p className="serif text-4xl">Your fragrance selection is empty.</p>
        <p className="mt-4 max-w-xl text-ink-soft">
          Explore the collection and add a fragrance you&apos;re interested in.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-block bg-ink px-6 py-3 text-xs tracking-[0.18em] text-ivory uppercase"
        >
          Explore Fragrances
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 lg:grid-cols-[1.4fr_0.8fr]">
      <ul className="divide-y divide-line border-y border-line">
        {lines.map(({ product, quantity }) => (
          <li key={product.slug} className="grid grid-cols-[96px_1fr] gap-4 py-6 sm:grid-cols-[120px_1fr]">
            <Link href={`/shop/${product.slug}`} className="relative block aspect-[4/5] bg-beige">
              <Image src={product.image} alt="" fill className="object-cover object-top" sizes="120px" />
            </Link>
            <div>
              <p className="eyebrow">{product.brand}</p>
              <h2 className="serif mt-1 text-3xl">
                <Link href={`/shop/${product.slug}`}>{product.name}</Link>
              </h2>
              <p className="mt-2 text-sm text-ink-soft">{product.sizeMl}ml</p>
              <p className="mt-2 text-sm">{formatPrice(product.priceGhs)}</p>
              <p className="mt-1 text-xs text-ink-soft">
                Posted promo price. The current price is confirmed on WhatsApp.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <label className="text-sm">
                  <span className="sr-only">Quantity for {product.name}</span>
                  <select
                    value={quantity}
                    onChange={(event) => setQuantity(product.slug, Number(event.target.value))}
                    className="border border-line bg-transparent px-2 py-1"
                  >
                    {[1, 2, 3, 4, 5, 6].map((value) => (
                      <option key={value} value={value}>
                        Qty {value}
                      </option>
                    ))}
                  </select>
                </label>
                <button
                  type="button"
                  className="text-xs tracking-[0.16em] uppercase underline decoration-champagne underline-offset-4"
                  onClick={() => remove(product.slug)}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <aside className="h-fit border border-line p-6">
        <p className="eyebrow">Next step</p>
        <h2 className="serif mt-3 text-4xl">Continue the enquiry on WhatsApp</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          A final total is not shown here, because each price is a promo price posted on Instagram and still needs confirmation. WhatsApp opens a message. It does not complete, pay for, or confirm an order.
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-ink px-6 py-3 text-xs tracking-[0.18em] text-ivory uppercase"
        >
          Continue on WhatsApp
        </a>
      </aside>
    </div>
  );
}
