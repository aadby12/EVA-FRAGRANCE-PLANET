import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { business } from "@/lib/business";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="Accra" title="Welcome to Eva Fragrance Planet">
        <p>
          Eva Fragrance Planet is a fragrance retail business in Accra, Ghana, specialising in authentic unboxed perfumes. We make it easier for customers to discover fragrances and enquire directly about the products they are interested in.
        </p>
      </PageIntro>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 md:grid-cols-2">
        <section>
          <h2 className="display text-4xl md:text-5xl">Fragrance Discovery Starts Here</h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Whether you already know the fragrance you want or are exploring your options, browse the collection and contact us to confirm product details, pricing, and availability.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Orders and enquiries go through WhatsApp. The Instagram profile states that direct messages are not answered.
          </p>
        </section>
        <section className="border-t border-line pt-6 text-sm leading-relaxed text-ink-soft">
          <p>
            <span className="text-ivory">Location wording on Instagram:</span> {business.locationWording}
          </p>
          <p className="mt-4">
            That wording is shown as it appears on the profile. This website does not convert it into a formal street address or a map pin. Ask for directions on WhatsApp before visiting.
          </p>
          <p className="mt-4">
            The Instagram profile includes a highlight titled Registered CAC. A certificate is not reproduced here.
          </p>
          <p className="mt-4">
            Phone {business.phoneDisplay} · {business.phoneInternational}
          </p>
          <Link href="/contact" className="btn mt-8">
            Contact
          </Link>
        </section>
      </div>
    </>
  );
}
