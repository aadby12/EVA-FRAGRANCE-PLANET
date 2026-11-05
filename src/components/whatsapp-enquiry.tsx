import Link from "next/link";
import type { ReactNode } from "react";
import { business } from "@/lib/business";
import { productEnquiryMessage, whatsappWithText } from "@/lib/whatsapp";
import type { Product } from "@/lib/products";

export function WhatsAppEnquiry({
  product,
  quantity = 1,
  label = "Enquire on WhatsApp",
  className = "",
}: {
  product?: Product;
  quantity?: number;
  label?: string;
  className?: string;
}) {
  const href = product
    ? whatsappWithText(productEnquiryMessage(product, quantity))
    : business.whatsappShort;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {label}
    </a>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="underline decoration-champagne underline-offset-4">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className="underline decoration-champagne underline-offset-4">
      {children}
    </Link>
  );
}
