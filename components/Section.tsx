import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section className={`py-10 ${className}`}>
      <div className="mb-6 max-w-3xl">
        {eyebrow ? <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-institutional-700">{eyebrow}</p> : null}
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
