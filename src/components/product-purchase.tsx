"use client";

import { useState } from "react";
import { useBag } from "@/components/bag-context";
import { WhatsAppEnquiry } from "@/components/whatsapp-enquiry";
import type { Product } from "@/lib/products";

export function ProductPurchase({ product }: { product: Product }) {
  const { add } = useBag();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="mt-8 space-y-5">
      <div>
        <label htmlFor="quantity" className="eyebrow">
          Quantity
        </label>
        <div className="mt-3 inline-flex items-center border border-line">
          <button
            type="button"
            className="px-4 py-3 text-lg"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
          >
            −
          </button>
          <input
            id="quantity"
            inputMode="numeric"
            className="w-12 bg-transparent text-center outline-none"
            value={quantity}
            onChange={(event) => {
              const next = Number(event.target.value);
              if (Number.isInteger(next)) setQuantity(Math.min(6, Math.max(1, next)));
            }}
          />
          <button
            type="button"
            className="px-4 py-3 text-lg"
            aria-label="Increase quantity"
            onClick={() => setQuantity((value) => Math.min(6, value + 1))}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="bg-ink px-6 py-3 text-xs tracking-[0.18em] text-ivory uppercase"
          onClick={() => {
            add(product.slug, quantity);
            setAdded(true);
          }}
        >
          {added ? "Added to your selection" : "Add to Bag"}
        </button>
        <WhatsAppEnquiry
          product={product}
          quantity={quantity}
          className="border border-ink px-6 py-3 text-center text-xs tracking-[0.18em] uppercase"
        />
      </div>
      <p className="text-sm leading-relaxed text-ink-soft">
        Adding a fragrance keeps it in your selection on this device. WhatsApp opens an enquiry. It does not place, pay for, or confirm an order.
      </p>
    </div>
  );
}
