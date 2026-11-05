import type { Metadata } from "next";
import { FaqList } from "@/components/faq-list";
import { PageIntro } from "@/components/page-intro";
import { business } from "@/lib/business";

export const metadata: Metadata = { title: "FAQs" };

const faqs = [
  {
    question: "What are unboxed perfumes?",
    answer:
      "Eva Fragrance Planet specialises in authentic unboxed perfumes. The business has not published a single packaging definition that applies to every bottle. If you want to understand a particular fragrance, ask on WhatsApp before you order.",
  },
  {
    question: "How can I order?",
    answer:
      "To place an order or make an enquiry, contact Eva Fragrance Planet through the WhatsApp link provided on this website.",
  },
  {
    question: "Do you respond to Instagram DMs?",
    answer:
      "No. The Instagram profile states: “NO INSTAGRAM DM REPLIES. All orders and enquiries via WhatsApp only.” A notice on the profile also says Instagram DM orders were paused because of the volume of messages, and asks customers to use WhatsApp.",
  },
  {
    question: "How can I confirm perfume availability?",
    answer:
      "Send the perfume name and brand on WhatsApp. Availability is confirmed by Eva Fragrance Planet. This website does not show an in-stock badge.",
  },
  {
    question: "How can I confirm the price?",
    answer:
      "Where a promo price was posted with a fragrance on Instagram, that figure is shown in Ghana cedis. It is not treated as a standing price. Confirm the current price on WhatsApp before you order. If a price is not shown, ask for it.",
  },
  {
    question: "Where are you located?",
    answer: `The Instagram profile displays the location as “${business.locationWording}”. This website keeps that wording and does not publish a formal street address or map. Ask on WhatsApp for directions before visiting.`,
  },
  {
    question: "Do you offer delivery?",
    answer:
      "Delivery areas, charges, and timing are not listed as fixed terms on this website. Ask Eva Fragrance Planet on WhatsApp how a particular order can be received, including collection if you plan to visit.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "Eva Fragrance Planet currently states a no-refund policy. Please contact the business to clarify any questions before placing an order.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageIntro eyebrow="Questions" title="Questions, answered carefully">
        <p>
          These answers follow what Eva Fragrance Planet has published on Instagram. Anything that still depends on a specific bottle is confirmed on WhatsApp at {business.phoneDisplay}.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-6xl px-5 pb-24">
        <FaqList items={faqs} />
      </div>
    </>
  );
}
