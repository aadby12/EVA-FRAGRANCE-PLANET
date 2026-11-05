import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { business } from "@/lib/business";

export const metadata: Metadata = { title: "Shopping Information" };

const checks = [
  "Perfume name",
  "Brand",
  "Bottle size",
  "Packaging details",
  "Availability",
  "Price",
  "Delivery or collection arrangements",
];

export default function ShoppingInformationPage() {
  return (
    <>
      <PageIntro eyebrow="Before you enquire" title="Before You Place Your Order">
        <p>
          Eva Fragrance Planet takes orders and enquiries on WhatsApp. Use this page to see what to confirm first.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-6xl space-y-12 px-5 pb-24">
        <section className="border-t border-line pt-8">
          <h2 className="serif text-4xl">Refund policy</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-soft">
            Eva Fragrance Planet currently states a no-refund policy. Please contact the business directly if you need clarification before placing an order.
          </p>
        </section>
        <section className="border-t border-line pt-8">
          <h2 className="serif text-4xl">Confirm these details</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {checks.map((item) => (
              <li key={item} className="border-b border-line py-3 text-sm">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-soft">
            Delivery charges, delivery times, payment steps, exchanges, and exceptions to the refund policy are not published on this website. Ask about them on WhatsApp for the fragrance you want.
          </p>
        </section>
        <a
          href={business.whatsappShort}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-ink px-6 py-3 text-xs tracking-[0.18em] text-ivory uppercase"
        >
          Chat with Us on WhatsApp
        </a>
      </div>
    </>
  );
}
