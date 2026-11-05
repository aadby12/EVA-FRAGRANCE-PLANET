import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { FaqList } from "@/components/faq-list";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Unboxed Perfumes",
  description: "What Eva Fragrance Planet means by authentic unboxed perfumes, and what to confirm before you order.",
};

const questions = [
  {
    question: "What does unboxed mean?",
    answer:
      "Eva Fragrance Planet describes its offer as authentic unboxed perfumes. The business has not published one definition that covers every bottle’s packaging, sourcing, or accessories. Ask about the specific fragrance you want before you order.",
  },
  {
    question: "Does the perfume come with its original box?",
    answer:
      "The offer is described as unboxed. Whether a particular bottle includes a box, cap, sleeve, or any other packaging is not the same for every fragrance on this website. Confirm the packaging of the perfume you have in mind on WhatsApp.",
  },
  {
    question: "Is the bottle size the same?",
    answer:
      "Bottle sizes vary. When a size was written on an Instagram reel, that size is shown on the product page. Recent posts include 85ml, 90ml, 100ml, and 150ml bottles. Confirm the size of the fragrance you want.",
  },
  {
    question: "How can I confirm the product I want?",
    answer:
      "Send the perfume name, brand, and the bottle size you are looking for through WhatsApp. Eva Fragrance Planet can confirm the details of that product.",
  },
  {
    question: "How do I place an order?",
    answer:
      "To place an order or make an enquiry, contact Eva Fragrance Planet through the WhatsApp link provided on this website. The Instagram profile states that Instagram DMs are not answered.",
  },
];

export default function UnboxedPage() {
  return (
    <>
      <PageIntro eyebrow="Before you order" title="What Does Unboxed Perfume Mean?">
        <p>
          At Eva Fragrance Planet, we specialise in authentic unboxed perfumes. If you would like to understand the packaging or details of a particular fragrance, contact us before placing your order.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-6xl space-y-8 px-5 pb-20">
        <div className="grid gap-10 border-y border-line py-10 md:grid-cols-2">
          <p className="leading-relaxed text-ink-soft">
            The Instagram profile presents the business as a seller of authentic unboxed perfumes in Accra. A highlight on the profile is titled Unboxed perfume, and an earlier post asks, “What’s unboxed perfume”. The explanation that follows that title was not available as text for this website.
          </p>
          <p className="leading-relaxed text-ink-soft">
            This page does not treat every unboxed perfume as a tester, surplus stock, or a damaged-box product. It also does not assume that every bottle is packaged the same way or sourced through the same channel. Those details belong to the specific fragrance, and they are confirmed with the business.
          </p>
        </div>
        <FaqList items={questions} />
        <a
          href={business.whatsappShort}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Ask about a fragrance
        </a>
        <p>
          <Link href="/shop" className="text-sm underline decoration-champagne underline-offset-4">
            Browse the selection
          </Link>
        </p>
      </div>
    </>
  );
}
