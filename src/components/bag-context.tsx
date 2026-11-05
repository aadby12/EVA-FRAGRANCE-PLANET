"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type BagItem = { slug: string; quantity: number };

type BagContextValue = {
  items: BagItem[];
  count: number;
  add: (slug: string, quantity?: number) => void;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
};

const STORAGE_KEY = "eva-fragrance-selection";
const listeners = new Set<() => void>();

function clamp(quantity: number) {
  return Math.min(6, Math.max(1, quantity));
}

function parse(raw: string): BagItem[] {
  try {
    const parsed = JSON.parse(raw) as BagItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item) =>
        item &&
        typeof item.slug === "string" &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0 &&
        item.quantity <= 6,
    );
  } catch {
    return [];
  }
}

function readRaw() {
  if (typeof window === "undefined") return "[]";
  return localStorage.getItem(STORAGE_KEY) ?? "[]";
}

function write(items: BagItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const BagContext = createContext<BagContextValue | null>(null);

export function BagProvider({ children }: { children: ReactNode }) {
  const raw = useSyncExternalStore(subscribe, readRaw, () => "[]");
  const items = useMemo(() => parse(raw), [raw]);

  const value = useMemo<BagContextValue>(
    () => ({
      items,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      add: (slug, quantity = 1) => {
        const nextQuantity = clamp(quantity);
        const current = parse(readRaw());
        const existing = current.find((item) => item.slug === slug);
        write(
          existing
            ? current.map((item) =>
                item.slug === slug
                  ? { ...item, quantity: Math.min(6, item.quantity + nextQuantity) }
                  : item,
              )
            : [...current, { slug, quantity: nextQuantity }],
        );
      },
      setQuantity: (slug, quantity) => {
        write(
          parse(readRaw()).map((item) =>
            item.slug === slug ? { ...item, quantity: clamp(quantity) } : item,
          ),
        );
      },
      remove: (slug) => {
        write(parse(readRaw()).filter((item) => item.slug !== slug));
      },
    }),
    [items],
  );

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}

export function useBag() {
  const context = useContext(BagContext);
  if (!context) throw new Error("useBag must be used within BagProvider");
  return context;
}
