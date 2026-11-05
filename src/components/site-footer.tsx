import Link from "next/link";
import { business, footerNav } from "@/lib/business";

export function SiteFooter() {
  return (
    <footer className="border-t border-champagne/70 bg-black text-ivory">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-3">
        <div>
          <p className="serif text-3xl tracking-[0.12em]">EVA FRAGRANCE PLANET</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/75">
            Discover fragrances that make every impression memorable.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-ivory/80 hover:text-ivory">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm leading-relaxed text-ivory/80">
          <p>
            <a href={`tel:${business.phoneInternational}`} className="hover:text-ivory">
              {business.phoneInternational}
            </a>
          </p>
          <p className="mt-3">
            <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
              Instagram
            </a>
          </p>
          <p className="mt-3">
            <a href={business.whatsappShort} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
              WhatsApp
            </a>
          </p>
          <p className="mt-4 text-ivory/60">{business.locationWording}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs tracking-[0.08em] text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Eva Fragrance Planet</p>
          <p className="sm:ml-auto sm:text-right">Powered by Avenor Tech</p>
        </div>
      </div>
    </footer>
  );
}
