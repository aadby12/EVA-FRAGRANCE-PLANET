import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { business } from "@/lib/business";

export const metadata: Metadata = { title: "Contact" };

const details = [
  { label: "Phone", value: business.phoneDisplay, href: `tel:${business.phoneInternational}` },
  { label: "International format", value: business.phoneInternational, href: `tel:${business.phoneInternational}` },
  { label: "WhatsApp", value: "Open the WhatsApp chat", href: business.whatsappShort },
  { label: "Instagram", value: business.instagramHandle, href: business.instagram },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="WhatsApp" title="Let's Talk Fragrance">
        <p>
          Have a question about a perfume or want to place an order? Contact Eva Fragrance Planet directly through WhatsApp.
        </p>
      </PageIntro>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 md:grid-cols-[1.1fr_0.9fr]">
        <dl className="divide-y divide-line border-y border-line">
          {details.map((item) => (
            <div key={item.label} className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]">
              <dt className="eyebrow">{item.label}</dt>
              <dd>
                <a href={item.href} className="text-lg" target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  {item.value}
                </a>
              </dd>
            </div>
          ))}
          <div className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]">
            <dt className="eyebrow">Location</dt>
            <dd className="text-lg">
              {business.locationWording}
              <span className="mt-2 block text-sm leading-relaxed text-ink-soft">
                This is the location wording displayed on the Instagram profile. Directions are confirmed on WhatsApp. A map is not shown, because a formal street address has not been published here.
              </span>
            </dd>
          </div>
        </dl>
        <aside className="border border-line p-6 md:p-8">
          <p className="serif text-4xl">Instagram messages are not the way to order.</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            The profile says there are no Instagram DM replies, and that all orders and enquiries go through WhatsApp.
          </p>
          <a
            href={business.whatsappShort}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-ink px-6 py-3 text-xs tracking-[0.18em] text-ivory uppercase"
          >
            Chat with Us on WhatsApp
          </a>
        </aside>
      </div>
    </>
  );
}
