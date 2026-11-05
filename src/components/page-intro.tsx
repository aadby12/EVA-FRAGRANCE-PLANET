import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="mx-auto max-w-6xl px-5 pt-16 pb-10 md:pt-24">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1 className="display mt-4 max-w-4xl text-5xl md:text-7xl">{title}</h1>
      {children ? (
        <div className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">{children}</div>
      ) : null}
    </header>
  );
}
