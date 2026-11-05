import { business } from "@/lib/business";
import { enquiryLine, type Product } from "@/lib/products";

export function whatsappWithText(message: string) {
  return `https://wa.me/${business.phoneWa}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryMessage(product: Product, quantity = 1) {
  return [
    "Hello Eva Fragrance Planet. I would like to enquire about the following fragrances:",
    "",
    enquiryLine(product, quantity),
    "",
    "Please confirm availability, bottle size, current price, and how I can proceed with the order. Thank you.",
  ].join("\n");
}

export function bagEnquiryMessage(
  lines: { product: Product; quantity: number }[],
) {
  return [
    "Hello Eva Fragrance Planet. I would like to enquire about the following fragrances:",
    "",
    ...lines.map(({ product, quantity }) => enquiryLine(product, quantity)),
    "",
    "Please confirm availability, bottle size, current price, and how I can proceed with the order. Thank you.",
  ].join("\n");
}
