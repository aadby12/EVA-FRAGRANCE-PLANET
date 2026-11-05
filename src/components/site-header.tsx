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
  const [searchOpen, setSearchOpen] = useState(false);
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
    <header className="sticky top-0 z-40 border-b border-champagne/80 bg-black text-ivory">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 md:px-6">
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="p-2 text-champagne lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <MenuIcon />
          </button>
          <button
            type="button"
            className="p-2 text-champagne"
            aria-expanded={searchOpen}
            aria-controls="header-search-panel"
            aria-label="Search fragrances"
            onClick={() => setSearchOpen((value) => !value)}
          >
            <SearchIcon />
          </button>
        </div>

        <Link href="/" className="justify-self-center text-center">
          <span className="serif block text-[0.95rem] leading-none tracking-[0.22em] sm:text-base">
            EVA FRAGRANCE PLANET
          </span>
          <span className="mt-1 block text-[0.58rem] tracking-[0.32em] text-champagne uppercase">
            {business.tagline}
          </span>
        </Link>

        <div className="flex items-center justify-end gap-1">
          <a
            href={business.whatsappShort}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-champagne"
            aria-label="WhatsApp Eva Fragrance Planet"
          >
            <ChatIcon />
          </a>
          <Link href="/bag" className="relative p-2 text-champagne" aria-label={`Shopping bag, ${count} items`}>
            <BagIcon />
            <span className="absolute top-1 right-0 text-[0.65rem] text-ivory">{count}</span>
          </Link>
        </div>
      </div>

      <nav className="hidden justify-center gap-8 border-t border-champagne/25 py-2.5 lg:flex" aria-label="Primary">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-[0.68rem] tracking-[0.2em] uppercase ${
              pathname === item.href ? "text-ivory" : "text-champagne hover:text-ivory"
            }`}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {searchOpen ? (
        <form id="header-search-panel" action="/shop" className="border-t border-champagne/25 px-5 py-3">
          <label htmlFor="header-search" className="sr-only">
            Search by brand or perfume name
          </label>
          <input
            id="header-search"
            name="q"
            placeholder="Search brand or perfume"
            className="w-full border-b border-champagne/50 bg-transparent py-2 text-sm outline-none placeholder:text-ivory/40"
          />
        </form>
      ) : null}

      {open ? (
        <div id="mobile-nav" className="border-t border-champagne/25 bg-black px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="serif text-4xl text-ivory">
                {item.label}
              </Link>
            ))}
            <a
              href={business.whatsappShort}
              target="_blank"
              rel="noopener noreferrer"
              className="serif text-4xl text-champagne"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 6.5h14v9H8l-3 2.5v-11.5z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 8h12l-1 12H7L6 8z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 8V7a3 3 0 016 0v1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
