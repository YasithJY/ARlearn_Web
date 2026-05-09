import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return <main className="relative pt-28">{children}</main>;
}

export function SectionHeader({
  eyebrow,
  title,
  desc,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} mb-12 max-w-3xl`}>
      {eyebrow && (
        <div
          className={`${
            center ? "mx-auto" : ""
          } mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        <span className="text-gradient-brand">{title}</span>
      </h2>
      {desc && (
        <p className={`${center ? "mx-auto" : ""} mt-4 max-w-2xl text-base text-muted-foreground`}>
          {desc}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  desc,
  children,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="grid-bg absolute inset-0 opacity-30" />
      <div className="glow-orb h-96 w-96 -top-24 -left-24 bg-primary-glow/30" />
      <div className="glow-orb h-96 w-96 -top-10 right-0 bg-gold/15" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          {eyebrow}
        </div>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          <span className="text-gradient-brand">{title}</span>
        </h1>
        {desc && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{desc}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
