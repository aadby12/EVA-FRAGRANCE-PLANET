import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-6xl">This page is not in the collection.</h1>
      <p className="mt-5 text-ink-soft">Return to the fragrances Eva Fragrance Planet has shown, or send an enquiry on WhatsApp.</p>
      <Link href="/shop" className="btn mt-8">
        Explore Fragrances
      </Link>
    </div>
  );
}
