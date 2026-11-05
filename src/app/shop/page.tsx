import type { Metadata } from "next";
import { Suspense } from "react";
import { PageIntro } from "@/components/page-intro";
import { ShopExplorer } from "@/components/shop-explorer";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse fragrances recently shown by Eva Fragrance Planet and enquire on WhatsApp.",
};

export default function ShopPage() {
  return (
    <>
      <PageIntro eyebrow="The selection" title="Explore All Fragrances">
        <p>
          Browse the available perfume collection and find fragrances worth discovering. The bottles here were posted by Eva Fragrance Planet on Instagram on 4 November 2026. Sizes and promo prices are the ones written on those posts. The wider range changes, and nothing on this page is marked as in stock.
        </p>
      </PageIntro>
      <Suspense fallback={<p className="px-5 pb-20 text-sm text-ink-soft">Loading the collection…</p>}>
        <ShopExplorer />
      </Suspense>
    </>
  );
}
