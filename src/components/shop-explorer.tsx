"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { getBrands, products, type Product } from "@/lib/products";

export function ShopExplorer() {
  const params = useSearchParams();
  const brands = getBrands();
  const sizes = [...new Set(products.map((product) => product.sizeMl))].sort((a, b) => a - b);
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [brand, setBrand] = useState(params.get("brand") ?? "all");
  const [size, setSize] = useState(params.get("size") ?? "all");
  const [sort, setSort] = useState(params.get("sort") ?? "featured");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    let list = products.filter((product) => {
      const matchesQuery =
        !needle ||
        product.brand.toLowerCase().includes(needle) ||
        product.name.toLowerCase().includes(needle);
      const matchesBrand = brand === "all" || product.brandSlug === brand;
      const matchesSize = size === "all" || String(product.sizeMl) === size;
      return matchesQuery && matchesBrand && matchesSize;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.priceGhs - b.priceGhs);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.priceGhs - a.priceGhs);
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [query, brand, size, sort]);

  return (
    <div className="mx-auto max-w-6xl px-5 pb-20">
      <form
        className="grid gap-4 border-y border-champagne/30 py-5 md:grid-cols-4"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="block text-sm">
          <span className="eyebrow">Search</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Brand or perfume name"
            className="mt-2 w-full border-b border-line bg-transparent py-2 outline-none"
          />
        </label>
        <label className="block text-sm">
          <span className="eyebrow">Brand</span>
          <select
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
            className="mt-2 w-full border-b border-line bg-transparent py-2 outline-none"
          >
            <option value="all">All brands</option>
            {brands.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="eyebrow">Bottle size</span>
          <select
            value={size}
            onChange={(event) => setSize(event.target.value)}
            className="mt-2 w-full border-b border-line bg-transparent py-2 outline-none"
          >
            <option value="all">All posted sizes</option>
            {sizes.map((item) => (
              <option key={item} value={item}>
                {item}ml
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="eyebrow">Sort by price</span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="mt-2 w-full border-b border-line bg-transparent py-2 outline-none"
          >
            <option value="featured">As posted</option>
            <option value="price-asc">Price, low to high</option>
            <option value="price-desc">Price, high to low</option>
            <option value="name">Name</option>
          </select>
        </label>
      </form>

      <p className="py-6 text-sm text-ink-soft" aria-live="polite">
        {visible.length} {visible.length === 1 ? "fragrance" : "fragrances"} in this view
      </p>

      {visible.length === 0 ? (
        <div className="border border-line px-6 py-16 text-center">
          <p className="serif text-4xl">Nothing matches that search.</p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
            Try another brand or name, or ask Eva Fragrance Planet on WhatsApp about a fragrance that is not in this selection.
          </p>
          <button
            type="button"
            className="mt-6 text-xs tracking-[0.16em] uppercase underline decoration-champagne underline-offset-4"
            onClick={() => {
              setQuery("");
              setBrand("all");
              setSize("all");
              setSort("featured");
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
