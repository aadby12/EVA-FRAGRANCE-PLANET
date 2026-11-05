import type { Metadata } from "next";
import { BagView } from "@/components/bag-view";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Shopping Bag" };

export default function BagPage() {
  return (
    <>
      <PageIntro eyebrow="Selection" title="Your Fragrance Selection">
        <p>
          Save the fragrances you want to ask about, then continue on WhatsApp. Opening WhatsApp starts an enquiry. It does not complete an order.
        </p>
      </PageIntro>
      <BagView />
    </>
  );
}
