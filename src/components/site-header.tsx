"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { business, nav } from "@/lib/business";
import { useBag } from "@/components/bag-context";

export function SiteHeader() {
  const pathname = usePathname();
  const { count } = useBag();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <Link href="/" className="min-w-0">
          <span className="serif block text-lg leading-none tracking-[0.18em] sm:text-xl">
            EVA FRAGRANCE PLANET
          </span>
          <span className="mt-1 block text-[0.65rem] tracking-[0.22em] text-bronze uppercase">
            {business.tagline}
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs tracking-[0.16em] uppercase ${
                pathname === item.href ? "text-ink" : "text-ink-soft hover:text-ink"
              }`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <form action="/shop" className="hidden md:block">
            <label htmlFor="header-search" className="sr-only">
              Search by brand or perfume name
            </label>
            <input
              id="header-search"
              name="q"
              placeholder="Search"
              className="w-36 border-b border-line bg-transparent px-1 py-1 text-sm outline-none placeholder:text-ink-soft/70"
            />
          </form>
          <a
            href={business.whatsappShort}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden px-2 py-1 text-xs tracking-[0.16em] text-bronze uppercase sm:inline"
          >
            WhatsApp
          </a>
          <Link
            href="/bag"
            className="relative px-2 py-1 text-xs tracking-[0.16em] uppercase"
            aria-label={`Shopping bag, ${count} items`}
          >
            Bag
            <span className="ml-1 text-bronze">{count}</span>
          </Link>
          <button
            type="button"
            className="px-2 py-1 text-xs tracking-[0.16em] uppercase lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-paper px-5 py-6 lg:hidden">
          <form action="/shop" className="mb-6">
            <label htmlFor="mobile-search" className="eyebrow">
              Search
            </label>
            <input
              id="mobile-search"
              name="q"
              placeholder="Brand or perfume name"
              className="mt-3 w-full border-b border-line bg-transparent py-2 text-base outline-none"
            />
          </form>
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="serif text-4xl">
                {item.label}
              </Link>
            ))}
            <a
              href={business.whatsappShort}
              target="_blank"
              rel="noopener noreferrer"
              className="serif text-4xl text-bronze"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
