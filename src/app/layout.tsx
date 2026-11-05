import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { BagProvider } from "@/components/bag-context";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Eva Fragrance Planet",
    template: "%s · Eva Fragrance Planet",
  },
  description:
    "Eva Fragrance Planet is a fragrance retail business in Accra, Ghana, specialising in authentic unboxed perfumes. Enquire on WhatsApp.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <BagProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-ivory focus:px-3 focus:py-2">
            Skip to content
          </a>
          <div className="bg-ink text-center text-[0.72rem] tracking-[0.18em] text-ivory/85 uppercase">
            <p className="px-4 py-2">Discover your next signature scent with Eva Fragrance Planet.</p>
          </div>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </BagProvider>
      </body>
    </html>
  );
}
