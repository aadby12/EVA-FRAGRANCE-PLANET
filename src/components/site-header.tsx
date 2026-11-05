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
    <header className="sticky top-0 z-40 border-b border-champagne/40 bg-black text-ivory">
      <div className="flex items-center gap-6 px-5 py-3.5 md:px-8">
        <Link href="/" className="serif shrink-0 text-sm tracking-[0.14em] text-ivory sm:text-base">
          {business.wordmark}
        </Link>

        <nav className="ml-auto hidden items-center gap-5 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.72rem] tracking-[0.14em] uppercase ${
                pathname === item.href ? "text-ivory" : "text-champagne hover:text-ivory"
              }`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={business.whatsappShort}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.72rem] tracking-[0.14em] text-champagne uppercase hover:text-ivory"
          >
            WhatsApp
          </a>
          <Link
            href="/bag"
            className="text-[0.72rem] tracking-[0.14em] text-champagne uppercase hover:text-ivory"
            aria-label={`Shopping bag, ${count} items`}
          >
            Bag <span className="text-ivory">{count}</span>
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-4 lg:hidden">
          <Link
            href="/bag"
            className="text-[0.72rem] tracking-[0.14em] text-champagne uppercase hover:text-ivory"
            aria-label={`Shopping bag, ${count} items`}
          >
            Bag <span className="text-ivory">{count}</span>
          </Link>
          <button
            type="button"
            className="p-1 text-champagne"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-champagne/25 bg-black px-4 py-4 lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-[0.14em] uppercase ${
                  pathname === item.href ? "text-ivory" : "text-champagne"
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={business.whatsappShort}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-[0.14em] text-champagne uppercase"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.4" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.4" />
      )}
    </svg>
  );
}
