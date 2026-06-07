import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <header className="overflow-hidden rounded-[2rem] border border-institutional-900/10 bg-gradient-to-br from-institutional-900 via-institutional-800 to-slate-700 px-6 py-10 text-white shadow-soft md:px-10 md:py-12">
      <div className="relative">
        <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 right-10 h-24 w-24 rounded-full border border-white/15" aria-hidden="true" />
        {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">{eyebrow}</p> : null}
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-blue-50 md:text-lg">{description}</p>
        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </header>
  );
}
