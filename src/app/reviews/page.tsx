import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Reviews",
  description: "A place for customer experiences with Eva Fragrance Planet.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageIntro eyebrow="Reviews" title="Experiences Worth Sharing">
        <p>
          Customer feedback helps others discover what to expect when shopping with Eva Fragrance Planet.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-6xl px-5 pb-24">
        <div className="rounded-[1.6rem] border border-champagne/60 px-6 py-16 md:px-12">
          <p className="serif text-4xl md:text-5xl">Reviews will appear here when the business shares them.</p>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">
            The Instagram profile has a Reviews highlight. The original review text, customer names, and ratings from that highlight were not available to publish on this website, so none have been written in their place.
          </p>
          <p className="mt-4 text-ink-soft">Have purchased from us? We would love to hear about your experience.</p>
          <Link href="/contact" className="btn mt-8">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
